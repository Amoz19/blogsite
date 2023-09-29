import SignOutBtn from "./components/adminDashboard/signOutBtn";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firestore";
import AdminTags from "./components/adminDashboard/adminTags";

import { AiOutlineArrowLeft } from "react-icons/ai";
import LoadingIndocator from "./components/LoadingIndicator";

export default function AdminDashboard() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        router.prefetch("/components/auth");
        router.push("/components/auth");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingIndocator />
      ) : (
        <>
          <AiOutlineArrowLeft
            onClick={() => router.back()}
            className="my-3 bg-green-500 w-16 h-6 rounded-xl text-white text-lg"
          />
          <h1 className="text-center mb-4 text-xl">AdminDashboard</h1>
          <SignOutBtn />
          <AdminTags />
        </>
      )}
    </>
  );
}
