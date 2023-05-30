import {useState, useEffect}  from "react";

export default function UselessFact() {
    const [randomFact, setRandomFact] = useState("");
    const [factSource, setFactSource] = useState();

    useEffect(()=> {
        const getFact = async () => {
            let response = await fetch (
                "https://uselessfacts.jsph.pl/api/v2/facts/random"
            );
            let data = await response.json();
            //console.log(data);
            setRandomFact(data.text);
            setFactSource(data.source_url);
        }
        getFact();

    },[]);

    let source = <div></div>;
    if (factSource) {
        source = <div class="source"> <em>{factSource}</em> </div>;

    }
    return (
        <div>
          <h2>Today's random useless fact</h2>
          <div>{randomFact}</div>
          {source}
        </div>
      );
}