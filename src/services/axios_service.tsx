import axios, { AxiosRequestHeaders } from 'axios';

export interface IAxiosResponse<T> {
    data: T | undefined,
    error: any;
}

const backendUrl = process.env.REACT_APP_API_URL || 'https://sports-events-api.loro.ch/api/';

const useRequest = async <T extends unknown>(querry: string): Promise<IAxiosResponse<T>> => {
    let headers: AxiosRequestHeaders = {
        'Content-Type': 'application/json',
    };
    return axios.get<T>(`${backendUrl}${querry}`, {
        headers
    })
        .then(response => {
            return { data: response.data, error: null };
        })
        .catch(e => { return { data: undefined, error: e }; });
}

export default useRequest;