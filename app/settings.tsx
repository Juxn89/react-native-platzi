import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Settings() {
	const router = useRouter();

	const goToHome = () => router.push("/");

	return (
		<View>
			<Text>SettingsScreen</Text>
			<Button title="Go Home" onPress={goToHome} />
		</View>
	);
}