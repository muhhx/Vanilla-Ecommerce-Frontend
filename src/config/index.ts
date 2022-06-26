const config = {
  passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
  emailRegex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  baseUrl: "http://localhost:4000",
};

export default config;
