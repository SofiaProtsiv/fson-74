import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Label, Input, Icon } from "./search.styled";

export default function Search({ onChange }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInput = async (e) => {
    await setSearchQuery(e.target.value);

    onChange(searchQuery);
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
