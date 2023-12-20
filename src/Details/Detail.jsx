import React, { useEffect, useState } from "react";
import "./Detail.css";
import { getProductId } from "../ApiService/api";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const fetchProductsDetails = async () => {
      const data = await getProductId(id);
      setProductDetails(data);
    };

    fetchProductsDetails();
  }, [id]);
const handleBuyNow=()=>{
  alert("The product is Out Of Stock!!!!!")
}
  return (
    <div className="detail-container">
      {productDetails && (
        <>
          <img src={productDetails.image} alt="image" className="pro-image" />
          <div className="info">
            <h2 className="title">{productDetails.title}</h2>
            <p className="desc">{productDetails.description}</p>
            <p className="product-price">${productDetails.price}</p>
            <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
            <Link to="/">
              <button className="go-back-button">Go Back Home</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
