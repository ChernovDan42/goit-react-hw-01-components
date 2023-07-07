import PropTypes from 'prop-types'
import css from './FriendList.module.css'
import {FriendListItem} from './FriendListItem'

export const FriendList = ({ friends }) => {
    
    return (
        <div className={css.center}>
        <ul className={css.friendList}>
            {friends.map(friend => {
                return (
     <FriendListItem key={friend.id} avatar={friend.avatar}
                name={friend.name} isOnline={friend.isOnline}
            />)
            })}
           
        </ul>
        </div>
    )
}


FriendList.propTypes={
    friends: PropTypes.arrayOf(
    PropTypes.exact({
            id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired, 
        name:PropTypes.string.isRequired,
         })
)
}