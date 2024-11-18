import { useState, useCallback } from "react";
import HandleFetch from "../components/fetchApi";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState("");
  const [word, setWord] = useState("");
  const [error, setError] = useState(null);
  const [wordExist, setWordExist] = useState(true);
  const [mode, setMode] = useState("dictionary");
  //submit for dictionary
  const handleSubmitForDictionary = useCallback(async (e)=>{
    e.preventDefault();
    setWordExist(true);
    //fetching for dictionary or thesaurus depending on the mode 
    if(mode === "dictionary") {
      //fetch data
      try {
          const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
          const dict = await res.data;
          setWordExist(true);
          setData(dict)
          
      } catch (err) {
          console.log(err.message);
          setError(err.message);
          setWordExist(false);
      }
    } else if(mode === "thesaurus") {
      console.log(mode);
    }
},[word]);

  return (
    <div className="home">
      <div className="container">
        <form
         onSubmit={handleSubmitForDictionary}
         >
          <select>
            <option value="dictionary" onClick={()=>setMode("dictionary")}>Dictionary</option>
            <option value="thesaurus" onClick={()=>setMode("thesaurus")}>Thesaurus</option>
          </select>
          <input
            type="text"
            placeholder="Search Dictionary"
            value={word}
            onChange={(e) => {
                setWord(e.target.value)
            }}
          />
          <button> &#128269;</button>
          {/* <button></button> */}
        </form>

        <div className="info">
            {data && wordExist ? <HandleFetch data={data} word={word}/>: error }
            
        </div>
      </div>
    </div>
  );
};

export default Home;
