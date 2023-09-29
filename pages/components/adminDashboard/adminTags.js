import { AiOutlineUpload, AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import UploadSection from "./uploadSection";
import Blogs from "../Blogs";
import { useRouter } from "next/router";

export default function AdminTags() {
  const router = useRouter();
  const [selectedComponent, setSelectedComponent] = useState("ComponentA");

  const handleComponentAClick = () => {
    setSelectedComponent("ComponentA");
  };

  const handleComponentBClick = () => {
    setSelectedComponent("ComponentB");
  };

  return (
    <>
      <div className="flex">
        <h1
          className={`flex w-2/4 justify-center cursor-pointer text-sky-300 ${
            selectedComponent === "ComponentA" ? "icon-clicked" : ""
          }`}
          onClick={handleComponentAClick}
        >
          <AiOutlineUpload className={`text-2xl`} />
          <p>Upload</p>
        </h1>
        <h1
          className={`flex w-2/4 justify-center cursor-pointer text-sky-300 ${
            selectedComponent === "ComponentB" ? "icon-clicked" : ""
          }`}
          onClick={handleComponentBClick}
        >
          <AiFillEdit className={`text-2xl text-center `} />
          <p>Edit</p>
        </h1>
      </div>
      {selectedComponent === "ComponentA" && <UploadSection />}
      {selectedComponent === "ComponentB" && <Blogs showAdminDash={true} />}
    </>
  );
}
