import React from "react";
import {
  ProductList,
  ProductItem,
  ProductImage,
  ProductPrice,
  Button,
  Wrapper,
  CounterWrapper,
  ProductQuantity,
} from "./example.styled";

class ProductCard extends React.Component {
  state = {
    count: 0,
    isDisabled: true
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: (prevState.count += 1),
      isDisabled: false
    }));
  };

  handleDecrement = () => {
    // if(this.state.count === 0) return;
    //
    // this.setState((prevState) => ({
    //   count: prevState.count > 0 ? prevState.count - 1 : prevState.count,
    // }));

    if(this.state.count === 0){
      this.setState(prevState => ({isDisabled: !prevState.isDisabled}))
      return;
    }
    this.setState((prevState) => ({
      count: (prevState.count -= 1),
    }));
  };
  render() {
    const { id, price, image } = this.props;

    return (
      <ProductItem id={id}>
        <ProductImage>{image}</ProductImage>
        <Wrapper>
          <ProductPrice>${price}</ProductPrice>
          <CounterWrapper>
            <Button disabled={this.state.isDisabled} onClick={this.handleDecrement}>-</Button>
            <ProductQuantity>{this.state.count}</ProductQuantity>
            <Button onClick={this.handleIncrement}>+</Button>
          </CounterWrapper>
        </Wrapper>
      </ProductItem>
    );
  }
}

export default function Example() {
  return (
    <ProductList>
      <ProductCard key="1" id="1" price="12" image="🍔" name="Burger" />
    </ProductList>
  );
}
