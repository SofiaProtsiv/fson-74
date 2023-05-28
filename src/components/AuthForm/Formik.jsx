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
  ErrorMessage,
} from "./authForm.styled";

import { Formik } from "formik";

const setValidation = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

export default function AuthForm({ handleAuthModal, onSubmit }) {
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      handleAuthModal();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <CloseButton>
          <AiOutlineClose onClick={handleAuthModal} />
        </CloseButton>

        <ModalContent>
          <FormTitle>Sign in to your account</FormTitle>

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => setValidation(values)}
            onSubmit={(values, { resetForm }) => {
              onSubmit(values);
              resetForm();
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email ? (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                  ) : null}
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    type="password"
                    required
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password ? (
                    <ErrorMessage>{errors.password}</ErrorMessage>
                  ) : null}
                </div>

                <SubmitButton type="submit">Sign in</SubmitButton>
              </Form>
            )}
          </Formik>

          <ChangeFormText>
            Not a member?
            <ChangeFormLink href="#">Sign up</ChangeFormLink>
          </ChangeFormText>
        </ModalContent>
      </Modal>
    </Backdrop>
  );
}
