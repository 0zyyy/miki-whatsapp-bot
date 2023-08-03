import axios, { AxiosHeaders } from "axios";
import type * as Types from "../utils/typings/types";

export async function get(url: string) {
    var res = {};
	axios.get(url).then((res) => {
		res = res.data;
        // Change rest data to object
        console.log(JSON.parse(res.data));
	}).then(() => {
        return res;
    });
}

export async function post(url: string) {
	axios.post(url, {}).then((res) => [console.log(res)]);
}