import { TopBlock, Title, MainSection } from "../../app.styled";
import ProductsList from "../../components/ProductsList";
import Search from "../../components/Search";

export default function HomeScreen() {
  return (
    <MainSection>
      <TopBlock>
        <Title>Products</Title>
        <Search />
      </TopBlock>

      <ProductsList />
    </MainSection>
  );
}
