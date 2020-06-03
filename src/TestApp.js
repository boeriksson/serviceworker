import React from 'react'

export default () => {

    const handleClick1 = (e) => {
        fetch('testfile.json')
            .then(response => response.json())
            .then(data => console.log(data));
    }
    const handleClick2 = (e) => {
        console.log('handleclick2')
        navigator.serviceWorker.controller.postMessage({ type: 'clearcache'})
    }

    return (
        <div>Hello World
            <button type="button" onClick={handleClick1}>Fetch testfile</button>
            <button type="button" onClick={handleClick2}>clear cache</button>
        </div>
    )
}