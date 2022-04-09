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

type Props = {
  articles: Article[];
  handleArticleRemoval: any;
}

const NewsList: React.FC<Props> = ({ articles, handleArticleRemoval }) => {
  
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
                index={index}
                removeArticle={handleArticleRemoval}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default NewsList;
