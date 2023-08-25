(() => {
var exports = {};
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 4412:
/***/ (() => {

// import { supabase } from '@/supabase.Client';
// import { useSession } from '@supabase/auth-helpers-react';
// import { createClient } from '@supabase/supabase-js';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form';
// function login() {
//   const router = useRouter();
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const session = useSession();
//     const onSubmit = async (formData: any) => { 
//     const {data :logindata, error: loginerror} = await supabase.auth.signInWithPassword({
//       email: formData.email,
//       password: formData.password,
//     })
//     if (logindata) {
//       console.log(logindata)
//       localStorage.setItem("userZach", JSON.stringify(logindata.user))
//       localStorage.setItem("userSessionzach", JSON.stringify(logindata.session))
//       localStorage.setItem("userid", logindata.session?.user.id!)
//       localStorage.setItem("authenticated", "true")
//       router.push({
//         pathname:'/admin/createuser',
//       });
//     } else if (loginerror) {
//       console.log(loginerror)
//     } 
//   }  
//   useEffect(() => {
//     if (session) {
//       router.push('/admin/createuser');
//     }
//   }, [session, router]);
//   if(!session)
//   return (
//     <>
//     <div className="bg-[#03252F] absolute top-0 left-0 h-[90px] -z-10 w-full"></div>
//     <div className='bg-white w-screen h-auto py-10'>
//     <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-md">
//           <img
//             className="mx-auto h-12 w-auto"
//             src="/instaborne.svg"
//             alt="Instaborne"
//           />
//           <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
//         </div>
//         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//           <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                   Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="email"
//                     {...register("email")}                    
//                     type="email"
//                     autoComplete="email"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="password"
//                     {...register("password")}
//                                         type="password"
//                     autoComplete="current-password"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <input
//                     id="remember-me"
//                     name="remember-me"
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                     Remember me
//                   </label>
//                 </div>
//                 <div className="text-sm">
//                   <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                     Forgot your password?
//                   </a>
//                 </div>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className=" flex w-full justify-center rounded-md  bg-[#02B5A1] py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#02B5A1]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Sign in
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   )
// }
// export default login


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4412));
module.exports = __webpack_exports__;

})();