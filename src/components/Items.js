import { View, Text, SafeAreaView, Image, } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";


const Items = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);

  return (
    <SafeAreaView className="flex-1 relative bg-gray-200">
        <View className="flex-row items-center bg-white pt-12">
        <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2022/07/12/21/05/delivery-man-7318169_1280.png",
            }}
            className="w-16 h-16 mx-4"
          />
          <View>
            <Text className="text-gray-400">Deilver Now</Text>
            <Text className="font-bold text-2xl">Current Location</Text>
          </View>
        </View>
        {/* <Categories /> */}
    </SafeAreaView>
  )
}

export default Items