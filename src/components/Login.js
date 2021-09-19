import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Validate from "./Validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SignUp.module.css";
import notify from "./toastify";
const Login = () => {
  const [touch, setTouch] = useState({});
  const [error, setError] = useState({});
  const [data, setData] = useState({
    
    email: "",
    password: "",
 
  });

  useEffect(() => {
    setError(Validate(data, "Login"));
  }, [data, touch]);

  const changeHandler = (event) => {
    
      setData({ ...data, [event.target.name]: event.target.value });
    
  };
  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      notify("شما با موفقیت وارد شدید", "success");
    } else {
      notify("با دقت بیشتر اطلاعات خود را وارد نمایید", "error");

      setTouch({
        
        email: true,
        password: true,
        
      });
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>ثبت نام</h2>
 
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

            <div className={styles.formButtons}>
        <Link to="/SignUp">عضویت</Link>
        <button >ورود</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;

