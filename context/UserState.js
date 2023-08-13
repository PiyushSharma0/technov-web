"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UserContext from "./UserContext";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
const UserState = (props) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const router = useRouter();

  const [data, setData] = useState({
    displayName: user,
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // data = user;
      setData(user);
      console.log(user);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
};

export default UserState;
