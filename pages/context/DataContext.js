import { createContext, useContext, useEffect, useState } from "react";
import { colRef } from "../../firestore";
import { onSnapshot, query, orderBy } from "firebase/firestore";

const DataContext = createContext({
  datas: {},
});

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Empty Context");
  }
  return context;
};

export const useDatas = () => {
  const { datas } = useData();
  return {
    datas,
  };
};

export const DataProvider = ({ children }) => {
  const [datas, setDatas] = useState({});
  // console.log(datas)

  const q = query(colRef, orderBy("createdAt"));
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      const dataList = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDatas(dataList.reverse());
    });
  }, []);
  const value = {
    datas,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const DataContextCom = () => {
  // Your DataContext component logic here
  return <div>DataContext Component</div>;
};

export default DataContextCom;
