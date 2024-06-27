import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: "",
    //   },
    // }}
    >
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Home", headerShown: false }}
      />
    </Stack>
  );
}
