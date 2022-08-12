import React from "react";
import pic from "../../images/logo.png";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Forget Password
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-5">
                          <i className="fas fa-envelope fa-lg me-2 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <TextField
                              className="form-control "
                              id="outlined-basic"
                              placeholder="Email"
                            // label="Email"
                            //   variant="outlined"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                          {/* <Link to=""> */}
                          <button className="register_btn">
                            Generate Code
                          </button>
                          {/* </Link> */}
                        </div>
                          <div className="d-flex justify-content-end mx-5">
                            <Link to="">Resend Code</Link>
                          </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-1 mx-5 ">
                      <img
                        src={pic}
                        className="img-fluid "
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgetPassword;
