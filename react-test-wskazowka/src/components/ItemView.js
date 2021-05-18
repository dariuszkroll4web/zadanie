import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { PageReducer } from '../state'
import CloseButton from './CloseButton'
import AddCommentForm from './AddCommentForm'

const ItemWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #403e3ce8;
  display: flex;
  align-items: center;
  height: 100vh;
`

const ItemContent = styled.div`
  padding: 18px 16px;
  background-color: white;
`

const PostBodyWrapper = styled.div`
  position: relative;
`

const PostBody = ({ title, body, onClose }) => {
  return (
    <PostBodyWrapper>
      <CloseButton onClick={onClose} />
      <h2>{title}</h2>
      <p>{body}</p>
    </PostBodyWrapper>
  )
}

const CommentItem = styled.div`
  margin-bottom: 20px;
  header {
    font-weight: 600;
  }
  span {
    font-style: italic;
    font-weight: 300;
  }
  p {
    margin: 4px 0 0 0;
  }
`

const CommentsSection = () => {
  const comments = useSelector(PageReducer.Selectors.comments)

  const renderComments = () => {
    return comments.map((comment, index) => (
      <CommentItem key={index}>
        <header>
          {comment.name} [<span>{comment.email}</span>]
        </header>
        <p>{comment.body}</p>
      </CommentItem>
    ))
  }

  return (
    <div>
      {renderComments()}
      <AddCommentForm />
    </div>
  )
}

const ItemView = () => {
  const dispatch = useDispatch()
  const selectedPost = useSelector(PageReducer.Selectors.selectedPost)

  const onCloseClicked = () => {
    dispatch(PageReducer.Actions.hideCurrentPost())
  }

  return (
    <ItemWrapper>
      <ItemContent>
        <PostBody
          title={selectedPost.title}
          body={selectedPost.body}
          onClose={onCloseClicked}
        />
        <hr />
        <CommentsSection />
      </ItemContent>
    </ItemWrapper>
  )
}

export default ItemView
