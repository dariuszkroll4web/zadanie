import defineAction from './defineAction'
import ApiService from '../services/apiService'

const INITIAL_STATE = {
  posts: [],
  selectedPost: null,
  comments: []
}

const ACTION_NAMES = {
  SET_POSTS: 'SET_POSTS',
  SET_SELECTED_POST: 'SET_SELECTED_POST',
  SET_COMMENTS: 'SET_COMMENTS'
}

const setPosts = defineAction(ACTION_NAMES.SET_POSTS, 'posts')
const setSelectedPost = defineAction(ACTION_NAMES.SET_SELECTED_POST, 'post')
const setComments = defineAction(ACTION_NAMES.SET_COMMENTS, 'comments')

const loadPosts = () => async (dispatch) => {
  const allPostsData = await ApiService.getAllPosts()
  dispatch(setPosts(allPostsData))
}

const showPost = (postId) => async (dispatch) => {
  const [postData, commentsData] = await Promise.all([
    ApiService.getPost(postId),
    ApiService.getCommentsForPost(postId)
  ])
  dispatch(setSelectedPost(postData))
  dispatch(setComments(commentsData))
}

const hideCurrentPost = () => (dispatch) => {
  dispatch(setSelectedPost(null))
  dispatch(setComments([]))
}

const addComment =
  ({ title, description, email }) =>
  async (dispatch, getState) => {
    const {
      page: { selectedPost, comments }
    } = getState()
    const newComment = await ApiService.addComment({
      title,
      description,
      email,
      postId: selectedPost.id
    })
    dispatch(setComments([...comments, newComment]))
  }

const Actions = {
  loadPosts,
  showPost,
  hideCurrentPost,
  addComment
}

const Selectors = {
  posts: (state) => state.page.posts,
  selectedPost: (state) => state.page.selectedPost,
  comments: (state) => state.page.comments
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_NAMES.SET_POSTS: {
      return { ...state, posts: action.posts }
    }
    case ACTION_NAMES.SET_SELECTED_POST: {
      return { ...state, selectedPost: action.post }
    }
    case ACTION_NAMES.SET_COMMENTS: {
      return { ...state, comments: action.comments }
    }
    default:
      return state
  }
}

export { reducer, Actions, Selectors }
