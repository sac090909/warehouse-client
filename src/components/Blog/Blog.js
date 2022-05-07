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
            <p className="card-text"> ........ </p>
          </div>
        </div>
      </div>

      <div className="col h-100  rounded">
        <div className="card h-100">
          <div className="card-title card-header bg-secondary text-light text-center fw-bold">
            <p>When to use Node js and when to use mongodb</p>
          </div>
          <div className="card-body text-center h-100">
            <p className="card-text"> ....... </p>
          </div>
        </div>
      </div>

      <div className="col h-100  rounded">
        <div className="card h-100">
          <div className="card-title card-header bg-secondary text-light text-center fw-bold">
            <p> Difference between SQL and NoSQL</p>
          </div>
          <div className="card-body text-center h-100">
            <p className="card-text"> ........ </p>
          </div>
        </div>
      </div>

      <div className="col h-100  rounded">
        <div className="card h-100">
          <div className="card-title card-header  bg-secondary text-light text-center fw-bold">
            <p>Purpose to use JWT</p>
          </div>
          <div className="card-body text-center h-100">
            <p className="card-text"> Node ........ </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
