// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachCommentDetatils, toggleLike, deleteComment} = props
  const {name, inputComment, isLiked, date, initialClassName, id} =
    eachCommentDetatils
  console.log(date)
  const onClicklike = () => {
    toggleLike(id)
  }
  const onClickDelete = () => {
    deleteComment(id)
  }

  const timeAgo = formatDistanceToNow(new Date(date))
  console.log(timeAgo)

  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeColor = isLiked ? 'onclikelike' : 'like-btn'

  return (
    <li>
      <div className="content">
        <p className={`initial-container-style ${initialClassName}`}>
          {name[0]}
        </p>

        <div className="user-info">
          <div className="name">
            <h1 className="username">{name}</h1>
            <p className="time">{timeAgo}</p>
          </div>
          <p className="comment-description">{inputComment}</p>
        </div>
        <br />
      </div>
      <div className="other">
        <div>
          <img src={likeImage} alt="like" className="like-img" />
          <button className={likeColor} onClick={onClicklike}>
            Like
          </button>
        </div>
        <button className="delete-btn" onClick={onClickDelete} testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
