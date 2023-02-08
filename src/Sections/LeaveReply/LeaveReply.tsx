import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import ButtonComp from "../../Components/Button/ButtonComp";

type Values = {
  fullName: string;
  email: string;
  message: string;
};

const LeaveReply = () => {
  const initialValues: Values = {
    fullName: "",
    email: "",
    message: "",
  };

  const validationSchema = yup.object({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  });

  const onSubmit = () => {
    toast.success("Success Notification !");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
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

          <ButtonComp className="main-btn px-5 mt-4" type="submit">
            Post Now
          </ButtonComp>
        </Form>
      )}
    </Formik>
  );
};

export default LeaveReply;
