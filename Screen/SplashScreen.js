import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import { useSelector, useDispatch } from "react-redux";
import { addUserInfo } from "../store/itemAction";

const SplashScreen = ({ navigation }) => {
  const token = useSelector((state) => state.userReducer.token);
  const dispatch = useDispatch();
  //Sử dụng sdk lottie view hiển thị hình ảnh động
  return (
    <View style={styles.container}>
      <LottieView
        style={{ opacity: 0.92, marginBottom: "15%" }}
        source={require("../assets/lotties/fashion-ver4.json")}
        loop={false}
        speed={1.5}
        autoPlay
        onAnimationFinish={() => {
          //Chỉ chạy 1 lần splash screen
          dispatch(addUserInfo({ showSplash: false }));
          //Check xem người dùng đã đăng nhập hay chưa dựa vào token để mở màn login hoặc Home
          if (!token) {
            navigation.navigate("Login");
          } else {
            navigation.navigate("MainStack");
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SplashScreen;
