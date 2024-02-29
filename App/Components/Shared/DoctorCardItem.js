import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../assets/Shared/Colors";
export default function DoctorCardItem({ doctor }) {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <Image
          source={{ uri: doctor.attributes.image.data[0].attributes.url }}
          style={{ width: 110, height: 120, borderRadius: 10 }}
        />
        <View style={{ marginTop: 10 }}>
          {doctor.attributes.Premium == true ? (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: Colors.SECONDARY,
                padding: 5,
                borderRadius: 99,
                paddingHorizontal: 10,
                gap: 4,
                alignItems: "center",
              }}
            >
              <Ionicons
                name="shield-checkmark-sharp"
                size={18}
                color={Colors.PRIMARY}
              />
              <Text
                style={{ fontFamily: "Outfit-Regular", color: Colors.PRIMARY }}
              >
                Professional Doctor
              </Text>
            </View>
          ) : null}
          <Text
            style={{
              fontSize: 17,
              fontFamily: "Outfit-SemiBold",
              marginTop: 5,
            }}
          >
            {doctor.attributes.Name}
          </Text>

          <Text
            style={{
              color: Colors.GRAY,
              fontFamily: "Outfit-Regular",
              marginTop: 1,
            }}
          >
            {doctor.attributes.categories.data[0].attributes.Name}
          </Text>

          <Text
            style={{
              fontFamily: "Outfit-Regular",
              color: Colors.PRIMARY,
              marginTop: 3,
            }}
          >
            {doctor.attributes.Years_of_Experience}
          </Text>
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
      <TouchableOpacity
        style={{
          marginTop: 10,
          padding: 10,
          backgroundColor: Colors.SECONDARY,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            textAlign: "center",
            fontFamily: "Outfit-SemiBold",
          }}
        >
          Make an Appointment
        </Text>
      </TouchableOpacity>
    </View>
  );
}
