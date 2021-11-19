// use this one to manipulate the data layer

export const initialState = {
    basket: [],
    
};

// selector 
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => Number(item.price) + amount, 0);

const reducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
                
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.index);
            if (index >= 0) {
                newBasket.splice(index, 1);
                }
            else {
                alert('The item is not found on the basket');
            }
            return {
                ...state,
                basket : newBasket
            }
          
        default:
            return state;
    }
};

export default reducer;



