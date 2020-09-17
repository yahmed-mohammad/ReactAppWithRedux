import * as ActionTypes from './ActionTypes';

//Reducer Function
export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            //...state - current value of the state and pass other parameters which needs to be updated, plus keeps the state immutable
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
          return state;
      }
};