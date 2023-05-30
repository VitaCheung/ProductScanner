import {useState, useEffect}  from "react";

export default function Question() {
    const [category, setCategory] = useState();
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const [revealed, setRevealed] = useState(false);


    useEffect(()=> {
        const getFact = async () => {
            let response = await fetch (
                "https://opentdb.com/api.php?amount=1&type=boolean"
            );
            let data = await response.json();
            //console.log(data);
            setCategory(data.results[0].category);
            setQuestion(data.results[0].question);
            setAnswer(data.results[0].correct_answer);
        }
        getFact();

    },[])

    function setter(){
        setRevealed(true);
    }
    
    let ans = <div></div>;
    if (revealed === true) {
        ans = <div class="yes">{answer}</div>;

    } 
    
    return (
        <div>
            <div>{category}</div>
            <h3>{question}</h3>           
            {ans}         
            <input type="button" onClick={setter} value="Reveal answer" ></input>
        </div>
      );
}