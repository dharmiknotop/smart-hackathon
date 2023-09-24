import contactUsModal from "../modal/contactUsModal.js";
export const contactUs = async function (req, res) {
  try {
    const messages = await contactUsModal.find({});

    return res
      .status(200)
      .json({ success: "Authenticated user", data: messages });
  } catch (error) {
    console.log(error);

    return res.status(400).json({ error: error.message });
  }
};
