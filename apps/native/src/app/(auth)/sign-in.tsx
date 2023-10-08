import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const SignInScreen = () => {
	const { signIn, setActive, isLoaded } = useSignIn();

	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");

	const onSignInPress = async () => {
		if (!isLoaded) {
			return;
		}

		try {
			const completeSignIn = await signIn.create({
				identifier: emailAddress,
				password,
			});
			// This is an important step,
			// This indicates the user is signed in
			await setActive({ session: completeSignIn.createdSessionId });
		} catch (err) {
			console.log(JSON.stringify(err, null, 2));
		}
	};
	return (
		<SafeAreaView
			style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
		>
			<View>
				<TextInput
					autoCapitalize="none"
					value={emailAddress}
					placeholder="Email..."
					onChangeText={emailAddress => setEmailAddress(emailAddress)}
				/>
			</View>

			<View>
				<TextInput
					value={password}
					placeholder="Password..."
					secureTextEntry={true}
					onChangeText={password => setPassword(password)}
				/>
			</View>

			<TouchableOpacity onPress={onSignInPress}>
				<Text>Sign in</Text>
			</TouchableOpacity>

			<Link href="/sign-up">Register</Link>
		</SafeAreaView>
	);
};

export default SignInScreen;
