import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { cn } from "@/libs/cn";
import { icons } from "@/constants";

type InputProps = {
  placeholder?: string;
  onChangeText: (content: string) => void;
  value: string;
  label?: string;
  secureTextEntry?: boolean;
  keyboardType?: string;
  maxLength?: number;
  classNames?: {
    container?: string;
    input?: string;
    label?: string;
  };
};

const Input = ({
  value,
  onChangeText,
  label,
  placeholder,
  secureTextEntry = false,
  keyboardType,
  maxLength,
  classNames,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={cn("space-y-2", classNames?.container)}>
      {label && (
        <Text
          className={cn(
            "text-gray-100 text-base font-pregular",
            classNames?.label
          )}
        >
          {label}
        </Text>
      )}
      <View
        className={cn(
          "bg-black-100 rounded-lg py-3 px-4 border-2 border-white/10 focus:border-secondary-200 flex-row",
          classNames?.input
        )}
      >
        <TextInput
          maxLength={maxLength}
          className="flex-1 w-full h-full text-center font-pmedium text-white"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={!!secureTextEntry}
          // keyboardType={keyboardType}
        />

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword((prev) => !prev);
            }}
          >
            {showPassword ? (
              <Image
                resizeMode="contain"
                className="w-6 h-6"
                source={icons.eye}
              />
            ) : (
              <Image
                resizeMode="contain"
                className="w-6 h-6"
                source={icons.eyeHide}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
