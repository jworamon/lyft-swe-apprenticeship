import React, { useState } from 'react';

const Home = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (evt) => {
        setInput(evt.target.value);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const data = { string_to_cut: input };
        const response = await fetch('/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        console.log("----------", response)
        const responseJSON = await response.json();
        console.log("----------", responseJSON)
        if (!response.ok) {
            setError(responseJSON);
            setResult(null);
        } else {
            setResult(JSON.stringify(responseJSON)); // stringify to show the JSON response
            setError(null);
        }
    }

    return (
        <div className="home">
            <form className="input-form" onSubmit={handleSubmit}>
                <label htmlFor="inputString" />
                <input
                    name="string_to_cut"
                    placeholder="Enter a string here"
                    onChange={handleChange}
                    value={input}
                >
                </input>
                <label htmlFor="submit"></label>
                <button type="submit">Submit</button>
            </form>
            {result && <div className="result" data-testid="result">{result}</div>}
            {error && <div className="error">{error.message}</div>}
        </div>
    )
}

export default Home;