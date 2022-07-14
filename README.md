<h1>Vanilla E-commerce</h1>

<h4 align="center">
  <img alt="Readme" title="Readme" src="./preview/PREVIEW_NAVIGATION.gif" />
  <img alt="Readme" title="Readme" src="./preview/PREVIEW_BUYING.gif" />
</h4>

You can check all of the screens and gifs with previews by clicking [here](https://github.com/muhhx/Vanilla-Ecommerce-Frontend/tree/main/preview)

## About this Project
- **Live website:** <https://vanillaec.herokuapp.com/>
- **Server API repository:** <https://github.com/muhhx/Vanilla-Ecommerce-Backend/>
  

- Let's connect on LinkedIn: <https://www.linkedin.com/in/muhhx/>
- Send me an email: muriloue@gmail.com

The idea of the app was to build a place to share and curate my clothing interests from different brands and collections, so I came to the conclusion that there was no better way than creating a fully functional ecommerce so I could show them off 😅.

The App includes Authentication, Payment methods, Theme switcher, and a variety of other functionalities that enhance the user experience, integrating it to third-party services like AWS and Stripe.

I also put a lot of time and efford on the admin page, creating a intuitive and easy administration panel to manage our products, categories, collections, and the whole website tbh.

## Built with (client)
- [Typescript](https://www.typescriptlang.org/) | More transparency and control over the code
- [React](https://reactjs.org/docs/getting-started.html) | React functional components
- [React-Router-Dom v6](https://reactrouter.com/docs/en/v6/getting-started/overview) | Router
- [React Context API](https://reactjs.org/docs/context.html) | Manage simple states
- [React-Loader-Spinner](https://www.npmjs.com/package/react-loader-spinner) | Simple library for the UI Spinner component
- [Redux Toolkit](https://redux-toolkit.js.org/) | Main state manager
- [Redux Thunk](https://redux.js.org/usage/writing-logic-thunks) | Handle state change due to async code
- [Styled-Components](https://styled-components.com/) | Styling
- [Axios](https://axios-http.com/docs/intro) | HTTP requests
- [Axios (Interceptors)](https://axios-http.com/docs/interceptors) | 403 handler for expired Access Tokens, generating new ones through the Refresh Token route

## Support tools
- [AMAZON s3](https://aws.amazon.com/s3/) | Storage service
- [Stripe](https://stripe.com/en-br) | Payment services
- [JWT Tokens](https://jwt.io/) | Accesss and Refresh tokens for Auth, stored in httpOnly Cookie
&nbsp;
- ***Note:** more tools and technologies were used in the server API for this application, where you can check it [here](https://github.com/muhhx/Vanilla-Ecommerce-Backend)*

## Functionality guide
- Navigate through our products, filter them based on your needs and interests, find the one you like, add to the cart (and to your list of favorite products), checkout and buy it using your credit cart!
- In the Menu, you can navigate throught the many collections and learn more about them, see their information, look book images, and even their products
- Basic user experience functionalities
  - Responsive Interface for all screens
  - Theme switcher for dark and light mode
- Shop All
  - Navigate and filter the products based on your interests
  - Basic filtering done by gender ("All", "Men", "Women")
  - Advanced filtering done by "Category" (Jacket, Shirt, etc), "Collection" (AW21, AW22, etc), and "Conditions" (New, Sold Out, Discount)
  - Clear the filters
  - The UI changes based on the product conditions
- Product Page
  - Select a color (the images of the product will change based on the color)
  - Select a size (each color has its own sizes)
  - Add to the cart (see the price change on the upper-right corner of your screen)
  - Add to yout list of favorite products
  - The UI will change, based on the product conditions
- User Profile Page
  - Check your list of favorite products (click in the image to go to the page of the product)
  - Remove products from your list
  - Delete account option
  - Logout option
- Cart
  - Add more quantity of the same product
  - Remove the number of quantity of the same product
  - Remove a product and all of its quantities out of the shopping cart
  - Final price updates every time the cart state changes
  - Click checkout to go to the payment page
- Payment
  - Add your payment information and order our products
  - If you cancel the purchase, you'll be redirected to the cart
  - After paying the product, you will be redirected to our website success screen
  - *you can use 4242 4242 4242 4242 as a card number for testing purposes. Learn more about it [here (Stripe documentation)](https://stripe.com/docs/testing)*
- Authentication
  - Create an account
  - Login to your account
  - Your session will expire in 1 day or when you logout
- Admin
  - Create products with as many options as you want for one single product
  - Update products (name, gender, category, etc)
  - Create, update and delete the categories (Shirts, Jackets, etc)
  - Create, update and delete the collections (AW21, SS21, etc)
      - Set the collection to be displayed at the home screen



<h4 align="center">Murilo Santos, 2022.✨™</h4>
