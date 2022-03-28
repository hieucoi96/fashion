import {
  ADD_ITEM,
  DELETE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CHANGE_COLOR,
  CHANGE_SIZE,
  CHANGE_FAV,
  CHANGE_INFO,
  ADD_USER_INFO,
} from "./itemTypes";
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
export const deleteItem = (item) => ({
  type: DELETE_ITEM,
  payload: item,
});
export const increaseQuantity = (item) => ({
  type: INCREASE_QUANTITY,
  payload: item,
});
export const decreaseQuantity = (item) => ({
  type: DECREASE_QUANTITY,
  payload: item,
});
export const changeColor = (item, color) => ({
  type: CHANGE_COLOR,
  payload: item,
  color: color,
});
export const changeSize = (item, size) => ({
  type: CHANGE_SIZE,
  payload: item,
  size: size,
});
export const changeFav = (id) => ({
  type: CHANGE_FAV,
  id: id,
});
export const changeInfo = (key, v_id, color, src, price, size) => ({
  type: CHANGE_INFO,
  key,
  v_id,
  color,
  src,
  price,
  size,
});
export const addUserInfo = (user) => ({
  type: ADD_USER_INFO,
  payload: user,
});
export const updateCart = (cart) => ({
  type: UPDATE_CART,
  payload: cart,
});
