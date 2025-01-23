import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert } from 'react-native';

const Add = ({navigation, route}) => {
  const[name,setName] = useState("");

  return (
    <View>
      <StatusBar/>
      <Text>Name:</Text>
      <TextInput style={{borderWidth:1}} onChangeText={(text)=>setName(text)}/>
      <Button title='Submit'
      onPress={()=>{
          let mydata = JSON.parse(route.params.datastr);
          let item = {name:name};
          mydata.push(item);
          fetch("https://jsonhost.com/json/aab7d277aa881da67874060a04ca2a9e",
              {method:"POST",
                  headers:{
                    "content-type": "application/json",
                    "authorization": "7qhn1tqo1nhiollo7ztqabn6udnmjjvz",
                },
                  body:JSON.stringify(mydata)
              })
              .then((response) => {
                  navigation.navigate('Home');
              })

        }
      }
      />
    </View>
  );
};

export default Add;
