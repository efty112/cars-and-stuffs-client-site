import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
export const LevelContext = createContext(null);

const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return () => {unsubscribe()};
    }, [])

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const allValue = {
        signUp,
        logIn,
        currentUser,
        logOut
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