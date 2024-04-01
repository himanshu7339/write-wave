import React from "react";
import { Client, Databases } from "appwrite";

// connection with app write server
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65f93a3001815bc45a46");
const databases = new Databases(client);

const PostDetails = async ({ params: { id } }) => {

    // get post details using id
  const post = await databases.getDocument(
    "65f93c6de4d6a8d848ac",
    "65f93c7c05359b81560f",
    `${id}`
  );

  return (
    <div className="max-w-[80%] m-2 mx-auto mt-8 p-6 text-center bg-white rounded-md  h-[100vh] ">
      <h1 className="text-4xl font-bold text-gray-800">{`${post.title}`}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
        className="text-gray-700 leading-relaxed mt-14"
      />
    </div>
  );
};

export default PostDetails;
