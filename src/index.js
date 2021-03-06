import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './services/serviceWorker'
import { Provider } from 'react-redux'
import { Store } from './redux/store'

import Loader from './components/Loader/Loader'
import Error from './components/ErrorHandler/ErrorHandler'

ReactDOM.render(
    <Provider store={Store}>
        <Loader />
        <Error />
        <App />
    </Provider >,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
