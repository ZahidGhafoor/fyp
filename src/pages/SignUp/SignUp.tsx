import "./Login.css";

import Logo from "assets/logo.png";
import { Container } from "@mui/material";
import AuthService from "services/auth.service";
import CircleLoader from "components/atoms/CircleLoader";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { Navigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";

export default function Login() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading);
  const user = useAppSelector((state) => state.auth.user);

  const handleSubmit = (values: any) => {
    AuthService.login(values, dispatch);
  };

  return (
    <div className="login-container">
      <Container maxWidth="sm">
        <div className="wrap-login">
          {loading && <CircleLoader />}
          <span className="login-form-logo">
            <img alt="" src={Logo} />
          </span>
          <div style={{ padding: "35px" }}>
            <SignUpForm onSubmit={handleSubmit} />
          </div>
        </div>
      </Container>
    </div>
  );
}
