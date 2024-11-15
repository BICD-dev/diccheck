import { useState, useRef, useEffect } from "react";
import sound from "../assets/sound.svg";
const HandleFetch = ({ data, word }) => {
  const audioRef = useRef(null);
  const [audio, setAudio] = useState("");
  //function to get the phonetics of the word
  useEffect(() => {
    let sound = "";
    //getting audio file from the data
    for (let i = 0; i < data.length; i++) {
      let audioArr = data[i].phonetics.map((item) => item.audio);
      for (let j in audioArr) {
        if (audioArr[j] !== "") {
          sound = audioArr[j];
          break;
        }
      } 
    }
    setAudio(sound);
  }, [data]);
  //function to get the meaning of the word
  console.log(typeof(audio));
  function meaning() {
    let count = 0;
    let some = [];

    //getting the meaning of the word and the part of speech
    for (let i = 0; i < data.length; i++) {
      const meaning = data[i].meanings.map((item) => item);
      meaning.forEach((item, index) => {
        //   //destructuring the values of key stuff
        const [...partOfSpeech] = item.partOfSpeech;
        const [...definition] = item.definitions;
        const listOfDefinition = definition.map((item) => {
          return <li>{item.definition}</li>;
        });
        // console.log(listOfDefinition)

        some.push(
          <section className="definitions" key={`${count}-${index}`}>
            <p>
              <b>{partOfSpeech}</b>
            </p>
            <ol>{listOfDefinition}</ol>
            <p></p>
          </section>
        );
      });
    }
    return <span>{some}</span>;
  }
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    }
  };
  return (
    <>
      <span className="span">
        <h1>{data[0].word}</h1>
        {/* sound button */}
        <button className="sound-button" onClick={playSound}>
          <img src={sound} alt="Play Sound" />
        </button>
        {/* Audio element with the sound file */}
        {audio && <audio ref={audioRef} src={audio}></audio>}
        <p
          style={{
            color: "green",
          }}
        >
          {data[0].phonetics[0] ? data[0].phonetics[0].text : "No phonetics"}
        </p>
        {data && meaning()}
      </span>
    </>
  );
};

export default HandleFetch;
