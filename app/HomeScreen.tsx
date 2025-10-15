import { Button, Text, View } from "react-native";

interface props {
	navigation: any;
}

export const HomeScreen = ({ navigation }: props) => {

	const { navigate } = navigation;

	const goToSettings = () => navigate("Settings");

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

			<Button
				title="Go to Settings"
				onPress={goToSettings}
			/>
		</View>
	);
};

export default HomeScreen;
