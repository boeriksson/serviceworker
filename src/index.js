import ReactDom from 'react-dom'
import React from 'react'
import TestApp from './TestApp'

const init = () => {
    ReactDom.render(
        <TestApp/>,
        document.getElementById('app'))
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('serviceWorker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

init()