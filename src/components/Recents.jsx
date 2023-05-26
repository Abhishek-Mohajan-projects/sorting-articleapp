import React, { useState } from "react";
import recentData from "./../data/recentData";

const Recents = () => {
  const [recentArticles, setRecentArticles] = useState(recentData);
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
        {recentArticles &&
          recentArticles.map((article, index) => {
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

export default Recents;
