import { useState, useCallback } from "react";
import HandleFetch from "./handleFetch";

const Home = () => {
  const [data, setData] = useState("");
  const [word, setWord] = useState("");
  
  const handleSubmit = useCallback(async (e)=>{
    e.preventDefault();
    //fetch data
    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const dict = await res.json();
        console.log(dict);

        setData(dict[0])
        
    } catch (error) {
        console.log(error);
    }
},[word]);
  
  return (
    <div className="home">
      <div className="container">
        <form
         onSubmit={handleSubmit}
         >
          <label> SEARCH WORD</label>
          <input
            type="text"
            placeholder="type in a word to search"
            value={word}
            onChange={(e) => {
                setWord(e.target.value)
            }}
          />
          <button>Search word</button>
        </form>

        <div className="info">
            {data && <HandleFetch data={data} word={word}/>}
        </div>
      </div>
    </div>
  );
};

export default Home;
