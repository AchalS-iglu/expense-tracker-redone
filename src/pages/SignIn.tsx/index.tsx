import React from "react";

const SignIn = () => {
  return (
    <div className="py-6 px-12 h-full w-full">
      <div className="flex justify-center items-center flex-col h-full dark:text-slate-300 text-slate-700">
        <div>
          <div className="text-center justify-center">
            <h2 className="font-mono text-5xl mb-6">Sign In</h2>
            {/* <hr className="my-3 h-px rounded bg-black border-0 mb-6" /> */}
          </div>
          <form>
            <input
              className="form-control block w-full px-4 py-2 text-xl font-normal text-slate-700 bg-white bg-clip-padding border border-solid border-slate-300 rounded transition ease-in-out m-0 focus:text-slate-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-6"
              type="text"
              placeholder="Email"
              name="email"
            />
            <input
              className="form-control block w-full px-4 py-2 text-xl font-normal text-slate-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-6"
              type="text"
              placeholder="Password"
              name="password"
            />
            <button
              type="submit"
              className="inline-block px-7 py-3 bg-slate-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-300 hover:text-slate-500 hover:shadow-lg focus:bg-slate-300 focus:text-slate-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-300 active:text-slate-500 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Sign in
            </button>
            <button
              type="submit"
              className="inline-block text-center px-7 py-3 bg-zinc-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-zinc-300 hover:text-zinc-600 hover:shadow-lg focus:bg-zinc-300 focus:text-zinc-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-300 active:text-zinc-300 active:shadow-lg transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              //   href="/Register"
            >
              Create a New Account
            </button>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-slate-300 before:mt-0.5 after:flex-1 after:border-t after:border-slate-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">OR</p>
            </div>
            <a
              className="px-7 py-3 dark:text-red-600 dark:bg-white font-medium bg-red-600 text-white text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="w-3.5 h-3.5 mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
              </svg>
              Continue with Google
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
