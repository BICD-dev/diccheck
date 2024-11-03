import { useEffect, useState, useCallback } from "react";
import HandleFetch from "./fetchApi";

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
      if (!lastRunDate || (now - lastRunDate) === 24 * 60 * 60 * 1000) {
        try {
          const res = await fetch("https://random-word-api.herokuapp.com/word");
          const data = await res.json();
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
  const handleSubmit = useCallback(async ()=>{
    //fetch data
    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const dict = await res.json();
        console.log(dict);
      // test with divine
        setDat(dict);
        
    } catch (err) {
        console.log(err);
    }
},[]);
handleSubmit();
  return (
    <>
      <div className="dayWord">
        <h2>{word} </h2>
        {dat && <HandleFetch data={dat} word={word}/>}
      </div>
    </>
  );
};

export default WordOfTheDay;
