import {useState, useEffect}  from "react";

export default function SimilarProducts({asin}) {
    const P_apiKey = import.meta.env.VITE_REACT_APP_P_API_KEY;
    const P_apiHost = import.meta.env.VITE_REACT_APP_P_API_HOST;
    // const [products, setProducts] = useState([]);

    useEffect(()=> {
        const getSimilar = async () => {
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
            // setProducts(data.Products);

        }
        getSimilar();

    },[]);

    // let source = <div></div>;
    // if (factSource) {
    //     source = <div class="source"> <em>{factSource}</em> </div>;
    // }

    return (
        <div>   
                {/* <h2>Products</h2>
                {products.map((review) => (
                    <div className="review" key={review.review_date}>
                        <p>Author: {review.profile_name}</p>
                        <p>Content: {review.review_text}</p>
                        <p>Review Date: {review.review_date}</p>
                    </div>
                ))} */}
        </div>
      );

}