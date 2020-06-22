import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform, StyleSheet,
    Text,
    View,
    Header,
} from 'react-native';

export default function NewScreen(){
    return (
        <View style={styles.container}>
            {/*<Header title={'Dave\'s page has a header!'}/>*/}

            <Text style={styles.newTextStyle}>
                
            </Text>
        </View>
    )
}
NewScreen.navigationOptions = {
    title: 'Group Chat',
};


const styles = StyleSheet.create({
    newTextStyle: {
        paddingVertical: 40,
        paddingHorizontal: 40,
        },
    container:{
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    title:{
        textAlign: 'center',
        marginVertical: 4,
    },
});
