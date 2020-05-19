import axios from '../axios/axios'
export const Increment_blog =() =>{
    return {
       type: 'INCREMENT_BLOG'
    }
 }
 export const Increment_user =() =>{
    return {
       type: 'INCREMENT'
    }
 }

const _regUser = (user) => ({
    type: 'ADD_USER',
    user
});
 
export const registerUser = (userData = {
    id: ' ',
    username: '',
    password: ''
}) => {
    return (dispatch) => {
        const user = {
            _id: userData.id,
            username: userData.username,
            password: userData.password
        };  
        console.log(user)
        return axios.post('/reg', user).then(result => {

            dispatch(_regUser(result.data));
            
        });
    };
};

const _getBlogs = (blogs) => ({
  type: 'GET_BLOGS',
  blogs
});

export const getBlogs = () => {
  return (dispatch) => {
     
      return axios.get('').then(result => {
          const blogs = [];

          result.data.forEach(item => {
              blogs.push(item);
          });

          dispatch(_getBlogs(blogs));
      });
  };
  };
  const _addBlog = (blog) => ({
    type: 'ADD_BLOG',
    blog
});
 
export const addBlog = (blogData = {
    id: '',
    topic: '',
    content: '',
    author: ''
}) => {
    return (dispatch) => {
        const user =sessionStorage.getItem("username")
        const blog = {
            id: blogData.id,
            topic: blogData.topic,
            content: blogData.content,
            author:user,
        };
        console.log(blog)
        return axios.post('/add', blog).then(result => {

            dispatch(_addBlog(result.data));
            
        });
    };
};

