import Posts from './Posts'
import { useState, useEffect } from 'react';

export default function BlogList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [blogs, setBlogs] = useState();
    const [postId, setPosts] = useState();

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                setError();
                setBlogs();
                const b = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!b.ok) {
                    throw new Error(`${b.status} - ${b.statusText}`);
                }
                const blogs = await b.json();
                setBlogs(blogs);
            } catch (e) {
                console.error(e);
                setError(e);
            }

            setLoading(false);
        })();
    }, []);

    const ShowBlogs=(id)=>{
        setPosts(id);
        console.log('works');
        
    }

    return (
        <>
            {loading && <h2>loading...</h2>}
            {error && <h2>oops - failed to load blogs.</h2>}
            {blogs && blogs.map(b => <h2 key={b.id} onClick={()=>{ShowBlogs(b.id)}}>{b.name}</h2>)}
            {postId && <Posts blogId={postId}/>}
        </>
    )
}
