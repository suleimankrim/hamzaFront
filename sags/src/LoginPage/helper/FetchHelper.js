import axios from "axios";
import jwt_decode from "jwt-decode";

axios.defaults.baseURL = "http://127.0.0.1:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

export async function authenticate(email) {
  try {
    console.log(email);
    const { status } = await axios.post(
      "/email",
      JSON.stringify({ email: email })
    );
    console.log(status);
    return status;
  } catch (e) {
    console.log(e.message);
    return e.status;
  }
}

export async function register(coordinate) {
  try {
    const {
      data: { message },
    } = await axios.post(`/`, coordinate);
    return { message };
  } catch (e) {
    return new Promise.reject(e);
  }
}

export async function login(email, password) {
  try {
    const { data } = await axios.post(
      "/login",
      JSON.stringify({ email, password })
    );
    return data;
  } catch (e) {
    return new Promise.reject(e.message);
  }
}

export async function updateUser(coordinate) {
  try {
    const token = localStorage.getItem("token");
    console.log("token " + token);
    const { data } = await axios.put("/update", coordinate, {
      headers: { Authorization: "Bearer " + token },
    });

    return data;
  } catch (e) {
    return new Promise.reject({ error: "Could Not Update User...!" });
  }
}

export async function generateOTP(email) {
  try {
    const {
      data: { code },
      status,
    } = await axios.get("/sendcode", { params: { email } });
    if (status === 201) {
      const text = `your Password Recovery OTP is ${code} . Verify And Recover you Password `;
      await axios.post("/mail", {
        emailName: email,
        username: "master",
        subject: "Password recovery",
        text,
      });
    }
    return code;
  } catch (e) {
    return new Promise.reject({ e });
  }
}

export async function verifyOTP(email, code) {
  try {
    const { status } = await axios.get("/code", {
      params: { email: email, code: code },
    });
    return Promise.resolve(status);
  } catch (e) {
    return new Promise.reject({ e });
  }
}

export async function restPassword(email, password) {
  try {
    const { data, status } = await axios.post("/resetpassword", {
      email,
      password,
    });
    return new Promise.resolve(status);
  } catch (e) {
    return new Error(e.message);
  }
}

export async function getUsernameDecode() {
  const token = localStorage.getItem("token");
  return jwt_decode(token);
}
