import axios, { AxiosHeaders } from "axios";
import type * as Types from "../utils/typings/types";
import { Dictionary, rest } from "lodash";

export async function get(url: string): Promise<any> {
    var resultQuery = {};
	const response = await axios.get(url);
    resultQuery = response.data;
    return resultQuery;
}

export async function post(url: string, payload: Object): Promise<any> {
	var resultQuery = {}
    const response = await axios.post(url,payload)
    resultQuery = response.data;
    return resultQuery
}
