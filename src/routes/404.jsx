import About from './About';

export default function Custom404() {
  return <About />;
}


// const getReview = async () => {
        //     setLoading2(true);
        //     console.log('3',key)
        //     console.log('4',key)
        //     // setKey(asin)
        //     const url = 'https://parazun-amazon-data.p.rapidapi.com/product/reviews/?asin='+key+'&region=CA&page=1&filter_by_keyword=highly%20recommended';
        //     const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '993db5a0aamshe737b49dee5a1ddp18daf7jsnab8c338adc35',
        //         'X-RapidAPI-Host': 'parazun-amazon-data.p.rapidapi.com'
        //     }
        //     };
        //     let response = await fetch(url, options);
        //     let data = await response.json();
        //     console.log(data);
        //     setReviews(data.reviews);
        //     //Update state after fetched data
        //     setLoading2(false);
             
        // }        