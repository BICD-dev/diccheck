import { useState, useCallback } from "react";
import HandleFetch from "./fetchApi";
import picture from "./imgs/slava-auchynnikau-se0aqc8f2bA-unsplash.jpg";

const Home = () => {
  const [data, setData] = useState("");
  const [word, setWord] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = useCallback(async (e)=>{
    e.preventDefault();
    //fetch data
    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const dict = await res.json();
        console.log(dict);
      // test with divine
        const fullData = dict.length === 1 ? dict[0] : dict
        setData(fullData)
        
    } catch (err) {
        console.log(err);
        setError(err.message)
    }
},[word]);

  return (
    <div className="home">
      <div className="container">
        <form
         onSubmit={handleSubmit}
         >
          <label>DICTIONARY</label>
          <input
            type="text"
            placeholder="Search Dictionary"
            value={word}
            onChange={(e) => {
                setWord(e.target.value)
            }}
          />
          <button> &#128269;search</button>
        </form>

        <div className="info">
          {word}
            {data && <HandleFetch data={data} word={word}/>}
            
        </div>
      </div>
    </div>
  );
};

export default Home;
