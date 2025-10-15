import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export const SettingsScreen = () => {
	const router = useRouter();

	const goToHome = () => router.push("/HomeScreen");
	return (
		<View>
			<Text>SettingsScreen</Text>
			<Button title="Go Home" onPress={() => goToHome()} />
		</View>
	)
}

export default SettingsScreen;