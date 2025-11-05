import { createFileRoute } from '@tanstack/react-router'
import { FormEvent } from 'react';
import { useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigation = useNavigate()

  function authHandler(formData:FormEvent<Element>){

    const form={
      email:formData.get('email'),
      password:formData.get('password')
    }
navigation({to:"/app"})
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7fff1] p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-[#4f772d]">Welcome Back</h2>
        <p className="text-center text-gray-600">Sign in to continue tracking your job applications</p>


        <form action={authHandler} className="space-y-4">
          <div>
            <label htmlFor='email' className="block text-gray-700 font-medium mb-1">Email</label>
            <input
            id='email'
              type="email"
              name='email'
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-[#4f772d]"
              placeholder="you@example.com"
            />
          </div>


          <div>
            <label htmlFor='password' className="block text-gray-700 font-medium mb-1">Password</label>
            <input
            id='password'
            name="password"
              type="password"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-[#4f772d]"
              placeholder="••••••••"
            />
          </div>


          <button
            type="submit"
            className="w-full bg-[#4f772d] text-white font-semibold py-3 rounded-xl shadow hover:bg-[#416623] transition"
          >
            Login
          </button>
        </form>


        <div className="text-center text-gray-600 text-sm">
          <span>Don't have an account? </span>
          <a href="#" className="text-[#4f772d] font-semibold hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  );
}
