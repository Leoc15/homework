import React from 'react'
import './AddComment.css'
import useForm from './useForm';
import { useNavigate } from 'react-router';

export default function Comment({ setError }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useForm({
        body: ''
    })
    async function submit(e) {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/posts/${_id}/comments`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include'
            });

            if (!response.ok) {
                const msg = await response.text();
                throw new Error(`${response.status} - ${msg ?? response.statusText}`);
            }

            navigate('/');
        } catch (e) {
            console.error(e);

            setError(e.message);
        }
    }
    return (
        
        <div>
        <form id="addCommentForm" onSubmit={submit}>
            <label>comment
                <textarea name="body" required value={formData.body} onChange={setFormData}></textarea></label>
            <button>add comment</button>
        </form>
        </div>
    )
}
