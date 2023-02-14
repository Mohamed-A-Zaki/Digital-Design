import { ErrorMessage, Field, Form, Formik } from "formik";
import { ContactFormValidation } from "../../Validations/ContactFormValidation";

import ButtonComp from "../Button/ButtonComp";
import MainHeading from "../MainHeading/MainHeading";
import SectionHeading from "../SectionHeading/SectionHeading";

const ContactForm = () => {
  return (
    <Formik {...ContactFormValidation}>
      {({ errors, touched, isSubmitting }) => (
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
                placeholder="Phone Number"
                aria-label="Phone Number"
                className={`form-control py-2 px-3 shadow-none bg-light rounded-0 border-0 border-secondary border-bottom border-3 ${
                  errors.phoneNumber && touched.phoneNumber ? "is-invalid" : ""
                }`}
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

          <ButtonComp
            className="main-btn px-5 mt-4"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </ButtonComp>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
