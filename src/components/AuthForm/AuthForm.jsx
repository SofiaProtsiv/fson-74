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

const INITIAL_STATE = {
  email: "",
  password: "",
};

export default class AuthForm extends React.Component {
  state = { ...INITIAL_STATE };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.handleAuthModal();
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <Backdrop onClick={this.handleBackdropClick}>
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
