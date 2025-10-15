import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export const HomeScreen = () => {
	const router = useRouter();

	const goToSettings = () => router.push("/SettingsScreen");

	return (
		<View>
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
};

export default HomeScreen;
