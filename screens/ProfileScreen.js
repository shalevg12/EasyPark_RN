import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../assets";

const ProfileScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}

      <View className="flex-1 px-20 mt-20 items-center space-x-2">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View className="w-20 h-20 bg-gray-400 rounded-md items-center justify-center shadow-lg">
            <Image
              source={Avatar}
              className="w-full h-full rounded-md object-cover"
            />
          </View>
        </TouchableOpacity>
        <Text>I Am The Profile Page</Text>
      </View>
      {/* Image container */}
    </SafeAreaView>
  );
};

export default ProfileScreen;
