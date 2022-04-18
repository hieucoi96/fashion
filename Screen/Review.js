import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Rating } from "react-native-ratings";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Review = ({ navigation, route }) => {
  const [rating, setRating] = useState();
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const { bill_id, item } = route.params;
  const name = useSelector((state) => state.userReducer.full_name);
  const phone_number = useSelector((state) => state.userReducer.phone_number);
  const token = useSelector((state) => state.userReducer.token);

  const instance = axios.create({
    baseURL: "https://hieuhmph12287-lab5.herokuapp.com/",
    headers: { "x-access-token": token },
  });

  function ratingCompleted(rating) {
    setRating(rating);
  }

  return (
    <View style={styles.container}>
      <Rating
        style={{ marginTop: 20 }}
        imageSize={35}
        startingValue={0}
        onFinishRating={ratingCompleted}
      />

      <TextInput
        style={styles.input_review}
        placeholder={"Viết đánh giá của bạn về sản phẩm này"}
        onChangeText={(text) => setReview(text)}
        value={review}
        multiline
      />
      <TouchableOpacity
        style={styles.button_order}
        disabled={loading}
        onPress={() => {
          setLoading(true);
          instance
            .post("/products/addEvaluate", {
              bill_id,
              product_id: item.product_id,
              item_bought_id: item.item_bought_id,
              name: name ? name : phone_number,
              rate: rating,
              note: review,
            })
            .then(function (response) {
              Alert.alert("Thông báo", "Đánh giá sản phẩm thành công!", [
                { text: "OK", onPress: () => navigation.navigate("MyOrder") },
              ]);
            })
            .catch(function (error) {
              Alert.alert("Thông báo", "Đánh giá sản phẩm không thành công!");
              console.log(error);
            })
            .then(function () {
              setLoading(false);
            });
        }}
        activeOpacity={0.8}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.text_order}>Đánh giá</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: "4%",
  },
  input_review: {
    marginTop: 20,
    borderColor: "#000000",
    borderWidth: 0.5,
    padding: 10,
    height: 180,
    fontFamily: "Open_Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 21,
    textAlignVertical: "top",
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
});

export default Review;
