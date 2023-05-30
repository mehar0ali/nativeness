import { View, Text, SafeAreaView } from 'react-native'
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
    <SafeAreaView className="flex-1 relative bg-white pt-16">
        <View>
            <Text>How are you</Text>
        </View>
    </SafeAreaView>
  )
}

export default Items