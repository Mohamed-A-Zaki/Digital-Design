import React from "react";
import ButtonComp from "../../Components/Button/ButtonComp";

const LeaveReply = () => {
  return (
    <form className="leave-reply shadow-none">
      <h2 className="h1 mb-4">Leave A Reply</h2>

      <div className="d-flex flex-column flex-md-row gap-4 mb-4">
        <input
          type="text"
          className="flex-grow-1 bg-light py-2 px-3 border-0 border-secondary border-bottom border-3"
          placeholder="Full Name"
          aria-label="Full Name"
        />
        <input
          type="text"
          className="flex-grow-1 bg-light py-2 px-3 border-0 border-secondary border-bottom border-3"
          placeholder="Email Address"
          aria-label="Email Address"
        />
      </div>

      <div className="d-flex gap-4 mb-4">
        <textarea
          className="flex-grow-1 bg-light py-2 px-3 border-0 border-secondary border-bottom border-3"
          placeholder="Message"
          aria-label="Message"
        ></textarea>
      </div>

      <div>
        <ButtonComp className="main-btn px-5">Post Now</ButtonComp>
      </div>
    </form>
  );
};

export default LeaveReply;
