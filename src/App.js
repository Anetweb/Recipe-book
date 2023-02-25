import "./App.css";
import { useEffect, useState } from "react";
import video from "./fruits.mp4";
import MyRecipesComponent from "./MyRecipesComponent";

function App() {
  const MY_ID = "2f8f17dd";
  const MY_KEY = "8b491b5486013907d9f89981d3dba75e";

  const [myRecipes, setMyRecipes] = useState([]);
  const [mySearch, setMySearch] = useState("");
  const [wordSubmitted, setWordSubmitted] = useState("word");

  useEffect(() => {
    const getRecipes = async () => {
      const responce = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`
      );
      const data = await responce.json();
      setMyRecipes(data.hits);
    };
    getRecipes();
  }, [wordSubmitted]); /* кликаем на enter  и вызываем useEffect */

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  };

  const finalSearch = (e) => {
    e.preventDefault(); /* что бы страница не перезагружалась */
    setWordSubmitted(mySearch); /* меняем состояние */
  };

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Recipe Book</h1>
      </div>

      <form className="container" onSubmit={finalSearch}>
        <input
          className="search"
          placeholder="Search..."
          onChange={myRecipeSearch}
          value={mySearch}
        ></input>

        <div>
          <button className="btn">Search</button>
        </div>
      </form>

      <div>
        {myRecipes.map((element) => (
          <MyRecipesComponent
            label={element.recipe.label}
            image={element.recipe.image}
            calories={element.recipe.calories}
            ingredients={element.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
