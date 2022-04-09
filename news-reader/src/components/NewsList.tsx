import { Box, Grid } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=8dcc74ec482a4d60bfaa469de67dd7ea"
      );
      setArticles(res.data.articles);
    };

    getArticles();
  });
  return (
    <Box sx={{ flexGrow: 1 }} style={{ width: "90%", margin: "0 auto" }}>
      <Grid
        container
        spacing={5}
        alignItems="center"
      >
        {articles.map((article: Article, index) => {
          return (
            <Grid item xs={3} key={index}>
              <NewsItem
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default NewsList;
