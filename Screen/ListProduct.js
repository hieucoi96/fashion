import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, ImageBackground, Image, TouchableOpacity, SafeAreaView,} from 'react-native';
import NumberFormat from 'react-number-format';

const heartOutline = require('../assets/heartOutline.png');
const heartFull = require('../assets/heartFull.png');

const ListProduct = ({route, navigation}) => {

    const {name} = route.params;
    let data = []

    if(name === "Áo khoác nam"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Áo khoác A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Áo khoác B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo khoác C",
                src:require('../assets/img_coat_1.jpg'),
                status: "Hot",
                old_price: 1690000,
                price: 1190000,
            },
            {
                id: "45345a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo khoác D",
                src:require('../assets/img_fav_1.png'),
                status: "New Arrival",
                old_price: 3400000,
                price: 2990000,
            },
            {
                id: "55646344a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo khoác E",
                src:require('../assets/img_fav_2.png'),
                status: "New Arrival",
                old_price: 650000,
                price: 499000,
            },
            {
                id: "5869453-3da1-471f-bd96-145571e29d72",
                name: "Áo khoác F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Áo khoác G",
                src:require('../assets/img_coat_5.jpg'),
                status: "New Arrival",
                old_price: 2000000,
                price: 1890000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-14555675675d72",
                name: "Áo khoác H",
                src:require('../assets/img_fav_2.png'),
                status: "Hot",
                old_price: 1900000,
                price: 1790000,
            },
        ];
    }
    if(name === "Áo sơ mi nam"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Áo sơ mi A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Áo sơ mi B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo sơ mi C",
                src:require('../assets/img_coat_1.jpg'),
                status: "Hot",
                old_price: 1690000,
                price: 1190000,
            },
            {
                id: "45345a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo sơ mi D",
                src:require('../assets/img_fav_1.png'),
                status: "New Arrival",
                old_price: 3400000,
                price: 2990000,
            },
            {
                id: "55646344a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo sơ mi E",
                src:require('../assets/img_fav_2.png'),
                status: "New Arrival",
                old_price: 650000,
                price: 499000,
            },
            {
                id: "5869453-3da1-471f-bd96-145571e29d72",
                name: "Áo sơ mi F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Áo sơ mi G",
                src:require('../assets/img_coat_5.jpg'),
                status: "New Arrival",
                old_price: 2000000,
                price: 1890000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-14555675675d72",
                name: "Áo sơ mi H",
                src:require('../assets/img_fav_2.png'),
                status: "Hot",
                old_price: 1900000,
                price: 1790000,
            },
        ];
    }
    if(name === "Áo phông nam"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Áo phông A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Áo phông B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo phông C",
                src:require('../assets/img_coat_1.jpg'),
                status: "Hot",
                old_price: 1690000,
                price: 1190000,
            },
            {
                id: "45345a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo phông D",
                src:require('../assets/img_fav_1.png'),
                status: "New Arrival",
                old_price: 3400000,
                price: 2990000,
            },
            {
                id: "55646344a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo phông E",
                src:require('../assets/img_fav_2.png'),
                status: "New Arrival",
                old_price: 650000,
                price: 499000,
            },
            {
                id: "5869453-3da1-471f-bd96-145571e29d72",
                name: "Áo phông F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Áo phông G",
                src:require('../assets/img_coat_5.jpg'),
                status: "New Arrival",
                old_price: 2000000,
                price: 1890000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-14555675675d72",
                name: "Áo phông H",
                src:require('../assets/img_fav_2.png'),
                status: "Hot",
                old_price: 1900000,
                price: 1790000,
            },
        ];
    }
    if(name === "Quần bò nam"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Quần bò A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Quần bò B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Quần bò C",
                src:require('../assets/img_coat_1.jpg'),
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
                name: "Quần bò E",
                src:require('../assets/img_fav_2.png'),
                status: "New Arrival",
                old_price: 650000,
                price: 499000,
            },
            {
                id: "5869453-3da1-471f-bd96-145571e29d72",
                name: "Quần bò F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Quần bò G",
                src:require('../assets/img_coat_5.jpg'),
                status: "New Arrival",
                old_price: 2000000,
                price: 1890000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-14555675675d72",
                name: "Quần bò H",
                src:require('../assets/img_fav_2.png'),
                status: "Hot",
                old_price: 1900000,
                price: 1790000,
            },
        ];
    }
    if(name === "Áo polo nam"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Áo polo A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Áo polo B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo polo C",
                src:require('../assets/img_coat_1.jpg'),
                status: "Hot",
                old_price: 1690000,
                price: 1190000,
            },
            {
                id: "45345a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo polo D",
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
                name: "Áo polo F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Áo polo G",
                src:require('../assets/img_coat_5.jpg'),
                status: "New Arrival",
                old_price: 2000000,
                price: 1890000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-14555675675d72",
                name: "Áo polo H",
                src:require('../assets/img_fav_2.png'),
                status: "Hot",
                old_price: 1900000,
                price: 1790000,
            },
        ];
    }
    if(name === "Áo vest nam"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Áo vest A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Áo vest B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo vest C",
                src:require('../assets/img_coat_1.jpg'),
                status: "Hot",
                old_price: 1690000,
                price: 1190000,
            },
            {
                id: "45345a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo vest D",
                src:require('../assets/img_fav_1.png'),
                status: "New Arrival",
                old_price: 3400000,
                price: 2990000,
            },
            {
                id: "55646344a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo vest E",
                src:require('../assets/img_fav_2.png'),
                status: "New Arrival",
                old_price: 650000,
                price: 499000,
            },
            {
                id: "5869453-3da1-471f-bd96-145571e29d72",
                name: "Áo vest F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Áo vest G",
                src:require('../assets/img_coat_5.jpg'),
                status: "New Arrival",
                old_price: 2000000,
                price: 1890000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-14555675675d72",
                name: "Áo vest H",
                src:require('../assets/img_fav_2.png'),
                status: "Hot",
                old_price: 1900000,
                price: 1790000,
            },
        ];
    }
    if(name === "Giày nam"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Giày A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Giày B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Giày C",
                src:require('../assets/img_coat_1.jpg'),
                status: "Hot",
                old_price: 1690000,
                price: 1190000,
            },
            {
                id: "45345a0f-3da1-471f-bd96-145571e29d72",
                name: "Giày D",
                src:require('../assets/img_fav_1.png'),
                status: "New Arrival",
                old_price: 3400000,
                price: 2990000,
            },
            {
                id: "55646344a0f-3da1-471f-bd96-145571e29d72",
                name: "Giày E",
                src:require('../assets/img_fav_2.png'),
                status: "New Arrival",
                old_price: 650000,
                price: 499000,
            },
            {
                id: "5869453-3da1-471f-bd96-145571e29d72",
                name: "Giày F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Giày G",
                src:require('../assets/img_coat_5.jpg'),
                status: "New Arrival",
                old_price: 2000000,
                price: 1890000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-14555675675d72",
                name: "Giày H",
                src:require('../assets/img_fav_2.png'),
                status: "Hot",
                old_price: 1900000,
                price: 1790000,
            },
        ];
    }
    if(name === "Túi xách nam"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Túi xách A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Túi xách B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Túi xách C",
                src:require('../assets/img_coat_1.jpg'),
                status: "Hot",
                old_price: 1690000,
                price: 1190000,
            },
            {
                id: "45345a0f-3da1-471f-bd96-145571e29d72",
                name: "Túi xách D",
                src:require('../assets/img_fav_1.png'),
                status: "New Arrival",
                old_price: 3400000,
                price: 2990000,
            },
            {
                id: "55646344a0f-3da1-471f-bd96-145571e29d72",
                name: "Túi xách E",
                src:require('../assets/img_fav_2.png'),
                status: "New Arrival",
                old_price: 650000,
                price: 499000,
            },
            {
                id: "5869453-3da1-471f-bd96-145571e29d72",
                name: "Túi xách F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Túi xách G",
                src:require('../assets/img_coat_5.jpg'),
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
    }

    if(name === "Áo khoác nữ"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Áo khoác A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Áo khoác B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo khoác C",
                src:require('../assets/img_coat_1.jpg'),
                status: "Hot",
                old_price: 1690000,
                price: 1190000,
            },
            {
                id: "45345a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo khoác D",
                src:require('../assets/img_fav_1.png'),
                status: "New Arrival",
                old_price: 3400000,
                price: 2990000,
            },
            {
                id: "55646344a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo khoác E",
                src:require('../assets/img_fav_2.png'),
                status: "New Arrival",
                old_price: 650000,
                price: 499000,
            },
            {
                id: "5869453-3da1-471f-bd96-145571e29d72",
                name: "Áo khoác F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Áo khoác G",
                src:require('../assets/img_coat_5.jpg'),
                status: "New Arrival",
                old_price: 2000000,
                price: 1890000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-14555675675d72",
                name: "Áo khoác H",
                src:require('../assets/img_fav_2.png'),
                status: "Hot",
                old_price: 1900000,
                price: 1790000,
            },
        ];
    }
    if(name === "Áo sơ mi nữ"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Áo sơ mi A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Áo sơ mi B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo sơ mi C",
                src:require('../assets/img_coat_1.jpg'),
                status: "Hot",
                old_price: 1690000,
                price: 1190000,
            },
            {
                id: "45345a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo sơ mi D",
                src:require('../assets/img_fav_1.png'),
                status: "New Arrival",
                old_price: 3400000,
                price: 2990000,
            },
            {
                id: "55646344a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo sơ mi E",
                src:require('../assets/img_fav_2.png'),
                status: "New Arrival",
                old_price: 650000,
                price: 499000,
            },
            {
                id: "5869453-3da1-471f-bd96-145571e29d72",
                name: "Áo sơ mi F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Áo sơ mi G",
                src:require('../assets/img_coat_5.jpg'),
                status: "New Arrival",
                old_price: 2000000,
                price: 1890000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-14555675675d72",
                name: "Áo sơ mi H",
                src:require('../assets/img_fav_2.png'),
                status: "Hot",
                old_price: 1900000,
                price: 1790000,
            },
        ];
    }
    if(name === "Áo phông nữ"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Áo phông A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Áo phông B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo phông C",
                src:require('../assets/img_coat_1.jpg'),
                status: "Hot",
                old_price: 1690000,
                price: 1190000,
            },
            {
                id: "45345a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo phông D",
                src:require('../assets/img_fav_1.png'),
                status: "New Arrival",
                old_price: 3400000,
                price: 2990000,
            },
            {
                id: "55646344a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo phông E",
                src:require('../assets/img_fav_2.png'),
                status: "New Arrival",
                old_price: 650000,
                price: 499000,
            },
            {
                id: "5869453-3da1-471f-bd96-145571e29d72",
                name: "Áo phông F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Áo phông G",
                src:require('../assets/img_coat_5.jpg'),
                status: "New Arrival",
                old_price: 2000000,
                price: 1890000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-14555675675d72",
                name: "Áo phông H",
                src:require('../assets/img_fav_2.png'),
                status: "Hot",
                old_price: 1900000,
                price: 1790000,
            },
        ];
    }
    if(name === "Quần bò nữ"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Quần bò A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Quần bò B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Quần bò C",
                src:require('../assets/img_coat_1.jpg'),
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
                name: "Quần bò E",
                src:require('../assets/img_fav_2.png'),
                status: "New Arrival",
                old_price: 650000,
                price: 499000,
            },
            {
                id: "5869453-3da1-471f-bd96-145571e29d72",
                name: "Quần bò F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Quần bò G",
                src:require('../assets/img_coat_5.jpg'),
                status: "New Arrival",
                old_price: 2000000,
                price: 1890000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-14555675675d72",
                name: "Quần bò H",
                src:require('../assets/img_fav_2.png'),
                status: "Hot",
                old_price: 1900000,
                price: 1790000,
            },
        ];
    }
    if(name === "Áo polo nữ"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Áo polo A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Áo polo B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo polo C",
                src:require('../assets/img_coat_1.jpg'),
                status: "Hot",
                old_price: 1690000,
                price: 1190000,
            },
            {
                id: "45345a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo polo D",
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
                name: "Áo polo F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Áo polo G",
                src:require('../assets/img_coat_5.jpg'),
                status: "New Arrival",
                old_price: 2000000,
                price: 1890000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-14555675675d72",
                name: "Áo polo H",
                src:require('../assets/img_fav_2.png'),
                status: "Hot",
                old_price: 1900000,
                price: 1790000,
            },
        ];
    }
    if(name === "Áo vest nữ"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Áo vest A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Áo vest B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo vest C",
                src:require('../assets/img_coat_1.jpg'),
                status: "Hot",
                old_price: 1690000,
                price: 1190000,
            },
            {
                id: "45345a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo vest D",
                src:require('../assets/img_fav_1.png'),
                status: "New Arrival",
                old_price: 3400000,
                price: 2990000,
            },
            {
                id: "55646344a0f-3da1-471f-bd96-145571e29d72",
                name: "Áo vest E",
                src:require('../assets/img_fav_2.png'),
                status: "New Arrival",
                old_price: 650000,
                price: 499000,
            },
            {
                id: "5869453-3da1-471f-bd96-145571e29d72",
                name: "Áo vest F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Áo vest G",
                src:require('../assets/img_coat_5.jpg'),
                status: "New Arrival",
                old_price: 2000000,
                price: 1890000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-14555675675d72",
                name: "Áo vest H",
                src:require('../assets/img_fav_2.png'),
                status: "Hot",
                old_price: 1900000,
                price: 1790000,
            },
        ];
    }
    if(name === "Giày nữ"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Giày A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Giày B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Giày C",
                src:require('../assets/img_coat_1.jpg'),
                status: "Hot",
                old_price: 1690000,
                price: 1190000,
            },
            {
                id: "45345a0f-3da1-471f-bd96-145571e29d72",
                name: "Giày D",
                src:require('../assets/img_fav_1.png'),
                status: "New Arrival",
                old_price: 3400000,
                price: 2990000,
            },
            {
                id: "55646344a0f-3da1-471f-bd96-145571e29d72",
                name: "Giày E",
                src:require('../assets/img_fav_2.png'),
                status: "New Arrival",
                old_price: 650000,
                price: 499000,
            },
            {
                id: "5869453-3da1-471f-bd96-145571e29d72",
                name: "Giày F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Giày G",
                src:require('../assets/img_coat_5.jpg'),
                status: "New Arrival",
                old_price: 2000000,
                price: 1890000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-14555675675d72",
                name: "Giày H",
                src:require('../assets/img_fav_2.png'),
                status: "Hot",
                old_price: 1900000,
                price: 1790000,
            },
        ];
    }
    if(name === "Túi xách nữ"){
        data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                name: "Túi xách A",
                src:require('../assets/img_coat_3.jpg'),
                status: "New Arrival",
                old_price: 1200000,
                price: 990000,
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                name: "Túi xách B",
                src:require('../assets/img_coat_4.jpg'),
                status: "Super Sale",
                old_price: 2400000,
                price: 1499000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                name: "Túi xách C",
                src:require('../assets/img_coat_1.jpg'),
                status: "Hot",
                old_price: 1690000,
                price: 1190000,
            },
            {
                id: "45345a0f-3da1-471f-bd96-145571e29d72",
                name: "Túi xách D",
                src:require('../assets/img_fav_1.png'),
                status: "New Arrival",
                old_price: 3400000,
                price: 2990000,
            },
            {
                id: "55646344a0f-3da1-471f-bd96-145571e29d72",
                name: "Túi xách E",
                src:require('../assets/img_fav_2.png'),
                status: "New Arrival",
                old_price: 650000,
                price: 499000,
            },
            {
                id: "5869453-3da1-471f-bd96-145571e29d72",
                name: "Túi xách F",
                src:require('../assets/img_coat_2.jpg'),
                status: "Super Sale",
                old_price: 5000000,
                price: 3199000,
            },
            {
                id: "58694a0f-3da1-471f-bd96-145346451e29d72",
                name: "Túi xách G",
                src:require('../assets/img_coat_5.jpg'),
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
    }

    const [selectedView, setSelectedView] = useState('grid');

    function selectView() {
        if(selectedView === 'grid'){
            setSelectedView('list')
        }else{
            setSelectedView('grid')
        }
    }

    const Item = ({ item, addOrRemoveFav, favorite, textColor }) => (
        <TouchableOpacity style={{margin: 2.5, marginBottom: 15}}>
            <View style={styles.item}>

                <ImageBackground
                    style={selectedView === 'grid' ? styles.image_fav : styles.image_list}
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
                {selectedView === 'grid' ?
                    <View>
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
                    :
                    <View style = {{flexDirection: 'row'}}>
                        <View>
                            <Text style={styles.text_status}>{item.status}</Text>
                            <Text style={styles.text_name}>{item.name}</Text>
                        </View>
                        <View style={{justifyContent: 'flex-end', flex: 1}}>
                            <NumberFormat  value={item.old_price}
                                           className="foo"
                                           displayType={'text'}
                                           thousandSeparator={true}
                                           suffix={' đ'}
                                           renderText={(value, props) =>
                                               <Text style={[styles.text_old_price, {alignSelf: 'flex-end',}]}{...props}>{value}</Text>
                                           }/>

                            <NumberFormat  value={item.price}
                                           className="foo"
                                           displayType={'text'}
                                           thousandSeparator={true}
                                           suffix={' đ'}
                                           renderText={(value, props) =>
                                               <Text style={[styles.text_price, {alignSelf: 'flex-end',}]}{...props}>{value}</Text>
                                           }/>
                        </View>
                    </View>
                }
            </View>
        </TouchableOpacity>
    );

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
            <View style = {styles.custom_bar}>
                <View style = {{flex: 1, justifyContent: 'flex-start', flexDirection: 'row'}}>
                    <TouchableOpacity onPress = {() => navigation.navigate("FilterMenu")}>
                        <Text style = {styles.btn_filter}>Bộ lọc</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', marginRight: 18, flex: 1, justifyContent: 'flex-end'}}>
                    <TouchableOpacity onPress = {() => selectView()}>
                        <Image style = {[styles.icon_grid, {tintColor: selectedView === 'grid' ? '#000000' : '#AEAEB2'}]} source={require('../assets/icon_grid_2.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => selectView()}>
                        <Image style = {[styles.icon_square, {tintColor: selectedView === 'list' ? '#000000' : '#AEAEB2'}]} source={require('../assets/icon_square_2.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList style={{flex: 1, marginTop: 0}}
                      data={data}
                      renderItem ={renderItem}
                      keyExtractor={item => item.id}
                      numColumns={selectedView === 'grid' ? 2 : 1}
                      key={selectedView === 'grid' ? 1 : 0}
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
    image_list: {
        width: 345,
        height: 482,
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
    custom_bar: {
        height: 30,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    btn_filter: {
        fontFamily: 'Open_Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 15,
        marginLeft: 18,
    },
    icon_grid: {
        alignSelf: 'flex-end',
        width: 17,
        height: 17,
    },
    icon_square: {
        alignSelf: 'flex-end',
        width: 17,
        height: 17,
    },
});

export default ListProduct;


