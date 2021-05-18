import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { PageReducer } from '../state'

const ListWrapper = styled.div`
  overflow: scroll;
  height: calc(100vh - 59px);
  overflow-x: hidden;
`

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 16px 0;
`

const ListItem = styled.div`
  padding: 14px 8px;
  &:hover {
    background-color: #d6d1c3;
  }
`

const ListView = () => {
  const dispatch = useDispatch()
  const posts = useSelector(PageReducer.Selectors.posts)

  const onItemClicked = (item) => {
    dispatch(PageReducer.Actions.showPost(item.id))
  }

  const renderItems = () => {
    return posts.map((postItem, index) => (
      <ListItem key={index} onClick={() => onItemClicked(postItem)}>
        {`#${postItem.id} :: ${postItem.title}`}
      </ListItem>
    ))
  }

  return (
    <Fragment>
      <Header>POSTS</Header>
      <ListWrapper>{renderItems()}</ListWrapper>
    </Fragment>
  )
}

export default ListView
