import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";

import ButtonComp from "../Button/ButtonComp";
import MainHeading from "../MainHeading/MainHeading";
import SectionHeading from "../SectionHeading/SectionHeading";

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactForm = () => {
  const initialValues: Values = {
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="p-5 rounded" noValidate>
          <MainHeading className="special">Contact Us</MainHeading>
          <SectionHeading>Contact Us For Any Information</SectionHeading>

          <div className="row g-4">
            <div className="col-md-6">
              <Field
                type="text"
                name="firstName"
                placeholder="First Name"
                aria-label="First Name"
                className={`form-control py-2 px-3 shadow-none bg-light rounded-0 border-0 border-secondary border-bottom border-3 ${
                  errors.firstName && touched.firstName ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="col-md-6">
              <Field
                type="text"
                name="lastName"
                placeholder="Last Name"
                aria-label="Last Name"
                className={`form-control py-2 px-3 shadow-none bg-light rounded-0 border-0 border-secondary border-bottom border-3 ${
                  errors.lastName && touched.lastName ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                name="lastName"
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

            <div className="col-md-6">
              <Field
                type="tel"
                name="phoneNumber"
                className={`form-control py-2 px-3 shadow-none bg-light rounded-0 border-0 border-secondary border-bottom border-3 ${
                  errors.phoneNumber && touched.phoneNumber ? "is-invalid" : ""
                }`}
                placeholder="Phone Number"
                aria-label="Phone Number"
              />
              <ErrorMessage
                name="phoneNumber"
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
            Submit
          </ButtonComp>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
