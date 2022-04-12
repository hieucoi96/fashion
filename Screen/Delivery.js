import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import NumberFormat from "react-number-format";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

const Delivery = ({ route, navigation }) => {
  const isFocused = useIsFocused();
  const delivery = useSelector((state) => state.userReducer.delivery);

  const [addressList, setData] = useState([]);
  const { total_product, total_value } = route.params;
  const { address } = route.params ?? {};
  const { data } = route.params ?? {};

  useEffect(() => {
    setData(delivery);
  }, [isFocused]);

  useEffect(() => {
    if (address !== undefined) {
      if (address.default) {
        addressList.forEach(function (part, index, arr) {
          arr[index].default = false;
        });
      }
      setData((oldData) => [...oldData, address]);
    }
  }, [address]);

  function openPayment(item) {
    if (item === undefined) {
      item = addressList.find((item) => item.default_address === true);
    }
    navigation.navigate("Payment", {
      item: item,
      data: data,
      total_value: total_value,
      total_product: total_product,
    });
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.add_address_contain}
          onPress={() => navigation.navigate("AddAddress")}
        >
          <Text style={[styles.text_normal, { flex: 1 }]}>
            Thêm địa chỉ mới
          </Text>
          <AntDesign name="plus" size={16} color="black" />
        </TouchableOpacity>
        <FlatList
          style={{ paddingHorizontal: "4%" }}
          data={addressList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                openPayment(item);
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={[
                    styles.text_normal,
                    {
                      fontWeight: "bold",
                      fontFamily: "Open_Sans_Bold",
                      flex: 1,
                    },
                  ]}
                >
                  {item.name_receiver} - {item.phone_receiver}
                </Text>
                <Text style={styles.text_small}>Sửa</Text>
              </View>
              <Text style={[styles.text_normal, { marginTop: 3 }]}>
                {item.address_detail}
                {", "}
                {item.sub_district}
                {", "}
                {item.district}
                {", "}
                {item.city}
              </Text>
              {item.default_address && (
                <Text style={[styles.text_small, { marginTop: 3 }]}>
                  [Mặc định]
                </Text>
              )}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.delivery_id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.bottom_container}>
        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <Text style={[styles.text_normal, { flex: 1 }]}>Số lượng</Text>
          <Text>{total_product}</Text>
        </View>
        <View style={{ marginTop: 5, flexDirection: "row" }}>
          <Text style={[styles.text_normal, { flex: 1 }]}>Thành tiền</Text>
          <NumberFormat
            value={total_value}
            displayType={"text"}
            thousandSeparator={true}
            suffix={" đ"}
            renderText={(value, props) => (
              <Text style={styles.text_normal} {...props}>
                {value}
              </Text>
            )}
          />
        </View>
        <TouchableOpacity
          style={styles.button_order}
          onPress={() => {
            openPayment();
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.text_order}>Đặt hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  bottom_container: {
    width: "100%",
    paddingHorizontal: "4%",
    marginBottom: 25,
    borderColor: "#AEAEB2",
    borderTopWidth: 0.5,
  },
  text_normal: {
    fontFamily: "Open_Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 21,
  },
  text_small: {
    fontFamily: "Open_Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 10,
    lineHeight: 15,
    color: "#0075FF",
  },
  button_order: {
    width: "100%",
    height: 42,
    backgroundColor: "#1C1C1E",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  text_order: {
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
  add_address_contain: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderColor: "#AEAEB2",
    borderBottomWidth: 0.5,
  },
  item: {
    paddingTop: 15,
  },
});

export default Delivery;
