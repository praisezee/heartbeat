import React from "react";
import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer id="footer" className="bg-pink-700 text-white text-xl">
      <section className="max-w-4xl mx-auto p-4 flex justify-center">
        <FaCopyright className="mt-1 mr-1 ml-0" />
        <p className="mr-3">Copyright</p>

        {year}
      </section>
      <section className="max-w-4xl mx-auto p-4 ">
        <p className="text-center">
          Designed by{" "}
          <Link to="https://wa.me/message/DE46ZCGRKDXFP1">APUS Industries</Link>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
