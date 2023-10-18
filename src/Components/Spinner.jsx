import React from "react";

const Spinner = (props) => {
  const capitalizeFirsLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="text-center" style={{marginTop:'10rem'}}>
      <span
        className={`fs-3 text-${props.mode === "Dark" ? "light" : "black"}`}
      >
        Loading top headlines for{" "}
        <span className={`text-primary`}>
          {capitalizeFirsLetter(props.category)} News.......
        </span>
      </span>
    </div>
  );
};

export default Spinner;