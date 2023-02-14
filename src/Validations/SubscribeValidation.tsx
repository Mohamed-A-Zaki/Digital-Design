import * as yup from "yup";
import { FormikHelpers } from "formik";
import { toast } from "react-toastify";

type Values = {
  email: string;
};

const initialValues: Values = {
  email: "",
};

const validationSchema = yup.object({
  email: yup.string().email().required(),
});

const onSubmit = (values: Values, actions: FormikHelpers<Values>) => {
  setTimeout(() => {
    // Call Backend
    actions.resetForm();
    actions.setSubmitting(false);
    toast.success("Success Notification !");
  }, 1500);
};

export const SubscribeValidation = {
  initialValues,
  validationSchema,
  onSubmit,
  validateOnBlur: false,
  validateOnChange: false,
};
