"use client";

import { useBlogPosts } from "@/hooks/useBlogPosts";

const BlogSection = () => {
  const { content, loading } = useBlogPosts();

  console.log("content", content);
  console.log("loading", loading);

  return (
    <div>
      <h1>Blog Section</h1>
      <p>This is the blog section of the freelance page.</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {content.list.map((post) => (
            <li key={post.slug}>
              <p>{post.title}</p>
              <p>{post.slug}</p>
              <p>{post.author}</p>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogSection;
