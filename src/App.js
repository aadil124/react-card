import CardData from "./components/CardData.jsx";
import data from "./data/data.json";

function App() {
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((item, index) => {
              return <CardData item={item} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
