import React, { useSelector } from "react";
import utils from "../utilities/utils";
import { Modal } from "react-bootstrap";

const ReceiptModal = (props) => {
  const mapTotal = () =>
    props.receipt &&
    props.receipt.length > 0 &&
    props.receipt.reduce((accumulator, item) => {
      return accumulator + item.price.unit_amount * item.quantity;
    }, 0);
  const convertedTotal = mapTotal() && mapTotal().toString().slice(0, -2);
  return (
    <div>
      <Modal
        show={props.showModal}
        className="h-100 d-flex justify-content-center align-items-center"
        id="cakeModal1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered m-4 rounded-3">
          <div className="modal-content">
            <div className="modal-body mx-3 mt-2 mb-0 text-left">
              {!props.receipt && (
                <div>
                  Loading. Please wait... <br /> <br />
                </div>
              )}
              {props.receipt &&
                props.receipt.length > 0 &&
                props.receipt?.map((data) => (
                  <>
                    <div className="mb-3" key={data.id}>
                      <h5 classsName="mb-3 m-0"><strong>{data.description}</strong></h5>
                      <div>
                        Unit price:{" "}
                        {utils.toPhp.format(
                          parseInt(
                            data.price.unit_amount.toString().slice(0, -2)
                          )
                        )}
                      </div>
                      <div>Quantity: {data.quantity}</div>
                    </div>
                  </>
                ))}
              <div>
                <b>Total: </b>
                {utils.toPhp.format(convertedTotal)}
              </div>
            </div>
            <div className="modal-footer border-0 d-flex align-items-center justify-content-end">
              {props.receiptUrl && (
                <div className="cursor-pointer">
                  <a
                    href={props.receiptUrl}
                    target="_blank"
                    className="view-receipt"
                  >
                    View receipt
                  </a>
                </div>
              )}
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => props.closeModal()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ReceiptModal;
