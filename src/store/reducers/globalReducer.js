const initialState = {
    name: "John",
    numberOfPeople: 18,
};

export const pizzaReducer = (state = initialState, action) => {
    switch (action.type){
        case 'CHANGE_USER_NAME': {
            return {
                ...state,
                name: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};