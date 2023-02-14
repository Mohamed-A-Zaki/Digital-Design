import * as yup from "yup";
import { toast } from "react-toastify";
import { FormikHelpers } from "formik";

type Values = {
  fullName: string;
  email: string;
  message: string;
};

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

const onSubmit = (values: Values, actions: FormikHelpers<Values>) => {
  setTimeout(() => {
    // Call Backend
    actions.resetForm();
    actions.setSubmitting(false);
    toast.success("Success Notification !");
  }, 1500);
};

export const LeaveReplyValidation = {
  initialValues,
  validationSchema,
  onSubmit,
};
