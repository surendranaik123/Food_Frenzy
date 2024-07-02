import { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Rating from "react-rating-stars-component";
import '../Styles/Product.css';

export default function ProductStore({ onSubmit }) {
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
 const [image, setImage] = useState({ myFile: "" });
  const [discount, setDiscount] = useState(0);

  const calculateDiscountedPrice = () => {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  };

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const date = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;


  const [rating, setRating] = useState('');
  const [error, setError] = useState('');

  const handleRatingChange = (event) => {
    const value = event.target.value;
    if (value >= 5) {
      setError('Rating must be below 5');
    } else {
      setError('');
    }
    setRating(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const discountedPrice = calculateDiscountedPrice();
      const payload = {
        id,
        category,
        image,
        title,
        description,
        rating,
        price,
        discount,
        discountedPrice,
        date,
      };

      console.log("Sending data:", payload);

      const categoryResponse = await axios.post(
        "http://localhost:5000/api/v1/productssave",
        payload,
        { headers: { 'Content-Type': 'application/json' } } // Ensure the right content type
      );

      alert("Success");
      console.log("Response from server:", categoryResponse.data);
    } catch (error) {
      console.error("Error from server:", error.response ? error.response.data : error.message);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setImage({ ...image, myFile: base64 });
  };

  return (
    <>
      <Container>
        <div className="min-h-screen bg-white flex productadd">
          <div className="flex-1 flex flex-col py-12 px-4 sm:px-4 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <form className="Productform" onSubmit={handleSubmit}>
                {/* <div className="lablesdata">
                  <label htmlFor="category-name form-label ">ProductId</label>
                  <input
                    className="form-control"
                    type="id"
                    id="id"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                    required
                  />
                </div> */}

                <div className="lablesdata">
                  <label htmlFor="category-name form-label ">Category</label>
                  <input
                    className="form-control"
                    type="text"
                    id="category-name"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    required
                  />
                </div>

                <label htmlFor="file-upload" className="custom-file-upload">
                  Image
                </label>

                <input
                  className="lablesdata"
                  type="file"
                  lable="Image"
                  name="myFile"
                  id="file-upload"
                  accept=".jpeg, .png, .jpg"
                  onChange={(e) => handleFileUpload(e)}
                />

                <div className="lablesdata">
                  <label htmlFor="category-imageUrl">Price</label>
                  <input
                    className="form-control"
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>

                <div className="lablesdata">
                  <label htmlFor="title">Title:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                  />
                </div>

                <div className="lablesdata">
                  <label htmlFor="title">Description:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                  />
                </div>

            

<div className="lablesdata">
      <label htmlFor="category-imageUrl">Rating</label>
      <input
        className="form-control"
        type="number"
       
        value={rating}
        onChange={handleRatingChange}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>

                <div className="lablesdata">
                  <label htmlFor="category-discount">Discount Percentage</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Discount Percentage"
                    value={discount}
                    onChange={(event) => setDiscount(event.target.value)}
                  />
                </div>

                <div className="lablesdata">
                  <label>Discounted Price</label>
                  <h2> ${calculateDiscountedPrice()}</h2>
                </div>

                <button className="productStore_btn" type="submit">
                  Add Products
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <div className="container">
        <span id="rateMe1"></span>
      </div>
    </>
  );
}

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
