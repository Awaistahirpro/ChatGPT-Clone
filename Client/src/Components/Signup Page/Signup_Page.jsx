import React from 'react';
import '../Login Page/loginPage.css';
import { Link } from 'react-router-dom';


const SignupPage = () => {

  return (
    <>
    <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                        <form className="login100-form validate-form flex-sb flex-w">
                            <span className="login100-form-title p-b-53">
                                Sign Up With
                            </span>

                            <span className="btn-face m-b-20 hov-pointer">
                                <i class="fa-brands fa-facebook-f"></i>
                                Facebook
                            </span>

                            <span className="btn-google m-b-20 hov-pointer">
                                <img src="/icon-google.png" alt="GOOGLE" />
                                Google
                            </span>

                            <div className="p-t-31 p-b-9">
                                <span className="txt1">
                                    Full Name
                                </span>
                            </div>
                            <div className="wrap-input100">
                                <input className="input100" type="text" name="username" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="p-t-31 p-b-9">
                                <span className="txt1">
                                    Email
                                </span>
                            </div>
                            <div className="wrap-input100">
                                <input className="input100" type="email" name="username" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="p-t-13 p-b-9">
                                <span className="txt1">
                                    Password
                                </span>

                            </div>
                            <div className="wrap-input100">
                                <input className="input100" type="password" name="pass" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="p-t-13 p-b-9">
                                <span className="txt1">
                                    Confirm Password
                                </span>

                            </div>
                            <div className="wrap-input100">
                                <input className="input100" type="password" name="pass" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="container-login100-form-btn m-t-17">
                                <button className="login100-form-btn">
                                    Sign Up
                                </button>
                            </div>

                            <div className="w-full text-center p-t-55">
                                <span className="txt2">
                                    Already have an account? 
                                </span>
                                {" "}
                                <Link to='/login' className="txt2 bo1">
                                     Sign in
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default SignupPage
