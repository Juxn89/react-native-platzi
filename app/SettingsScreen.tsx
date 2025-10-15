import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const SettingsScreen = () => {
	const navigation = useNavigation();

	const goToHome = (pageName: string) => navigation.navigate(pageName as never);
	return (
		<View>
			<Text>SettingsScreen</Text>
			<Button title="Go Home" onPress={() => goToHome("Home")} />
		</View>
	)
}

export default SettingsScreen;