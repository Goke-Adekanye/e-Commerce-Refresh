import React, { useState } from "react";
import "./style.css";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";

function Test() {
  const [items, setItems] = useState([]);
  const [file, setFile] = useState();
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", file);
    data.append("itemType", type);
    data.append("itemName", name);
    data.append("itemPrice", price);
    data.append("itemDescription", description);

    async function uploadData() {
      const request = await axios.post(
        `https://e-commerce-frugal.herokuapp.com/${type}/`,
        data
      );
      console.log(request);
      setItems([request.data]);
    }

    uploadData();
  };

  console.log(items);

  return (
    <div>
      <Navbar />
      <form onSubmit={onSubmit}>
        <input
          type="file"
          id="file"
          onChange={(event) => {
            const file = event.target.files[0];
            setFile(file);
          }}
        />
        <input
          type="text"
          name="itemType"
          placeholder="Type"
          onChange={(event) => {
            const { value } = event.target;
            setType(value);
          }}
        />
        <input
          type="text"
          name="itemName"
          placeholder="Name"
          onChange={(event) => {
            const { value } = event.target;
            setName(value);
          }}
        />
        <input
          type="text"
          name="itemPrice"
          placeholder="Price"
          onChange={(event) => {
            const { value } = event.target;
            setPrice(value);
          }}
        />
        <input
          type="text"
          name="itemDescription"
          placeholder="Description"
          onChange={(event) => {
            const { value } = event.target;
            setDescription(value);
          }}
        />
        <button>Upload</button>
      </form>

      <ul>
        {items.map((item) => {
          return (
            <div key={item._id}>
              <li key={item.price}>
                <img
                  width="100"
                  height="100 "
                  src={item.image}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.desciption}</p>
              </li>
            </div>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
}
export default Test;
