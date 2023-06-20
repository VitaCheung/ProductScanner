import {useState, useEffect}  from "react";

export default function SimilarProducts({asin}) {
    const P_apiKey = import.meta.env.VITE_REACT_APP_P_API_KEY;
    const P_apiHost = import.meta.env.VITE_REACT_APP_P_API_HOST;
    const [products, setProducts] = useState([]);
    const [SimilarItems, setSimilarItems] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(()=> {
        const getSimilar = async () => {
            setLoading(true);
            const url = 'https://parazun-amazon-data.p.rapidapi.com/product/related-asins/?asin='+asin+'&region=CA';
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': P_apiKey,
                'X-RapidAPI-Host': P_apiHost
            }
            };
            let response = await fetch(url, options);
            let data = await response.json();
            console.log(data);
            setProducts(data.sponsored[0].asins);
            console.log(products);
            const productString =  data.sponsored[0].asins.slice(0, 3).join(',');
            console.log(productString);
            const url2 = `https://parazun-amazon-data.p.rapidapi.com/product/summaries/?asins=${productString}&region=CA&page=1`;
            const options2 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': P_apiKey,
                'X-RapidAPI-Host': P_apiHost
            }
            };
            console.log('getting similar products name');
            let response2 = await fetch(url2, options2);
            let data2 = await response2.json();
            console.log(data2);
            setSimilarItems(data2.results);
            setLoading(false);
        }
        getSimilar();

    },[]);

    let loadImg = <div></div>;
    if (loading) {
        loadImg = <img id="littleloading" src="/loading.gif" alt="loading" />;
    }

    return (
        <div className="SimilarItems">
            {loadImg}
            {SimilarItems !== null ? (
                                SimilarItems.map((item) => (
                                    <div className="SimilarItem">
                                        <a href={`/about?s=${item.asin}`}>
                                            <img src={item.image} alt={`image of ${item.title}`}/>
                                            <h4>{item.title}</h4>
                                        </a>
                                    </div>   
                                ))
                                ) : (
                                <div>There is no similar item found.</div>
                                )}     


        </div>
      );

}