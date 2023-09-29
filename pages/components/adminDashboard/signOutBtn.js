import { signOut } from "firebase/auth";
import { auth } from "@/firestore";

export default function SignOutBtn() {
  const singOut = async () => {
    try {
      signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center">
      <button
        className="w-1/3 flex justify-center text-white bg-red-600 px-5 my-3 rounded-md"
        onClick={singOut}
      >
        Logout
      </button>
    </div>
  );
}
