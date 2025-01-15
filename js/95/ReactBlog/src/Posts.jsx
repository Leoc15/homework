import { useState, useEffect } from 'react';
import Comments from './comments';

export default function Posts(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [posts, setPosts] = useState();
    const [cpi, setCPI] = useState([]);


    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                setError();
                setPosts();
                const p = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${props.blogId}`);
                if (!p.ok) {
                    throw new Error(`${p.status} - ${p.statusText}`);
                }
                const posts = await p.json();
                setPosts(posts);
            } catch (e) {
                console.error(e);
                setError(e);
            }

            setLoading(false);
        })();
    }, [props.blogId]);

    return (
        <>
            {loading && <h2>loading...</h2>}
            {error && <h2>oops - failed to load blogs.</h2>}
            {posts && posts.map(p => {
                let bttnStrng = "Show Comment";
                let comment = '';
                if (cpi.includes(p)) {
                    bttnStrng = 'Hide Comment'
                }
                const post=<div>{p.title}{p.body} <button onClick={()=>{
                    let temp= [...cpi];
                    if(bttnStrng==='Show Comment'){
                        temp.push(p);
                    }else{
                        temp=temp.filter(elem=>elem !=p);
                    }
                    setCPI(temp);
                }}>{bttnStrng}</button></div>;
                if(cpi.includes(p)){
                    comment=<Comments postId={p.id}/>
                }
                return <div key={p.id}>{post} {comment}</div>
                })}
        </>
    )
}