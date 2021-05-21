import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const data_horizontal_list = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        name: "First Item",
        price: "1.499.000đ",
        src:require('../assets/img1.png')
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        name: "Second Item",
        price: "2.499.000đ",
        src:require('../assets/img1.png')
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        name: "Third Item",
        price: "899.000đ",
        src:require('../assets/img3.jpg')
    },
];

const data_vertical_list = [
    {
        id: "111111",
        name: "First Item",
        src:require('../assets/img1.png')
    },
    {
        id: "342432432",
        name: "Second Item",
        src:require('../assets/img1.png')
    },
    {
        id: "8657644643",
        name: "Third Item",
        src:require('../assets/img3.jpg')
    },
];

const ItemHorizontal = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.itemHorizontal, backgroundColor]}>
        <Image style={styles.imgHorizontal} source={item.src}/>
        <Text style={[styles.nameHorizontal, textColor]}>{item.name}</Text>
        <Text style={[styles.price, textColor]}>{item.price}</Text>
    </TouchableOpacity>
);

const ItemVertical = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.itemVertical, backgroundColor]}>
        <Image style={styles.imgVertical} source={item.src}/>
        <Text style={[styles.nameVertical, textColor]}>{item.name}</Text>
    </TouchableOpacity>
);

const Home = ({navigation}) => {

    const [selectedId, setSelectedId] = useState(null);

    const renderItemHorizontal = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#ffffff" : "#ffffff";
        const color = item.id === selectedId ? 'black' : 'black';

        return (
            <ItemHorizontal
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    const renderItemVertical = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#ffffff" : "#ffffff";
        const color = item.id === selectedId ? 'black' : 'black';

        return (
            <ItemVertical
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style = {{ alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <FlatList
                    data={data_vertical_list}
                    renderItem={renderItemVertical}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View style={{marginLeft: '4%', marginBottom:25,}}>
                            <Text style = {styles.title}>New Arrival</Text>
                            <FlatList
                                horizontal
                                data={data_horizontal_list}
                                renderItem={renderItemHorizontal}
                                keyExtractor={(item) => item.id}
                                extraData={selectedId}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    }
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',

    },
    title: {
        marginTop: 30,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
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
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
    },
    price: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
    },
    imgHorizontal: {
        width:235,
        height:290,
    },
    itemVertical: {
        width: '92%',
        height: 215,
        marginBottom: 20,
        alignItems: 'center',
        alignSelf: 'center',
    },
    nameVertical: {
        marginTop: 10,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
    },
    imgVertical: {
        width: '100%',
        height: 186,
    }
});

export default Home;
