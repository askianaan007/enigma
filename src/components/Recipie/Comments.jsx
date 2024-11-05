// src/components/Comments.js
import React from 'react';

const Comments = ({ comments }) => (
  <section className="my-8">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h3>
    {comments.map((comment, index) => (
      <div key={index} className="p-4 bg-gray-100 rounded-lg mb-4">
        <p><strong>{comment.user}</strong>: {comment.text}</p>
      </div>
    ))}
    <textarea className="w-full p-4 mt-4 border rounded-lg" placeholder="Write a comment..."></textarea>
    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-4">Post Comment</button>
  </section>
);

export default Comments;

