import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [postdata, setPostdata] = useState([]);

  const userinstance = axios.create({
    baseURL: "https://dummyjson.com/",
  });

  const postinstance = axios.create({
    baseURL: "https://dummyjson.com/",
  });

  const getData = async () => {
    const rosponse = await userinstance.get(`users`);
    const rosponse2 = await postinstance.get(`posts`)
 
    setData(rosponse.data.users);
    setPostdata(rosponse2.data.posts)
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);ç
  console.log(postdata)

  return <Home />;
}

export default App;
