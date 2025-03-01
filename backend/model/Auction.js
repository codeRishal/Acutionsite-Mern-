const mongoose = require('mongoose');

const AuctionSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  startingBid: { type: Number, required: true },
  closingTime: { type: Date, required: true },
  image: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Auction', AuctionSchema);
