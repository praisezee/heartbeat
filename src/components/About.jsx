import React from "react";

const About = ({ writer, linguist }) => {
  return (
    <main className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        About me
      </h2>
      <hr className="mx-auto bg-black dark:bg-white w-1/6" />
      <section className="flex flex-col justify-content-center sm:flex-row p-6 items-center gap-8 mb-12">
        <img
          src={writer}
          alt="profile"
          className="w-1/2 rounded-3xl border border-solid shadow shadow-slate-100"
        />
        <article className="sm:w-1/2">
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-100">
            I am a skilled and experienced writer, with a passion for creating
            compelling and engaging content. I have a wide range of writing
            experience, from articles and blog posts to novels and short
            stories. I am dedicated to producing high-quality work that meets
            the needs of my clients and readers. Whether you need content for
            your website, a product description, or a piece of fiction, I have
            the skills and creativity to bring your ideas to life. I am
            committed to meeting deadlines and working with you to create
            content that exceeds your expectations
          </p>
        </article>
      </section>
      <section className="flex flex-col-reverse justify-content-center sm:flex-row p-6 items-center gap-8 mb-12">
        <article className="sm:w-1/2">
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-100">
            I am a linguist with a passion for language and its complexities. I
            have a strong background in linguistic research and analysis, with a
            focus on phonetics, phonology, morphology, syntax, semantics, and
            pragmatics. I have a master's degree in Linguistics and have
            experience working with a wide range of languages. I am dedicated to
            understanding how language works and how it is used in society. I
            have worked on projects related to language acquisition, language
            documentation, and language revitalization. I am also interested in
            the intersection of language and technology, specifically in natural
            language processing and computational linguistics. I am available
            for consulting work, research collaborations, and language analysis.
            I am also open to giving lectures and presentations on various
            linguistic topics.
          </p>
        </article>
        <img
          src={linguist}
          alt="profile"
          className="w-1/2 rounded-3xl border border-solid"
        />
      </section>
    </main>
  );
};

export default About;
