import React from "react";
import { TopBlock, Title, MainSection } from "./app.styled";
import Container from "./components/ui/Container";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Search from "./components/Search";
import debounce from "lodash.debounce";

export default class App extends React.Component {
  state = {
    searchQuery: "",
  };

  handleChangeSearchQuery = debounce((searchQuery) => {
    this.setState({
      searchQuery,
    });
  }, 1000);

  render() {
    const { searchQuery } = this.state;

    return (
      <Container>
        <Header />

        <MainSection>
          <TopBlock>
            <Title>Products</Title>
            <Search
              searchQuery={searchQuery}
              onChange={this.handleChangeSearchQuery}
            />
          </TopBlock>

          <ProductsList searchQuery={searchQuery} />
        </MainSection>
      </Container>
    );
  }
}
