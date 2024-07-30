import { Text, View } from "react-native";

import { Link } from "expo-router";
import React from "react";

export default function index() {
  return (
    <View>
      <Text>result</Text>
      <Link href="/month-report">한달 리포트로 이동</Link>
    </View>
  );
}
