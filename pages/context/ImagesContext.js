import { createContext, useContext, useState } from "react";
import { auth } from "../../firestore";

import { storage } from "../../firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { colRef } from "../../firestore";
import { addDoc, serverTimestamp } from "firebase/firestore";

// import { useFormData } from "./DescriptionContext";
import { useTitle, useDes } from "./DescriptionContext";

const ImagesContext = createContext({
  imageUpload: null,
  imageUrls: [],
  uploadFile: () => {},
  imageChange: () => {},
});

const useImages = () => {
  const context = useContext(ImagesContext);
  if (!context) {
    throw new Error("context does not exist");
  }
  return context;
};

export const useImageUpload = () => {
  const { imageUpload } = useImages();
  return {
    imageUpload,
  };
};

export const useUploadFile = () => {
  const { uploadFile } = useImages();
  return {
    uploadFile,
  };
};

export const useImageChange = () => {
  const { imageChange } = useImages();
  return {
    imageChange,
  };
};

export const ImagesProvider = ({ children, fileInputRef }) => {
  const [imageUpload, setImageUpload] = useState(null);

  // const {formData} = useFormData()
  const { title } = useTitle();
  const { description } = useDes();

  const uploadFile = async () => {
    if (imageUpload === null) return;
    try {
      const imageRef = ref(storage, `images/${imageUpload.name}`);
      await uploadBytes(imageRef, imageUpload);

      const downloadUrl = await getDownloadURL(imageRef);

      // const uploadDate = new Date(month,day);

      await addDoc(colRef, {
        title: title,
        description: description,
        url: downloadUrl,
        userId: auth.currentUser.uid,
        createdAt: serverTimestamp(),
        // uploadDate: uploadDatez`
      });

      alert("Uploaded");
    } catch (err) {
      console.log(err);
    }
  };

  const imageChange = (event) => {
    setImageUpload(event.target.files[0]);
  };

  const value = {
    imageUpload,
    // imageUrls,
    uploadFile,
    imageChange,
  };
  return (
    <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
  );
};

const ImagesContextCom = () => {
  // Your DataContext component logic here
  return <div>Images Component</div>;
};

export default ImagesContextCom;
