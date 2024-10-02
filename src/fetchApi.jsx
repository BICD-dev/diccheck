const HandleFetch = ({ data, word }) => {
  function meaning() {
    let some = [];
    for (const [k] in data) {
      const meaning = data[k].meanings.map((item) => item);
      console.log(meaning)
      meaning.forEach((item) => {
        //destructuring the values of key stuff
        const [...partOfSpeech] = item.partOfSpeech;
        const [...definition] = item.definitions;
        const listOfDefinition = definition.map((item) => {
          return <li>{item.definition}</li>;
        });
        // console.log(listOfDefinition)
        some.push(
          <section className="definitions" key={partOfSpeech}>
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
        <h1>{data?.word}</h1>
        <p
          style={{
            color: "green",
          }}
        >
          {data?.phonetic}
        </p>
        {data && meaning()}
      </span>
    </>
  );
};

export default HandleFetch;
