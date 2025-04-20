import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res
      .status(400)
      .json({ message: "AUTHORIZATION REQUIRED", success: false });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      return res
        .status(400)
        .json({ message: "AUTHORIZATION REQUIRED", success: false });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "dsadsa", success: false });
  }
};

export default userAuth;
