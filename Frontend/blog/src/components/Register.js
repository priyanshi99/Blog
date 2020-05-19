import React from 'react';
import {NavLink} from 'react-router-dom';
import { registerUser, Increment_user}  from '../actions/increment';
import { connect } from 'react-redux';
class Register extends React.Component {
    
    constructor(props) {
        super(props);
        this.onUsernameChange=this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.state = {
            id: '',
            username:  'hello',
            password:  'hey',
        };
    }
    
    onUsernameChange(e) {
        const username = e.target.value;
        this.setState(() => ({ username: username }));
    }
    onPasswordChange(e) {
        const password = e.target.value;
        this.setState(() => ({ password: password }));
    }
   
    onSubmit=async(e) =>{
        e.preventDefault()
            e.preventDefault(); 
            this.props.dispatch(Increment_user())
            this.state.id=this.props.Id
            console.log(this.state)
            this.props.dispatch(registerUser(this.state))
            this.props.history.push('/login')
        }
    
 
    render() {
        return (
            <div>
            
                <form onSubmit={this.onSubmit} className='add-blog-form'>
                    <div class="row">
                        <div class="col-25">
                            <label>Username</label>
                        </div>
                        <div class="col-75">
                            <input type="text" class="input-form" placeholder="username" autoFocus
                                    value={this.state.username}
                                    onChange={this.onUsernameChange} />
                        </div>
                    </div>                               
                    <div class="row">
                        <div class="col-25">
                            <label>PASSWORD</label>
                        </div>
                        <div class="col-75">
                            <input type="text" class="input-form" placeholder="password" autoFocus
                                value={this.state.password}
                                onChange={this.onPasswordChange} />
                        </div>
                    </div>
                   
                    <button class="add-btn">REGISTER</button>
                </form>
                <li><NavLink to ='/login'>Login Here</NavLink></li>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        Id: state.Iu
    }
}
export default connect(mapStateToProps)(Register);