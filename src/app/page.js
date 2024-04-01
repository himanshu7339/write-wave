import { Client, Databases, Query  } from "appwrite";
import { Suspense } from "react";
import BlogCard from "@/components/BlogCard";
import SearchInput from "@/components/SearchInput";

// create connect with data base
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65f93a3001815bc45a46");

const databases = new Databases(client);

export default async function Home() {
  // get blogs post lists
  const blogPosts = await databases.listDocuments(
    "65f93c6de4d6a8d848ac",
    "65f93c7c05359b81560f",
    
  );

  return (
    <div>
      <SearchInput />
      <Suspense fallback={<p>Loading feed...</p>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 ">
          {blogPosts &&
            blogPosts.documents.map((blogPost, index) => (
              <BlogCard
                key={index}
                title={blogPost.title}
                content={blogPost.content}
                imageUrl={blogPost.imageUrl}
                id={blogPost.$id}
                updatedAt={blogPost.$updatedAt}
                createdAt={blogPost.$createdAt}
              />
            ))}
        </div>
      </Suspense>
    </div>
  );
}
