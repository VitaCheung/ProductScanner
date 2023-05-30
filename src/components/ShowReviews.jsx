import {useState, useEffect}  from "react";

export default function ShowReviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(()=> {
        const getReview = async () => {
            const url = 'https://parazun-amazon-data.p.rapidapi.com/product/reviews/?asin=B0BN95221D&region=US&page=1&filter_by_keyword=highly%20recommended';
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '993db5a0aamshe737b49dee5a1ddp18daf7jsnab8c338adc35',
                'X-RapidAPI-Host': 'parazun-amazon-data.p.rapidapi.com'
            }
            };
            let response = await fetch(url, options);
            let data = await response.json();
            // console.log(data);
            setReviews(data.reviews);

        }
        getReview();

    },[]);

    // let source = <div></div>;
    // if (factSource) {
    //     source = <div class="source"> <em>{factSource}</em> </div>;
    // }

    return (
        <div>   
                <h2>Reviews</h2>
                {reviews.map((review) => (
                    <div className="review" key={review.review_date}>
                        <p>Author: {review.profile_name}</p>
                        <p>Content: {review.review_text}</p>
                        <p>Review Date: {review.review_date}</p>
                    </div>
                ))}
        </div>
      );

}