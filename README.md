<h1>Vanilla E-commerce</h1>
<div align="center">

[![Linkedin Badge](https://img.shields.io/badge/-Murilo%20Santos-231f20?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/giovannalinda)](https://www.linkedin.com/in/muhhx)
[![Gmail Badge](https://img.shields.io/badge/-muriloue@gmail.com-231f20?style=flat-square&logo=Gmail&logoColor=white&link=mailto:muriloue@gmail.com)](mailto:muriloue@gmail.com)

</div>
<p align="center">
    <a href="#About this Project">About</a> -
    <a href="#Sobre">Sobre</a> -
    <a href="#Preview">Preview</a> -
    <a href="#Funcionalidades">Funcionalidades</a> -
    <a href="#Built">Tecnologias</a>
</p>

## About this Project
The idea of the app was to build a fully functional clothing e-commerce app, with authentication, payment methods, and as much functionalities I could think of.

- Live website: <https://vanillaec.herokuapp.com/>
- Server API repository: <https://github.com/muhhx/Vanilla-Ecommerce-Backend/> 

## Some observations
- This project is part of my personal portfolio, so, I'll be happy if you could provide me any feedback about the project, code, structure or anything that you can report that could make me a better developer!
- I started this app some months ago, so there are some things that I did back then that I could have done better, such as using Typescript generics with Axios, to type the API response. Regardless, the app is working the same way 😊.

## Preview
You can check all of the screens, as well as a website walkthrough, by clicking [here](linktosomething)

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

## Built with (client)
- [Typescript](TypeScript) | More transparency and control over the code
- [React](React) | React functional components
- [React-Router-Dom v6](React) | Router
- [React Context API](React) | Manage simple states
- [React-Loader-Spinner](React) | Simple library for the UI Spinner component
- [Redux Toolkit](React) | Main state manager
- [Redux Thunk](React) | Handle state change due to async code
- [Styled-Components](React) | Styling
- [Axios](React) | HTTP requests
- [Axios (Interceptors)](React) | 403 handler for expired Access Tokens, generating new ones through the Refresh Token route

## Support tools
- [AMAZON s3](React) | Storage service
- [Stripe](React) | Payment services
- [JWT Tokens](React) | Accesss and Refresh tokens for Auth, stored in httpOnly Cookie
</br>

- ***Note:** more tools and technologies were used in the server API for this application, where you can check it [here](https://github.com/muhhx/Vanilla-Ecommerce-Backend)*



<h4 align="center">Murilo Santos, 2022.✨™</h4>
