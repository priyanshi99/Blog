import React from 'react';
import BlogForm from './BlogForm';
import { connect } from 'react-redux';
import { addBlog, getBlogs } from '../actions/increment';
 
const AddBlog = (props) => (
  
    <div>
        <BlogForm onsubmitblog={(blog) => {
                props.dispatch(addBlog(blog));
                props.dispatch(getBlogs());
                props.history.push('/home')
            }}
            
        />
    </div>
);
 
export default connect()(AddBlog);