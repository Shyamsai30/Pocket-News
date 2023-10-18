import React from "react";
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date ,source} = props;
  return (
    <>
    
      <div className={`border border-${props.mode==="Dark"?"primary":"dark"} card my-2 d-flex flex-wrap align-content-center`}>
        
        <img
          src={
            !imageUrl
              ? "https://data1.ibtimes.co.in/en/full/784804/sony-shut-pixelopus-developer-video-game-concrete-genie.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
          
        />
        
        <div className="card-body">
        <span className="badge rounded-pill bg-danger"> {source} </span>
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">{description}....</p>
          <p className="">
            <small className="text-dark-emphasis underline">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;