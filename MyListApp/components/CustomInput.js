import React, { useState } from "react";
import { TextInput, View } from "react-native";
import CustomInputStyles from "../styles/CustomInputStyles";
import { Ionicons } from "@expo/vector-icons";

export default function CustomInput({ value, onChangeText, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        CustomInputStyles.inputContainer,
        isFocused && CustomInputStyles.inputFocused,
      ]}
    >
      <Ionicons
        name="pencil"
        size={20}
        color={isFocused ? "#007bff" : "#aaa"}
        style={CustomInputStyles.icon}
      />
      <TextInput
        style={CustomInputStyles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}
