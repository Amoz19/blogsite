// import Input from "../input";

import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firestore";
import { useState } from "react";

import QuillEditor from "./quillEditor";

import { useDatas } from "@/pages/context/DataContext";

export default function Ed({ id, title, description }) {
  const [value, setValue] = useState(description);
  const [updateValue, setUpdateValue] = useState(title);
  const [showUi, setShowUi] = useState(false);

  const onHandleChange = (e) => {
    setUpdateValue(e.target.value);
  };

  const deleteFun = async () => {
    const colRef = doc(db, "description", id);
    await deleteDoc(colRef);
  };

  const updateFun = async () => {
    const colRef = doc(db, "description", id);
    await updateDoc(colRef, { title: updateValue, description: value });
  };

  const handleEdit = () => {
    setShowUi((prev) => !prev);
  };
  return (
    <>
      {showUi ? (
        <div className="flex flex-col gap-y-2 mt-5">
          <input
            type="text"
            value={updateValue}
            onChange={onHandleChange}
            placeholder="Edit title"
            className="w-full bg-transparent border focus:outline-none text-black placeholder:text-xl mr-2"
            required
          />
          <QuillEditor value={value} onChange={setValue} required />
          <button
            onClick={updateFun}
            className="text-white bg-green-600 px-5 py-0.5 rounded-md"
          >
            Update
          </button>
          <button
            onClick={deleteFun}
            className="text-white bg-red-600  rounded-md"
          >
            Delete
          </button>
          <button onClick={handleEdit} className="bg-green-300">
            {showUi ? "Hide" : "Edit"}
          </button>
        </div>
      ) : (
        <button
          onClick={handleEdit}
          className="bg-green-300 px-10 rounded mt-3 text-slate-800"
        >
          Edit
        </button>
      )}
    </>
  );
}
