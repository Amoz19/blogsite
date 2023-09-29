import { useEffect, useState } from "react";
import { auth } from "../firestore";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingIndocator from "./components/LoadingIndicator";

const Auth = () => {
  const router = useRouter();
  const notifyerror = () => toast.error("Incorrect Email or Password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (err) {
      setErr(true);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.prefetch("/adminDashboard");
        router.push("/adminDashboard");
      } else {
        setLoading(false);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col h-screen justify-center">
            <div className="w-4/5  sm:w-3/5 lg:w-2/5 mx-auto py-11 focus-within:rounded-md focus-within:border focus-within:border-blue-900 p-4 bg-blue-400 rounded">
              <h1 className="text-center text-blue-200 text-xl">
                Please Login First
              </h1>
              <div className="bg-neutral-50 rounded-md my-3 py-2">
                <input
                  className="w-full focus:outline-none bg-transparent focus:ring-0 pl-2"
                  placeholder="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                />
              </div>
              {errors.email && errors.email.type === "required" && (
                <p className=" text-red-900 my-2">Email is required.</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className=" text-red-900 my-2">Email is not valid.</p>
              )}
              <div className="bg-neutral-50 rounded-md py-2">
                <input
                  className="w-full focus:outline-none bg-transparent focus:ring-0 ml-2"
                  placeholder="password"
                  {...register("password", { required: true, minLength: 6 })}
                />
              </div>
              {errors.password && errors.password.type === "required" && (
                <p className="text-red-900 my-2">Password is required.</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className="text-red-900 my-2">
                  Password should be at-least 8 characters.
                </p>
              )}
              <button
                className="w-full mt-2 bg-blue-100 rounded"
                onClick={notifyerror}
              >
                Log In
              </button>
              {err && <ToastContainer position="top-center" />}
            </div>
          </div>
        </form>
      )}
    </>
  );
};
export default Auth;
