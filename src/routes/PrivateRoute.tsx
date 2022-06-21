import { Navigate } from "react-router-dom";
import { useAppSelector } from "redux/hooks";

interface PrivateRouteProps {
	roles?: string[];
	children: React.ReactNode;
}

export default function PrivateRoute({
	children,
	roles = [],
}: PrivateRouteProps) {
	const user = useAppSelector((state) => state.auth.user);

	if (!user) return <Navigate to="/" />;
	if (roles.length > 0 && !roles.includes(user.role))
		return <Navigate to="/" />;

	return <>{children}</>;
}
