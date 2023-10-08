import { Redirect, Slot } from "expo-router";
import { SignedOut, useAuth } from "@clerk/clerk-expo";

const SignedInLayout = () => {
	const { isSignedIn, isLoaded } = useAuth();

	if (isLoaded && isSignedIn) {
		return <Redirect href="/" />;
	}

	return (
		<SignedOut>
			<Slot />
		</SignedOut>
	);
};

export default SignedInLayout;
