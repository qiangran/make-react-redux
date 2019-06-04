import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Input from './containers/Input'
import InputError from './containers/InputError'
import rootReducer  from './reducers/rootReducer'
import './index.css'



const store = createStore(rootReducer);
//console.log("=====store.getState====",store.getState());

class Index extends Component {

    render () {
        return (
            <div>
                <Input />
                <InputError/>
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('root')
)
