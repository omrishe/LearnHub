import { UserCreate } from "./userInterfaces";
import axios from "axios";
import { createApi } from "@/lib/api";

const userApi = createApi("/users");

export async function signup(data: UserCreate) {
  try {
    const response = await userApi.post("/signup", data);
    console.log(response.data);
  } catch (err) {
    //checks for axios errors
    if (axios.isAxiosError(err)) {
      console.error(err);
    }
  }
}
export async function signin() {}
