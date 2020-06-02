import React from 'react'

export default () => {

    const handleClick = (e) => {
        fetch('testfile.json')
            .then(response => response.json())
            .then(data => console.log(data));
    }
    return (
        <div>Hello World <button type="button" onClick={handleClick}>Fetch testfile</button></div>
    )
}