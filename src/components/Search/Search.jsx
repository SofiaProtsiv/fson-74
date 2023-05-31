import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Label, Input, Icon } from "./search.styled";

// export default class Search extends React.Component {
//   render() {
//     return (
//       <Label>
//         <Icon>
//           <AiOutlineSearch />
//         </Icon>
//         <Input
//           name="query"
//           placeholder="Search..."
//           value={this.props.searchQuery}
//           onChange={this.props.onChange}
//         />
//       </Label>
//     );
//   }
// }

// 2 variant
export default class Search extends React.Component {
  state = {
    searchQuery: "",
  };

  handleInput = async (e) => {
    await this.setState({ searchQuery: e.target.value });

    this.props.onChange(this.state.searchQuery);

    // this.setState({ searchQuery: e.target.value }, () => {
    //   this.props.onChange(this.state.searchQuery);
    // });
  };

  render() {
    return (
      <Label>
        <Icon>
          <AiOutlineSearch />
        </Icon>
        <Input
          name="query"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={this.handleInput}
        />
      </Label>
    );
  }
}
