import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Áo khoác",
    src: require("../assets/img_cata_1.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Áo sơ mi",
    src: require("../assets/img_cata_2.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Áo phông",
    src: require("../assets/img_cata_3.png"),
  },
  {
    id: "45345a0f-3da1-471f-bd96-145571e29d72",
    name: "Quần bò",
    src: require("../assets/img_cata_4.png"),
  },
  {
    id: "55646344a0f-3da1-471f-bd96-145571e29d72",
    name: "Áo polo",
    src: require("../assets/img_cata_5.png"),
  },
  {
    id: "5869453-3da1-471f-bd96-145571e29d72",
    name: "Áo vest",
    src: require("../assets/img_cata_6.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145346451e29d72",
    name: "Giày",
    src: require("../assets/img_cata_7.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-14555675675d72",
    name: "Túi xách",
    src: require("../assets/img_cata_8.png"),
  },
];

//Giao diện item
const Item = ({ item, onPress, navigation, textColor }) => (
  <TouchableOpacity
    style={{ margin: 2.5 }}
    onPress={() =>
      navigation.navigate("ListProduct", {
        name: item.name + " nữ",
        prevScreen: "Gender",
        type: item.name,
        gender: "Female",
        collection_id: null,
        low: null,
        high: null,
        size: null,
      })
    }
    activeOpacity={1}
  >
    <View style={styles.item}>
      <ImageBackground style={styles.image_catalog} source={item.src}>
        <Text style={styles.text_catalog}>{item.name}</Text>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

const Female = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return <Item item={item} navigation={navigation} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ flex: 1, marginTop: 12 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {},
  image_catalog: {
    width: 170,
    height: 110,
    justifyContent: "center",
  },
  text_catalog: {
    textAlign: "center",
    fontFamily: "Open_Sans_Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 21,
    color: "#ffffff",
  },
});

export default Female;
