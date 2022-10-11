import React from "react";
import { Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";

export default function AdminProducts() {
  const [productImage, setProductImage] = useState(null);
  const [category, setCategory] = useState("Chocolate Drip Cake");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [addToNewCollections, setAddToNewCollections] = useState(false);

  const [showModal1, setShowModal1] = useState(false);

  // Validation
  const [invalidProductName, setInvalidProductName] = useState(false);
  const [invalidPrice, setInvalidPrice] = useState(false);
  const [invalidDescription, setInvalidDescription] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIfValid()) {
      setShowModal1(true);
      setProductName("");
      setPrice("");
      setDescription("");
      setAddToNewCollections(false);
      const requestBody = {
        productImage: productImage,
        category: category,
        productName: productName,
        productPrice: price,
        description: description,
        newCollection: addToNewCollections,
      }

      console.log(requestBody)
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

  const closeModal = () => {
    setShowModal1(false);
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

  const renderProducts = () => {
    return (
      <div className="col-6 col-md-4 col-lg-2 pb-4">
        <div className="admin-product-card bg-white rounded-4 w-100 h-100 p-3">
          <React.Fragment>
            <MyDropzone />
          </React.Fragment>
          <div className="pt-2">
            <p className="mb-2 fw-semibold text-center">Product Name</p>
            <hr className="m-0" />
            <p className="my-1 fw-bolder text-center">
              <small>₱ 000.00</small>
            </p>
            <hr className="mb-2 mt-0 mx-0" />
            <div className="d-flex justify-content-center align-items">
              <FontAwesomeIcon
                icon={faTrash}
                type="button"
                className="trash fs-6"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="admin-products">
      <div className="container px-5 pt-5 pb-4">
        <div className="pt-md-5">
          <h1 className="fw-bolder m-0 text-uppercase text-center pb-5">
            <strong>Upload New Product</strong>
          </h1>

          {/* UPLOAD NEW PRODUCT FORM */}
          <Form onSubmit={handleSubmit} className="row pb-5">
            <div className="col-lg-6">
              <React.Fragment>
                <div className="admin-product p-4 m-auto rounded-4 bg-white">
                  <MyDropzone />
                </div>
              </React.Fragment>
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0">
              {/* CATEGORY */}
              <Form.Group
                controlId="formCategory"
                className="form-category mb-2"
              >
                <Form.Select
                  aria-label="Default select example"
                  value={category}
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

              {/* ADD THE PRODUCT TO NEW Collections */}
              <div className="d-flex align-items-center w-100 my-4">
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
                onClick={handleSubmit}
                // onClick={() => setAddToNewCollections((c) => !c)}
              >
                Upload Product
              </button>
            </div>
          </Form>

          {/* Modals */}
          <Modal
            show={showModal1}
            id="showModal1"
            tabIndex="-1"
            aria-labelledby="showModalLabel1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body mx-3 text-center">
                  Great! The product has been successfully uploaded.
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

          <h2 className="fw-bolder m-0 text-uppercase text-center pb-4 pt-md-4">
            <strong>New Collections</strong>
          </h2>
          <div className="row justify-content-center">{renderProducts()}</div>

          <h2 className="fw-bolder m-0 text-uppercase text-center pb-4 pt-5">
            <strong>Chocolate Drip Cakes</strong>
          </h2>
          <div className="row justify-content-center">{renderProducts()}</div>

          <h2 className="fw-bolder m-0 text-uppercase text-center pb-4 pt-5">
            <strong>Chocomoist Themed Cakes</strong>
          </h2>
          <div className="row justify-content-center">{renderProducts()}</div>

          <h2 className="fw-bolder m-0 text-uppercase text-center pb-4 pt-5">
            <strong>Cartoon / Character Cakes</strong>
          </h2>
          <div className="row justify-content-center">{renderProducts()}</div>

          <h2 className="fw-bolder m-0 text-uppercase text-center pb-4 pt-5">
            <strong>Number Cakes</strong>
          </h2>
          <div className="row justify-content-center">{renderProducts()}</div>

          {/* Modal for Delete */}
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Delete review
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body body-delete mx-3 rounded-2 text-danger">
                  Are you sure you want to delete this review?
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-target="#staticBackdrop0"
                    data-bs-toggle="modal"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="staticBackdrop0"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-4 border-0">
                <div className="border border-1 rounded-3">
                  <div className="modal-body mx-3 text-center">
                    Great! The product has been successfully deleted.
                  </div>
                  <div className="modal-footer border-0">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
