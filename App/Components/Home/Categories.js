import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import Colors from '../../../assets/Shared/Colors';
import SubHeading from './SubHeading';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
  const navigation=useNavigation();
  const [categoryList,setCategoryList]=useState([]);

  useEffect(()=>{
    getCategories();
  },[])

  const getCategories=()=>{
    GlobalApi.getCategories().then(resp=>{
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    })
  }

  if(!categoryList){
    return null;
  }

  return (
    <View style={{marginTop:10}}>
      <SubHeading subHeadingTitle={'Doctor Specialty'}></SubHeading>
      <FlatList
        data={categoryList}
        numColumns={5}
        columnWrapperStyle={{
          flex:1,
          justifyContent:'space-between'
        }}
        renderItem={({item,index})=>index<4&&(
          <TouchableOpacity 
            onPress={()=>navigation.navigate('hospital-doctor-list-screen',
            {
                categoryName:item.attributes.Name
            })}
            style={{alignItems:'center'}}
          >
            <View style={{
              backgroundColor:Colors.SECONDARY,
              padding:15,borderRadius:99
            }}>
              <Image 
                source={{uri:item.attributes.Icon.data[0].attributes.url}} 
                style={{width:30,height:30}} 
              />
            </View>
            <Text>{item.attributes.Name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}