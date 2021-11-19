import React , {createContext,useContext,useReducer} from 'react'

//prepare the data layer for the app
export const StateContext = createContext();

//wrap the app and provide data layer to it 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
</StateContext.Provider>
);
  
//pull data from data layer
export const useStateValue = () => useContext(StateContext);

