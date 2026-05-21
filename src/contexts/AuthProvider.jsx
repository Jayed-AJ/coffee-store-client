import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';
const user= auth.currentUser;

const provider = new GoogleAuthProvider();


const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
}

const signInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}

const signInGoogle = () => {
    return signInWithPopup(auth,provider)
}

const userDelete = () => {
    return deleteUser(auth.currentUser)
} 

const userInfo = {
    createUser,
    userDelete,
    signInUser,
    signInGoogle,
    user
}

const AuthProvider = ({children}) => {
    return (
        <AuthContext value={userInfo}>
          {children}
        </AuthContext>
    );
};

export default AuthProvider;