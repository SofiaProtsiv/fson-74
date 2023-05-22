import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  Backdrop,
  ModalContent,
  Modal,
  CloseButton,
  Form,
  FormTitle,
  Label,
  Input,
  SubmitButton,
  ChangeFormText,
  ChangeFormLink,
} from "./authForm.styled";

const initialState = {
  email: "",
  password: "",
};

export default class AuthForm extends React.Component {
  state = initialState;

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.handleAuthModal();
    }
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState(initialState);
  };
  render() {
    return (
      <Backdrop onClick={this.props.handleBackdropClick}>
        <Modal>
          <CloseButton>
            <AiOutlineClose onClick={this.props.handleAuthModal} />
          </CloseButton>

          <ModalContent>
            <FormTitle>Sign in to your account</FormTitle>
            <Form onSubmit={this.handleSubmit}>
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <SubmitButton type="submit">Sign in</SubmitButton>
            </Form>

            <ChangeFormText>
              Not a member?
              <ChangeFormLink href="#">Sign up</ChangeFormLink>
            </ChangeFormText>
          </ModalContent>
        </Modal>
      </Backdrop>
    );
  }
}
