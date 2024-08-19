import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import Input from "@/components/input";
import Button from "@/components/button";
import { Link } from "expo-router";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handelSubmit = () => {
    console.log("handelSubmit: ", { user });
  };
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[85%] p-4  justify-center">
          <Image
            source={images.logo}
            className="w-[125px] h-[80px]"
            resizeMode="contain"
          />
          <Text className="text-2xl font-psemibold text-white my-8">
            Sign In
          </Text>

          <Input
            label="Email"
            value={user.email}
            onChangeText={(content) => {
              setUser((prev) => ({
                ...prev,
                email: content,
              }));
            }}
            classNames={{
              container: "mb-3",
            }}
          />
          <Input
            label="Password"
            value={user.password}
            secureTextEntry
            onChangeText={(content) => {
              setUser((prev) => ({
                ...prev,
                password: content,
              }));
            }}
          />
          <Button
            onPress={handelSubmit}
            classNames={{ container: "mt-8" }}
            title="Sign In"
          />

          <Text className="text-gray-100 font-pmedium mt-8 text-center  text-base">
            Don't have an account?{" "}
            <Link
              href="/(auth)/sign-up"
              className="text-secondary-100 font-pbold"
            >
              Sign Up
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
