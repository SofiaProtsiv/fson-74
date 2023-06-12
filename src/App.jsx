import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Container  from "./components/ui/Container";
import { TopBlock, Title, MainSection } from "./app.styled";
import debounce from "lodash.debounce";
import { useState } from "react";
import { useStateContext } from "./context/StateContext";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const { isCartModalOpen } = useStateContext();

  const handleChangeSearchQuery = debounce((searchQuery) => {
    setSearchQuery(searchQuery);
  }, 1000);
  return (
    <Container>
      <Header />
      <MainSection>
        <TopBlock>
          <Title>Products</Title>
          <Search
            searchQuery={searchQuery}
            onChange={handleChangeSearchQuery}
          />
        </TopBlock>

        <ProductsList searchQuery={searchQuery} />
      </MainSection>
      {isCartModalOpen && <Cart />}
    </Container>
  );
}
