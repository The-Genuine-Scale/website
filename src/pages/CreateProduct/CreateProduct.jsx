import React, { useState } from "react";
import { getProducts, saveProduct } from "../../api/product";
import { v4 as uuidv4 } from "uuid";
import "./CreateProduct.css";

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imgUrl: [],
    location: "",
    seller: "",
    type: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: value,
    }));
  };

  const handleJsonUpload = (event) => {
    event.preventDefault();

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const jsonData = JSON.parse(e.target.result);
      setProductData((prevProductData) => ({
        ...prevProductData,
        ...jsonData,
      }));
    };

    reader.readAsText(file);
  };

  const handleCsvUpload = (event) => {
    event.preventDefault();

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvData = e.target.result;
      // Process CSV data and update productData accordingly
      // You will need to implement the logic to parse and extract data from CSV

      // Example logic to extract data from CSV
      const extractedData = extractDataFromCsv(csvData);

      setProductData((prevProductData) => ({
        ...prevProductData,
        ...extractedData,
      }));
    };

    reader.readAsText(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const uid = uuidv4();
    const products = await getProducts();
    const totalProducts = products.length;
  
    const newDocId = (totalProducts + 1).toString();
    const newProduct = {
      docId: newDocId,
      name: productData.name,
      description: productData.description,
      price: productData.price,
      category: productData.category,
      seller: productData.seller,
      type: productData.type,
      imgUrl: [productData.imgUrl[0]],
      location: productData.location,
      address: productData.address,
      rating: 0,
      ordersRated: 0,
      open: true,
      searchField: productData.name.toLowerCase().split(" "),
      uid: uid,
    };

      try {
    // Save the new product to the Firestore database
    await saveProduct(newProduct);
    alert("Product created successfully!");
    setProductData({
      name: "",
      description: "",
      price: "",
      category: "",
      imgUrl: [""],
      location: "",
      seller: "",
      type: "",
      address: "",
    });
  } catch (error) {
    console.log("Error creating product:", error);
    alert("Failed to create product. Please try again.");
  }
  };

  const extractDataFromCsv = (csvData) => {
    // Implement logic to parse and extract data from CSV
    // Return the extracted data as an object

    // Example implementation
    const extractedData = {
      name: "Sample Name",
      description: "Sample Description",
      price: "100",
      category: "Sample Category",
      imageUrl: "https://example.com/sample-image.jpg",
      location: "Sample Location",
      seller: "Sample Seller",
      type: "Sample Type",
      address: "Sample Address",
    };

    return extractedData;
  };
  return (
    <div className="create-product">
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={productData.imgUrl[0]}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={productData.location}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <label>
          Seller:
          <input
            type="text"
            name="seller"
            value={productData.seller}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={productData.type}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={productData.address}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <button type="submit" className="submit-button">
          Save Product
        </button>
      </form>
      <div className="upload-section">
        <h2>Upload Data</h2>
        <label>
          Upload JSON File:
          <input type="file" accept=".json" onChange={handleJsonUpload} />
        </label>
        <label>
          Upload CSV File:
          <input type="file" accept=".csv" onChange={handleCsvUpload} />
        </label>
      </div>
    </div>
  );
};

export default CreateProduct;
