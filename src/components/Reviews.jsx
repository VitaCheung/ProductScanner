// import BarcodeSearch from "../components/BarcodeSearch";
import Search from "../components/search";
import LoadingState from "../components/LoadingState";
import {useState, useEffect}  from "react";
import About from "../routes/About";

export default function Reviews() {
    // const { search } = window.location;
    // const query = new URLSearchParams(search).get('s');
    // const [searchQuery, setSearchQuery] = useState(query);
    const [asin, setAsin] = useState("");
    <About
        asin={asin}
        setAsin={setAsin} />
    // let asin = await About();
    console.log(asin);
    
    const [loading2, setLoading2] = useState(false);
    const [reviews, setReviews] = useState([]);
    // const [reviewsImg, setReviewsImg] = useState("",[]);

    console.log("hello, I'm product's view2");
    // var searchQuery = '087300700052' '062600963208';
    
    useEffect(()=> {
        // var asin = "B07VF6VRMD";
        const getReview = async () => {

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
        if (asin){
        setLoading2(true);
        getReview(); }
          
        
    },[]);

    let state2 =<div></div>;
    if (loading2) {
        state2 = <LoadingState />; 
    }
    
    
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
    if (reviews) {
        source = <div className="reviews"> 
                    {reviews.map((review) => (
                    <div className="review" key={review.review_date}>
                        <div className="profile">
                            <img src={review.profile_image} />
                            <p>{review.profile_name}</p> <p class="date">{formatDate(review.review_date)}</p>
                        </div>
                        <div className="content">
                            <p>{review.review_text}</p>
                            <img src={review.images} />
                            
                        </div>                             
                    </div>
                    ))} 
                </div>;
    } else if(asin){
        source = <div>{state2}</div>;
    } else if(asin && !reviews){
        source = <div className="noReview">There is no review yet.</div>;
    } else {
        source = <div>{state2}</div>;
    };

  
    return (
        <main id="main">
            
            <div className="ReviewsPage">   
                <h2>Reviews</h2>
                               
                {source}                
            </div>
                       
        </main>
    );
};



