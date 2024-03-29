import { View, Text, Button, ScrollView } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import Header from "../Components/Home/Header";
import SearchBar from "../Components/Home/SearchBar";
import Slider from "../Components/Home/Slider";
import Categories from "../Components/Home/Categories";
import PremiumHospitals from "../Components/Home/PremiumHospitals";

export default function Home() {
  const { isLoaded, signOut } = useAuth();

  return (
    <ScrollView style={{padding:20,marginTop:20}}>
      <Header></Header>
      <SearchBar setSearchText={(value)=>console.log(value)} />
      <Slider></Slider>
      <Categories></Categories>
      <PremiumHospitals></PremiumHospitals>
      {/* <Button 
        title='Sign Out'
        onPress={() => {
            signOut();
          }}
      /> */}
    </ScrollView>
  );
}
