import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import ButtonComp from "../../Components/Button/ButtonComp";

const initialValues = {
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

const LeaveReply = () => {
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { errors, touched } = formik;

  return (
    <form className="shadow-none" onSubmit={formik.handleSubmit} noValidate>
      <h2 className="h1 mb-4">Leave A Reply</h2>

      <div className="row g-4">
        <div className="col-md-6">
          <input
            type="text"
            className={`form-control py-2 px-3 shadow-none bg-light rounded-0 border-0 border-secondary border-bottom border-3 ${
              errors.fullName && touched.fullName ? "is-invalid" : ""
            }`}
            placeholder="Full Name"
            aria-label="Full Name"
            {...formik.getFieldProps("fullName")}
          />
          <div className="invalid-feedback">{errors.fullName}</div>
        </div>

        <div className="col-md-6">
          <input
            type="email"
            className={`form-control py-2 px-3 shadow-none bg-light rounded-0 border-0 border-secondary border-bottom border-3 ${
              errors.email && touched.email ? "is-invalid" : ""
            }`}
            placeholder="Email Address"
            aria-label="Email Address"
            {...formik.getFieldProps("email")}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

        <div className="col-12">
          <textarea
            className={`form-control py-2 px-3 shadow-none bg-light rounded-0 border-0 border-secondary border-bottom border-3 ${
              errors.message && touched.message ? "is-invalid" : ""
            }`}
            placeholder="Message"
            aria-label="Message"
            {...formik.getFieldProps("message")}
          />
          <div className="invalid-feedback">{errors.message}</div>
        </div>
      </div>

      <ButtonComp className="main-btn px-5 mt-4" type="submit">
        Post Now
      </ButtonComp>
    </form>
  );
};

export default LeaveReply;
