import { Button, Typography } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonAppBar from "../components/common/ButtonAppBar";
import NewsList from "../components/NewsList";
import FileSaver from "file-saver";
import { auth, logout } from "../firebase-config";

export default function Homepage() {
  const [user, loading, error] = useAuthState(auth);
  const [articles, setArticles] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=1b1997abcc9d4da98732caf05a6deba6"
      );
      setArticles(res.data.articles);
    };

    getArticles();
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      return navigate("/");
    }
  });

  const exportToFile = (data: any) => {
    var blob = new Blob([JSON.stringify(data)], {
      type: `text/plain;charset=utf-8`,
    });
    FileSaver.saveAs(blob, `data.json`);
  }

  const removeArticle = (index: any) => {
    const newsList = JSON.parse(JSON.stringify(articles));
    newsList.splice(index, 1);

    setArticles(newsList);
  };
  return (
    <div>
      <ButtonAppBar />
      <br></br>
      <Typography variant="h6" gutterBottom component="div">
        Read articles and breaking news headlines from news sources and blogs
        across the web with News Reader website!
      </Typography>
      <Button variant="contained" onClick={() => exportToFile(articles)}>EXPORT</Button>
      <br></br>
      <NewsList articles={articles} handleArticleRemoval={removeArticle} />
    </div>
  );
}
