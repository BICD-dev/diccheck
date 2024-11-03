import { useState } from "react";

const HandleFetch = ({ data, word }) => {
  function meaning() {
    let count = 0;
    let some = [];
    // console.log(data[0].phonetics[0].text)
    for (let i=0;i<data.length;i++) {
      console.log(i);
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


  return (
    <>
      <span>
        <h1>{data[0].word}</h1>
        <p
          style={{
            color: "green",
          }}
        >{data[0].phonetics[0] ? data[0].phonetics[0].text : "No phonetics"}
        </p>
        {data && meaning()}
      </span>
    </>
  );
};

export default HandleFetch;
