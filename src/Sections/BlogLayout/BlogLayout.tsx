import Sidebar from "../Sidebar/Sidebar";
import BlogItem from "../../Components/BlogItem/BlogItem";
import Pagination from "../../Components/Pagination/Pagination";

import data from "../../json/data.json";

const BlogLayout = () => {
  return (
    <section className="our-blog py-5">
      <div className="container py-5">
        <div className="row g-5 g-lg-4">
          <div className="col-lg-8">
            <div className="row row-cols-1 row-cols-xl-2 g-4">
              {data.blog.map((blog_item) => {
                return (
                  <div className="col" key={blog_item.id}>
                    <BlogItem {...blog_item}></BlogItem>
                  </div>
                );
              })}
            </div>
            <Pagination></Pagination>
          </div>

          <div className="col-lg-4">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogLayout;
