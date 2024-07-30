import { Text, View } from "react-native";

import { Link } from "expo-router";
import React from "react";

export default function index() {
  return (
    <View>
      <Text>timer landing</Text>
      <Link href="/timer/result">끝난 페이지로 이동 </Link>
    </View>
  );
}
