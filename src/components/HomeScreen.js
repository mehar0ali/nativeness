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

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 relative bg-white pt-16">


      {/* Section one */}
      <View className="flex-row items-center h-12">
        <View className="">
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2022/07/12/21/05/delivery-man-7318169_1280.png",
            }}
            className="w-16 h-16 mx-4"
          />
        </View>
        <Text className="font-semibold text-sky-700 text-[35px] -mx-2">
          Nativeness
        </Text>
      </View>

      {/* Section Two */}

      <View
        className="my-5 mx-3 py-4 px-4 rounded-xl space-y-3 border-2 border-sky-300"
        style={{
          backgroundColor: "000",
          shadowColor: "#000",
          shadowOpacity: 0.2,
          elevation: 10,
        }}
      >
        <Text className="text-sky-600 font-semibold text-[28px]">
          We Serve You Because
        </Text>
        <Text className="text-gray-500 text-[20px]">
          We Love You, We Care You.
        </Text>
        <Text className="pt-3 text-[15px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae.
        </Text>
      </View>

      {/* Section Three */}

      <View className="flex-1 items-center justify-center mt-8 relative">
        <Animatable.Image
          animation={"pulse"}
          easing={"ease-in-out"}
          source={{
            uri: "https://cdn.pixabay.com/photo/2016/05/26/14/50/delivery-1417310_1280.png",
          }}
          className=" absolute w-[330px] h-[550px]"
        />
      </View>

      {/* Section Four */}
      <TouchableOpacity className="flex-1 w-20 h-20 items-center justify-center absolute bottom-10 left-36 border-orange-400 border-l-2 border-r-2 border-t-4  rounded-full" onPress={() =>navigation.navigate("Items")}>
        <Animatable.View
        animation={"pulse"}
        easing={"ease-in-out"}
        iterationCount={"infinite"}
         className="w-full h-full bg-orange-400 border-2 border-gray-600 rounded-full m-5 justify-center items-center">
          <Text className="text-[30px] font-semibold text-white">Go</Text>
        </Animatable.View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
