import { Button, Text, View } from "react-native";

interface props {
	navigation: any;
}

export const SettingsScreen = ({ navigation }: props) => {

	const { navigate } = navigation;

	const goToHome = (pageName: string) => navigate(pageName);
	return (
		<View>
			<Text>SettingsScreen</Text>
			<Button title="Go Home" onPress={() => goToHome("Home")} />
		</View>
	)
}

export default SettingsScreen;