import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "@/constants";
import Button from "@/components/button";
import { router } from "expo-router";

const Index = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[85%] p-4 items-center justify-center">
          <Image
            source={images.logo}
            className="w-[110px] h-[60px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="w-[400px] h-[300px]"
            resizeMode="contain"
          />

          <Text className="text-white font-black text-3xl text-center mt-4 relative">
            Discover Endless Possibilities with{" "}
            <Text className="text-secondary-100">Aora</Text>
            <Image
              source={images.path}
              className="absolute -bottom-2 -right-2 w-[40px] h-[20px]"
              resizeMode="contain"
            />
          </Text>
          <Text className="text-gray-100 text-center text-sm">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <Button
            title="Continue with Email"
            onPress={() => {
              router.push("/(auth)/sign-in");
            }}
            classNames={{
              container: "mt-8",
            }}
          />
        </View>
        <StatusBar backgroundColor="#161622" style="light" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
