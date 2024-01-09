import React from "react";
import{ useState, useEffect  } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function GrantApplicationForm ({isAuth}){
    let navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState("")
    const grantsCollectionRef = collection(db, "grants");

    const createPost = async () => {
        await addDoc(grantsCollectionRef, {title, postText, 
            author: {name:auth.currentUser.displayName, id:auth.currentUser.uid},
        });
        navigate("/");
    }

    useEffect(() => {
        if (!isAuth){
            navigate("/login");
        }

    }, )

    return (<div className="createPostPage">
        <div className="cpContainer">
            <h1>Create an Application</h1>
            <div className="inputGp">
                <label>Project Title:</label>
                <input placeholder="Title..." onChange={(event) => {
                    setTitle(event.target.value);
                    }}/>
            </div>
            <div className="inputGp">
                <label>Project Desciption:</label>
                <textarea placeholder="Description..."onChange={(event) => {
                    setPostText(event.target.value);
                    }}/>
            </div>
            <button onClick={createPost}>Submit Application</button>
        </div>
    </div>
    );
}
export default GrantApplicationForm;