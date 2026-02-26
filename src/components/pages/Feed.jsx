import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Feed = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get("http://localhost:3000/api/post/feed", {
          withCredentials: true,
        });
        console.log(data.data.data);
        setPost(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h1>My image data</h1>
      {post.length > 0 ? (
        post.map((item) => (
          <div className="image-div" key={item._id}>
            <div className="img">
              <img
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
                }}
                src={item.imgUrl}
                alt={item.caption}
              />
            </div>
            <p>{item.caption}</p>
          </div>
        ))
      ) : (
        <div>No data found...</div>
      )}
      <Link to={"/"}>Go to home page</Link>
    </div>
  );
};

export default Feed;
