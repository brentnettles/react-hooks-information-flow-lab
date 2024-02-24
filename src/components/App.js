import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
// import Filter from "./Filter";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // const [selectedCategory, setSelectedCategory] = useState("All");

  // function handleCategoryChange(event) {
  //   setSelectedCategory(event.target.value);
  // }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />
      <ShoppingList
        items={itemData}
        // selectedCategory={selectedCategory}
        // onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;