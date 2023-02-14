import { Formik, Form, Field, ErrorMessage } from "formik";
import { LeaveReplyValidation } from "../../Validations/LeaveReplyValidation";
import ButtonComp from "../../Components/Button/ButtonComp";

const LeaveReply = () => {
  return (
    <Formik {...LeaveReplyValidation}>
      {({ errors, touched, isSubmitting }) => (
        <Form className="shadow-none" noValidate>
          <h2 className="h1 mb-4">Leave A Reply</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <Field
                type="text"
                name="fullName"
                placeholder="Full Name"
                aria-label="Full Name"
                className={`form-control py-2 px-3 shadow-none bg-light rounded-0 border-0 border-secondary border-bottom border-3 ${
                  errors.fullName && touched.fullName ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="col-md-6">
              <Field
                type="email"
                name="email"
                placeholder="Email Address"
                aria-label="Email Address"
                className={`form-control py-2 px-3 shadow-none bg-light rounded-0 border-0 border-secondary border-bottom border-3 ${
                  errors.email && touched.email ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="col-12">
              <Field
                as="textarea"
                name="message"
                placeholder="Message"
                aria-label="Message"
                className={`form-control py-2 px-3 shadow-none bg-light rounded-0 border-0 border-secondary border-bottom border-3 ${
                  errors.message && touched.message ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>

          <ButtonComp
            className="main-btn px-5 mt-4"
            type="submit"
            disabled={isSubmitting}
          >
            Post Now
          </ButtonComp>
        </Form>
      )}
    </Formik>
  );
};

export default LeaveReply;
