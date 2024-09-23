import { useState, useCallback } from "react";

const HandleFetch = ({data,word}) => {
    const [count, setCount] = useState(0);
    
    console.log(data)
    
    function meaning(){
        let some = []
        data?.meanings.map(item=>item).forEach(item => {
            //destructuring the valuesof key stuff
            const [...partOfSpeech] = item.partOfSpeech;
            const [...definition] = item.definitions;
            const listOfDefinition = definition.map((item)=> {
                return(
                    <li>{item.definition}</li>
                )
            });
            console.log(listOfDefinition)
            some.push(<section className="definitions" key={partOfSpeech}>
                <p><b>{partOfSpeech}</b></p>
                <ol>{listOfDefinition}</ol>
                <p></p>
            </section>)

            //chrecking the first part of speech

            // console.log(some)
        })
        return(
            <span>
                {some}
            </span>
        )
    }
    return ( 
        <>
        <span>
                <h1>{word}</h1>
                <p>Phonetic sound: {data?.phonetic}</p>
                {data && meaning()}
        
        </span>
        </>
     );
}
 
export default HandleFetch;