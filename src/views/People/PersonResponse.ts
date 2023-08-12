import { Person } from "./Person"

export interface PersonResponse {
  current_page: number
  data: Person[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: Link[]
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: any
  to: number
  total: number
}

export interface Link {
  url?: string
  label: string
  active: boolean
}