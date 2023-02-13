import React from "react";
import { Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";

const Header = () => {
  let mobileMenu;
  const handleOpen = async () => {
    /* openBtn = await document.querySelector("#open-btn"); */
    mobileMenu = await document.querySelector("#mobile-menu");
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
  };

  const handleClose = async () => {
    mobileMenu = await document.querySelector("#mobile-menu");
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
  };
  return (
    <header className="bg-pink-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-medium">My portfolio</h1>
        </Link>
        <div>
          <BsList
            className="btn text-3xl md:hidden cursor-pointer relative w-8 h-8"
            id="open-btn"
            role="button"
            onClick={handleOpen}
          />
        </div>
        <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
          <Link to="/" className="hover:opacity-70">
            Home
          </Link>
          <Link to="about" className="hover:opacity-90">
            About
          </Link>
          <Link to="contact-me" className="hover:opacity-90">
            contact Me
          </Link>
        </nav>
      </section>
      <section
        id="mobile-menu"
        className="absolute top-0 bg-black w-full text-5xl flex-col justify-content-center origin-top  hidden animate-open-menu"
      >
        <BsXLg
          className="text-8xl self-end px-6"
          role="button"
          onClick={handleClose}
        />
        <nav
          className="flex flex-col min-h-screen itens-center py-8"
          onClick={handleClose}
        >
          <Link to="/" className="w-full text-center py-6 hover:opacity-90">
            Home
          </Link>
          <Link to="about" className="w-full text-center py-6 hover:opacity-90">
            About
          </Link>
          <Link
            to="contact-me"
            className="w-full text-center py-6 hover:opacity-90"
          >
            contact Me
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
