import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Input, Label } from "../../app.styled";
import { setSearchQuery, setShowInCart } from "../../redux/actions";

export default function Filter() {
  const dispatch = useDispatch();
  const { searchQuery, showInCart } = useSelector((state) => state.filters);

  const handleInput = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const handleToggle = () => {
    dispatch(setShowInCart());
  };
  return (
    <>
      <Input value={searchQuery} onChange={handleInput} />
      <Label>
        {!showInCart
          ? "SHOW products that have been added to the cart"
          : "HIDE the products that have been added to the cart"}
        <Checkbox
          type="checkbox"
          checked={showInCart}
          onChange={handleToggle}
        />
      </Label>
    </>
  );
}
