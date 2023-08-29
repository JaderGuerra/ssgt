import { Person } from "./Person"
import { PersonResponse } from "./PersonResponse"

export class PeopleService {

  public static url = 'http://192.168.0.11:8000'

  public static async getPeople(filters: any = {}): Promise<PersonResponse> {
    const params = new URLSearchParams(Object.entries(filters))
    const response = await fetch(`${this.url}/api/person?${ params.toString() }`)
    return (await response.json())
  }

  public static async savePerson(person: Person): Promise<Person> {
    const form = new FormData()
    Object.entries(person).forEach(([key, value]) => form.append(key, value))
    const response = await fetch(`${this.url}/api/person`, {
      method: 'post',
      body: form
    })
    return await response.json()
  }

  public static async updatePerson(id: string, person: Person): Promise<Person> {
    const response = await fetch(`${this.url}/api/person/${id}`, {
      method: 'put',
      body: JSON.stringify(person),
      headers: {
        'content-type': 'application/json'
      }
    })
    return await response.json()
  }

  public static async getPerson(id: string): Promise<any | Person> {
    const response = await fetch(`${this.url}/api/person/${id}`)
    return await response.json()
  }

}