import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  abs,
  add,
  call,
  clockRunning,
  cond,
  eq,
  not,
  set,
  useCode,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  State,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
// import {
//   snapPoint,
//   timing,
//   useClock,
//   // usePanGestureHandler,
//   useValue,
//   minus,
//   clamp,
// } from "react-native-redash";
import {
  snapPoint,
  timing,
  useClock,
  useValue,
  minus,
  clamp,
  delay,
  usePanGestureHandler,
} from "react-native-redash/lib/module/v1";

import ItemLayout, { HEIGHT } from "./ItemLayout";
import Action from "./Action";

const { width } = Dimensions.get("window");
const snapPoints = [-width, -100, 0];
const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
});

const Item = ({ item, onSwipe }) => {
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  const translateX = useValue(0);
  const offsetX = useValue(0);
  const height = useValue(HEIGHT);
  const deleteOpacity = useValue(1);
  const clock = useClock();
  const to = snapPoint(translateX, velocity.x, snapPoints);
  const shouldRemove = useValue(0);
  useCode(
    () => [
      cond(
        eq(state, State.ACTIVE),
        set(
          translateX,
          add(offsetX, clamp(translation.x, -9999, minus(offsetX)))
        )
      ),
      cond(eq(state, State.END), [
        set(translateX, timing({ clock, from: translateX, to })),
        set(offsetX, translateX),
        cond(eq(to, -width), delay(set(shouldRemove, 1), 300)),
      ]),
      cond(shouldRemove, [
        set(height, timing({ from: HEIGHT, to: 0 })),
        set(deleteOpacity, 0),
        cond(not(clockRunning(clock)), call([], onSwipe)),
      ]),
    ],
    [onSwipe]
  );
  return (
    <Animated.View>
      <View style={styles.background}>
        <TouchableWithoutFeedback onPress={() => shouldRemove.setValue(1)}>
          <Action x={abs(translateX)} {...{ deleteOpacity }} />
        </TouchableWithoutFeedback>
      </View>
      <PanGestureHandler
        failOffsetY={[-5, 5]}
        activeOffsetX={[-5, 5]}
        {...gestureHandler}
      >
        <Animated.View style={{ height, transform: [{ translateX }] }}>
          <ItemLayout {...{ item }} />
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default Item;
