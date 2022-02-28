import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HomeScreen.css";
import "../components/Product.css";
import Product from "../components/Product";
import { getProducts as listProducts } from "../redux/actions/productActions";

function HomeScreen() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {/* {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )} */}
        <div className="product">
          <img
            src="https://brain-images-ssl.cdn.dixons.com/2/8/10147782/l_10147782_003.jpg"
            alt="SmartHub"
          />

          <div className="product__info">
            <p className="info__name">Smart Hub</p>

            <p className="info__description">
              A smart home hub is hardware or software that connects devices on
              a home automation network and controls communications among them.{" "}
            </p>

            <p className="info__price">€49.99</p>
          </div>
          <button className="info__button">View</button>
        </div>
        <div className="product">
          <img
            src="https://mobileimages.lowes.com/productimages/66029aab-53ba-4e5b-87c3-f62bd5a9a15d/15276091.jpg?size=pdhi"
            alt="Motion Sensor"
          />

          <div className="product__info">
            <p className="info__name">Motion Sensor</p>

            <p className="info__description">
              A motion sensor, or motion detector, is an electronic device that
              uses a sensor to detect nearby people or objects.
            </p>

            <p className="info__price">€24.99</p>
          </div>
          <button className="info__button">View</button>
        </div>
        <div className="product">
          <img
            src="https://www.familyhandyman.com/wp-content/uploads/2017/10/dfh17sep014_01.jpg?fit=700,700"
            alt="Wireless Camera"
          />

          <div className="product__info">
            <p className="info__name">Wireless Camera</p>

            <p className="info__description">
              Wireless cameras work by transmitting the camera's video through a
              radio (RF) transmitter. The video is sent to a receiver that is...
            </p>

            <p className="info__price">€49.99</p>
          </div>
          <button className="info__button">View</button>
        </div>
        <div className="product">
          <img
            src="https://www.panasonic-fire-security.com/fs-asset/2017/en/images/products_analog_detectors/pp_4401w_rdax_478x358.jpg"
            alt="Smoke Detector"
          />

          <div className="product__info">
            <p className="info__name">Smoke Detector</p>

            <p className="info__description">
              Smoke alarms detect fires by sensing small particles in the air
              using a couple of different kinds of technologies.
            </p>

            <p className="info__price">€49.99</p>
          </div>
          <button className="info__button">View</button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
