"use client";
import axios from "axios";
const SerpApi = require('google-search-results-nodejs')
const search = new SerpApi.GoogleSearch("9f20d7b92d44b9d57f5d39560857f03b6f9b786d1d559737503f22175511270b")
import { useState } from "react";
import { crossOrigin } from "../next.config";
const ReviewFinder = () => {
    // axios({
    //     method: "GET",
    //     url: 'https://serpapi.com/search.json?engine=google_maps_reviews&data_id=0x0:0x5096a3a0028000de&api_key=9f20d7b92d44b9d57f5d39560857f03b6f9b786d1d559737503f22175511270b',
    //     engine:  "google_maps_reviews",
    //     data_id: "0x54900e6301e67a49:0x5096a3a0028000de",
    //     headers: {
    //         api_key: "9f20d7b92d44b9d57f5d39560857f03b6f9b786d1d559737503f22175511270b"
    //     }
    // })
    // .then((res) => console.log(res))
    const [customerName, setCustomerName] = useState([])
    const [reviews, setReviews] = useState([])

    const params = {
        engine: "google_maps_reviews",
        data_id: "0x54900e6301e67a49:0x5096a3a0028000de",
        origin: "*",
        method: "GET", 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
      }
    }

      const callback = function(data) {
        console.log(data.reviews);
        setReviews(data.reviews)
      };

      search.json(params, callback);

    return (
        <div>
        hello
            <div>name: {reviews.map((element, i) => {
              return (<div key={i}>{element.snippet}</div>)
            })}
            </div>
        </div>
    )
}

export default ReviewFinder;