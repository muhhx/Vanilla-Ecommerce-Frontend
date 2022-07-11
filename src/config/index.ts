const config = {
  passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
  emailRegex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  baseUrl: "https://vanilla-ecommerce-backend.herokuapp.com/",
};

export default config;
