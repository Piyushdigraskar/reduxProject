const redux = require('redux')



const counterReducer = (state = {counter: 0}, action)=>{
    const increaseBy5 = ()=>{
        for(let i = 1; i<5;i++){
            state.counter + i;
        }
    }
    if(action.type === 'increment'){
        return {
            counter: increaseBy5
        };
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        };
    }
    return state;
    
}

const store = redux.createStore(counterReducer);

const counterSubscriber = ()=>{
    const lateestState = store.getState();
    console.log(lateestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});
