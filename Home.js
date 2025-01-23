import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    listStyle: {
        borderWidth: 1,
    },
});

const Home = ({navigation}) => {
    const [myData, setMyData] = useState([]);

    // Exercise 1A
    useEffect(() => {
        fetch("https://jsonhost.com/json/aab7d277aa881da67874060a04ca2a9e")
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setMyData(myJson);

                //     let myFilteredData = myJson.filter((item) =>
                //         item.name.includes("test"));
                //     setMyData(myFilteredData);
                // }
            })}
        , []);

    const renderItem = ({item, index, section}) => {
        return (
        <View style={styles.listStyle}>
        <Text>{item.name}</Text>
        </View>
        );
    };

    return (
        <View>
        <StatusBar/>
	    <Button title='Add Item' onPress={
        ()=>{navigation.navigate("Add",{datastr:JSON.stringify(myData)})}}/>
        <FlatList data={myData} renderItem={renderItem}/>
        </View>
    );
    };


export default Home;
