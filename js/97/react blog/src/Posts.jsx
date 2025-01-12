import { useState, useEffect } from 'react';
import Comments from './comments';

export default function Posts(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [posts, setPosts] = useState();
    const [showComments, setShowComments] = useState(false);
    const [cpi, setCPI] = useState();


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
    }, []);

    return (
        <>
            {loading && <h2>loading...</h2>}
            {error && <h2>oops - failed to load blogs.</h2>}
            {!showComments && posts && posts.map(p => <div key={p.id} onClick={() => setShowComments(!showComments)}>{p.title} {p.body}</div>)}
            {showComments && posts && posts.map(p => <div key={p.id}> <h2 key={p.id}>{p.title} {p.body}</h2> <Comments postId={p.id} /></div>)}
        </>
    )
}