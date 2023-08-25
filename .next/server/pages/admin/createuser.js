(() => {
var exports = {};
exports.id = 768;
exports.ids = [768];
exports.modules = {

/***/ 8165:
/***/ (() => {

// import { RadioGroup } from "@headlessui/react";
// import { CheckCircleIcon } from "@heroicons/react/24/outline";
// import { useSession } from "@supabase/auth-helpers-react";
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/router";
// import { supabase, supabaseAdmin } from "@/supabase.Client";
// function Createuser() {
//   //const [currentUserid, setCurrentUserid] = useState('');
//   const [currentFirstName, setCurrentUserFirstName] = useState("");
//   const [currentLastName, setCurrentUserLastName] = useState("");
//   const [currentUserType, setCurrentUserType] = useState("");
//   //User levels state
//   const [isSuperadmin, setIsSuperadmin] = useState('');
//   const [isDealership, setIsDealership] = useState('');
//   const [isAgents, setIsAgents] = useState('');
//   const [isClients, setIsClients] = useState('');
//   console.log("Afficher superadmins: ", isSuperadmin) ;
//   console.log("Afficher Dealerphips: ", isDealership) ;
//   console.log("Afficher Agents: ", isAgents) ;
//   console.log("Afficher Clients: ", isClients) ;
//   const { register, handleSubmit } = useForm();
//   const router = useRouter();
//   const session = useSession();
//   useEffect(() => {
//     if (session) {
//       const getData = async () => {
//         const uid = localStorage
//           .getItem("userid")
//           ?.substring(0, localStorage.getItem("userid")?.length);
//                   const { data: supadata } = await supabase
//           .from("testUser")
//           .select("userID,firstName,lastName,email,userType")
//           .eq("userID", uid);
//           const leuser = supadata[0].userType;
//           console.log("Le usertype en string:", leuser);
//           setCurrentUserFirstName(supadata[0].firstName);
//           setCurrentUserLastName(supadata[0].lastName);
//           setCurrentUserType(supadata[0].userType);
//           // Put in place a hierarchy to mange the form display
//             // if user type his a Super Admin hide nothing
//             if(leuser.includes('usersuperadmin')){
//               setIsSuperadmin('true');
//               setIsDealership('true');
//               setIsAgents('true');
//               setIsClients('true');
//             }
//             // if user type his a Dealership hide Super Admin
//             if(leuser.includes('userdealership')){
//               setIsDealership('true');
//               setIsAgents('true');
//               setIsClients('true');
//             }
//                 // if user type his a Agents hide Super Admin and Dealership and agents
//             if(leuser.includes('useragent')){
//               setIsAgents('true');
//               setIsClients('true');
//             } 
//                 // if user type his a client hide Super Admin and Dealership and Agents
//             if(leuser.includes('userclient')){
//               setIsClients('true');
//             }
//       };
//       getData();
//     }
//   }, []);
//   const onSubmit = async (formData: any) => {
//     const { data, error: creatUserError } =
//       await supabaseAdmin.auth.admin.createUser({
//         email: formData.email,
//         password: formData.password,
//         user_metadata: {
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           specialCode: formData.specialCode,
//           userType: formData.userType,
//           createAt: formData.creatAt,
//           lastConnexion: formData.lastConnexion,
//           createdbyUID: localStorage.getItem("userid"),
//         },
//       });
//     // ajouter a la table
//     const { error: usererror } = await supabase.from("testUser").insert([
//       {
//         createdBy: session?.user.id,
//         userID: data.user?.id,
//         email: formData.email,
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         specialCode: formData.specialCode,
//         userType: formData.userType,
//         // createAt: formData.creatAt,
//         // lastConnexion: formData.lastConnexion,
//         personalPhone: formData.personalPhone,
//       },
//     ]);
//     if (creatUserError) {
//       const messageError = creatUserError.message;
//       alert("The acount has not benn created " + messageError);
//     } // display the corresponding error message.
//     if (!creatUserError) {
//       alert(
//         "The acount of " +
//           formData.firstName +
//           " has been created succesfully!!!"
//       );
//     }
//   };
//   useEffect(() => {
//     if (!session) {
//       router.push("/admin/login");
//     }
//   }, []);
//   return (
//     <>
//       {/* Only if the user is  connected*/}
//       {/* mettre un background au footer */}
//       <div className="bg-[#03252F] absolute top-0 left-0 h-[90px] -z-10 w-full"></div>
//       <div className="relative bg-white">
//         <div className="pt-16 pb-24 sm:pt-24 sm:pb-10 lg:mx-auto ">
//           <div className="px-6 lg:px-8">
//             <div className="mx-auto max-w-xl">
//               <h2 className="text-3xl font-bold tracking-tight text-gray-900">
//                 <span className="mr-2.5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-500">
//                   <span className="text-xl font-medium leading-none text-white">
//                     {currentFirstName.slice(0, 1).toUpperCase()}{" "}
//                     {currentLastName.slice(0, 1).toUpperCase()}
//                   </span>
//                 </span>
//                 {currentFirstName} {currentLastName}{" "}
//                 <span className="inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
//                   {currentUserType.slice(4, 5).toUpperCase()}
//                   {currentUserType.slice(5)}
//                 </span>
//               </h2>
//               <p className="mt-2 text-lg leading-8 text-gray-600">
//                 Hello {currentFirstName} have a good day !
//               </p>
//               <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
//                 <div className="text-gray-900">
//                   <div>
//                     <label
//                       htmlFor="generate-code"
//                       className="block text-sm font-semibold leading-6 text-gray-900"
//                     >
//                       Generated-code
//                     </label>
//                     <div className="mt-2.5">
//                       <div className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
//                         Code
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <button className="mt-auto flex w-full justify-center rounded-md  bg-[#02B5A1] py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#02B5A1]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-10 "
//                  onClick={() => {
//                   router.push("/admin/login");
//                   supabase.auth.signOut(); 
//                   localStorage.clear();
//                 }}
//                  type="submit">
//             Sign out
//           </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Permetre à l'utilisateur connecter de créer un utilisateur */}
//         <form>
//           {/* mettre un background au footer */}
//           <div className="relative bg-white">
//             <div className="pt-16 pb-24 sm:pt-24 sm:pb-10 lg:mx-auto lg:grid lg:max-w-7xl lg:pt-32">
//               <div className="px-6 lg:px-8">
//                 <div className="mx-auto max-w-xl">
//                   <h2 className="text-3xl font-bold tracking-tight text-gray-900">
//                     Create User
//                   </h2>
//                   <p className="mt-2 text-lg leading-8 text-gray-600">
//                     Here you can create users !!
//                   </p>
//                   <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
//                     <div>
//                       <label
//                         htmlFor="first-name"
//                         className="block text-sm font-semibold leading-6 text-gray-900"
//                       >
//                         First name
//                       </label>
//                       <div className="mt-2.5">
//                         <input
//                           type="text"
//                           id="first-name"
//                           {...register("firstName", {
//                             required: true,
//                           })}
//                           className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="last-name"
//                         className="block text-sm font-semibold leading-6 text-gray-900"
//                       >
//                         Last name
//                       </label>
//                       <div className="mt-2.5">
//                         <input
//                           type="text"
//                           id="last-name"
//                           {...register("lastName", {
//                             required: true,
//                           })}
//                           className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                       </div>
//                     </div>
//                     <div className="sm:col-span-2">
//                       <label
//                         htmlFor="email"
//                         className="block text-sm font-semibold leading-6 text-gray-900"
//                       >
//                         Email
//                       </label>
//                       <div className="mt-2.5">
//                         <input
//                           id="email"
//                           type="text"
//                           {...register("email", {
//                             required: true,
//                             pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
//                           })}
//                           autoComplete="email"
//                           className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                       </div>
//                     </div>
//                     <div className="sm:col-span-2">
//                       <div className="flex justify-between text-sm leading-6">
//                         <label
//                           htmlFor="phone"
//                           className="block font-semibold text-gray-900"
//                         >
//                           Phone
//                         </label>
//                       </div>
//                       <div className="mt-2.5">
//                         <input
//                           type="tel"
//                           {...register("personalPhone", {
//                             required: false,
//                             pattern:
//                               /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
//                           })}
//                           id="personalPhone"
//                           aria-describedby="phone-description"
//                           className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                       </div>
//                     </div>
//                     <div className="sm:col-span-2">
//                       <label
//                         htmlFor="password"
//                         className="block text-sm font-semibold leading-6 text-gray-900"
//                       >
//                         Password
//                       </label>
//                       <div className="mt-2.5">
//                         <input
//                           id="password"
//                           type="password"
//                           {...register("password", {
//                             required: true,
//                           })}
//                           autoComplete="password"
//                           className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                       </div>
//                     </div>
//                     <fieldset className="sm:col-span-2">
//                       <legend className="block text-sm font-semibold leading-6 text-gray-900">
//                         Account type
//                       </legend>
//                       {/* {seulement pour mettre les super admin} */}
//                       <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600 ">
//                       {isSuperadmin ? 
//                       <div className={`flex gap-x-2.5`}>
//                           <input
//                             id="usersuperadmin"
//                             {...register("userType")}
//                             value="usersuperadmin"
//                             type="radio"
//                             className="mt-1 h-4 w-4 border-gray-300 text-[#02B5A1] shadow-sm focus:ring-[#02B5A1]"
//                           />
//                           <label htmlFor="usersuperadmin">SuperAdmin</label>
//                         </div>
//                            : ""
//                           }
//                         </div>
//                         {/* {seulement pour mettre les super admin} */}
//                       <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
//                       {isSuperadmin ? 
//                                 <div className={`flex gap-x-2.5`}>
//                                 <input
//                                   id="userdealership"
//                                   {...register("userType", {
//                                     required: true,
//                                   })}
//                                   value="userdealership"
//                                   type="radio"
//                                   className="mt-1 h-4 w-4 border-gray-300 text-[#02B5A1] shadow-sm focus:ring-[#02B5A1]"
//                                 />
//                                 <label htmlFor="userdealership">Dealership</label>
//                               </div>
//                               : ""
//                             }
//                           {/* {Only for super admin and dealership } */}
//                           {isDealership ?
//                         <div className={`flex gap-x-2.5`}>
//                           <input
//                             id="useragent"
//                             {...register("userType", {
//                               required: true,
//                             })}
//                             value="useragent"
//                             type="radio"
//                             className="mt-1 h-4 w-4 border-gray-300 text-[#02B5A1] shadow-sm focus:ring-[#02B5A1]"
//                           />
//                           <label htmlFor="useragent">Agents</label>
//                         </div>
//                          : ""
//                         }
//                               {/* {Only for super admin, dealership and agent } */}
//                          {isAgents ?
//                         <div className={`flex gap-x-2.5`}>
//                           <input
//                             id="userclient"
//                             {...register("userType", {
//                               required: true,
//                             })}
//                             type="radio"
//                             value="userclient"
//                             className="mt-1 h-4 w-4 border-gray-300 text-[#02B5A1] shadow-sm focus:ring-[#02B5A1]"
//                           />
//                           <label htmlFor="userclient">Clients</label>
//                         </div>
//                            : ""
//                           }
//                       </div>
//                     </fieldset>
//                     <div className="sm:col-span-2">
//                       <div className="flex justify-between text-sm leading-6">
//                         <label
//                           htmlFor="phone"
//                           className="block font-semibold text-gray-900"
//                         >
//                           Special Code
//                         </label>
//                         <p id="phone-description" className="text-gray-400">
//                           Optional
//                         </p>
//                       </div>
//                       <div className="mt-2.5">
//                         <input
//                           type="text"
//                           {...register("specialCode")}
//                           id="specialCode"
//                           className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
//                     <button
//                       onClick={handleSubmit(onSubmit)}
//                       type="submit"
//                       className=" flex w-full justify-center rounded-md  bg-[#02B5A1] py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#02B5A1]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                     >
//                       Create Account
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
// export default Createuser;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8165));
module.exports = __webpack_exports__;

})();