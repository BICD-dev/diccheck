import { useState, useCallback } from "react";
import HandleFetch from "./handleFetch";
const Home = () => {
  const [data, setData] = useState("");
  const [word, setWord] = useState("");
  const [error, setError] = useState(null)
  const handleSubmit = useCallback(async (e)=>{
    e.preventDefault();
    //fetch data
    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const dict = await res.json();
        console.log(dict);

        setData(dict[0])
        
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
            {data && <HandleFetch data={data} word={word}/>}
            {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
        </div>
      </div>
    </div>
  );
};

export default Home;
