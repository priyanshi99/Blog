import React from 'react';
 import Header from '../components/Header';
import AuthenticatedHeader from './AuthenticatedHeader';
import { Increment_blog } from '../actions/increment';
import { connect } from 'react-redux';
class BlogForm extends React.Component  {
    constructor(props) {
        super(props);
        const token =sessionStorage.getItem("token");
        let loggedIn= true;
        if(token==null){
            loggedIn=false;
        }
        
        this.onTopicChange = this.onTopicChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);    
        this.onSubmit = this.onSubmit.bind(this);
 
        this.state = {
            id: '',
            topic: props.blog ? props.blog.topic : '',
            content: props.blog ? props.blog.content : '',
            error: '',
            loggedIn
        };
    }
  
    onTopicChange(e) {
        const topic = e.target.value;
        this.setState(() => ({ topic: topic }));
    }
 
    onContentChange(e) {
        const content = e.target.value;
        this.setState(() => ({ content: content }));
    }

    onSubmit(e) {
        e.preventDefault();
 
        if (!this.state.topic) {
            this.setState(() => ({ error: 'Please set title' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.dispatch(Increment_blog())
            this.props.onsubmitblog(
                {
                    id:this.props.id,
                    topic: this.state.topic,
                    content: this.state.content
                }
            );
        }
    }
 
    render() {
       
        const token= sessionStorage.getItem("token") 
        let HideHeader = token==null ? <Header />:<AuthenticatedHeader/> 
        if(this.state.loggedIn===true)
        return (
            <div>
                {HideHeader}
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className='add-blog-form'>                     
                    <div class="row">
                        <div class="col-25">
                            <label>TOPIC</label>
                        </div>
                        <div class="col-75">
                            <input type="text" class="input-form" placeholder="topic" autoFocus
                                value={this.state.topic}
                                onChange={this.onTopicChange} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label>CONTENT</label>
                        </div>
                        <div class="col-75">
                    <textarea placeholder="content" class="input-area"
                        value={this.state.content}
                        onChange={this.onContentChange} />
                    </div>
                    </div> 
                    <button class="add-btn">Add BLOG</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        id: state.Ib
    }
}
export default connect(mapStateToProps)(BlogForm);