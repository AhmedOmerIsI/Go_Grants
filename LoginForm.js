import React from "react";
import {auth, provider} from "./firebase";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginForm ({setIsAuth}) {

    let navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };
    return( 
    <div className="LoginForm">
        <p>Sign In With Google to Continue</p>
        <button className="login-with-google-btn"onClick={signInWithGoogle}>Sign in with Google</button>

    </div>
    )
}
export default LoginForm;