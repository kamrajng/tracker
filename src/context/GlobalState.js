import { createContext, useReducer } from "react";
// import react, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Intial State
const intialState = {
    transactions:[
        // { id: 1, text: 'Nut', amount: -20 },
        // { id: 2, text: 'Tie', amount: 300 },
        // { id: 3, text: 'tuy', amount: -10 },
        // { id: 4, text: 'Cloth', amount: 150 }
    ]
}

// create Context
export const GlobalContext = createContext(intialState)

// provider component
export const GlobalProvider = ({ children }) =>{
    const[ state, dispatch] = useReducer(AppReducer, intialState)

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,deleteTransaction,
            addTransaction

        }}>
            {children} 
        </GlobalContext.Provider>
    )

}