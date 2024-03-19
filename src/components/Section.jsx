/* import "./App.css";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <div className="container">
        {data.map((elem, idx) => (
          <div key={idx}>
            <h1 className="title">{elem.category}</h1>
            <div className="pictures">
              {elem.images.map((imageUrl, index) => (
                <div key={index}>
                  <img src={imageUrl} alt="image" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App; */
