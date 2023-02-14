import * as yup from "yup";
import { FormikHelpers } from "formik";
import { toast } from "react-toastify";

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

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

const onSubmit = (values: Values, actions: FormikHelpers<Values>) => {
  setTimeout(() => {
    // Call Backend
    actions.resetForm();
    actions.setSubmitting(false);
    toast.success("Success Notification !");
  }, 1500);
};

export const ContactFormValidation = {
  initialValues,
  validationSchema,
  onSubmit,
};
