import Parabolic from 'react-native-parabolic'
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class MaParabol extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        setTimeout(()=>{
            this.refs["parabolic"].run([150,700,170,600]) // startX startY endX endY
        }, 1000)
    }
    animateEnd(){
        // AlertIOS.alert("title", "animate end")
    }
    render() {
        return (
            <View style={styles.container}>
                <Parabolic
                    ref={"parabolic"}
                    style={{position: "absolute", left: 150, top: 700}}
                    renderChildren={() => {
                        return (
                            <View style={{backgroundColor:"#303030", width: 16, height: 16, borderRadius: 8}}/>
                        )
                    }}
                    animateEnd={this.animateEnd.bind(this)}
                    curvature={.008}
                    duration={1000}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03b4fd',
    }
});
