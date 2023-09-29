import { useDatas } from "../context/DataContext";
import { useRouter } from "next/router";
import { useEffect, useState, React } from "react";
import Nav from "../components/nav";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CreateDate from "../components/CreateDate";
// import Image from "next/image";
import LoadingIndocator from "../components/LoadingIndicator";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firestore";

export default function BlogDetail() {
  const router = useRouter();
  const { datas } = useDatas();
  const [blogData, setBlogData] = useState();

  const { id } = router.query;
  const currentRoute = router.pathname;

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

  useEffect(() => {
    if (id && Array.isArray(datas)) {
      const blog = datas.find((data) => data.id === id);
      setBlogData(blog);
    }
  }, [id, datas]);

  return (
    <div>
      {blogData ? (
        <>
          <Nav />
          <div className="h-screen">
            <div className="w-4/5 m-auto">
              <AiOutlineArrowLeft
                onClick={() => router.back()}
                className="my-3 bg-green-500 w-16 h-6 rounded-xl text-white text-lg"
              />
              <div className="flex items-center text-slate-500">
                <CreateDate createdTime={blogData.createdAt} format="mdy" />
              </div>
              <img
                src={blogData.url}
                width={300}
                height={300}
                alt={blogData.title}
                quality={100}
              />
              <h1 className="text-2xl font-bold mb-3 mt-1">{blogData.title}</h1>
              <div>
                {blogData.description && (
                  <p
                    dangerouslySetInnerHTML={{ __html: blogData.description }}
                  ></p>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <LoadingIndocator />
      )}
    </div>
  );
}
