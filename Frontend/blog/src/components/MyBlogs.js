import React from 'react';
import { connect } from 'react-redux';
import AuthenticatedHeader from './AuthenticatedHeader';
 
const MyBlogList = (props) => (
      
    <div>
        <AuthenticatedHeader/>
        <ul className="blogs">
            {console.log(sessionStorage.getItem("username"))}
        
            {props.blogs.filter(blog => ( blog.author=== sessionStorage.getItem("username")))
                
            .map(filteredblog => {  
                   
                return (
                    <ul key="{filtered.id}" className="blog">
                        <li className="topic">{filteredblog.topic}</li>
                        <li className="author">By: {filteredblog.author}</li>
                        <li className="desc">{filteredblog.content}</li>
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

export default connect(mapStateToProps)(MyBlogList);
