import { useState, React } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Messages from "./Messages";
import TextareaAutosize from "react-textarea-autosize";
import { Modal } from "react-bootstrap";

export default function Reviews() {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const localstorage = useSelector((state) => state.localstorage);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [reviews] = useCollection(
    db.collection("messages").orderBy("timestamp", "desc")
  );

  const sendMessage = (e) => {
    e.preventDefault();

    if (!input) {
      setShowModal(false);
      return null;
    } else if (localstorage.id) {
      db.collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        // the user must be username, not email
        user: localstorage.username,
        userImage:
          "https://th.bing.com/th/id/R.d268b238932809e18b85a7820184220f?rik=ahExR0U%2fu2zHyQ&riu=http%3a%2f%2ficon-library.com%2fimages%2fno-profile-picture-icon%2fno-profile-picture-icon-2.jpg&ehk=4X8pLfMkepeJcdTMZ8L033nQ2hfH0gJN3qGTpg62g00%3d&risl=&pid=ImgRaw&r=0",
        email: localstorage.email,
      });
      setShowModal(true);
    } else {
      db.collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
        email: localstorage.email,
      });
      setShowModal(true);
    }

    setInput("");
  };

  const checkUser = () => {
    if (!localstorage.email) {
      navigate("/login");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="review">
      <div className="container px-5 pt-5 pb-4 pb-lg-5">
        <div className="pb-md-4">
          <h1 className="fw-bolder m-0 text-uppercase text-center">
            <strong>Reviews</strong>
          </h1>
          <div className="mt-5">
            <form
              onSubmit={sendMessage}
              className="d-md-flex justify-content-center align-items-center"
            >
              <TextareaAutosize
                name="review-input"
                id="review-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onClick={() => checkUser()}
                placeholder="Write your review here!"
                className="rounded-3"
                required
              />
              <button className="submit-review text-decoration-none rounded-3 text-white d-block mx-auto m-md-0 mt-2 mt-md-0 ms-md-4 text-uppercase fw-bold">
                Submit
              </button>
            </form>

            <Modal
              show={showModal}
              className="h-100 d-flex justify-content-center align-items-center"
              id="reviewModal"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered m-4 rounded-3">
                <div className="modal-content">
                  <div className="modal-body mx-3 text-center">
                    Great! Your review has been added successfully.
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

            <hr className="my-4 mx-5" />
            <div className="row justify-content-center">
              {/* REVIEWS */}

              {reviews?.docs.map((doc) => {
                const { user, userImage, message, timestamp, email } =
                  doc.data();
                return (
                  <Messages
                    key={doc.id}
                    user={user}
                    userImage={userImage}
                    message={message}
                    timestamp={timestamp}
                    email={email}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
