import React, { useEffect, useState } from 'react';
import Post from './Post';
import io from 'socket.io-client';

export default function Login() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");



    async function login(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error(`${response.status} - ${response.statusText}`);
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <form method="POST" onSubmit={login}>
            <input name="username" required placeholder="username" />
            <input name="password" type="password" placeholder="password" required />
            <button>login</button>
            <a href="/register">register</a>
        </form>
    )
}