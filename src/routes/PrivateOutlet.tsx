import { useAppSelector } from "redux/hooks";
import { Outlet, Navigate } from "react-router-dom";

interface PrivateOutletProps {
	roles?: string[];
}

export default function PrivateOutlet({ roles = [] }: PrivateOutletProps) {
	const user = useAppSelector((state) => state.auth.user);

	if (!user || (roles.length > 0 && !roles.includes(user?.role)))
		return <Navigate to="/" />;

	return <Outlet />;
}
