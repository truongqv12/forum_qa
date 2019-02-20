import axios from 'axios'
import Token from "./Token";
import AppStorage from "./AppStorage";
import router from "../router";

class User {
    login(data) {
        axios.post('http://localhost:8000/api/auth/login', data)
            .then(res => {
                this.responseAfterLogin(res)
                router.push({name: 'forum'})
            })
            .catch(error => console.log(error))

    }

    responseAfterLogin(res) {
        const access_token = res.data.access_token
        const username = res.data.user
        if (Token.isValid(access_token)) {
            AppStorage.store(username, access_token)
            window.location = '/'
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();
        if (storedToken) {
            return Token.isValid(storedToken) ? true : false
        }
        return false
    }

    loggedIn() {
        return this.hasToken()
    }

    logout() {
        if(!this.loggedIn()) {
            router.push({name: 'forum'})
        }
        AppStorage.clear()
        window.location = '/'
    }

    name() {
        if (this.loggedIn()) {
            return AppStorage.getUser()
        }
    }

    id(){
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub
        }
    }
}

export default User = new User();