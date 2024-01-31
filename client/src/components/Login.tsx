"use client";

import { firebaseAuth } from "@/utils/FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";

import axios from "axios";

import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleLogin = async () => {
    // const provider = new GoogleAuthProvider();

    // const {
    //   user: { displayName: name, email, photoURL: profileImage },
    // } = await signInWithPopup(firebaseAuth, provider);

    try {
      const { data } = await axios.post(CHECK_USER_ROUTE, {});
      console.log({ data });
    } catch (error) {}
  };

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image
          src="/whatsapp.gif"
          alt="WhatsApp LOGO"
          height={300}
          width={300}
        />
        <span className="text-7xl">WhatsApp</span>
      </div>
      <button
        className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg"
        onClick={() => handleLogin()}
      >
        <FcGoogle className="text-4xl" />
        <span className="text-white text-4xl">Login with Google</span>
      </button>
    </div>
  );
};

export default Login;
