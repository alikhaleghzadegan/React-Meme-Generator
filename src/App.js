
import MemeCarousel from "./MemeCarousel";
import useMemes from "./services/useMemes";

function App() {

  const memes = useMemes();
  console.log(memes);

  return (
    <div className="App">
      <h2>Hello</h2>
      <MemeCarousel memes={memes} />
    </div>
  );
}

export default App;
