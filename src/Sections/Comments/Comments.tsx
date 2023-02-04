import "./Comments.scss";

import data from "../../json/data.json";

const Comments = () => {
  return (
    <section className="comments my-5">
      <h2 className="h1 mb-4">Comments</h2>
      {data.comments.map(({ id, name, img, comment }) => {
        return (
          <div
            className="comment p-3 d-flex align-items-center gap-3 rounded my-3"
            key={id}
          >
            <div className="img">
              <img src={img} className="rounded" alt={name} />
            </div>
            <div className="content">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="name h5 mb-0">{name}</div>
                <span className="reply text-uppercase text-decoration-underline">
                  Reply
                </span>
              </div>
              <div className="message text-muted">{comment}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Comments;
