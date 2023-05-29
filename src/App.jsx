// import React from "react";
// import { TopBlock, Title, MainSection } from "./app.styled";
// import Container from "./components/ui/Container";
// import Header from "./components/Header";
// import ProductsList from "./components/ProductsList";
// import Search from "./components/Search";
// import ErrorMessage from "./components/ErrorMessage";
// import debounce from "lodash.debounce";
// import products from "./assets/products";
// import { getProducts, getProductsBySearchQuery } from "./api";
// import { Button } from "./components/ProductsList/productsList.styled";
// import Skeleton from "./components/Skeleton";
// export default class App extends React.Component {
//   state = {
//     products: [],
//     currentPage: 1,
//     totalPages: 0,
//     limit: 30,
//     skip: 0,
//     searchQuery: "",
//     category: "",
//     isLoading: true,
//     largeImage: "",
//     error: null,
//   };

//   componentDidMount() {
//     const { limit, skip } = this.state;
//     getProducts({ limit, skip })
//       .then((data) => {
//         this.setState((prevState) => ({
//           products: data.products,
//           totalPages: Math.ceil(data.total / limit),
//         }));
//       })
//       .catch((error) => {
//         this.setState({ error: error.message });
//       })
//       .finally(() => {
//         this.setState({
//           isLoading: false,
//         });
//       });
//   }
//   componentDidUpdate(prevProps, prevState) {
//     const { skip, searchQuery, limit } = this.state;

//     if (prevState.searchQuery !== searchQuery || prevState.skip !== skip) {
//       if (searchQuery === "") {
//         getProducts({ limit, skip })
//           .then((data) => {
//             this.setState((prevState) => ({
//               products: [...prevState.products, ...data.products],
//             }));
//           })
//           .catch((error) => {
//             this.setState({ error: error.message });
//           })
//           .finally(() => {
//             this.setState({
//               isLoading: false,
//             });
//           });
//       } else {
//         getProductsBySearchQuery({ searchQuery, limit, skip })
//           .then((data) => {
//             this.setState((prevState) => ({
//               products: [...data.products],
//               totalPages: Math.ceil(data.total / limit),
//             }));
//           })
//           .catch((error) => {
//             this.setState({ error: error.message });
//           })
//           .finally(() => {
//             this.setState({
//               isLoading: false,
//             });
//           });
//       }
//     }
//   }

//   changeSearchQuery = debounce((searchQuery) => {
//     searchQuery === ""
//       ? this.setState({
//           products: [],
//           currentPage: 1,
//           skip: 0,
//           error: "Enter keyword",
//         })
//       : this.setState({
//           products: [],
//           currentPage: 1,
//           skip: 0,
//           searchQuery,
//           error: null,
//         });
//   }, 300);

//   handleClickOnMore = () => {
//     const { limit } = this.state;
//     this.setState((prevState) => ({
//       currentPage: prevState.currentPage + 1,
//       skip: prevState.skip + limit,
//     }));
//   };

//   render() {
//     const { products, isLoading, searchQuery, error, totalPages, currentPage } =
//       this.state;
//     const showLoadMore = products.length > 0 && currentPage < totalPages;
//     return (
//       <>
//         <Container>
//           <Header />

//           <MainSection>
//             <TopBlock>
//               <Title>Products</Title>
//               <Search value={searchQuery} onChange={this.changeSearchQuery} />
//             </TopBlock>

//             {isLoading && <Skeleton />}

//             <ProductsList products={products} />

//             {showLoadMore && (
//               <Button onClick={this.handleClickOnMore}>Load More</Button>
//             )}

//             {error && <ErrorMessage />}
//           </MainSection>
//         </Container>
//       </>
//     );
//   }
// }

import React from "react";

export default class App extends React.Component {
  state = {
    products: [],
    searchQuery: "",
    currentPage: 1,
    totalProducts: 0,
    limit: 10,
    isLoading: false,
    errorMessage: "",
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    const { searchQuery, currentPage, limit } = this.state;
    const skip = (currentPage - 1) * limit;
    const apiUrl = `https://dummyapi.com/products?search=${searchQuery}&limit=${limit}&skip=${skip}`;

    this.setState({ isLoading: true });

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => ({
          products: [...prevState.products, ...data.results],
          totalProducts: data.totalProducts,
          isLoading: false,
          errorMessage: "",
        }));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        this.setState({
          isLoading: false,
          errorMessage: "An error occurred while fetching products.",
        });
      });
  };

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.setState({ products: [], currentPage: 1 }, this.fetchProducts);
  };

  handleLoadMore = () => {
    const { currentPage, limit, totalProducts } = this.state;
    const totalPages = Math.ceil(totalProducts / limit);
    if (currentPage < totalPages) {
      this.setState(
        (prevState) => ({
          currentPage: prevState.currentPage + 1,
        }),
        this.fetchProducts
      );
    }
  };

  render() {
    const {
      products,
      searchQuery,
      currentPage,
      limit,
      totalProducts,
      isLoading,
      errorMessage,
    } = this.state;
    const totalPages = Math.ceil(totalProducts / limit);
    const showLoadMoreButton = products.length > 0 && currentPage < totalPages;

    return (
      <div>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={this.handleSearchChange}
            placeholder="Search products..."
          />
          <button type="submit">Search</button>
        </form>

        {errorMessage && <div>{errorMessage}</div>}

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        )}

        {showLoadMoreButton && (
          <button onClick={this.handleLoadMore} disabled={isLoading}>
            {isLoading ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    );
  }
}
