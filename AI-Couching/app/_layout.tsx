import { Stack } from "expo-router";
import { useFonts } from "expo-font"


useFonts({
  'outfit':require("./../assets/fonts/Outfit-Regular.ttf"),
  'outfit-bold':require('./../assets/fonts/outfit-Bold.ttf')
})

export default function RootLayout() {
  return <Stack screenOptions={{headerShown:false}}/>;
}
