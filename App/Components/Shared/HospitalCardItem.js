import { View, Text, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import Colors from "../../../assets/Shared/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function HospitalCardItem({ hospital }) {
  return (
    <View
      style={{
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        marginTop: 10
      }}
    >
      <Image
        source={{ uri: hospital.attributes.image.data[0].attributes.url }}
        style={{
          width: "100%",
          height: 140,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View
        style={{
          padding: 10,
          backgroundColor: Colors.white,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontFamily: "Outfit-SemiBold" }}>
          {hospital.attributes.Name}
        </Text>
        <FlatList
          data={hospital.attributes.categories.data}
          horizontal={true}
          renderItem={({ item }) => (
            <Text style={{ marginRight: 10, color: Colors.GRAY }}>
              {item.attributes.Name}
            </Text>
          )}
        />
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: Colors.LIGHT_GRAY,
            margin: 5,
            marginBottom: 10,
          }}
        ></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Ionicons name="location" size={20} color={Colors.PRIMARY} />
          <Text>{hospital.attributes.Address}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <Ionicons name="eye-sharp" size={20} color={Colors.PRIMARY} />
          <Text>658 Views</Text>
        </View>
      </View>
    </View>
  );
}
