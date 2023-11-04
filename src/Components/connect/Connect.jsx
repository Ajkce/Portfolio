import React from "react";
import "./conect.scss";
import connectImg from "../../img/contact.jpg";
import { useForm } from "react-hook-form";

const Connect = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="row connect-section">
      <div className="info">
        <h3>Lets Talk</h3>
        <p>
          I'm always happy to hear about exciting opportunities, join in
          interesting conversations, and build valuable connections. Let's
          connect!
        </p>
        <div className="img">
          <img src={connectImg} alt="" />
        </div>
      </div>
      <div className="form">
        <div className="form-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="form-section">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                {...register("name", { required: true, minLength: 3 })}
              />
              {errors.name?.type === "required" && (
                <span>Name should be longer than 2</span>
              )}
            </div>

            {/* include validation with required or other standard HTML validation rules */}
            <div className="form-section">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>Please enter your email</span>}
            </div>

            <div className="form-section">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Enter your message"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && <span>Please enter your message</span>}
            </div>
            <input type="submit" className="btn green-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
