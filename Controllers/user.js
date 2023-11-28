const User = require('../models/User');

module.exports = {
  index: async (req, res) => {
    try {
      const users = await User.find();
      if (users.length > 0) {
        res.status(200).json({
          status: true,
          data: users,
          method: req.method,
          url: req.url
        });
      } else {
        res.status(404).json({
          status: false,
          message: "Data Masih Kosong"
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ success: false });
    }
  },

  show: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        res.json({
          status: true,
          data: user,
          method: req.method,
          url: req.url,
          message: "Data berhasil didapat"
        });
      } else {
        res.status(404).json({
          status: false,
          message: "Data tidak ditemukan"
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ success: false });
    }
  },

  store: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambahkan"
      });
    } catch (error) {
      console.error("Error creating data:", error);
      res.status(400).json({ success: false });
    }
  },

  update: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (user) {
        res.json({
          status: true,
          data: user,
          method: req.method,
          url: req.url,
          message: "Data berhasil diubah"
        });
      } else {
        res.status(404).json({
          status: false,
          message: "Data tidak ditemukan"
        });
      }
    } catch (error) {
      console.error("Error updating data:", error);
      res.status(400).json({ success: false });
    }
  },

  delete: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (deletedUser) {
        res.json({
          status: true,
          method: req.method,
          url: req.url,
          message: "Data berhasil dihapus"
        });
      } else {
        res.status(404).json({
          status: false,
          message: "Data tidak ditemukan"
        });
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      res.status(500).json({ success: false });
    }
  },
};
