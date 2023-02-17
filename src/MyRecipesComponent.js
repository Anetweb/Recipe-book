function MyRecipesComponent({ label, image, calories, ingredients }) {
  return (
    <div>
      <div className="container">
        <h2>{label}</h2>
      </div>

      <div className="container">
        <img src={image} />
      </div>

      <ul className="list">
        {ingredients.map((ingredient) => (
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1102/1102355.png?w=740&t=st=1676549105~exp=1676549705~hmac=b8b0e8de48df831ad34546980650af9c694384761c4d638b16d1c370aa975380"
              className="icon"
            />
            {ingredient}
          </li>
        ))}
      </ul>

      <div className="container">
        <p className="par">{calories.toFixed()} calories</p>
      </div>
    </div>
  );
}

export default MyRecipesComponent;
