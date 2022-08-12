import { TextField, Button } from "@mui/material";
import React from "react";
// import Navigation from '../../Components/Navigation'
import { Link } from "react-router-dom";
import pic from "../../images/logo.png";
import '../Login/login.css'

const Login = () => {
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
                        Sign In
                      </p>
                      <form className="mx-1 mx-md-4">
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
                        <div className="d-flex flex-row align-items-center mb-0">
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
                        <div className="d-flex justify-content-end me-3">
                          <Link to="/forgetpassword">Forget Password</Link>
                        </div>
                        <div className="d-flex justify-content-center mx-3 mb-lg-4 my-4">
                          {/* <Button
                            variant="contained"
                            type="button"
                            className="btn btn-lg"
                          >
                            Register
                          </Button> */}
                          <button className="register_btn justify-content-center">
                          <Link to="/dashboard" className="b">LogIn</Link></button>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-3 mt-3">
                          {/* <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue
                            id="form2Example3c"
                          /> */}
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            Don't have an account{" "}
                            <Link to="/registration">Register Now</Link>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 ">
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

export default Login;
