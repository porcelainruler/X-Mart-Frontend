import xMart from "../public/images/x-mart-shortened-logo.png";
import appliances from "../public/images/appliances.jpg";
import allCategory from "../public/images/allCategory.jpg";
import beauty from "../public/images/beauty.jpg";
import electronics from "../public/images/electronics.jpg";
import fashion from "../public/images/fashion.jpg";
import grocery from "../public/images/grocery.jpg";
import mobile from "../public/images/mobile.jpg";
import offers from "../public/images/offers.png";
import sports from "../public/images/sports.jpg";

export default {
  segments: [
    {
      name: "offers",
      displayName: "Offers",
      imagePath: offers,
    },
    {
      name: "grocery",
      displayName: "Grocery",
      imagePath: grocery,
    },
    {
      name: "mobile",
      displayName: "Mobile",
      imagePath: mobile,
    },
    {
      name: "electronics",
      displayName: "Electronics",
      imagePath: electronics,
    },
    {
      name: "appliances",
      displayName: "Appliances",
      imagePath: appliances,
    },
    {
      name: "beauty",
      displayName: "Beauty",
      imagePath: beauty,
    },
    {
      name: "fashion",
      displayName: "Fashion",
      imagePath: fashion,
    },
    {
      name: "sports",
      displayName: "Sports",
      imagePath: sports,
    },
    {
      name: "allCategories",
      displayName: "Categories",
      imagePath: allCategory,
    },
  ],
};
