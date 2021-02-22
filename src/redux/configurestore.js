import {createStore} from 'redux';
import {Reducer, InitialState} from './reducer';

export const configurestore = () => {
    const store = createStore(Reducer, InitialState);
    return store;
    
}