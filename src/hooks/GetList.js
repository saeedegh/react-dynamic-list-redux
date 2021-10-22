import { useEffect, useState } from "react";
import { message } from "antd";
import axios from "axios";

export const useGetList = (hookURL) => {
  const [list, setList] = useState([]);
  const [spinning, setSpinning] = useState(true);
  //
  const getList = (url) => {
    setSpinning(true);
    axios
      .get(url)
      .then((res) => {
        console.log(res, "!res");
        setSpinning(false);
        if (res?.data?.data) {
          const newData = res.data.data.map((el) => ({
            ...el,
            selected: false,
          }));
          setList(newData);
        }
      })
      .catch((err) => {
        console.log(err, "!err");
        message.error("دریافت لیست با مشکل مواجه شده است");
        setSpinning(false);
      });
  };

  //
  useEffect(() => {
    if (hookURL) {
      getList(hookURL);
    }
  }, []);

  return { list, spinning, getList, setList };
};
