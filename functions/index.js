const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();

const db = admin.firestore();
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const name = String(req.body?.name || "").trim();
    const email = String(req.body?.email || "").trim();
    const message = String(req.body?.message || "").trim();

    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        message: "Please fill in your name, email, and message.",
      });
    }

    await db.collection("contactMessages").add({
      name,
      email,
      message,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      source: "portfolio-contact-form",
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("submitContact error:", error);
    return res.status(500).json({
      ok: false,
      message: "Failed to store your message. Please try again.",
    });
  }
});

exports.submitContact = functions.https.onRequest(app);
