import React, { useState } from 'react';

const Home = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleChange = (evt) => {
        setInput(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const data = { string_to_cut: input };
        fetch('/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                setResult(JSON.stringify(result));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="inputString" />
                <input
                    type="text"
                    name="string_to_cut"
                    placeholder="Enter a string here"
                    onChange={handleChange}
                    value={input}
                >
                </input>
                <label htmlFor="submit"></label>
                <button type="submit">Submit</button>
            </form>
            <div>
                {
                    result.length ? result : null
                }
            </div>
        </div>
    )
}

export default Home;