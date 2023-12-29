import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const fakecomment = [
  {
    id: uuidv4(),
    name: 'Shashi',
    inputComment: 'I miss your Presense',
    date: new Date(),
    isLiked: false,
    initialClassName: initialContainerBackgroundClassNames[6],
  },
]

// Write your code here

class Comments extends Component {
  state = {commentlist: [], name: '', inputComment: '', count: 0}

  onAddComment = event => {
    event.preventDefault()

    const initialBackgroundColorClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const {name, inputComment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      inputComment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentlist: [...prevState.commentlist, newComment],
      name: '',
      inputComment: '',
      count: prevState.count + 1,
    }))
  }

  onClickLike = id => {
    this.setState(prevState => ({
      commentlist: prevState.commentlist.map(eachcomment => {
        if (id === eachcomment.id) {
          return {...eachcomment, isLiked: !prevState.isLiked}
        }
        return eachcomment
      }),
    }))
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentlist: prevState.commentlist.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentlist} = this.state
    const fileteredlist = commentlist.filter(
      eachComment => eachComment.id !== id,
    )

    this.setState(prevState => ({
      count: prevState.count - 1,
      commentlist: fileteredlist,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({inputComment: event.target.value})
  }

  render() {
    const {commentlist, name, inputComment, count} = this.state

    return (
      <div className="background-sec">
        <div className="content-sec">
          <h1>Comments</h1>
          <div className="input-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comments-image"
              alt="comments"
            />
            <div className="input-comment-sec">
              <p className="description">
                Say something about 4.0 Technologies
              </p>
              <form onSubmit={this.onAddComment}>
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={this.onChangeName}
                  value={name}
                />
                <br />
                <textarea
                  placeholder="Your Comment"
                  onChange={this.onChangeComment}
                  value={inputComment}
                ></textarea>
                <br />
                <button data-testid="delete" className="addComment">
                  Add Comment
                </button>
              </form>
            </div>
          </div>
          <hr />
          <p>
            <span className="count">{count}</span>Comments
          </p>
          <ul>
            {commentlist.map(eachComment => (
              <CommentItem
                eachCommentDetatils={eachComment}
                key={eachComment.id}
                toggleLike={this.toggleIsFavorite}
                deleteComment={this.onDeleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
