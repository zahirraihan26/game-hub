import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    // console.log(loading,user)

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // google signin 

    const signInWithGoogle = () => {

        return signInWithPopup(auth, googleProvider)
    }


    const signin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user
    const updateuser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    const logout = () => {

        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser)
            setloading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    // Reset pass  kora hoi nee
    const resetpass = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


    const authData = {
        user,
        setuser,
        createUser,
        logout,
        signin,
        loading,
        setloading,
        updateuser,
        signInWithGoogle,
        resetpass
    }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default Authprovider;

