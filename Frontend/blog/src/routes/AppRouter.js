import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import AddBlog from '../components/AddBlog';
 import Login from '../components/Login';
 import Logout from '../components/Logout'
import Register from '../components/Register';
import MyBlogList from '../components/MyBlogs'
const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
                <Route path="/home"  component={App} exact={true} />
                <Route path="/add" component={AddBlog} exact={true}/>
                <Route path='/login' component={Login} exact={true}/>
                <Route path='/logout' component={Logout} exact={true}/>
                <Route path='/register' component={Register} exact={true}/>
                <Route path='/myblogs' component={MyBlogList} exact={true}/>
            </Switch>
        </div>
    </BrowserRouter>
);
 
export default AppRouter;