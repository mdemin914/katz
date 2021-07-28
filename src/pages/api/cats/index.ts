import { NextApiRequest, NextApiResponse } from "next";

/**
 * Return a list of cats from the external cats API.
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const results = await fetch(
      "https://60a45748fbd48100179dbe04.mockapi.io/frontend/items"
    );
    const json = await results.json();

    res.status(200).json(json);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default handler;
