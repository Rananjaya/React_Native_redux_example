import React,{useEffect} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import { setName,setAge,getCities } from './redux/actions';



const FIrstScreen = () => {

     const {name, age, Data} = useSelector(state => state.userReducer);
     const dispatch = useDispatch();

     console.log("redux data", Data);
     useEffect(() => {
        dispatch(getCities());
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Text>Name : </Text>
              <TextInput 
              placeholder={"Please type name"}
              onChangeText={(name)=>dispatch(setName(name))}
              />
            </View>

            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Text>Age : </Text>
              <TextInput 
              placeholder={"Please type age"}
              onChangeText={(age)=>dispatch(setAge(age))}
              />
            </View>
        </View>
    )
}

export default FIrstScreen

const styles = StyleSheet.create({})
