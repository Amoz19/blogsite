// import { AiOutlineSearch } from "react-icons/ai";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firestore";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const AdminLoginButton = ({ children, handleClick }) => {
  return (
    <button
      className="bg-white text-slate-700 px-5 py-0 rounded-full"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default function Nav() {
  const router = useRouter();
  const handleAdminClick = (e) => {
    e.preventDefault();
    router.push("/adminDashboard");
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    router.push("/auth");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <nav className="flex justify-around items-center leading-10 bg-blue-600 text-slate-900">
      <h2 className="text-white">
        PUS <small>Feed</small>
      </h2>
      {isLoggedIn ? (
        <AdminLoginButton handleClick={handleAdminClick}>
          Admin
        </AdminLoginButton>
      ) : (
        <AdminLoginButton handleClick={handleLoginClick}>
          Login
        </AdminLoginButton>
      )}
    </nav>
  );
}

{
  /* <button
  className="bg-white text-slate-700 px-5 py-0 rounded-full"
  onClick={handleClick}
>
  Admin
</button>; */
}
