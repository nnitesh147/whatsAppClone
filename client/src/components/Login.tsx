"use client";

import { firebaseAuth } from "@/utils/FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";

import axios from "axios";

import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

import { logo, reducercases } from "../context/constants";
import { useStateProvider } from "@/context/StateContext";

const Login = () => {
  const router = useRouter();

  const [{}, dispatch] = useStateProvider();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();

    const {
      user: { displayName: name, email, photoURL: profileImage },
    } = await signInWithPopup(firebaseAuth, provider);

    if (email) {
      try {
        const { data } = await axios.post(CHECK_USER_ROUTE, {
          name: name,
          email: email,
          photoUrl: profileImage,
        });

        if (data?.message === "New User") {
          dispatch({ type: reducercases.Set_New_User, newUser: true });
          dispatch({
            type: reducercases.Set_User_Info,
            userInfo: {
              name,
              email,
              profileImage,
            },
          });
          router.push("/onboarding");
        }
      } catch (error) {}
    }
  };

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image
          src={logo}
          alt="/whatsapp.gif"
          height={200}
          width={200}
          className="rounded-full object-contain"
        />
        <span className="text-7xl">ChatHub</span>
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
