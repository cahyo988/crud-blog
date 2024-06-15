import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('cahyo'); 
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
        }).catch((error) => {
            console.error('Error adding new blog:', error);
        });

        history.push('/');
    }

    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                
                <label>Blog Body:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                
                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="cahyo">Cahyo</option>
                    <option value="kisa">Kisa</option>
                    <option value="kana">Kana</option>
                </select>
                
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>adding blog</button>}
            </form>
        </div>
    );
}

export default Create;
