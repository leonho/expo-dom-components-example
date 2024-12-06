import { useScrollRef } from "@/lib/tab-to-top";
import { Text, View } from "react-native";
export default function NativeWindRoute() {
  const ref = useScrollRef();

  return (
    <View className="flex-1 w-full h-full justify-center items-center">
      <Text className="text-2xl font-bold">Hello NativeWind!</Text>
    </View>
  );
}
