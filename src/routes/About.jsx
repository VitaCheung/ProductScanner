import SimilarProducts from "../components/SimilarProducts";
import React from 'react';
import Search from "../components/search";
import LoadingState from "../components/LoadingState";
import AddItemForm from "../components/AddItemForm";
import {useState, useEffect}  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query);
    console.log(searchQuery);
    const P_apiKey = import.meta.env.VITE_REACT_APP_P_API_KEY;
    const P_apiHost = import.meta.env.VITE_REACT_APP_P_API_HOST;

    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");
    const [asin, setAsin] = useState("");
    const [image, setImage] = useState("");
    const [amount, setAmount] = useState(null);
    const [rating, setRating] = useState("");
    const [numOfRating, setnumOfRating] = useState("");
    const [reviews, setReviews] = useState([]);
    const [showSimilar, setShowSimilar] = useState(false);

    console.log("hello, I'm product's view");
    // var searchQuery = '087300700052' '062600963208';
    
    
    useEffect(()=> {
        const getSearch = async () => {
        try{
            console.log("1")
            setLoading(true);
            const url = 'https://parazun-amazon-data.p.rapidapi.com/search/?keywords='+searchQuery+'&region=CA&page=1';
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': P_apiKey,
                'X-RapidAPI-Host': P_apiHost
            }
            };

            // Perform API request to fetch data
            let response = await fetch(url, options);
            if (!response.ok) {
                // throw Error();
                throw new Error('This barcode or product is not in the database.');
            }
            let data = await response.json();
            // console.log(data);
            setTitle(data.results[0].title);
            setAsin(data.results[0].asin);
            // setAmount(data.results[0].price.amount);
            setAmount(data?.results?.[0]?.price?.amount ?? null);
            setImage(data.results[0].images[0].image);
            setRating(data.results[0].reviews.avg_rating);
            setnumOfRating(data.results[0].reviews.num_ratings);

            console.log("2");
            const url2 = `https://parazun-amazon-data.p.rapidapi.com/product/reviews/?asin=${data.results[0].asin}&region=CA&page=1&filter_by_keyword=highly%20recommended`;
            const options2 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': P_apiKey,
                'X-RapidAPI-Host': P_apiHost
            }
            };
            console.log('3');
            let response2 = await fetch(url2, options2);
            let data2 = await response2.json();
            console.log(data2);
            setReviews(data2.reviews);
            //Update state after fetched data
            setLoading(false);
        } catch (error) {
            console.log('Error fetching data:', error);
            setError(error + ' Please try again or Search.');
            setLoading(false);
        }
            
        };
        if (searchQuery){ 
        getSearch();
        }

    },[]);
    console.log('amount:'+ amount)
    

    let Similar =<div></div>;
    function getSimilar(){
        console.log('hellooooo');
        setShowSimilar(true);
    }
    if (showSimilar){
        Similar =<div><SimilarProducts asin={asin} /></div>;
    }

    if (loading) {
        return <LoadingState />; 
    }
    if (error) {
        return <p id="errorMsg">{error}</p>; // Render the error message page
    }

    let product = <div></div>;
    if (searchQuery && title) {
        product = <div className="product"> 
                    <div className="padding"><img src={image} alt={`image of ${title}`}/></div>
                    <div className='box'>
                        <h3>{title}</h3> 
                        
                        <AddItemForm key={asin} UPC={searchQuery} name={title} img={image} asin={asin}/>
                    </div>
                    <p>Rating: <span className='red'>{rating}</span> /5 ({numOfRating})</p>
                    <p>Online Price: {amount !== null ? (
                                        <span>$ {amount}</span>
                                    ) : (
                                        <span className='null'>NUll</span>
                                    )}</p>
                    <p>ASIN: {asin}</p>
                    <button type="submit" id="sim_btn" onClick={getSimilar}>Similar products</button>
                    {Similar} 
                  </div>;           
    } else if(title && !asin){
        product = <div className="product">There is not much detail of the product.</div>
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
                            <img src={review.profile_image} alt="profile of the reviewer"/>
                            <p>{review.profile_name}</p> <p className="date">{formatDate(review.review_date)}</p>
                        </div>
                        <div className="content">
                            <p>{review.review_text}</p>
                            {review.images !== null ? (
                                review.images.map((imageUrl, index) => (
                                    <img key={index} src={imageUrl} alt={`photo ${index + 1} from the review`} />
                                ))
                                ) : (
                                <div></div>
                                )}     
                        </div>                             
                    </div>
                    ))} 
                </div>;
    } else if(title && !reviews){
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



