import PropTypes from 'prop-types'
import clsx from "clsx";
import css from './FriendList.module.css'

export const FriendListItem = ({isOnline,name,avatar}) => {
    return (
        <li className={css.item}>
            <span className={
                clsx(css.indicator,
                  isOnline ? css.online : css.offline  
                )
            }></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{ name }</p>
</li>

    )
}


FriendListItem.propTypes={
    
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired, 
        name:PropTypes.string.isRequired,
         }

