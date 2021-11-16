import initilaizationAuth from "../Firebase/Firebase-init";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import { useEffect } from "react";

initilaizationAuth();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const register = (email, password, name, location, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setLoading(false));
    };
    const login = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }
    const googleLogin = (location, history) => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // save user to the database
                saveUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unSubscribe;
    }, []);
    // check admin 
    useEffect(() => {
        fetch(`https://glacial-temple-44454.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email]);

    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false));
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://glacial-temple-44454.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        admin,
        token,
        register,
        login,
        googleLogin,
        authError,
        logOut,
        loading
    }
}
export default useFirebase;