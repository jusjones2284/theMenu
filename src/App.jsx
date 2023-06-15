import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import menu from "./data";
import Categories from "./Categories";

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all', ...tempSet]
// console.log(tempItems);

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);
  const filterItems = (category)=>{
    console.log(category);
    if(category === 'all'){
      setMenuItems(menu)
      return;
    }
    const newItems =  menu.filter((item) => item.category === category);
    setMenuItems(newItems)
  }

  return <main>
    <section className="menu">
     <Categories categories={categories} filterItems={filterItems}/>
      <Title text='our menu' />
      <Menu items={menuItems}/>
    </section>
    
  </main>;
};
export default App;
