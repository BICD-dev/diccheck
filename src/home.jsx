import { useState, useCallback } from "react";

const Home = () => {
  const [data, setData] = useState("");
  const [word, setWord] = useState("");
//   console.log(data)
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
                handleSubmit(e)
            }}
          />
          <button>Search word</button>
        </form>

        <div className="info">
            {data && <><span>
                <h1>{word}</h1>
                <p>Phonetic sound: {data?.phonetic}</p>
                {data.meanings.map(item=>item).array.forEach(item => {
                    const [...partOfSpeech] = item.partOfSpeech;
                    const [...definition] = item.definitions;
                    definition.map((item)=>(<span>
                        <h3>Definition:{partOfSpeech.join("")} - {item.definition}</h3>
                    </span>))
                    // console.log(define)
                })
                }
                
            </span></> }
        </div>
      </div>
    </div>
  );
};

export default Home;
