"use client"
import React, { useState, useEffect } from 'react';
import OnScrollAnimation from '../../../Components/OnScrollAnimmation';

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
    password: '',
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
    console.log('Form submitted', form);
  };

  return (
    <div className="flex justify-center items-center my-40 hidden1">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Member Login</h2>
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
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-[#C72625]">
          Login
        </button>
      </form>
    </div>
  );
}
