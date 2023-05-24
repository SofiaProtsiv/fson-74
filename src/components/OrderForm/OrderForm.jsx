import React from "react";
import {
  Form,
  Label,
  Input,
  RadioWrapper,
  RadioContainer,
  RadioInput,
  RadioLabel,
  CheckboxLabel,
  CheckboxInput,
  Select,
  Button,
} from "./orderForm.styled";

const DELIVERY = {
  MORNING: "09:00 - 12:00",
  AFTERNOON: "12:00 - 18:00",
  EVENING: "18:00 - 21:00",
};

const PAYMENT_METHOD = {
  CASH: "cash",
  CARD: "card",
};

const INITIAL_STATE = {
  name: "",
  phone: "",
  callback: false,
  paymentMethod: "cash",
  deliveryTime: "",
};

export default class OrderForm extends React.Component {
  state = { ...INITIAL_STATE };

  handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    const newValue = type === "checkbox" ? checked : value;
    this.setState({ [name]: newValue });
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
    const { name, phone, callback, paymentMethod, deliveryTime } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            value={name}
            onChange={this.handleChange}
          />
        </Label>

        <Label>
          Phone
          <Input
            type="tel"
            placeholder="Enter phone"
            name="phone"
            required
            value={phone}
            onChange={this.handleChange}
          />
        </Label>

        <RadioWrapper>
          <Label> Choose a payment method</Label>
          <RadioContainer>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="paymentMethod"
                required
                checked={paymentMethod === PAYMENT_METHOD.CASH}
                value={PAYMENT_METHOD.CASH}
                onChange={this.handleChange}
              />
              Cash
            </RadioLabel>

            <RadioLabel>
              <RadioInput
                type="radio"
                name="paymentMethod"
                required
                checked={paymentMethod === PAYMENT_METHOD.CARD}
                value={PAYMENT_METHOD.CARD}
                onChange={this.handleChange}
              />
              Card
            </RadioLabel>
          </RadioContainer>
        </RadioWrapper>

        <Label>
          Scheduled Delivery
          <Select
            name="deliveryTime"
            required
            value={deliveryTime}
            onChange={this.handleChange}
          >
            <option value="" disabled>
              Choose a specific time
            </option>
            <option value={DELIVERY.MORNING}>09:00 - 12:00</option>
            <option value={DELIVERY.AFTERNOON}>12:00 - 18:00</option>
            <option value={DELIVERY.EVENING}>18:00 - 21:00</option>
          </Select>
        </Label>

        <CheckboxLabel>
          Сall back after ordering?
          <CheckboxInput
            name="callback"
            type="checkbox"
            checked={callback}
            onChange={this.handleChange}
          />
        </CheckboxLabel>

        <Button type="submit">Place Order</Button>
      </Form>
    );
  }
}
