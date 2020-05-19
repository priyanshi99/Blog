import React from 'react';
import axios from '../axios/axios'
import {NavLink} from 'react-router-dom';
import Header from '../components/Header'

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.onUsernameChange=this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.state = {
            username:  'hello',
            password:  'hey',
            error: '',
            isUserLoggedIn: false
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
    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }
    registerSuccessfulLogin(username, password) {
        //let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
        //console.log('registerSuccessfulLogin')
        sessionStorage.setItem("token", this.createBasicAuthToken(username, password))
        sessionStorage.setItem("username", username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }
    setupAxiosInterceptors(token) {
        console.log(token)
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn) {
                    config.headers.authorization = token ? `Bearer ${token}` : ''
                }
                return config
            }
        )
    }
    onSubmit=async(e) =>{
            e.preventDefault();
            console.log(this.state.username)
            return axios.get('/basicauth',
            { headers: { authorization: this.createBasicAuthToken(this.state.username, this.state.password) } })
            .then(() => {
                this.setState({isUserLoggedIn: true})
                this.registerSuccessfulLogin(this.state.username, this.state.password)
                this.props.history.push(`/home`)
            })
        }
    
 
    render() {
        return (
            <div>
                <Header/>
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
                   
                    <button class="add-btn">LOGIN</button>
                </form>
                <li><NavLink to ='/register'>Register Here</NavLink></li>
            </div>
        );
    }
}
