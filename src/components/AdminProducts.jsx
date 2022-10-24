import React from "react";
import { Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import * as actionProduct from "../redux/actions/actionProduct";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

export default function AdminProducts() {
  const [productImage, setProductImage] = useState(null);
  const [category, setCategory] = useState("Chocolate Drip Cake");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [addToNewCollections, setAddToNewCollections] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const { getAllProducts, addProduct, deleteProduct } = bindActionCreators(
    actionProduct,
    useDispatch()
  );
  const productList = useSelector((state) => state.productList);

  // Validation
  const [invalidProductName, setInvalidProductName] = useState(false);
  const [invalidPrice, setInvalidPrice] = useState(false);
  const [invalidDescription, setInvalidDescription] = useState(false);

  useEffect(() => {
    console.log(getAllProducts());
    getAllProducts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIfValid()) {
      const requestBody = {
        imageLink: productImage,
        category: category,
        productName: productName,
        price: price,
        description: description,
        featured: addToNewCollections ? "YES" : "NO",
      };

      console.log(requestBody);
      addProduct(requestBody)
        .then((response) => {
          console.log(response, "response");
          setInvalidProductName(false);
          setShowModal1(true);
          setProductName("");
          setPrice("");
          setDescription("");
          setAddToNewCollections(false);
          setCategory("Chocolate Drip Cake");
        })
        .catch((error) => {
          setInvalidProductName(true);
          console.log(error, "error");
        });
    }
  };

  const checkIfValid = () => {
    let isValid = true;

    // Check if productName is valid
    // Create a condition that NO product should have the SAME Product Name
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

  const closeModal = () => {
    setShowModal(false);
    setShowModal1(false);
  };

  function MyDropzone(product) {
    // Callback function
    const onDrop = useCallback((acceptedFiles) => {
      const file = acceptedFiles[0];

      const formData = new FormData();
      formData.append("file", file);

      //Upload Image
      axios
        .put(
          `https://artcakes.herokuapp.com/product/${product.productId}/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          console.log("file uploaded successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    // React Dropzone
    const { getRootProps } = useDropzone({ onDrop });

    // Return statement
    return (
      <img
        src={
          product.imageLink
            ? `https://artcakes.herokuapp.com/product/${product.productId}/download`
            : "/images/no-image.png"
        }
        alt={product.productName}
        className="d-block m-auto w-100 h-auto rounded-3"
        {...getRootProps()}
      />
    );
  }

  const renderProducts = (category) => {
    return (
      <>
        {productList
          .filter(
            (product) =>
              // product.category === category && product.featured !== "YES"
              product.category === category
          )
          .map((product) => (
            <div
              className="col-6 col-md-4 col-lg-2 pb-4"
              key={product.productId}
            >
              <div className="admin-product-card bg-white rounded-4 w-100 h-100 p-3">
                <React.Fragment>
                  <MyDropzone {...product} />
                </React.Fragment>
                <div className="pt-2">
                  <p className="mb-2 fw-semibold text-center">
                    {product?.productName.substring(0, 10)}...
                  </p>
                  <hr className="m-0" />
                  <p className="my-1 fw-bolder text-center">
                    <small>₱ {product.price}</small>
                  </p>
                  <hr className="mb-2 mt-0 mx-0" />
                  <div className="d-flex justify-content-center align-items">
                    <FontAwesomeIcon
                      icon={faTrash}
                      type="button"
                      className="trash fs-6"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteProduct(product.productId)
                          .then((response) => {
                            console.log(response, "response");
                            setShowModal(true);
                          })
                          .catch((error) => {
                            console.log(error, "error");
                          });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  };

  const renderFeaturedProducts = () => {
    return (
      <>
        {productList
          .filter((product) => product.featured === "YES")
          .map((product) => (
            <div
              className="col-6 col-md-4 col-lg-2 pb-4"
              key={product.productId}
            >
              <div className="admin-product-card bg-white rounded-4 w-100 h-100 p-3">
                <React.Fragment>
                  <MyDropzone {...product} />
                </React.Fragment>
                <div className="pt-2">
                  <p className="mb-2 fw-semibold text-center">
                    {product?.productName.substring(0, 10)}...
                  </p>
                  <hr className="m-0" />
                  <p className="my-1 fw-bolder text-center">
                    <small>₱ {product.price}</small>
                  </p>
                  <hr className="mb-2 mt-0 mx-0" />
                  <div className="d-flex justify-content-center align-items">
                    <FontAwesomeIcon
                      icon={faTrash}
                      type="button"
                      className="trash fs-6"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteProduct(product.productId)
                          .then((response) => {
                            console.log(response, "response");
                            setShowModal(true);
                          })
                          .catch((error) => {
                            console.log(error, "error");
                          });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  };

  return (
    <section id="admin-products">
      <div className="container px-5 pt-5 pb-4">
        <div className="pt-md-5">
          <h2 className="fw-bolder m-0 text-uppercase text-center pb-5">
            <strong>Upload New Product</strong>
          </h2>

          {/* UPLOAD NEW PRODUCT FORM */}
          <Form onSubmit={handleSubmit} className="row pb-5">
            <div className="col-lg-6 pe-lg-3">
              <div className="admin-product p-4 m-auto rounded-4 bg-white float-md-end">
                <div className="overflow-hidden rounded-3">
                  <img
                    src="/images/no-image-icon.png"
                    alt="logo"
                    className="admin-product-img d-block m-auto w-100 h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0 ps-lg-3 m-auto m-lg-0">
              {/* CATEGORY */}
              <Form.Group
                controlId="formCategory"
                className="form-category mb-3"
              >
                <Form.Select
                  aria-label="Default select example"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="text-black-50 fs-5 fw-bolder"
                >
                  <option
                    value="Chocolate Drip Cake"
                    className="text-black-50 fs-5 fw-semibold"
                  >
                    Chocolate Drip Cake
                  </option>
                  <option
                    value="Themed Cake"
                    className="text-black-50 fs-5 fw-semibold"
                  >
                    Themed Cake
                  </option>
                  <option
                    value="Cartoon/Character Cake"
                    className="text-black-50 fs-5 fw-semibold"
                  >
                    Cartoon/Character Cake
                  </option>
                  <option
                    value="Number Cake"
                    className="text-black-50 fs-5 fw-semibold"
                  >
                    Number Cake
                  </option>
                </Form.Select>
              </Form.Group>

              {/* PRODUCT NAME */}
              <Form.Group controlId="formProductname" className="form-name">
                <Form.Control
                  type="text"
                  placeholder="Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  isInvalid={invalidProductName}
                  className="product-name display-6 fw-bold fs-5"
                  style={{ color: "#6a2101" }}
                  required
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Product Name already exists. Please try again!
                  {/* no product should have the same product name */}
                </Form.Control.Feedback>
              </Form.Group>

              {/* PRODUCT PRICE */}
              <Form.Group
                controlId="formPrice"
                className="form-price d-flex align-items-center my-3"
              >
                <h3 className="fw-bold m-0 me-2">₱</h3>
                <div className="w-100">
                  <Form.Control
                    type="text"
                    placeholder="Product Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    isInvalid={invalidPrice}
                    className="fw-bold fs-5"
                    required
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Price must be a number
                  </Form.Control.Feedback>
                </div>
              </Form.Group>

              {/* PRODUCT DESCRIPTION */}
              <Form.Group
                controlId="formDescription"
                className="form-description"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Product description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  isInvalid={invalidDescription}
                  className="fw-bold m-0 fs-5"
                  // required
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please enter a product description
                </Form.Control.Feedback>
              </Form.Group>

              {/* ADD THE PRODUCT TO NEW Collections */}
              <div className="d-flex align-items-center w-100 mt-3 mb-4 mx-0">
                <input
                  type="checkbox"
                  className="admin-input m-0 border border-light"
                  value={addToNewCollections}
                  checked={addToNewCollections}
                  onChange={(e) => setAddToNewCollections(e.target.checked)}
                />
                <p className="text-black-50 fs-5 fw-semibold m-0 ms-3 ms-lg-2">
                  Add this product to New Collections
                </p>
              </div>

              {/* TEST THE CHECKBOX */}
              {/* <h1>{addToNewCollections ? "Checked" : "Not checked"}</h1> */}

              {/* UPLOAD */}
              <button
                className="admin-btn-upload rounded-3 mb-3 mb-md-0 me-3 text-uppercase fw-bold"
                // onClick={() => setAddToNewCollections((c) => !c)}
              >
                Upload Product
              </button>
            </div>
          </Form>

          {/* Modals */}
          <Modal
            show={showModal}
            id="showModal"
            className="h-100 d-flex justify-content-center align-items-center"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered m-4 rounded-3">
              <div className="modal-content">
                <div className="modal-body mx-3 text-center">
                  Great! The product has been deleted successfully.
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => closeModal()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </Modal>

          <Modal
            show={showModal1}
            id="showModal1"
            className="h-100 d-flex justify-content-center align-items-center"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered m-4 rounded-3">
              <div className="modal-content">
                <div className="modal-body mx-3 text-center">
                  Great! The product has been uploaded successfully.
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => closeModal()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </Modal>

          <h3 className="fw-bolder m-0 text-uppercase text-center pb-4 pt-md-4">
            <strong>New Collections</strong>
          </h3>
          <div className="row justify-content-center">
            {renderFeaturedProducts("true")}
          </div>

          <h3 className="fw-bolder m-0 text-uppercase text-center pb-4 pt-5">
            <strong>Chocolate Drip Cakes</strong>
          </h3>
          <div className="row justify-content-center">
            {renderProducts("Chocolate Drip Cake")}
          </div>

          <h3 className="fw-bolder m-0 text-uppercase text-center pb-4 pt-5">
            <strong>Chocomoist Themed Cakes</strong>
          </h3>
          <div className="row justify-content-center">
            {renderProducts("Themed Cake")}
          </div>

          <h3 className="fw-bolder m-0 text-uppercase text-center pb-4 pt-5">
            <strong>Cartoon / Character Cakes</strong>
          </h3>
          <div className="row justify-content-center">
            {renderProducts("Cartoon/Character Cake")}
          </div>

          <h3 className="fw-bolder m-0 text-uppercase text-center pb-4 pt-5">
            <strong>Number Cakes</strong>
          </h3>
          <div className="row justify-content-center">
            {renderProducts("Number Cake")}
          </div>
        </div>
      </div>
    </section>
  );
}
