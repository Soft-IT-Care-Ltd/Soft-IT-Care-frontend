import Link from "next/link";
import React from "react";

const Button = ({ btnLink, btnName }) => {
  return (
    <>
      <Link href={btnLink} className="bg">
        {btnName}
        <div class="liquid"></div>
      </Link>
    </>
  );
};

export default Button;
