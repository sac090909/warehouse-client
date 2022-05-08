import React from "react";

const Blog = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-3 px-5 my-3">
      <div className="col h-100 bg-body rounded">
        <div className="card h-100">
          <div className="card-title card-header bg-secondary text-light text-center  fw-bold">
            <p>Difference between Javascript and Nodejs</p>
          </div>
          <div className="card-body text-center h-100">
            <p className="card-text">
              {" "}
              Javascript is a programming language whereas Nodejs is an
              asynchronous event-drive runtime for Javascript outside of
              browser. Javascript is used in the frontend development and Nodejs
              is used at server side. JS is the upgraded version of ECMA script
              which uses V8 enginer written in C++ and Nodejs is written in JS,
              C and C++.
            </p>
          </div>
        </div>
      </div>

      <div className="col h-100  rounded">
        <div className="card h-100">
          <div className="card-title card-header bg-secondary text-light text-center fw-bold">
            <p>When to use Node js and when to use mongodb</p>
          </div>
          <div className="card-body text-center h-100">
            <p className="card-text">
              {" "}
              Nodejs is the runtime for Javascript outside of browser. It is
              used for server side development. Mongodb is a NoSQL database.
              When it requires to keep data, query data mongodb is used such as
              for applications blogs, e-commerce site. It does not support
              transctional system.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="col h-100  rounded">
        <div className="card h-100">
          <div className="card-title card-header bg-secondary text-light text-center fw-bold">
            <p> Difference between SQL and NoSQL</p>
          </div>
          <div className="card-body text-center h-100">
            <p className="card-text">
              {" "}
              SQL is general purpose database based on table structure with
              fixed rows and columns where as NoSQL is stores data in document
              format (JSON documents) as key-value pair and table with rows and
              dynamic columns. Examaple of SQL databases are : Oracle, MySQL, MS
              SQL etc and some NoSQL database names are Mongodb, Redis,
              Cassandra. The schemas of SQL are rigid and NoSQL is flexiable.
            </p>
          </div>
        </div>
      </div>

      <div className="col h-100  rounded">
        <div className="card h-100">
          <div className="card-title card-header  bg-secondary text-light text-center fw-bold">
            <p>Purpose to use JWT</p>
          </div>
          <div className="card-body text-center h-100">
            <p className="card-text">
              {" "}
              JSON Web Token is an open source standard to exchange security
              information between two parties usually server and client. This is
              used for Authorization and Information Exchange. The information
              is digitally signed and can be verified. JWT consists of three
              parts such as Header, Payload and Signature seperated by dots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
