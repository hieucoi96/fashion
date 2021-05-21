import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, ImageBackground, Image, TouchableOpacity, SafeAreaView,} from 'react-native';
import NumberFormat from 'react-number-format';

const data = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        name: "Áo khoác A",
        src:require('../assets/img_fav_1.png'),
        status: "New Arrival",
        old_price: 1200000,
        price: 990000,
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        name: "Áo sơ mi B",
        src:require('../assets/img_fav_2.png'),
        status: "Super Sale",
        old_price: 2400000,
        price: 1499000,
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        name: "Áo phông C",
        src:require('../assets/img3.jpg'),
        status: "Hot",
        old_price: 1690000,
        price: 1190000,
    },
    {
        id: "45345a0f-3da1-471f-bd96-145571e29d72",
        name: "Quần bò D",
        src:require('../assets/img_fav_1.png'),
        status: "New Arrival",
        old_price: 3400000,
        price: 2990000,
    },
    {
        id: "55646344a0f-3da1-471f-bd96-145571e29d72",
        name: "Áo polo E",
        src:require('../assets/img_fav_2.png'),
        status: "New Arrival",
        old_price: 650000,
        price: 499000,
    },
    {
        id: "5869453-3da1-471f-bd96-145571e29d72",
        name: "Áo vest F",
        src:require('../assets/img3.jpg'),
        status: "Super Sale",
        old_price: 5000000,
        price: 3199000,
    },
    {
        id: "58694a0f-3da1-471f-bd96-145346451e29d72",
        name: "Giày G",
        src:require('../assets/img_fav_1.png'),
        status: "New Arrival",
        old_price: 2000000,
        price: 1890000,
    },
    {
        id: "58694a0f-3da1-471f-bd96-14555675675d72",
        name: "Túi xách H",
        src:require('../assets/img_fav_2.png'),
        status: "Hot",
        old_price: 1900000,
        price: 1790000,
    },
];

const heartOutline = require('../assets/heartOutline.png');
const heartFull = require('../assets/heartFull.png');

const Item = ({ item, addOrRemoveFav, favorite, textColor }) => (
    <TouchableOpacity style={{margin: 2.5, marginBottom: 15}}>
        <View style={styles.item}>

            <ImageBackground
                style={styles.image_fav}
                source={item.src}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={addOrRemoveFav} >
                    <Image
                        source={favorite.indexOf(item.id) > -1 ? heartFull : heartOutline}
                        style={styles.iconFav}
                    />
                </TouchableOpacity>
            </ImageBackground>

            <Text style={styles.text_status}>{item.status}</Text>
            <Text style={styles.text_name}>{item.name}</Text>

            <NumberFormat  value={item.old_price}
                           className="foo"
                           displayType={'text'}
                           thousandSeparator={true}
                           suffix={' đ'}
                           renderText={(value, props) =>
                               <Text style={styles.text_old_price}{...props}>{value}</Text>
                           }/>

            <NumberFormat  value={item.price}
                           className="foo"
                           displayType={'text'}
                           thousandSeparator={true}
                           suffix={' đ'}
                           renderText={(value, props) =>
                               <Text style={styles.text_price}{...props}>{value}</Text>
                           }/>
        </View>
    </TouchableOpacity>
);

const Favorite = ({navigation}) => {

    const [favorite, setFavorite] = useState([]);

    function addOrRemoveFav(id) {
        if(favorite.indexOf(id) > -1){
            var tempFavorite = [...favorite]
            var index = favorite.indexOf(id)
            tempFavorite.splice(index, 1)
            setFavorite(tempFavorite)
            return
        }
        setFavorite([...favorite, id])
    }

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                addOrRemoveFav={() => addOrRemoveFav(item.id)}
                favorite={favorite}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList style={{flex: 1, marginTop: 12}}
                      data={data}
                      renderItem ={renderItem}
                      keyExtractor={item => item.id}
                      numColumns={2}
                      showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {

    },
    image_fav: {
        width: 170,
        height: 273,
    },
    text_status: {
        marginTop: 7,
        fontFamily: 'Open_Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 10,
        lineHeight: 15,
    },
    text_name: {
        fontFamily: 'Open_Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
    },
    text_old_price: {
        marginTop: 1,
        fontFamily: 'Open_Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 15,
        textDecorationLine: 'line-through',
    },
    text_price: {
        fontFamily: 'Open_Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
    },
    btn: {

    },
    iconFav: {
        width: 20,
        height: 20,
        alignSelf: 'flex-end',
        marginTop: 10,
        marginRight: 10,
    },
});

export default Favorite;


