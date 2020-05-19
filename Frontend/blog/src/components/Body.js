import React from 'react';
import { connect } from 'react-redux';
 
const BlogList = (props) => (
    <div>
        <ul className="blogs">
            {props.blogs.map(blog => {
                return (
                    <ul key="{blog.id}" className="blog">
                        <li className="topic">{blog.topic}</li>
                        <li className="author">By: {blog.author}</li>
                        <li className="desc">{blog.content}</li>
                    </ul>
                );
            })}
        </ul>
 
    </div>
);
 
const mapStateToProps = state => {
    console.log(state)
    return {
        blogs: state.Rg
    };
}

export default connect(mapStateToProps)(BlogList);
