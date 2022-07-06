const config = {
  passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
  emailRegex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  baseUrl: import.meta.env.VITE_APP_API_URL,
};

export default config;
