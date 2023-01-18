import React,{ useState } from "react";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title : "What is React?",
    content : "React is a JavaScript front-end library. It is used by the engineers to write reusable code."
  },
  {
    title : "How do you use React?",
    content : "You use React by creating components."
  },
  {
    title : "What use React?",
    content : "React is a favorite js library among engineers."
  }
]

const options = [
  {
    label : 'The Red Color',
    value : 'red'
  },
  {
    label : 'The Green Color',
    value : 'green'
  },
  {
    label : 'A Shade of Blue',
    value : 'blue'
  }
];

const App = () => {

  const [selected,setSelected] = useState(options[0]);

  return ( 
    <div className="ui container">
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label='Select a color' selected={selected} onSelectedChange = {setSelected} options = {options}/>
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};

export default App;


// const showAccordion = () => {
//   if( window.location.pathname === '/'){
//     return <Accordion items = {items} />;
//   }
// };
// const showSearch = () => {
//   if( window.location.pathname === '/Search'){
//     return <Search />;
//   }
// };
// const showDropdown = (label,selected,setSelected,options) => {
//   if( window.location.pathname === '/Dropdown'){
//     return <Dropdown label={label} selected={selected} onSelectedChange = {setSelected} options = {options} />;
//   }
// };
// const showTranslate = () => {
//   if( window.location.pathname === '/Translate'){
//     return <Translate />;
//   }
// };
{/* {showAccordion()}
{showSearch()}
{showDropdown('Select a color',selected,setSelected,options)}
{showTranslate()} */}