import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Label, Input, Icon } from "./search.styled";

export default class Search extends React.Component {
  handleChange=({target})=>{
    this.props.onChange(target.value)
  }
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
          onChange={this.handleChange}
        />
      </Label>
    );
  }
}
