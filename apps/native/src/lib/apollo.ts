import {
	ApolloClient,
	InMemoryCache,
	ApolloLink,
	from,
	HttpLink,
} from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (__DEV__) {
	loadDevMessages();
	loadErrorMessages();
}

const TOKEN = "";

export const authLink = new ApolloLink((operation, forward) => {
	operation.setContext({
		headers: {
			Authorization: `Bearer ${TOKEN}`,
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
