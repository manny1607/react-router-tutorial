import React, { useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { fakeAuthProvider } from "../providers/fakeAuthProvider";

export default function AuthProvider({ children }) {
    let [user, setUser] = useState(null);

    let signin = (newUser, cb) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            cb();
        });
    }

    let signout = (cb) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            cb();
        });
    }

    let value = { user, signin, signout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}