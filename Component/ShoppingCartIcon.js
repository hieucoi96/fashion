import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { addUserInfo } from "../store/itemAction";

const ShoppingCartIcon = () => {
  const data = useSelector((state) => state.userReducer.cart);
  const token = useSelector((state) => state.userReducer.token);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={{ marginRight: 15 }}
      onPress={() => {
        if (token === "1") {
          dispatch(addUserInfo({ token: null }));
        }
        navigation.navigate("Cart");
      }}
      activeOpacity={1}
    >
      <View style={styles.count_container}>
        <Text style={styles.count}>{token === "1" ? 0 : data.length}</Text>
      </View>
      <Image
        source={require("../assets/icon_cart.png")}
        style={styles.icon_cart}
      />
    </TouchableOpacity>
  );
};

export default ShoppingCartIcon;

const styles = StyleSheet.create({
  icon_cart: {
    width: 30,
    height: 30,
  },
  count_container: {
    position: "absolute",
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#000000",
    zIndex: 9999,
  },
  count: {
    fontSize: 10,
  },
});
