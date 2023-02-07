import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import ButtonComp from "../Button/ButtonComp";
import MainHeading from "../MainHeading/MainHeading";
import SectionHeading from "../SectionHeading/SectionHeading";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

const validationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().required().length(11),
  message: yup.string().required(),
});

const onSubmit = () => {
  toast.success("Success Notification !");
};

const ContactForm = () => {
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { errors, touched } = formik;

  return (
    <form className="p-5 rounded" onSubmit={formik.handleSubmit} noValidate>
      <MainHeading className="special">Contact Us</MainHeading>
      <SectionHeading>Contact Us For Any Information</SectionHeading>

      <div className="row g-4">
        <div className="col-md-6">
          <input
            type="text"
            className={`form-control py-2 px-3 shadow-none bg-light rounded-0 border-0 border-secondary border-bottom border-3 ${
              errors.firstName && touched.firstName ? "is-invalid" : ""
            }`}
            placeholder="First Name"
            aria-label="First Name"
            {...formik.getFieldProps("firstName")}
          />
          <div className="invalid-feedback">{errors.firstName}</div>
        </div>

        <div className="col-md-6">
          <input
            type="text"
            className={`form-control py-2 px-3 shadow-none bg-light rounded-0 border-0 border-secondary border-bottom border-3 ${
              errors.lastName && touched.lastName ? "is-invalid" : ""
            }`}
            placeholder="Last Name"
            aria-label="Last Name"
            {...formik.getFieldProps("lastName")}
          />
          <div className="invalid-feedback">{errors.lastName}</div>
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

        <div className="col-md-6">
          <input
            type="tel"
            className={`form-control py-2 px-3 shadow-none bg-light rounded-0 border-0 border-secondary border-bottom border-3 ${
              errors.phoneNumber && touched.phoneNumber ? "is-invalid" : ""
            }`}
            placeholder="Phone Number"
            aria-label="Phone Number"
            {...formik.getFieldProps("phoneNumber")}
          />
          <div className="invalid-feedback">{errors.phoneNumber}</div>
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
        Submit
      </ButtonComp>
    </form>
  );
};

export default ContactForm;
