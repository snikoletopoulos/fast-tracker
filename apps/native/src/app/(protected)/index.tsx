import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@clerk/clerk-expo";

const HomeScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Text>You are signed in</Text>
			<SignOut />
		</SafeAreaView>
	);
};

export default HomeScreen;

const SignOut = () => {
	const { isLoaded, signOut } = useAuth();

	if (!isLoaded) {
		return null;
	}
	return (
		<View>
			<Button
				title="Sign Out"
				onPress={() => {
					void signOut();
				}}
			/>
		</View>
	);
};
