import React, { Component } from 'react';
import { Navigate, Link } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar';

export default class Login extends Component {
    constructor(props) {
        super(props);
        const udata = localStorage.getItem('user');
        let loggedIN = true;
        if (udata == null) {
            loggedIN = false;
        }
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
            loggedIN,
            error: '',
        };
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value });
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const userObject = {
            email: this.state.email,
            password: this.state.password,
        };
        axios
            .post('http://127.0.0.1:8000/api/auth/login', userObject)
            .then((res) => {
                console.log(res.data);
                if (res.status === 200) {
                    this.setState({
                        loggedIN: true,
                    });
                    localStorage.setItem('user', JSON.stringify(res.data));
                }
            })
            .catch((error) => {
                console.log(error);
                this.setState({ error: 'Wrong email or password' }); // Update the error message
            });
        this.setState({ email: '', password: '' });
    }

    render() {
        if (this.state.loggedIN) {
            return <Navigate to="/admin" />;
        }
        const { error } = this.state;
        return (
            <>
            <NavigationBar/>
                <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
                    <div className="container mx-auto">
                        <div className=" flex flex-wrap">
                            <div className="w-full px-4">
                                <div
                                    className=" relative mx-auto max-w-[525px] overflow-hidden rounded-lg  bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]
            "
                                >
                                    <div className="mb-10 text-center md:mb-16">TOURNA APP</div>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="mb-6">
                                            <input
                                                type="email"
                                                value={this.state.email}
                                                onChange={this.onChangeUserEmail}
                                                placeholder="Email"
                                                className=" bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-no ne
                  "
                                            />
                                            <div className="flex">
                                                <span className="text-red-400 text-sm m-2 p-2">{error}</span>
                                            </div>
                                        </div>
                                        <div className="mb-4 ">
                                            <input
                                                type="password"
                                                value={this.state.password}
                                                onChange={this.onChangePassword}
                                                placeholder="Password"
                                                className=" bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none
                  "
                                            />
                                            <div className="flex">
                                                <span className="text-red-400 text-sm m-2 p-2">{error}</span>
                                            </div>
                                        </div>
                                        <div className="mb-10">
                                            <button
                                                type="submit"
                                                className=" w-full px-4 py-3  bg-indigo-500  hover:bg-indigo-700 rounded-md  text-white
                  "
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                    <Link
                                        to="/forgot-password"
                                        className=" mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline
              "
                                    >
                                        Forgot Password?
                                    </Link>
                                    <p className="text-base">
                                        Not a member yet?
                                        <Link to="/register" className="text-primary hover:underline">
                                            Sign Up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}