import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

import * as actionReceipt from "../../redux/actions/actionReceipt";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import ReceiptModal from '../ReceiptModal';

const RecentOrders = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [receipt, setReceipt] = useState(null);
    const [receiptUrl, setReceiptUrl] = useState(null);

    const { getReceiptData, getReceiptUrl } = bindActionCreators(
        actionReceipt,
        useDispatch()
      );
    const closeModal = (e) => {
        setShowModal(false);
        setReceipt(null);
        setReceiptUrl(null);
    };
    const handleClick = (paymentId) => {
        setShowModal(true);
        console.log(paymentId);
        getReceiptData(paymentId).then((response) => setReceipt(response.payload.data));
        getReceiptUrl(paymentId).then((response) => setReceiptUrl(response.payload.receiptUrl));
    }

  return (
    <>
        <h2 className="mt-5 mt-md-0 mb-3"><strong>Recent Orders</strong></h2>
        {
            props.paymentList.map(payment => (
                <>
                    <div
                        key={payment.paymentId}
                        className="order-data my-2 mx-3"
                        onClick={() => handleClick(payment.paymentId)}
                    >
                        <u>
                        {new Date(payment.createdDate).toDateString()}
                        {' '}
                        {new Date(payment.createdDate).toLocaleTimeString()}
                        <FontAwesomeIcon className="ms-2 cursor-pointer" icon={faArrowAltCircleRight} /></u>
                    </div>
                </>
            ))
        }
        <ReceiptModal
            receipt={receipt}
            showModal={showModal}
            closeModal={closeModal}
            receiptUrl={receiptUrl}
        />
    </>
  )
}

export default RecentOrders