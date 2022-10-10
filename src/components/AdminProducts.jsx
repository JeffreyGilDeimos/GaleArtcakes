import React from "react";
import { Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { useCallback } from "react";

export default function AdminProducts() {
  const [category, setCategory] = useState("Chocolate Drip Cake");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState("");
  const [addToNewCollection, setAddToNewCollection] = useState(true);

  // Validation
  const [invalidProductName, setInvalidProductName] = useState(false);
  const [invalidPrice, setInvalidPrice] = useState(false);
  const [invalidDescription, setInvalidDescription] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIfValid()) {
      return null;
    }
  };

  const checkIfValid = () => {
    let isValid = true;

    // Check if productName is valid
    if (productName.match("^$|^.*@.*..*$")) {
      setInvalidProductName(true);
      isValid = false;
    } else {
      setInvalidProductName(false);
    }

    // Check if price has value
    if (price.match("^$|^.*@.*..*$") || isNaN(price) || price <= 0) {
      setInvalidPrice(true);
      isValid = false;
    } else {
      setInvalidPrice(false);
    }

    // Check if description has an input
    if (description.match("^$|^.*@.*..*$")) {
      setInvalidDescription(true);
      isValid = false;
    } else {
      setInvalidDescription(false);
    }

    return isValid;
  };

  function MyDropzone(product) {
    // Callback function
    const onDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];

      const formData = new FormData();
      formData.append("file", file);
    }, []);

    // React Dropzone
    const { getRootProps } = useDropzone({ onDrop });

    // Return statement
    return (
      <img
        src={product.imageLink ? product.imageLink : "/images/no-image.png"}
        alt={product.productName}
        className="d-block m-auto w-100 h-auto rounded-3"
        {...getRootProps()}
      />
    );
  }

  return (
    <Form onSubmit={handleSubmit} className="row py-md-5">
      <h1 className="fw-bolder m-0 text-uppercase text-center pb-5">
        <strong>Upload New Product</strong>
      </h1>
      <div className="col-lg-6">
        <React.Fragment>
          <div className="admin-product p-4 m-auto rounded-4 bg-white">
            <MyDropzone />
          </div>
        </React.Fragment>
      </div>
      <div className="col-lg-6 pt-5 pt-lg-0">
        {/* CATEGORY */}
        <Form.Group controlId="formCategory" className="form-category mb-2">
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setCategory(e.target.value)}
            className="text-uppercase text-black-50 fs-5 fw-semibold"
          >
            <option
              value="Chocolate Drip Cake"
              className="text-uppercase text-black-50 fs-5 fw-semibold"
            >
              Chocolate Drip Cake
            </option>
            <option
              value="Chocomoist Themed Cake"
              className="text-uppercase text-black-50 fs-5 fw-semibold"
            >
              Chocomoist Themed Cake
            </option>
            <option
              value="Cartoon / Character Cake"
              className="text-uppercase text-black-50 fs-5 fw-semibold"
            >
              Cartoon / Character Cake
            </option>
            <option
              value="Number Cake"
              className="text-uppercase text-black-50 fs-5 fw-semibold"
            >
              Number Cake
            </option>
          </Form.Select>
        </Form.Group>

        {/* PRODUCT NAME */}
        <Form.Group controlId="formProductname" className="w-100">
          <Form.Control
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            isInvalid={invalidProductName}
            className="product-name display-6 fw-bolder fs-1"
            style={{ color: "#6a2101" }}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please enter a product name
          </Form.Control.Feedback>
        </Form.Group>

        {/* PRODUCT PRICE */}
        <Form.Group
          controlId="formPrice"
          className="form-price d-flex align-items-center my-4"
        >
          <h2 className="fw-bolder m-0 me-2">₱</h2>
          <div>
            <Form.Control
              type="text"
              placeholder="Product Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              isInvalid={invalidPrice}
              className="fw-bolder fs-2"
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              Price must be a number
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        {/* PRODUCT DESCRIPTION */}
        <Form.Group controlId="formDescription">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            isInvalid={invalidDescription}
            className="lead fw-normal m-0 fs-5"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a product description
          </Form.Control.Feedback>
        </Form.Group>

        {/* ADD THE PRODUCT TO NEW COLLECTION */}
        <div className="d-flex align-items-center w-100 my-4">
          <input
            type="checkbox"
            className="admin-input m-0 border border-light"
            onClick={() => setSelected(selected ? "" : "-select")}
            value={addToNewCollection}
            onChange={(e) => setAddToNewCollection(e.target.checked)}
          />
          <p className="text-black-50 fs-5 fw-semibold m-0 ms-3 ms-lg-2">
            Add this product to New Collection
          </p>
        </div>

        {/* TEST THE CHECKBOX */}
        {/* <h1>{addToNewCollection ? 'Checked' : 'Not checked'}</h1> */}

        {/* UPLOAD */}
        <button
          className="admin-btn-upload rounded-3 mb-3 mb-md-0 me-3 text-uppercase fw-bold"
          onClick={handleSubmit}
        >
          Upload Product
        </button>
      </div>
    </Form>
  );
}
