import { testUser } from "@/types";
import { Database } from "@/types_db";
import {createBrowserSupabaseClient,createServerSupabaseClient,User} from "@supabase/auth-helpers-nextjs";
export const supabase = createBrowserSupabaseClient<Database>();
//export const supabase = createServerSupabaseClient<Database>(context: GetServerSidePropsContext);
export const ReaduserInfo = async (user: User) => {
  await supabase
    .from("testUser")
    .select("userID,firstName,lastName,email")
    .eq("userID", user.id);
};
// export const ReaduserInfo = async (firstName:string, lastName:string, userID:string, email:string ) : Promise <
// testUser[]
//  > => {
//   const { data: testData , error : testError} = await supabase
//     .from('testUser')
//     .select({
//       userID : userID,
//       firstName : firstName,
//       lastName: lastName,
//       email : email,
//     })
// .eq("userID", "bff1a955-9585-4966-ac4d-b8322f65b437");

//     // .eq("userID", user.id);
//     console.log(JSON.stringify(testData));
//     if (testData && testData.length >= 0) {
//     }
//     if (testError) {
//       console.log(testError.message);
//     }

//     // TODO: improve the typing here.
//     return (ail);
// };
//   console.log(ReaduserInfo);
//   console.log(JSON.stringify(ReaduserInfo));

// export const ReaduserInfo = async () => {
// const { data, error } = await supabase

//     .from("testUser")
//     .select("userID,firstName,lastName,email")
//     //.eq("userID", user.id);

//     if (error) {
//       console.log(error.message);
//     }
//     // TODO: improve the typing here.
//     return (data as any) || [];
//   };