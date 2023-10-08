import { Redirect, Slot } from "expo-router";
import { SignedIn, useAuth } from "@clerk/clerk-expo";

const SignedInLayout = () => {
	const { isSignedIn, isLoaded } = useAuth();

	if (isLoaded && !isSignedIn) {
		return <Redirect href="/sign-in" />;
	}

	return (
		<SignedIn>
			<Slot />
		</SignedIn>
	);
};

export default SignedInLayout;
