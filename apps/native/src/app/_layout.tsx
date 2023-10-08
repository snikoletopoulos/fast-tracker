import { StyleSheet } from "react-native";
import { Slot } from "expo-router";
import { ApolloProvider } from "@apollo/client";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ClerkProvider } from "@clerk/clerk-expo";

import "lib/env";
import { apolloClient } from "lib/apollo";
import { tokenCache } from "lib/auth";

const RootLayout = () => {
	return (
		<ClerkProvider
			tokenCache={tokenCache}
			publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
		>
			<ApolloProvider client={apolloClient}>
				<GestureHandlerRootView style={styles.container}>
					<Slot />
				</GestureHandlerRootView>
			</ApolloProvider>
		</ClerkProvider>
	);
};

export default RootLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
