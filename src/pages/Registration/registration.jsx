import { TextField, Button } from "@mui/material";
import React from "react";
// import Navigation from '../../Components/Navigation'
import { Link } from "react-router-dom";
import pic from "../../images/logo.png";
import "../Registration/registration.css";

const Registration = () => {
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center register">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-2 fa-fw" />
                          <div className="form-outline flex-fill">
                            {/* <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            /> */}
                            <TextField
                              className="form-control"
                              id="outlined-basic"
                              placeholder="Role"
                              variant="outlined"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-2 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <TextField
                              className="form-control"
                              id="outlined-basic"
                              placeholder="Email"
                              variant="outlined"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-2 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <TextField
                              className="form-control"
                              id="outlined-basic"
                              placeholder="Password"
                              variant="outlined"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-2 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <TextField
                              className="form-control"
                              id="outlined-basic"
                              placeholder="ReType Password"
                              variant="outlined"
                            />
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-3">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          {/* <Link to=""> */}
                            <button className="register_btn">Register</button>
                          {/* </Link> */}
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-3">
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            Already Registered <Link to="/login">Login</Link>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="jultify-content-center d-flex col-md-10 col-lg-6 col-xl-5 order-1 order-lg-2 abc">
                      <img src={pic} className="img-fluid" alt="Sample image" />
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

export default Registration;
