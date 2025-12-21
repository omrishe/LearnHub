"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GoogleSignup } from "./Signup_google_button";
import { InputButton } from "./InputButton";
import { UserCreate } from "@/features/user/userInterfaces";
import { signup } from "@/features/user/userApi";
export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1);

  const [UserCreate, setUserCreate] = useState<UserCreate>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  /*
  atm it rerenders this component maybe try and changing so it renders only the input button component
  if i put a useState in the component to track the input it might work just need a way to sync input
  like a reference var we send here and gets updated -- react.memo, use ref will work --todo
  */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserCreate({ ...UserCreate, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup(UserCreate);
    console.log("Form submitted:", UserCreate);
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-4 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="image placeholder"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div>
              <InputButton
                id="email"
                name="email"
                type="email"
                label="Email address"
                autoComplete="email"
                required
                value={UserCreate.email}
                onChange={handleInputChange}
              />
              <div>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6"
                >
                  Next
                </button>
              </div>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
                <GoogleSignup></GoogleSignup>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <InputButton
                  id="firstName"
                  name="firstName"
                  type="text"
                  label="First name"
                  autoComplete="given-name"
                  required
                  value={UserCreate.firstName}
                  onChange={handleInputChange}
                />
                <InputButton
                  id="lastName"
                  name="lastName"
                  type="text"
                  label="Last name"
                  autoComplete="family-name"
                  required
                  value={UserCreate.lastName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <InputButton
                  id="username"
                  name="username"
                  type="text"
                  label="Username"
                  autoComplete="username"
                  required
                  value={UserCreate.username}
                  onChange={handleInputChange}
                />

                <InputButton
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  autoComplete="new-password"
                  required
                  value={UserCreate.password}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </>
          )}
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
