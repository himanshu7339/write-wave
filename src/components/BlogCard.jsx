import React from "react";
import Link from "next/link";
const BlogCard = ({ title, content, id ,createdAt , updateAt }) => {
  // Function to truncate content to 20 words
  const truncateContent = (content) => {
    // Remove HTML tags from content
    const plainText = content.replace(/<[^>]*>/g, '');
    
    // Split content into words
    const words = plainText.split(" ");
    
    // Check if the number of words exceeds 20
    if (words.length > 20) {
        return words.slice(0, 20).join(" ") + "...";
    }
    
    return plainText;
};

// date format
const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    
    // Options for formatting the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    // Format the date
    const formattedDate = date.toLocaleDateString('en-US', options);
    
    return formattedDate;
  };



  
  return (
    <div  className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{truncateContent(content)}</p>
        <div className="mb-5">
           
            {updateAt === undefined ?  <p className="text-green-500">CreatedAt : {formatDate(createdAt)}</p> : <p className="text-green-500" >UpdatedAt: {formatDate(updateAt)}</p>}
          
        </div>
        <Link
          href={`/post/${id}`}
          className="text-green-500 hover:text-black font-bold"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
