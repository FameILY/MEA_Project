"use client"
import React, { useState, useEffect } from 'react';
import OnScrollAnimation from '../../../Components/OnScrollAnimmation';
import Link from 'next/link';

export default function RegisterForm() {
  useEffect(()=> {
    if (typeof document !== 'undefined') {
      // will run in client's browser only
      var hiddenElements1 = document.querySelectorAll(".hidden3");
      var hiddenElements4 = document.querySelectorAll(".hidden4");
      var hiddenElements2 = document.querySelectorAll(".hidden2");
      var hiddenElements3 = document.querySelectorAll(".hidden1");

    //   var hiddenElement2 = document.querySelectorAll(".hidden2");
    //   var hiddenElement2 = document.querySelectorAll(".hidden3");
      // console.log(hiddenElements);
       OnScrollAnimation(hiddenElements1)
       OnScrollAnimation(hiddenElements4)
       OnScrollAnimation(hiddenElements2)
        OnScrollAnimation(hiddenElements3)


       //    OnScrollAnimation(hiddenElement2)
    }
    },[]);

  const [form, setForm] = useState({
    email: '',
    fullname: '',
    contactNumber: '',
    designation: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Handle form submission logic here
    console.log('Form submitted', form);
  };

  return (
    <div className="flex justify-center items-center min-h-screen hidden1 flex-col ">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Member Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C72625]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C72625]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={form.contactNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C72625]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Designation</label>
          <input
            type="text"
            name="designation"
            value={form.designation}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C72625]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C72625]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C72625]"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-[#C72625]">
          Register
        </button>
      </form>
      <div className='m-2'>
        <p>Already have an account? <span className='text-blue-700'>
          <Link href={'/login'}>
          Login
          </Link>

          </span> </p>
      </div>
    </div>
  );
}
