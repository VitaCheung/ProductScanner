// import BarcodeSearch from "../components/BarcodeSearch";
import Search from "../components/search";
import LoadingState from "../components/LoadingState";
import {useState, useEffect}  from "react";
// import Reviews from "../components/Reviews";

export default function About() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query);
    
    console.log(searchQuery);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [title, setTitle] = useState("");
    const [asin, setAsin] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [numOfRating, setnumOfRating] = useState("");
    const [reviews, setReviews] = useState([]);
    // const [reviewsImg, setReviewsImg] = useState("",[]);

    console.log("hello, I'm product's view");
    // var searchQuery = '087300700052' '062600963208';
    let state1 =<div></div>;
    if (loading) {
        state1 = <LoadingState />; 
    }
    let state2 =<div></div>;
    if (loading2) {
        state2 = <LoadingState />; 
    }
    
    useEffect(()=> {
        const getSearch = async () => {
            
            const url = 'https://parazun-amazon-data.p.rapidapi.com/search/?keywords='+searchQuery+'&region=CA&page=1';
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '993db5a0aamshe737b49dee5a1ddp18daf7jsnab8c338adc35',
                'X-RapidAPI-Host': 'parazun-amazon-data.p.rapidapi.com'
            }
            };
            // Perform API request to fetch data
            let response = await fetch(url, options);
            let data = await response.json();
            // console.log(data);
            setAsin(data.results[0].asin);
            setTitle(data.results[0].title);
            setPrice(data.results[0].price.amount);
            setImage(data.results[0].images[0].image);
            setRating(data.results[0].reviews.avg_rating);
            setnumOfRating(data.results[0].reviews.num_ratings);
            //Update state after fetched data
            setLoading(false);

        }
        // if (searchQuery){   
        // getSearch(); }

        // var asin = "B07VF6VRMD";
        const getReview = async () => {
            await getSearch();
            const url = 'https://parazun-amazon-data.p.rapidapi.com/product/reviews/?asin='+asin+'&region=CA&page=1&filter_by_keyword=highly%20recommended';
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
            setReviews(data.reviews);
            //Update state after fetched data
            setLoading2(false);
             
        }
        if (searchQuery){   
            getSearch(); 
            setLoading2(true);
            getReview();}  

    },[]);


    let product = <div></div>;
    if (searchQuery && title) {
        product = <div className="product"> 
                    <div className="padding"><img src={image}/></div>
                    <h3>{title}</h3>
                    <p>Rating: {rating} /5 ({numOfRating})</p>
                    <p>Online Price: ${price}</p>
                    <p>ASIN: {asin}</p>   
                  </div>;
    } else if(searchQuery){
        product = <div>{state1}</div>;              
    } else if(searchQuery && !title){
        product = <div className="product">Sorry, this product is not in the database.</div>
    } else {
        product = <div></div>;
    };
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString('en-CA', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        });
        return formattedDate;
    };

    let source = <div></div>;
    if (searchQuery && reviews) {
        source = <div className="reviews"> 
                    {reviews.map((review) => (
                    <div className="review" key={review.review_date}>
                        <div className="profile">
                            <img src={review.profile_image} />
                            <p>{review.profile_name}</p> <p className="date">{formatDate(review.review_date)}</p>
                        </div>
                        <div className="content">
                            <p>{review.review_text}</p>
                            <img src={review.images} />
                            
                        </div>                             
                    </div>
                    ))} 
                </div>;
    } else if(searchQuery){
        source = <div>{state2}</div>;
    } else if(searchQuery && !reviews){
        source = <div className="noReview">There is no review yet.</div>;
    } else {
        source = <div></div>;
    };

  
    return (
        <main id="main">
            <div id="Search">
                <h1>Search</h1>
                <p>Barcode or product name:</p>
                <Search
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>
            <div className="ProductPage">
                <h2>Product</h2>                      
                {product}
            </div>
            <div className="ReviewsPage">   
                <h2>Reviews</h2>               
                {source}                
            </div>
            

                       
        </main>
    );
};



