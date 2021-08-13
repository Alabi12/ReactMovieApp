import React, { useState } from 'react';

const SearchForm = () => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="search movies" className="py-1 px-2 rounded-l-lg" onChange={(e) => setText(e.target.value)} 
                />
                
                <button className="submit" className="bg-green-400 py-1 px-2 rounded-r-lg text-white">Search</button>
            </form>
        </div>
    );
}

export default SearchForm;
