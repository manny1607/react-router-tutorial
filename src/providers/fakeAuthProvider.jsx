const fakeAuthProvider = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(cb, 1000);
    },
    signout(cb) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(cb, 1000);
    }
}

export { fakeAuthProvider };