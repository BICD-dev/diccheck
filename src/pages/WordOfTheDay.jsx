import { useEffect, useState } from "react";
import HandleFetch from "../components/fetchApi";
import "./WordOfTheDay.css";
import axios from "axios";
const WordOfTheDay = () => {
  const [word, setWord] = useState("");
  const [dat, setDat] = useState("");
  useEffect(() => {
    async function runDaily() {
        const storedWord = localStorage.getItem('word');
      const now = new Date();
      const lastrun = localStorage.getItem('lastrun');
      const lastRunDate = lastrun ? new Date(lastrun) : null;
        if(storedWord){
            setWord(storedWord);
        }
      if (!lastRunDate || (now - lastRunDate) >= 24 * 60 * 60 * 1000) {
        try {
          const res = await axios.get("https://random-word-api.herokuapp.com/word");
          const data = await res.data;
          const out = data[0];
          // console.log(data[0]);
          setWord(out);
          localStorage.setItem('lastrun', now);
          localStorage.setItem('word', out);
        } catch (err){
            console.log(err);
        }
      } 
    }
    runDaily();
  }, []);
  // fetching the meaning of the word
  useEffect(()=>{
    const handleSubmit = async ()=>{
    //fetch data
    try {
        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const dict = await res.data;
        // console.log(dict);
      // test with divine
        setDat(dict);
        
    } catch (err) {
        // console.log(err);
    }
  };
  handleSubmit();
}, [word]);
  return (
    <>
      <div className="dayWord">
        <h2>Word of the Day</h2>
        {dat && <HandleFetch data={dat} word={word}/>}
      </div>
    </>
  );
};

export default WordOfTheDay;
