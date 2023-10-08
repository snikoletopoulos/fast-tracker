import { ApolloProvider } from "@apollo/client";
import { Button, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";

import "lib/env";
import { apolloClient } from "lib/apollo";
import { tokenCache } from "lib/auth";
// import { SignUpScreen } from "screens/SignUp";
import { SignInScreen } from "screens/SignIn";

export const App = () => {
	return (
		<ClerkProvider
			tokenCache={tokenCache}
			publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
		>
			<ApolloProvider client={apolloClient}>
				<GestureHandlerRootView style={styles.container}>
					<SafeAreaView style={styles.container}>
						<SignedIn>
							<Text>You are Signed in</Text>
							<SignOut />
						</SignedIn>

						<SignedOut>
							<SignInScreen />
						</SignedOut>
					</SafeAreaView>
				</GestureHandlerRootView>
			</ApolloProvider>
		</ClerkProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

const SignOut = () => {
	const { isLoaded, signOut } = useAuth();
	if (!isLoaded) {
		return null;
	}
	return (
		<View>
			<Button
				title="Sign Out"
				onPress={async () => {
					await signOut();
				}}
			/>
		</View>
	);
};
