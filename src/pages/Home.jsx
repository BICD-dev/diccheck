import { useState, useCallback } from "react";
import HandleFetch from "../components/fetchApi";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState("");
  const [word, setWord] = useState("");
  const [error, setError] = useState(null);
  const [wordExist, setWordExist] = useState(true);

  const handleSubmit = useCallback(async (e)=>{
    e.preventDefault();
    //fetch data
    try {
        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const dict = await res.data;
        console.log(dict);
      // test with divine
        setData(dict)
        
    } catch (err) {
        console.log(err.message);
        setError(err.message);
        setWordExist(false)
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
            {data && wordExist ? <HandleFetch data={data} word={word}/>: error }
        </div>
      </div>
    </div>
  );
};

export default Home;
