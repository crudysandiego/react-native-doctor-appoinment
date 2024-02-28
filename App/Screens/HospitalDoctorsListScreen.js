import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import GlobalApi from '../Services/GlobalApi';
import PageHeader from '../Components/Shared/PageHeader';

export default function HospitalDoctorsListScreen() {
const param=useRoute().params;

const getHospitalsByCategory=()=>{
  GlobalApi.getHospitalsByCategory(param?.categoryName).then(resp=>{
    setHospitalList(resp.data.data);
  })
}

  return (
    <View style={{padding:20}}>
      <PageHeader title={param?.categoryName} />
    </View>
  )
}