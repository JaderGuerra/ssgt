import { PersonResponse } from "./PersonResponse"

export class PeopleService {

  public static async getPeople(filters: any = {}): Promise<PersonResponse> {
    const params = new URLSearchParams(Object.entries(filters))
    const response = await fetch(`http://192.168.0.11:8000/api/person?${ params.toString() }`)
    return (await response.json())
  }

}