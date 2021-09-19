import React, { useState, useEffect } from "react";
import Validate from "./Validate";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SignUp.module.css";
import notify from "./toastify";
const SignUp = () => {
  const [touch, setTouch] = useState({});
  const [error, setError] = useState({});
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  useEffect(() => {
    setError(Validate(data, "SignUp"));
  }, [data, touch]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      notify("شما با موفقیت ثبت نام کردید", "success");
    } else {
      notify("با دقت بیشتر اطلاعات خود را وارد نمایید", "error");

      setTouch({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>ثبت نام</h2>
        <div className={styles.formField}>
          <label>نام و نام خانوادگی</label>
          <input
           className={(error.name && touch.name ) ? styles.uncompleted:styles.formInput}
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.name && touch.name && <span>{error.name}</span>}
        </div>
        <div className={styles.formField}>
          <label>ایمیل</label>
          <input
           className={(error.email && touch.email ) ? styles.uncompleted:styles.formInput}
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.email && touch.email && <span>{error.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>رمز عبور</label>
          <input
           className={(error.password && touch.password ) ? styles.uncompleted:styles.formInput}
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.password && touch.password && <span>{error.password}</span>}
        </div>
        <div className={styles.formField}>
          <label >تکرار رمز عبور</label>
          <input
           className={(error.confirmPassword && touch.confirmPassword ) ? styles.uncompleted:styles.formInput}
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {error.confirmPassword && touch.confirmPassword && (
            <span>{error.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formField}>
            <div className={styles.checkBoxContainer}>
     <label>تایید قوانین سایت</label>
          <input
          className={styles.checkBoxContainer}
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
            </div>
     
          {error.isAccepted && touch.isAccepted && (
            <span>{error.isAccepted}</span>
          )}
        </div>
            <div className={styles.formButtons}>
        <Link to="/Login">ورود</Link>
        <button >عضویت</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
