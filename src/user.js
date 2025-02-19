// @ts-check
import { ApiClient } from "./api.js";

export async function getUser() {
  const result = await ApiClient.instance.queryApi("getUser", []);
  return result;
}
