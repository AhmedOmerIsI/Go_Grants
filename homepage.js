import React, { useState , useEffect} from 'react';
import { getDocs , collection, deleteDoc, doc} from 'firebase/firestore';
import { auth, db } from './firebase';

function HomePage ({isAuth})  {
    const [postLists, setPostLists] = useState([]);
    const grantsCollectionRef = collection(db, "grants");

    useEffect(() => {
        const getGrants = async () => {
            const data = await getDocs(grantsCollectionRef);
            setPostLists(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getGrants();
        
    });
    const deletePost = async (id) => {
        const postDoc = doc(db, "grants", id)
        await deleteDoc(postDoc)
    }

    
return <div className="homePage">{
    postLists.map((grants) => {
        return (<div className="post">
            <div className="postHeader">
                <div className="title">
                    <h1>{grants.title}</h1>
                    </div>
                    <div className = "deletePost">
                    {isAuth && grants.author.id === auth.currentUser.uid &&(
                        <button onClick={() => {deletePost(grants.id)}}> &#128465; </button>)
                    }

                    </div>
            </div>
            <div className="postTextContainer">{grants.postText}</div>
            </div>
        );
    })
}

    </div>
}
export default HomePage;