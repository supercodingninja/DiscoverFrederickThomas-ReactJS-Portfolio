// Ref. https://www.npmjs.com/package/react-scroll-parallax; and Ref. https://www.youtube.com/watch?v=41-jn5tdg50&list=PLnpdZyv-BjINbUjmTUsyziHz_4fa9hM5G //
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(

    // Ref. https://www.npmjs.com/package/react-scroll-parallax //
    <ParallaxProvider>
        <App />
    </ParallaxProvider>,

    document.getElementById('root')

);