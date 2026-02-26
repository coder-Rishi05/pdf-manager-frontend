import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CreatePage = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (!file) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("imgUrl", file);   // 👈 MUST match multer field name
    formData.append("caption", caption);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/post/createPost",
        formData,
        { withCredentials: true }
      );

      console.log(res.data);
      alert("Post created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="create-post-section">
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept="image/*"
          />

          <input
            type="text"
            value={caption}
            placeholder="caption"
            onChange={(e) => setCaption(e.target.value)}
          />

          <button type="submit">Create Post</button>
        </form>
      </section>

      <Link to="/">Go to home page</Link>
    </div>
  );
};

export default CreatePage;