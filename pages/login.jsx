import Head from 'next/head';
import React from 'react';

const login = () => {
  return (
    <div>
      <Head>
        <title>OYO - Login !</title>
      </Head>
      <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opactiy-85">
        <div className="absolute top-10 px-20 flex items-center w-full text-white">
          <h2 className="text-5xl font-bold mr-5">OYO</h2>
          <p className="font-bold text-2xl">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex justify-center items-center w-9/12">
          <div className="text-white">
            <p className="font-bold text-5xl text-justify">
              There’s a smarter way to OYO around{' '}
            </p>
            <p className="text-2xl text-justify mt-5">
              signup with your phone number and get access to exclusive
              discounts and savings on OYO stays and with our many travel
              partners...
            </p>
          </div>
          <div className="ml-20 pb-40 w-10/12 border-2 bg-slate-50">
            <p className="h-10 px-10 text-lg font-bold flex items-center bg-gradient-to-r from-red-300 to bg-red-600 text-white">
              Sign up & GET RS.500 OYO Money
            </p>
            <div className="px-10">
              <h3 className="text-5xl font-bold my-5">Login / Signup</h3>
              <p className="font-bold text-lg mb-1">
                Please enter your phone number to continue
              </p>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name."
                className="outline-none border border-black px-3 py-1 w-96 h-10 my-3"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email...."
                className="outline-none border border-black px-3 py-1 w-96 h-10 my-3"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="outline-none border border-black px-3 py-1 w-96 h-10 my-3"
              />
              <button
                type="submit"
                className="w-96 text-white h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 my-5 rounded-lg"
              >
                Sign Up
              </button>
              <p className="my-1 text-xl ">
                <span>Already have an account ?</span>
                <span className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer">
                  Login
                </span>
              </p>
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
