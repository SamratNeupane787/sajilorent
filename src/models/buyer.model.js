import mongoose,{Schema, model, models, mongo} from "mongoose";
import { unique } from "next/dist/build/utils";

const buyerSchema = new Schema({

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
    unique:true,
  },
  whislist:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Product",
    }
  ],
  cart: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1,
      },
    },
  ],
  addresses: [
    {
      fullName: String,
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
      phoneNumber: String,
      isDefault: { type: Boolean, default: false },
    },
  ],

},{timestamps:true})

const Buyer = mongoose.models.Buyer || mongoose.model("Buyer", buyerSchema)

export default Buyer