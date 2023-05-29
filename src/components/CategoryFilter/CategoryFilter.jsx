import React from "react";
import { CategoryList, CategoryItem } from "./categoryFilter.styled";

const CATEGORIES = [
  "",
  "Fast Food",
  "Drinks",
  "Sweets",
  "Vegetables",
  "Fruits",
];

export default class CategoryFilter extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     nextProps.currentCategory === this.props.currentCategory &&
  //     nextProps.onClick === this.props.onClick
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }

  handleSelectCategory = (selectedCategory) => {
    this.props.onClick(selectedCategory);
  };

  render() {
    console.log("re-render");
    return (
      <CategoryList>
        {CATEGORIES.map((category, index) => {
          return (
            <CategoryItem
              key={index}
              onClick={() => this.handleSelectCategory(category)}
              selected={this.props.currentCategory === category}
            >
              {category ? category : "All"}
            </CategoryItem>
          );
        })}
      </CategoryList>
    );
  }
}
