

class HttpClient {
  constructor() {}

  private async request<TBody>(url: string, type: string, body?: TBody) {
    return await fetch(url, {
      method: type,
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
  
  /*
   * @param {string} url - An absolute URL of the API.
   * @param {string} acceptHeader - The MIME type
  */
  public async get(url: string) {
    try {
      const response = await this.request(url, "get")
      if(response.status === 200) {
        return response.json()
      }
    }
    catch(err: any) {
      throw new Error(err.status, err.message)
    }
  } 
}
