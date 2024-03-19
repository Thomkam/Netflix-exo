import "./App.css";
import data from "./assets/data.json";

const App = () => {
  return (
    <>
      <div className="container">
        {data.map((elem, index) => (
          <div key={index}>
            <h2 className="title">{elem.category}</h2>
            <div className="images">
              {elem.images.map((imageUrl, idx) => (
                <div key={idx}>
                  <img src={imageUrl} alt="images" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
