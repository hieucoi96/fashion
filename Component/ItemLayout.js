import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";

export const HEIGHT = 96;
const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: HEIGHT,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: "#e2e3e4",
    borderBottomWidth: 0.5,
    borderColor: "#DADADA",
  },
  item: {
    borderBottomWidth: 0.5,
    borderColor: "#DADADA",
    paddingTop: 8,
    paddingHorizontal: 15,
  },
  text_title: {
    fontStyle: "normal",
    fontFamily: "Open_Sans_Bold",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 21,
  },
  text_content: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 21,
  },
  text_date: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 10,
    lineHeight: 15,
    color: "#AEAEB2",
  },
});

const ItemLayout = ({ item: { content, title, date_created } }) => {
  return (
    <View style={styles.content}>
      {/* <Text>ihdgfkagfiougfbiwfddfwhgchchfhgfffffffffffff</Text> */}
      <View style={styles.item}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Text style={styles.text_title}>{title}</Text>
        </View>
        <Text style={[styles.text_content, { marginBottom: 7 }]}>
          {content}
        </Text>
        <Text style={[styles.text_date, { marginBottom: 12 }]}>
          {moment.utc(date_created).format("HH:mm DD-MM-YYYY")}
        </Text>
      </View>
    </View>
  );
};

export default ItemLayout;
