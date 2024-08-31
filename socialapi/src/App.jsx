
import './App.css';
import Overview from './components/Overview';
import Endpoint from './components/Endpoints';

function App() {

  return (
    <div className="max-w-4xl mx-auto p-6">
    <header className="text-center mb-12">
      <h1 className="text-3xl font-bold">SocialAPI Documentation</h1>
      <p className="text-gray-600 mt-4">
        Manage blog posts with the SocialAPI, including retrieval, creation, updating, and deletion.
      </p>
    </header>

    <Overview />

    <nav className="mb-12">
      <ul className="flex justify-around text-blue-500">
        <li><a href="#get-blogs">Get All Blogs</a></li>
        <li><a href="#add-blog">Add a New Blog Post</a></li>
        <li><a href="#manage-blog">Get, Update, or Delete a Blog by ID</a></li>
      </ul>
    </nav>

    <main>
      <Endpoint
        id="get-blogs"
        title="Get All Blogs"
        description="Retrieve all blog posts available in the system."
        exampleRequest={`GET /blogs`}
        exampleResponse={`[
{
  "id": "12345abcde",
  "title": "Understanding REST APIs",
  "author": "John Doe",
  "content": "A comprehensive guide to understanding REST APIs...",
  "date": "2024-08-18"
},
{
  "id": "67890fghij",
  "title": "JavaScript Best Practices",
  "author": "Jane Smith",
  "content": "In this post, we explore some of the best practices in JavaScript...",
  "date": "2024-08-17"
}
]`}
        errorResponses={[
          "500 Internal Server Error: If an unexpected error occurs.",
        ]}
      />

      <Endpoint
        id="add-blog"
        title="Add a New Blog Post"
        description="This endpoint allows users to add a new blog post."
        exampleRequest={`POST /blogs/add`}
        requestBody={`{
"title": "New Blog Post",
"author": "Author Name",
"content": "This is the content of the new blog post.",
"date": "2024-08-18"
}`}
        exampleResponse={`{
"id": "abc123def456",
"title": "New Blog Post",
"author": "Author Name",
"content": "This is the content of the new blog post.",
"date": "2024-08-18",
"message": "Blog post added successfully."
}`}
        errorResponses={[
          "400 Bad Request: If required fields are missing or invalid.",
          "500 Internal Server Error: If an unexpected error occurs.",
        ]}
      />

      <Endpoint
        id="manage-blog"
        title="Get, Update, or Delete a Blog by ID"
        description="Retrieve, update, or delete a specific blog post using its unique ID."
        exampleRequest={`GET /blogs/:id`}
        exampleResponse={`{
"id": "12345abcde",
"title": "Understanding REST APIs",
"author": "John Doe",
"content": "A comprehensive guide to understanding REST APIs...",
"date": "2024-08-18"
}`}
        requestBody={`{
"title": "Updated Blog Title",
"content": "This is the updated content of the blog post."
}`}
        exampleUpdateResponse={`{
"id": "12345abcde",
"title": "Updated Blog Title",
"author": "John Doe",
"content": "This is the updated content of the blog post.",
"date": "2024-08-18",
"message": "Blog post updated successfully."
}`}
        exampleDeleteResponse={`{
"message": "Blog post deleted successfully."
}`}
        errorResponses={[
          "404 Not Found: The blog post with the specified ID does not exist.",
          "400 Bad Request: Invalid data for update requests.",
          "500 Internal Server Error: If an unexpected error occurs.",
        ]}
      />
    </main>

    <footer className="text-center mt-12">
      <p className="text-gray-600">SocialAPI &copy; 2024</p>
    </footer>
  </div>
  )
}

export default App
