import React from "react";
import ProductCard from "../ProductCard";
import Skeleton from "../Skeleton";
import ErrorMessage from "../ErrorMessage";
import { Button, ProductList } from "./productsList.styled";
import { getProducts } from "../../api";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default class ProductsList extends React.Component {
  state = {
    products: [],
    status: STATUS.IDLE,
    error: null,
    currentPage: 1,
    totalPages: 0,
    limit: 30,
  };

  componentDidMount() {
    this.fetchProducts();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    const { searchQuery } = this.props;
    
    if (prevProps.searchQuery !== searchQuery) {
      await this.setState({ currentPage: 1, products: [] });
      this.fetchProducts();
    }
    if (prevState.currentPage !== currentPage) {
      this.fetchProducts();
    }
  }

  fetchProducts = async () => {
    const { limit, currentPage, products } = this.state;
    const { searchQuery } = this.props;

    await this.setState({ status: STATUS.PENDING });
    const skip = (currentPage - 1) * limit;

    try {
      const data = await getProducts({ searchQuery, limit, skip });

      if (!data.products.length) {
        throw new Error("No matches found");
      }

      this.setState({
        products: [...products, ...data.products],
        totalPages: Math.ceil(data.total / limit),
        status: STATUS.RESOLVED,
        error: null,
      });
    } catch (error) {
      this.setState({ error: error.message, status: STATUS.REJECTED });
    }
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { currentPage, products, totalPages, error, status } = this.state;
    const showLoadMoreButton =
      products.length !== 0 && currentPage < totalPages;

    if (status === STATUS.PENDING) {
      return <Skeleton />;
    }

    if (status === STATUS.RESOLVED) {
      return (
        <ProductList>
          {products.map(({ id, images, title, price }) => {
            return (
              <ProductCard
                key={id}
                title={title}
                price={price}
                images={images}
              />
            );
          })}

          {showLoadMoreButton && (
            <Button
              onClick={this.handleLoadMore}
              disabled={status === STATUS.PENDING ? true : false}
            >
              {status === STATUS.PENDING ? "Loading..." : "Load More"}
            </Button>
          )}
        </ProductList>
      );
    }

    if (status === STATUS.REJECTED) {
      return <ErrorMessage>{error}</ErrorMessage>;
    }
  }
}
