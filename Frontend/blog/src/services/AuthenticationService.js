import axios from '../axios/axios'
class AuthenticationService {
    executeBasicAuthenticationService(username, password) {
        return axios.get('/basicauth',
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }
    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }
}
export default AuthenticationService;