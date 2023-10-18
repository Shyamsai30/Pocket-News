import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [fetching, setFetching] = useState(false);

  const capitalizeFirsLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = `${capitalizeFirsLetter(props.category)} - NewsMonkey`;

  const updateNews = async () => {
    setFetching(true);
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setFetching(false);
    props.setProgress(100);
  };

  useEffect(() => {
    setLoading(true);
    updateNews();
    // eslint-disable-next-line
  }, [page]);

  const handleNextClick = async () => {
    if (!fetching) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevClick = async () => {
    if (!fetching && page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      {
        <div
          className="container my-3 text-center"
          style={{ border: "0px solid red" }}
        >
          {!loading && (
            <h1
              className={`my-3 text-${
                props.mode === "Dark" ? "white" : "black"
              }`}
            >
              Pocket-News - Top Headlines on
              <span className="text-primary">
                &nbsp;{capitalizeFirsLetter(props.category)}
              </span>
            </h1>
          )}
          {!loading && articles && (
            <span
              className="mx-2 flex-end d-flex px-3 py-1 text-center text-white"
              style={{
                backgroundColor: "black",
                border: "2px solid rgb(13,110,270)",
                borderRadius: "8px",
                width: "fit-content",
              }}
            >
              Page Number : {page} / {Math.ceil(totalResults / props.pageSize)}
            </span>
          )}
          {!loading && !articles && (
            <div style={{marginTop:'10rem'}}>API request access has reached its limit</div>
          )}
          {loading && (
            <Spinner
              mode={props.mode}
              category={props.category}
              capitalizeFirsLetter={props.capitalizeFirsLetter}
            />
          )}
          <div className="container row my-5" style={{}}>
            {!loading &&
              articles &&
              articles?.map((element) => {
                // const key = uuidv4();
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      isLoading={loading}
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>

          <div className="container d-flex justify-content-between">
            {!loading && articles && (
              <button
                disabled={page <= 1 || fetching}
                type="button"
                className="btn btn-black text-white bg-black"
                style={{ width: "120px", border: "2px solid rgb(13,110,270)" }}
                onClick={handlePrevClick}
              >
                &larr; Previous{" "}
              </button>
            )}
            {!loading && articles && (
              <button
                disabled={
                  page + 1 > Math.ceil(totalResults / props.pageSize) ||
                  fetching
                }
                type="button"
                className="btn btn-black text-white bg-black mx-4"
                style={{ width: "120px", border: "2px solid rgb(13,110,270)" }}
                onClick={handleNextClick}
              >
                Next &rarr;
              </button>
            )}
          </div>
        </div>
      }
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 4,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;