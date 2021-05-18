const getAllPosts = async () => {
  const allPostsData = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((response) => response.json())
  return allPostsData
}

const getPost = async (postId) => {
  const postData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  ).then((response) => response.json())
  return postData
}

const getCommentsForPost = async (postId) => {
  const commentData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  ).then((response) => response.json())
  return commentData
}

const addComment = async ({ title, email, description, postId }) => {
  const newComment = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    {
      method: 'POST',
      body: JSON.stringify({
        name: title,
        body: description,
        email
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }
  ).then((response) => response.json())
  return newComment
}

export default { getAllPosts, getPost, getCommentsForPost, addComment }
