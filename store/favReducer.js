import {CHANGE_FAV} from "./itemTypes";
import {showMessage} from "react-native-flash-message";
import {FAV_PRODUCT} from "../api/constants";

const initialState = {
    data: FAV_PRODUCT
}
const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FAV:
            return {
                ...state,
                data: addOrRemoveFav(state, action.payload, action.id)
            }
        default:
            return state;
    }
}

function addOrRemoveFav(state, item, id) {
    let ids = state.data.map( (item) => item.id);
    if(ids.indexOf(id) > -1){
        showMessage({
            message: "Đã xóa sản phẩm khỏi danh sách yêu thích!",
            position: "bottom",
            titleStyle:{ textAlignVertical: "center", textAlign: "center", paddingVertical: 10, fontSize: 16 },
            backgroundColor: '#454545D9',
        });
        return state.data.filter(s_item => s_item.id !== item.id)
    }else{
        showMessage({
            message: "Đã thêm sản phẩm vào danh sách yêu thích!",
            position: "bottom",
            titleStyle:{ textAlignVertical: "center", textAlign: "center", paddingVertical: 8, fontSize: 16  },
            backgroundColor: '#454545D9',
        });
        return [...state.data, item]
    }
}

export default favReducer
