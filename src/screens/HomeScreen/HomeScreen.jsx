import { useState } from "react";
import { TopBlock, Title, MainSection } from "../../app.styled";
import ProductsList from "../../components/ProductsList";
import Search from "../../components/Search";
import debounce from "lodash.debounce";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeSearchQuery = debounce((searchQuery) => {
    setSearchQuery(searchQuery);
  }, 1000);
  
  return (
    <MainSection>
      <TopBlock>
        <Title>Products</Title>
        <Search searchQuery={searchQuery} onChange={handleChangeSearchQuery} />
      </TopBlock>

      <ProductsList searchQuery={searchQuery} />
    </MainSection>
  );
}
