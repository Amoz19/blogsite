import { useState } from "react";
import { useDatas } from "../context/DataContext";
import BlogInner from "./Bloginner";
import { Pagination } from "@mui/material";
import LoadingIndocator from "./LoadingIndicator";

export default function Blogs({ showAdminDash = false, showButton = false }) {
  let { datas } = useDatas();
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogPerPage] = useState(5);

  const lastPostIndex = currentPage * blogsPerPage;
  const firstPostIndex = lastPostIndex - blogsPerPage;

  const currentBlogs = Array.isArray(datas)
    ? datas.slice(firstPostIndex, lastPostIndex)
    : null;

  const pageCount = Math.ceil(datas.length / blogsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      {currentBlogs ? (
        currentBlogs.map((currentBlog) => (
          <div key={currentBlog.id}>
            <BlogInner
              id={currentBlog.id}
              title={currentBlog.title}
              description={currentBlog.description}
              url={currentBlog.url}
              createdTime={currentBlog.createdAt}
              showAdminDash={showAdminDash}
              showButton={showButton}
            />
          </div>
        ))
      ) : (
        <LoadingIndocator />
      )}

      {currentBlogs && (
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          className="grid place-content-center"
        />
      )}
    </>
  );
}
