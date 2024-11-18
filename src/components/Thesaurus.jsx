import { useState, useCallback, useEffect } from "react";
import axios from "axios";
const Thesaurus = ({data, word}) => {
    let key = 'f0eb3b61-c5a0-4723-8a0c-1c79aada8d1f';
    // function to fetch
    const thesaurus = useCallback(async()=>{
        const res = await axios.get('');
        const info = await res.data
        
    });
    return ( 
        <div className="thesaurus">
            <h2>Thesaurus</h2>
        </div>
     );
}
 
export default Thesaurus;