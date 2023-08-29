export interface Person {
  id?: string;
  name: string;
  identification: string;
  email: string;
  phone: string;
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date | null
}