import { Form, FormikProps } from "formik";

import Input from "../shared/form/input";
import {
  LoginFormValuesInterface,
  PhoenVerifyFormValuesInterface,
} from "../contracts";

const innerPhoneVerify = (
  props: FormikProps<PhoenVerifyFormValuesInterface>
) => {
  return (
    <Form>
      {/* <!-- code input --> */}
      <div className="relative mb-6" data-twe-input-wrapper-init>
        <Input name="code" lable="code Number" />
      </div>

      {/* <!-- Submit button --> */}
      <button
        type="submit"
        className="inline-block w-full rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        Verify
      </button>
    </Form>
  );
};
export default innerPhoneVerify;
