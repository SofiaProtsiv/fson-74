import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Label, Input, Icon } from "./search.styled";

export default class Search extends React.Component {
  render() {
    return (
      <Label>
        <Icon>
          <AiOutlineSearch />
        </Icon>
        <Input
          name="query"
          placeholder="Search..."
          value={this.props.searchQuery}
          onChange={this.props.onChange}
        />
      </Label>
    );
  }
}