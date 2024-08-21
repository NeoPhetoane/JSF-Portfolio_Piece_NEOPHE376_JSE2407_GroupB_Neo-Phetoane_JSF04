**E-Commerce Store with Vue and Tailwind CSS**
This application is a fully functional online store built with Vue.js and Tailwind CSS. It allows users to browse a catalog of products, view detailed information about each product, and filter and sort products based on their preferences. The store fetches data from a public API and provides a seamless and interactive shopping experience.

**Technologies Used**
Vue, Tailwind CSS and Vuex.

**Features**
Theme Toggle: Switch between light and dark mode.

Product Listing: View a list of products with details.

Product Details: View detailed information about individual products.

Cart Management: Add, update, and remove items from the shopping cart.

User Authentication: Login and logout functionality with token-based authentication.

Wishlist Management: Add items to a wishlist and manage them.

Product Comparison: Compare different products side by side.


**Project Structure**
src
  assets: Contains images.
 
 components: They stay constant on the screen
    Header.vue
    FilterSort.vue
    ProductCard.vue
    ThemeToggle.vue

 views: Different views, you have to navigate to another page to see them
    Cart.vue: Manages the shopping cart functionality.
    Comparison.vue: Handles product comparison.
    Log-In.vue: User authentication (login/logout).
    ProductDetail.vue: Displays detailed information about a product.
    Wishlist.vue: Manages the wishlist.
    Home: Landing page.


  store.js: Configures the Vuex store.
  router.js: Configures routes.
  App.vue: Main application component.



**Installation**

1. git clone https://github.com/NeoPhetoane/JSF-Portfolio_Piece_NEOPHE376_JSE2407_GroupB_Neo-Phetoane_JSF04.git
cd vue3-ecommerce-store

2. npm install

3. npm run dev

**Usage Examples**

Home Page

<img src="images/Screenshot (209).png" alt="Home page screenshot">

Description: The home page displays a grid of product cards with images, titles, prices, and categories. Users can filter and sort the products using the dropdown menus.

Product Detail Page

Description: The product detail page shows detailed information about a specific product, including its image, title, description, price, category, and rating.
View Product Information: See comprehensive details about the product.
Go Back to Products: Click the "Back to Products" button to return to the home page.

<img src="images/Screenshot (210).png" alt="Detail Page screenshot">


**Deployed version on Netlify**

https://myswiftcartstore.netlify.app 


**Zoom Presentation Video**

<video src="images/video1264520409.mp4"
