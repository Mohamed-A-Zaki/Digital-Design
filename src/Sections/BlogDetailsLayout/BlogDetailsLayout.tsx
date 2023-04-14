import Sidebar from "../Sidebar/Sidebar";
import Comments from "../Comments/Comments";
import LeaveReply from "../LeaveReply/LeaveReply";
import BlogDetails from "../BlogDetails/BlogDetails";
import RelatedBlogs from "../RelatedBlogs/RelatedBlogs";

const BlogDetailsLayout = () => {
  return (
    <section className="our-blog py-5">
      <div className="container py-5">
        <div className="row g-5 g-lg-4">
          <div className="col-lg-8">
            <BlogDetails></BlogDetails>
            <RelatedBlogs></RelatedBlogs>
            <Comments></Comments>
            <LeaveReply></LeaveReply>
          </div>

          <div className="col-lg-4">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsLayout;
