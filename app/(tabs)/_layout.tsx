import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

import { icons } from "../../constants";

type TabIconProps = {
  focused: boolean;
  title: string;
  imageSrc: ImageSourcePropType;
  color: string;
};
const TabIcon = ({ focused, title, imageSrc, color }: TabIconProps) => {
  return (
    <View className="items-center gap-1">
      <Image
        source={imageSrc}
        tintColor={color}
        resizeMode="contain"
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-semibold" : ""} text-xs`}
        style={{ color }}
      >
        {title}
      </Text>
    </View>
  );
};

const TabsList: {
  name: string;
  title: string;
  imageSrc: ImageSourcePropType;
}[] = [
  {
    name: "home",
    title: "Home",
    imageSrc: icons.home,
  },
  {
    name: "bookmark",
    title: "Bookmark",
    imageSrc: icons.bookmark,
  },
  {
    name: "create",
    title: "Create",
    imageSrc: icons.plus,
  },
  {
    name: "profile",
    title: "Profile",
    imageSrc: icons.profile,
  },
];

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffa001",
          tabBarInactiveTintColor: "#878787",
          tabBarStyle: {
            backgroundColor: "#161622",
            height: 60,
            borderTopWidth: 1,
          },
        }}
      >
        {TabsList.map((tab, index) => (
          <Tabs.Screen
            key={index}
            name={tab.name}
            options={{
              title: tab.title,
              headerShown: false,
              tabBarIcon: ({ focused, color }) => (
                <TabIcon
                  color={color}
                  focused={focused}
                  imageSrc={tab.imageSrc}
                  title={tab.title}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabsLayout;
