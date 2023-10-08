import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import "lib/env";
import { apolloClient } from "lib/apollo";
export default function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
				<StatusBar style="auto" />
			</View>
		</ApolloProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
