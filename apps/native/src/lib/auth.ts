import * as SecureStore from "expo-secure-store";
import { TokenCache } from "@clerk/clerk-expo/dist/cache";

export const tokenCache: TokenCache = {
	getToken: async (key: string) => {
		try {
			return SecureStore.getItemAsync(key);
		} catch (error) {
			return null;
		}
	},
	saveToken: async (key: string, value: string) => {
		try {
			return SecureStore.setItemAsync(key, value);
		} catch (error) {
			return;
		}
	},
	clearToken: (key: string) => {
		try {
			void SecureStore.deleteItemAsync(key);
		} catch (error) {
			return;
		}
	},
};
