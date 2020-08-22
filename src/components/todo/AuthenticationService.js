class AuthenticationService{
    registerSuccessfulLogin(username,password){
        console.log("Register successful log")
        sessionStorage.setItem('authenticatedUser',username);
    }
}

export default new AuthenticationService();