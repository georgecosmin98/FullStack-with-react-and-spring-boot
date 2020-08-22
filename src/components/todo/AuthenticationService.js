class AuthenticationService{
    registerSuccessfulLogin(username,password){
        console.log("Register successful log")
        sessionStorage.setItem('authenticatedUser',username);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }
}

export default new AuthenticationService();