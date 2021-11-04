import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './App';

let initState = {
    name: 'Billie Eilish',
    genres: ['Alternative', 'Indie'],
    favAlbums: ['Up Next Session: Billie Eilish']
}

function myReducer(state = initState, action) {
    switch (action.type) {
        case 'UPDATE_NAME':
            return { ...state, name: action.payload }
        case 'ADD_GENRE':
            return { ...state, genres: [...state.genres, action.payload] }
        case 'ADD_SONGS':
            return { ...state, favAlbums: [...state.favAlbums, action.payload] }
        default:
            return state;
    }
}

let store = createStore(myReducer, devToolsEnhancer());

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);