import React, { useState } from "react";
import {
  Wrapper,
  Content,
  Form,
  FormTitle,
  Label,
  Input,
  SubmitButton,
  ChangeFormText,
  ChangeFormLink,
} from "./loginScreen.styled";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/auth";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/auth/slice";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {data} = await login(state);

    if (data) {
      dispatch(setToken(data.access_token));
      navigate("/");
    }

    reset();
  };

  const reset = () => {
    setState({ email: "", password: "" });
  };

  return (
    <Wrapper>
      <Content>
        <FormTitle>Sign in to your account</FormTitle>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              required
              value={state.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              required
              value={state.password}
              onChange={handleChange}
            />
          </div>

          <SubmitButton type="submit">Sign in</SubmitButton>
        </Form>

        <ChangeFormText>
          Not a member?
          <ChangeFormLink>
            <NavLink to="/register">Sign up</NavLink>
          </ChangeFormLink>
        </ChangeFormText>
      </Content>
    </Wrapper>
  );
}
