import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; 
import {tabReducer, numbersReducer, pictureReducer, historyReducer, productReducer, imageReducer, priceReducer, basketReducer } from './reducers/reducers.js';



let initialState = {
	tab: 1,  // 1=väder, 2=tal
	imageUrl: 'http://www.gexing.me/uploads/allimg/141016/23040SH4-0.jpg',
	numbers: [2, 4, 8, 16, 32, 64],
    history: [],
    products: [
        {
            name: "Mössa",
            image: "https://m.oiidesign.se/images/175595/m_thumb_normal.jpg",
            price: 49
        },
        {
            name: "Vantar",
            image: "https://m.oiidesign.se/images/119373/m_thumb_normal.jpg",
            price: 349
        },
        {
            name: "Halsduk",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEbowcKqUMoTwUMXxX-RV-2_cpoJX8baXWuSGgOKh6gKFbsYN",
            price: 649
        }
    ],
    basket: []
}


let rootReducer = combineReducers({
	tab: tabReducer,
	numbers: numbersReducer,
	imageUrl: pictureReducer,
    history: historyReducer,
    products: productReducer,
    basket: basketReducer
});

const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();