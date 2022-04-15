import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  // Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from "react-native";
import NumberFormat from "react-number-format";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { Image } from "react-native-expo-image-cache";

//Giao diện item danh sách New Arrival
const ItemHorizontal = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.itemHorizontal, backgroundColor]}
    activeOpacity={1}
  >
    <Image
      style={styles.imgHorizontal}
      // source={{ uri: item.src }}
      defaultSource={require("../assets/product_01_1.jpg")}
      uri={item.src}
    />
    <Text style={[styles.nameHorizontal, textColor]} numberOfLines={1}>
      {item.name}
    </Text>
    <NumberFormat
      value={item.price}
      displayType={"text"}
      thousandSeparator={true}
      suffix={" đ"}
      renderText={(value, props) => (
        <Text style={styles.text_price} {...props}>
          {value}
        </Text>
      )}
    />
  </TouchableOpacity>
);

//Giao diện item danh sách collection
const ItemVertical = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.itemVertical, backgroundColor]}
    activeOpacity={1}
  >
    <Image
      style={styles.imgVertical}
      defaultSource={require("../assets/product_01_1.jpg")}
      // source={{ uri: item.src }}
      uri={item.src}
    />
    <Text style={[styles.nameVertical, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

const Home = ({ navigation, route }) => {
  const [horizontalList, setHorizontalList] = useState(null);
  const [verticalList, setVerticalList] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.userReducer.token);
  const isFocused = useIsFocused();

  const instance = axios.create({
    baseURL: "https://hieuhmph12287-lab5.herokuapp.com/",
    headers: { "x-access-token": token },
  });

  //Call Api lấy ds sản phầm và collection
  useEffect(() => {
    setLoading(true);
    const prod = () => {
      return instance.get("/products/getProducts/newArrival");
    };
    const collection = () => {
      return instance.get("/collections/getCollections");
    };
    Promise.all([prod(), collection()])
      .then(function (results) {
        setHorizontalList(results[0].data);
        setVerticalList(results[1].data);
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert("Thông báo", "Có lỗi xảy ra: " + error.message);
      })
      .then(function () {
        setLoading(false);
      });
  }, [isFocused]);

  //Xử lý khi ấn vào item new arrival
  function openProductDetails(item) {
    navigation.navigate("ProductDetails", { item, token });
  }

  //Xử lý khi ấn vào item ds collection
  const openCollectionDetails = (c) => {
    navigation.navigate("Search", {
      params: {
        collection_id: c.collection_id,
        name: c.name,
        token,
        prevScreen: "Home",
        gender: null,
        type: null,
        low: null,
        high: null,
        size: null,
      },
      screen: "ListProduct",
    });
  };

  // 2 thg này viết tiếp phần giao diện item (viết dài)
  const renderItemHorizontal = ({ item }) => {
    const backgroundColor = "#ffffff";
    const color = "black";

    return (
      <ItemHorizontal
        item={item}
        onPress={() => openProductDetails(item)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  const renderItemVertical = ({ item }) => {
    const backgroundColor = "#ffffff";
    const color = "black";

    return (
      <ItemVertical
        item={item}
        onPress={() => {
          openCollectionDetails(item);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        {loading ? (
          <ActivityIndicator size="large" color="#000000" />
        ) : (
          <FlatList
            data={verticalList}
            renderItem={renderItemVertical}
            keyExtractor={(item) => item.collection_id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={{ marginLeft: "4%", marginBottom: 25 }}>
                <Text style={styles.title}>New Arrival</Text>
                <FlatList
                  horizontal
                  data={horizontalList}
                  renderItem={renderItemHorizontal}
                  keyExtractor={(item) => item.product_id}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title: {
    marginTop: 30,
    fontFamily: "Open_Sans_Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
  },
  itemHorizontal: {
    marginTop: 15,
    marginRight: 15,
    height: 341,
    width: 235,
  },
  nameHorizontal: {
    marginTop: 10,
    fontFamily: "Open_Sans_Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
  },
  price: {
    fontFamily: "Open_Sans_Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
  },
  imgHorizontal: {
    width: 235,
    height: 290,
  },
  itemVertical: {
    width: "92%",
    height: 215,
    marginBottom: 20,
    alignItems: "center",
    alignSelf: "center",
  },
  nameVertical: {
    marginTop: 10,
    fontFamily: "Open_Sans_Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
  },
  imgVertical: {
    width: "100%",
    height: 186,
  },
  text_price: {
    fontFamily: "Open_Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 21,
  },
});

export default Home;
