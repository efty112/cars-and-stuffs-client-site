import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
export const LevelContext = createContext(null);


const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
                setLoading(false)
            } else {
                setCurrentUser(null);
            }
        });
        return () => { unsubscribe() };
    }, [])

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (display, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: display, photoURL: photo
        })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const allValue = {
        signUp,
        logIn,
        currentUser,
        logOut,
        updateUserProfile,
        loading
    }

    return (
        <LevelContext.Provider value={allValue}>
            {children}
        </LevelContext.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default ContextProvider;