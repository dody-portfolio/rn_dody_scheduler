import { Text, View } from "react-native";

import { Link } from "expo-router";
import React from "react";

export default function index() {
  return (
    <View>
      <Text>intro subject selector</Text>
      <Link href="/timer/landing">타이머로 진입</Link>
    </View>
  );
}
