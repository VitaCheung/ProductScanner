import {useState, useEffect}  from "react";
import Search from "./search";
// import About from "../routes/About";

export default function ProductSearch() {
    
    const [title, setTitle] = useState("");
    const [asin, setAsin] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    
    console.log("hello");
    var query = '087300700052';
    // var query = {searchQuery};
    
    useEffect(()=> {
        const getSearch = async () => {
            
            console.log(query);
            
            const url = 'https://parazun-amazon-data.p.rapidapi.com/search/?keywords='+query+'&region=CA&page=1';
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '993db5a0aamshe737b49dee5a1ddp18daf7jsnab8c338adc35',
                'X-RapidAPI-Host': 'parazun-amazon-data.p.rapidapi.com'
            }
            };

            let response = await fetch(url, options);
            let data = await response.json();
            console.log(data);
            setTitle(data.results[0].title);
            setPrice(data.results[0].price.amount);
            setImage(data.results[0].images[0].image);
            setAsin(data.results[0].asin);

        }
        getSearch(); 

    },[]);

    // let source = <div></div>;
    // if (factSource) {
    //     source = <div class="source"> <em>{factSource}</em> </div>;

    

    return (
        <div>
          <h2>Product</h2>
          <img src={image}/>
          <div>{title}</div>
          <p>Price: ${price}</p>
          <div>ASIN: {asin}</div>
          
        </div>
    );

    // }

}