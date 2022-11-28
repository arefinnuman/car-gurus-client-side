import React from "react";

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      question:
        " What are the different ways to manage a state in a React application?",
      answer:
        "React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.",
    },
    {
      id: 2,
      question: "How does prototypical inheritance work?",
      answer:
        "The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.",
    },
    {
      id: 3,
      question: "What is a unit test? Why should we write unit tests?",
      answer:
        "The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.",
    },
    {
      id: 4,
      question: "React vs. Angular vs. Vue?",
      answer:
        "Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.",
    },
  ];
  return (
    <div className="flex min-h-screen justify-center items-center">
      <section className="">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">Read Our Blogs</h2>
          <p className="mt-4 mb-8 al">
            You can buy attention (advertising). You can beg for attention from
            the media (PR). You can bug people one at a time to get attention
            (sales). Or you can earn attention by creating something interesting
            and valuable and then publishing it online for fr
          </p>
          <div className="space-y-4">
            {blogData.map((blog) => (
              <details className="w-full border border-secondary rounded-lg">
                <summary className="px-4 py-6 focus:outline-primary focus-visible:ring-primary">
                  {blog.question}
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">{blog.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
