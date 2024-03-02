import Mongoose from 'mongoose';

const { Schema } = Mongoose;

const ShoppingListSchema = new Schema(
  {
    products: [{ product: Mongoose.Types.ObjectId, amount: Number }],
    note: String,
  },
  {
    timestamps: true,
  },
);

// eslint-disable-next-line prefer-arrow-callback
ShoppingListSchema.pre('save', function (next) {
  next();
});

const ShoppingListModel = Mongoose.model('ShoppingList', ShoppingListSchema);

export default ShoppingListModel;
