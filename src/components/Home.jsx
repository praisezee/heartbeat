import React from "react";
import About from "./About";
import Contact from "./Contact";

const Home = ({ name, logo, writer, linguist }) => {
  return (
    <main className="max-w-4xl mx-auto">
      <section className="flex flex-col-reverse justify-content-center sm:flex-row p-6 items-center gap-8 mb-12">
        <article className="sm:w-1/2">
          <h4 className="max-w-md text-4xl font-bold text-center sm:text-4xl sm:text-left text-slate-900 dark:text-white">
            Hi there my name is{" "}
            <span className="text-indigo-700 dark:text-indigo-400">{name}</span>
          </h4>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            I'm a lingusit and a writer
          </p>
        </article>
        <img
          src={logo}
          alt="profile"
          className="w-1/2 rounded-3xl border border-solid"
        />
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
      <section className="p-6 my-12">
        <About writer={writer} linguist={linguist} />
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
      <section className="p-6 my-12">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
