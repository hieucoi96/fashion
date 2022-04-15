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
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import moment from "moment";

const data_notification = [
  {
    id: "34534643560",
    type: "promotion",
    title: "Chương trình khuyến mại",
    content:
      "Đơn hàng Fb1802 của bạn đã được giao thành công, chúc bạn có một trải nghiệp tuyệt vời với fasion.",
    date: "20-10-2020",
  },
  {
    id: "34523452345",
    type: "purchase_status",
    title: "Mua hàng thành công",
    content:
      "Đơn hàng Fb1811 của bạn đã được giao thành công, chúc bạn có một trải nghiệp tuyệt vời với fasion.",
    date: "26-11-2020",
  },
  {
    id: "34527854332",
    type: "purchase_status",
    title: "Mua hàng thành công",
    content:
      "Đơn hàng Fb1812 của bạn đã được giao thành công, chúc bạn có một trải nghiệp tuyệt vời với fasion.",
    date: "10-01-2021",
  },
  {
    id: "686866666247",
    type: "purchase_status",
    title: "Đơn hàng đã hủy",
    content:
      "Đơn hàng Fb1967 của bạn đã được hủy. Nhấn vào đây để biết thêm thông tin",
    date: "11-4-2021",
  },
  {
    id: "965444433247",
    type: "purchase_status",
    title: "Đơn hàng đang được vận chuyển",
    content:
      "Đơn hàng Fb1988 đang được vận chuyển. Nhân viên giao hàng sẽ sớm liên hệ với bạn",
    date: "30-5-2021",
  },
];

const Notification = ({ navigation }) => {
  const token = useSelector((state) => state.userReducer.token);
  const instance = axios.create({
    baseURL: "https://hieuhmph12287-lab5.herokuapp.com/",
    headers: { "x-access-token": token },
  });
  const isFocused = useIsFocused();
  const [notiData, setNotiData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Call api lấy ds hóa đơn
  useEffect(() => {
    setLoading(true);
    instance
      .get("/notify/getNotifyByUser")
      .then(function (response) {
        setNotiData(response.data);
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert("Thông báo", "Có lỗi xảy ra: " + error.message);
      })
      .then(function () {
        setLoading(false);
      });
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={"#000000"} />
      ) : (
        <FlatList
          style={{ flex: 1, width: "100%" }}
          data={notiData}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                borderBottomWidth: 0.5,
                borderColor: "#DADADA",
                marginTop: 8,
                // paddingVertical: 20,
                paddingHorizontal: 15,
              }}
            >
              <View style={styles.item}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 5,
                  }}
                >
                  {/* {item.type === "promotion" && (
                    <AntDesign
                      name="gift"
                      size={24}
                      color="black"
                      style={{ marginRight: 8 }}
                    />
                  )} */}
                  <Text style={styles.text_title}>{item.title}</Text>
                </View>
                <Text style={[styles.text_content, { marginBottom: 5 }]}>
                  {item.content}
                </Text>
                <Text style={[styles.text_date, { marginBottom: 10 }]}>
                  {moment.utc(item.date_created).format("HH:mm DD-MM-YYYY")}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.notify_id}
          showsVerticalScrollIndicator={false}
        />
      )}
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

export default Notification;
