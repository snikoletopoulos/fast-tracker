import {
	ApolloClient,
	InMemoryCache,
	ApolloLink,
	from,
	HttpLink,
} from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import * as SecureStore from "expo-secure-store";

import { AUTH } from "constants/auth";

if (__DEV__) {
	loadDevMessages();
	loadErrorMessages();
}

// @ts-expect-error - Wrong apollo client type
export const authLink = new ApolloLink(async (operation, forward) => {
	const token = await SecureStore.getItemAsync(AUTH.jwtStorageKey);
	operation.setContext({
		headers: {
			Authorization: token,
		},
	});
	return forward(operation);
});

const httpLink = new HttpLink({
	uri: `${process.env.EXPO_PUBLIC_SERVER_URL}/graphql`,
});

export const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: from([authLink, httpLink]),
});
