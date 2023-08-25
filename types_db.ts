export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      testUser: {
        Row: {
          email: string | null     
          firstName: string
          lastName: string
          personalPhone: string | null
          userType: string
          specialCode:string | null
          created_at: string | null
          id: number
          userID: string
        }
        Insert: {
          email: string | null     
          firstName: string
          lastName: string
          personalPhone: string | null
          userType: string
          specialCode:string | null
          created_at: string | null
          id: number
          userID: string
        }
        Update: {
          email: string | null     
          firstName: string
          lastName: string
          personalPhone: string | null
          userType: string
          specialCode:string | null
          created_at: string | null
          id: number
          userID: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
