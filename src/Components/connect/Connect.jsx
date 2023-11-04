import React, { useRef, useState } from "react";
import "./conect.scss";
import connectImg from "../../img/email.png";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";

const Connect = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setIsLoading(true);
    return emailjs
      .sendForm(
        "service_iioz6y9",
        "template_3ylmmfi",
        form.current,
        "AZb8hKLsB7O86I2wP"
      )
      .then(
        (result) => {
          setIsLoading(false);
          setIsSent(true);
          console.log(result.text);
          reset();
          toast.success(
            "Message Sent Sucessfully, I will get back to you shortly",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        },
        (error) => {
          setIsLoading(false);
          reset();
          toast.error("Oops! Something went wrong please try again", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(error.text);
        }
      );
  };
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
          <form onSubmit={handleSubmit(onSubmit)} ref={form}>
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
              <ToastContainer />
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
            <button type="submit" className="btn green-btn" disabled={isSent}>
              {isLoading ? (
                <ClipLoader size={15} color="white" />
              ) : isSent ? (
                "Sent"
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
