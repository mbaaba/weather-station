import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'


let initialState = {
    weather: {
        temperature: 0,
        pressure: 0,
        humidity: 0
    }
}



let store = configureStore(initialState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
