const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  kindeId: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, unique: true }, // For MoMo
  email: { type: String, sparse: true },
  role: { type: String, enum: ["client", "pro", "admin"], default: "client" },
  profileImage: String,
  location: {
    region: {
      type: String,
      enum: ["Hhohho", "Manzini", "Lubombo", "Shiselweni"],
    },
    town: String,
  },
  // Pro Specific Fields
  proProfile: {
    category: String,
    title: String,
    bio: String,
    skills: [String],
    hourlyRate: Number,
    isVerified: { type: Boolean, default: false },
    momoAccepted: { type: Boolean, default: true },
    averageRating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    gallery: [String], // URLs to images
  },
  createdAt: { type: Date, default: Date.now },
});

// module.exports = mongoose.model('User', UserSchema);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
