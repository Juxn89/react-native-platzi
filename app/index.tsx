import { Button, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  
  const goToSettings = () => router.push("/SettingsScreen");

  return (
		<View style={styles.container}>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Text>HomeScreen</Text>
			<Button title="Go to Settings" onPress={goToSettings} />
		</View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}
})
