import mongoose, { Schema, model, models } from "mongoose";

const sellerSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, 
    },
    storeName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    storeLogo: {
      type: String, 
    },
    description: {
      type: String,
      maxlength: 1000,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
      phoneNumber: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
    totalSales: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Seller = mongoose.models.Seller || model("Seller", sellerSchema);
export default Seller;
