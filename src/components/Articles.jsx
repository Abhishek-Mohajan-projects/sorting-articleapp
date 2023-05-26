import React, { useState } from "react";
import users from "./../data/articleData";

const Articles = () => {
  const [articles, setArticles] = useState(users);
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Upvoted</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {articles &&
          articles.map((article, index) => {
            const { title, upvotes, date } = article;
            return (
              <tr key={index}>
                <td>{title}</td>
                <td>{upvotes}</td>
                <td>{date}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Articles;
