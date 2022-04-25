import React from "react";
import { StyleSheet, Text } from "react-native";
import Animated, {
  divide,
  interpolateNode,
  Extrapolate,
  sub,
  cond,
  add,
  lessThan,
  multiply,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";

import { HEIGHT } from "./ItemLayout";

const styles = StyleSheet.create({
  remove: {
    color: "white",
    fontSize: 14,
    // fontWeight: "bold",
  },
});

const Action = ({ x, deleteOpacity }) => {
  const size = cond(lessThan(x, HEIGHT), x, add(x, sub(x, HEIGHT)));
  const translateX = cond(lessThan(x, HEIGHT), 0, divide(sub(x, HEIGHT), 2));
  const borderRadius = divide(size, 2);
  const scale = interpolateNode(size, {
    inputRange: [20, 30],
    outputRange: [0.01, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const iconOpacity = interpolateNode(size, {
    inputRange: [HEIGHT - 10, HEIGHT + 10],
    outputRange: [1, 0],
  });
  const textOpacity = sub(1, iconOpacity);
  return (
    <Animated.View
      style={{
        backgroundColor: "#121212",
        // borderRadius,
        justifyContent: "center",
        alignItems: "center",
        height: HEIGHT,
        width: size,
        transform: [{ translateX }],
      }}
    >
      <Animated.View
        style={{
          height: 5,
          width: 20,
          backgroundColor: "white",
          opacity: iconOpacity,
          transform: [{ scale }],
        }}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: "center",
          alignItems: "center",
          opacity: multiply(textOpacity, deleteOpacity),
        }}
      >
        <AntDesign name="delete" size={24} color="#ffffff" />
      </Animated.View>
    </Animated.View>
  );
};

export default Action;
