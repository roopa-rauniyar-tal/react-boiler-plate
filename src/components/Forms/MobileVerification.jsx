import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import '../../Styles/styles.css';
import { useTranslation } from 'react-i18next';

const MobileVerification = () => {
  const { t, i18n } = useTranslation();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
    alert(JSON.stringify(values, null));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="mobileNumber">{t('mobileNumber')}</label>
      <input {...register(
        'mobileNumber',
        { required: true },
        { pattern: { value: /^(?!0+$)(\+\d{1,3}[- ]?)?(?!0+$)\d{10}$/i}},
        )}
      />
      {/* <input
        name="mobileNumber"
        ref={register({
        required: "Required",
        pattern: {
            value: /^(?!0+$)(\+\d{1,3}[- ]?)?(?!0+$)\d{10}$/i,
            message: "Invalid Mobile Number"
        }
        })}
      />
      {errors.mobileNumber && errors.mobileNumber.message} */}
      {/* <input
        name="username"
        ref={register({
          validate: value => value === "admin" || "Nice try!"
        })}
      />
      {errors.username && errors.username.message} */}
      <button disabled="true" type="submit">Submit</button>
    </form>
  );
}

export default MobileVerification;
