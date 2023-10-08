import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";

export const SignUpScreen = () => {
	const { isLoaded, signUp, setActive } = useSignUp();

	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [pendingVerification, setPendingVerification] = useState(false);
	const [code, setCode] = useState("");

	// start the sign up process.
	const onSignUpPress = async () => {
		if (!isLoaded) {
			return;
		}

		try {
			await signUp.create({
				emailAddress,
				password,
			});

			// send the email.
			await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

			// change the UI to our pending section.
			setPendingVerification(true);
		} catch (err) {
			console.error(JSON.stringify(err, null, 2));
		}
	};

	// This verifies the user using email code that is delivered.
	const onPressVerify = async () => {
		if (!isLoaded) {
			return;
		}

		try {
			const completeSignUp = await signUp.attemptEmailAddressVerification({
				code,
			});

			await setActive({ session: completeSignUp.createdSessionId });
		} catch (err) {
			console.error(JSON.stringify(err, null, 2));
		}
	};

	return (
		<View>
			{!pendingVerification && (
				<View>
					<View>
						<TextInput
							autoCapitalize="none"
							value={emailAddress}
							placeholder="Email..."
							onChangeText={email => setEmailAddress(email)}
						/>
					</View>

					<View>
						<TextInput
							value={password}
							placeholder="Password..."
							placeholderTextColor="#000"
							secureTextEntry={true}
							onChangeText={password => setPassword(password)}
						/>
					</View>

					<TouchableOpacity onPress={onSignUpPress}>
						<Text>Sign up</Text>
					</TouchableOpacity>
				</View>
			)}
			{pendingVerification && (
				<View>
					<View>
						<TextInput
							value={code}
							placeholder="Code..."
							onChangeText={code => setCode(code)}
						/>
					</View>
					<TouchableOpacity onPress={onPressVerify}>
						<Text>Verify Email</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};