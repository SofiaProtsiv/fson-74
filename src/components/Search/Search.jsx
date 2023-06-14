import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Label, Input, Icon } from "./search.styled";
import { useStateContext } from "../../context/StateContext";

export default function Search() {
  const { searchParams, setSearchParams } = useStateContext();
  const searchQuery = searchParams.get("query") || "";

  const handleInput = (e) => {
    e.target.value
      ? setSearchParams({ query: e.target.value })
      : setSearchParams({});
  };

  return (
    <Label>
      <Icon>
        <AiOutlineSearch />
      </Icon>
      <Input
        name="query"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInput}
      />
    </Label>
  );
}
