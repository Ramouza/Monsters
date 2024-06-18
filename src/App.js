import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value,setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [titleMonsters, setTitleMonsters] = useState ('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchchange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };


  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitleMonsters(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-tittle">{titleMonsters}</h1>
      <SearchBox
        onChangeHandler={onSearchchange}
        placeholder="Search Monster"
        className="monsters-search-box"
      />
      <br/>
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder="Set your Title"
        className="monsters-title-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};


export default App;
