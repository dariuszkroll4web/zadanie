import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import ListView from './components/ListView'
import ItemView from './components/ItemView'
import { PageReducer } from './state'

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-height: 900px;
`

const Content = styled.div`
  width: 920px;
  position: relative;
`

const Page = () => {
  const dispatch = useDispatch()
  const selectedPost = useSelector(PageReducer.Selectors.selectedPost)

  useEffect(() => {
    dispatch(PageReducer.Actions.loadPosts())
  }, [])

  return (
    <PageWrapper>
      <Content>
        {selectedPost && <ItemView />}
        <ListView />
      </Content>
    </PageWrapper>
  )
}

export default Page
