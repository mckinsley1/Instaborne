//import Stripe from 'stripe';
// export interface PageMeta {
//   title: string;
//   description: string;
//   cardImage: string;
// }

// export interface Customer {
//   id: string /* primary key */;
//   stripe_customer_id?: string;
// }

// export interface Product {
//   id: string /* primary key */;
//   active?: boolean;
//   name?: string;
//   description?: string;
//   image?: string;
//   metadata?: Stripe.Metadata;
// }
// export interface Programmes {
//     cover_url: string | null
//     created_at: string | null
//     description: string | null
//     id: number
//     show_time: string | null
//     title: string | null
//     type: string | null
//   }
export interface testUser {
    email: string | null     
    firtName: string
    lastName: string
    personalPhone: string | null
    userType: string
    specialCode:string | null
    created_at: string | null
    id: number
    userID: string
}
