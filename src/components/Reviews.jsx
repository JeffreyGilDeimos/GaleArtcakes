import { useState, React } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Messages from "./Messages";
import TextareaAutosize from "react-textarea-autosize";

export default function Reviews() {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const activeUser = useSelector((state) => state.activeUser);
  const navigate = useNavigate();
  const [reviews] = useCollection(
    db.collection("messages").orderBy("timestamp", "desc")
  );

  const sendMessage = (e) => {
    e.preventDefault();

    if (activeUser.id) {
      db.collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        // the user must be username, not email
        user: activeUser.email,
        userImage:
          "https://th.bing.com/th/id/R.d268b238932809e18b85a7820184220f?rik=ahExR0U%2fu2zHyQ&riu=http%3a%2f%2ficon-library.com%2fimages%2fno-profile-picture-icon%2fno-profile-picture-icon-2.jpg&ehk=4X8pLfMkepeJcdTMZ8L033nQ2hfH0gJN3qGTpg62g00%3d&risl=&pid=ImgRaw&r=0",
        email: activeUser.email,
      });
    } else {
      db.collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
        email: activeUser.email,
      });
    }

    setInput("");
  };

  const checkUser = () => {
    if (!activeUser.email) {
      navigate("/login");
    }
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
              />
              <button className="submit-review text-decoration-none rounded-3 text-white d-block mx-auto m-md-0 mt-2 mt-md-0 ms-md-4 text-uppercase fw-bold">
                Submit
              </button>
            </form>

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
