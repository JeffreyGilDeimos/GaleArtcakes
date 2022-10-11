import React, { useEffect } from "react";
import * as actionUser from "../../redux/actions/actionUser";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import Footer from "../Footer";
import Navigation from "../Navigation";
import Hero from "../Hero";
import Featured from "../Featured";
import Reviews from "../Reviews";
import NewCollections from "../NewCollections";

export default function Home() {
  const [user] = useAuthState(auth);
  const [userList] = useCollection(db.collection("users"));
  const activeUser = useSelector((state) => state.activeUser);
  const { loginUser } = bindActionCreators(actionUser, useDispatch());

  useEffect(() => {
    if (user) {
      loginUser({ email: user.email });
    } else if (userList?.docs.length !== 0) {
      userList?.docs.forEach((doc) => {
        if (doc.data().email === activeUser.email) {
          loginUser({ id: doc.id, email: doc.data().email, username: doc.data().username });
        }
      });
    }
  }, [user, userList, activeUser.email, activeUser.username]);

  return (
    <>
      <Navigation />
      <Hero />
      <Featured />
      <NewCollections />
      <Reviews />
      <Footer />
    </>
  );
}
