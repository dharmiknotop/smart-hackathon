import contactUs from "../modal/contactUsModal.js";
export const validateUser = async function (req, res) {
  try {
    const messages = await contactUs.find({});

    return res
      .status(200)
      .json({ success: "Authenticated user", data: messages });
  } catch (error) {
    console.log(error);

    return res.status(400).json({ error: error.message });
  }
};
