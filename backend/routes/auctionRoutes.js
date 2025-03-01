const express = require('express');
const Auction = require('../models/Auction');

const router = express.Router();

// Post a new auction
router.post('/', async (req, res) => {
  const { itemName, description, category, startingBid, closingTime, image, createdBy } = req.body;
  try {
    const auction = await Auction.create({ itemName, description, category, startingBid, closingTime, image, createdBy });
    res.status(201).json(auction);
  } catch (err) {
    res.status(400).json({ error: 'Auction posting failed' });
  }
});

// Edit auction
router.put('/:id', async (req, res) => {
  try {
    const updatedAuction = await Auction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAuction);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
});

// Delete auction
router.delete('/:id', async (req, res) => {
  try {
    await Auction.findByIdAndDelete(req.params.id);
    res.json({ message: 'Auction deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Delete failed' });
  }
});

module.exports = router;
