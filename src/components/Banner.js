import React from "react";

function Banner({ children, title, subtitle,clase }) {
  return (
    <div className={clase}>
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}

export default Banner;
