
/**
 * 
 */
class ApiHttpClient {
    private async request<TResponse, TBody = unknown>(
        url: string,
        method: string,
        headers: HeadersInit,
        body?: TBody
    ): Promise<TResponse> {
        const options: RequestInit = {
          method: method,
          headers: {
            ...headers
          }
        }
        
        if(body !== undefined && method !== "GET" && method !== "HEAD") {
          options.body = JSON.stringify(body);
        }

        try {
          const response = await fetch(url, options);
          if(!response.ok) {
            throw new Error(`Response failed due to: ${response.status}: ${response.statusText}`)
          }

          return (await response.json()) as TResponse
        }
        catch(err: any) {
          throw new Error(err.message, err.status)
        }
    }

    /**
     *
     * @param url
     * @returns
     */
    public async get<TResponse>(url: string, headers: HeadersInit): Promise<TResponse> {
        try {
            return await this.request(url, "GET", headers);
        } catch (err: any) {
            throw new Error(err.message, err.status);
        }
    }

    /**
     *
     * @param url
     * @param headers
     * @param data
     * @returns
     */
    public async put<TBody>(url: string, headers: HeadersInit, data: TBody) {
        try {
            return await this.request(url, "PUT", headers, data);
        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    /**
     * 
     * @param url 
     * @param headers 
     * @param data 
     * @returns 
     */
    public async post<TBody>(url: string, headers: HeadersInit, data: TBody) {
        try {
            return await this.request(url, "POST", headers, data);
        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    /**
     * 
     * @param url 
     * @param headers 
     * @param data 
     * @returns 
     */
    public async delete<TBody>(url: string, headers: HeadersInit, data: TBody) {
        try {
            return await this.request(url, "DELETE", headers, data);
        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}

export const httpClient = new ApiHttpClient();
