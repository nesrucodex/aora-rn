import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { cn } from "@/libs/cn";
type ButtonProps = {
  title: string;
  onPress: () => void;
  classNames?: {
    container?: string;
    text?: string;
  };
};
const Button = ({ title, onPress, classNames }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={cn(
        "bg-secondary h-14 items-center justify-center rounded-lg w-full",
        classNames?.container
      )}
    >
      <Text className={cn("font-psemibold text-base", classNames?.text)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
