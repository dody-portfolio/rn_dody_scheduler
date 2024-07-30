import { Text, View } from "react-native";

import { Link } from "expo-router";

export default function index() {
  return (
    <View>
      <Text>hello about</Text>
      <Text>helo</Text>
      <Link href="/">홈으로 돌아가기</Link>
    </View>
  );
}
