

import { createStore, combineReducers } from 'redux';



let myStore = {
    expense: [
        // { amount: 500, desc: 'cash' },
        // { amount: -40, desc: 'Book' },
        // { amount: -200, desc: 'Camera' }
    ]
}

function adExpence(oldData = myStore, newData) {
    oldData = { ...oldData }
    if (newData.type == 'ADD_EXPENSE') {
        oldData.expense.push(newData.data)
    }else if(newData.type == 'delet_hogya'){
        oldData.expense.splice(newData.del , 1)
    }
    return oldData
}

let Reduser = combineReducers({ adExpence })

export let meraStore = createStore(Reduser);