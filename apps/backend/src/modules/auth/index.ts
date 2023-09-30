import jwt from "jsonwebtoken";

export const parseJWT = (token: string) => {
	if (!token) {
		return null;
	}

	return jwt.verify(token, process.env.CLERK_PEM_PUBLIC_KEY) as jwt.JwtPayload;
};
