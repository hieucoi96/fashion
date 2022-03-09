import {
    ADD_ITEM,
    CHANGE_COLOR,
    CHANGE_INFO,
    CHANGE_SIZE,
    DECREASE_QUANTITY,
    DELETE_ITEM,
    INCREASE_QUANTITY
} from "./itemTypes";
import {CART_PRODUCT} from "../api/constants";

const initialState = {
    data: CART_PRODUCT
}
const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let v_ids = state.data.map( (item) => item.v_id);
            if(v_ids.indexOf(action.payload.v_id) === -1){
                return {
                    ...state,
                    data: [...state.data, action.payload]
                }
            }else {
                return {
                    ...state,
                    data: state.data.map((item) => {
                        if (item.v_id !== action.payload.v_id) {
                            return item
                        }
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    })
                }
            }

        case DELETE_ITEM:
            return {
                ...state,
                data: state.data.filter(item => item.v_id !== action.payload)
            }
        case INCREASE_QUANTITY:
            return {
                ...state,
                data: state.data.map((item) => {
                    if (item.v_id !== action.payload.v_id) {
                        return item
                    }
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                })
            }
        case DECREASE_QUANTITY:
            return {
                ...state,
                data: decrease_quantity(state, action)
            }
        case CHANGE_COLOR:
            return {
                ...state,
                data: state.data.map((item) => {
                    if (item.v_id !== action.payload) {
                        return item
                    }
                    return {
                        ...item,
                        color: action.color
                    }
                })
            }
        case CHANGE_SIZE:
            return {
                ...state,
                data: state.data.map((item) => {
                    if (item.v_id !== action.payload) {
                        return item
                    }
                    return {
                        ...item,
                        size: action.size
                    }
                })
            }
        case CHANGE_INFO:
            return {
                ...state,
                data: change_info(state, action)
            }
        default:
            return state;
    }
}

function decrease_quantity(state, action){
    for(let i = 0; i < state.data.length; i++){
        if(state.data[i].v_id === action.payload.v_id && state.data[i].quantity === 1){
            return state.data.filter(item => item.v_id !== action.payload.v_id)
        }
    }
    return state.data.map((item) => {
        if (item.v_id === action.payload.v_id) {
            return {
                ...item,
                quantity: item.quantity - 1
            }
        }
        return item
    })
}

function change_info(state, action){
    let duplicate = false
    const x = state.data.map((item) => {
        if(item.key !== action.key && item.v_id === action.v_id){
            duplicate = true
            return {
                ...item,
                quantity: item.quantity + 1
            }
        }
        if (item.key !== action.key) {
            return item
        }
        return {
            ...item,
            v_id: action.v_id,
            color: action.color,
            src: action.src,
            price: action.price,
            size: action.size
        }
    })
    if(duplicate){
        return x.filter(item => item.key !== action.key)
    }
    return x
}


export default itemReducer
