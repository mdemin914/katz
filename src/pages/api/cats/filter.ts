import { NextApiRequest, NextApiResponse } from "next";
import { CatType } from "../../../utils/types/cat";

/**
 * Return a filtered list of cats from the external cats API.
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // destructure the possible query parameters
  const { gte, lte, name } = req.query;

  // next js does not know if query is a string or a string[] need to check it
  if (name && typeof name !== "string") {
    res.status(422).json({ message: "Name must be a string" });
    return;
  }

  // next js does not know if query is a string or a string[] need to check it
  if (gte && typeof gte !== "string") {
    res.status(422).json({ message: "gte must be a string" });
    return;
  }

  // next js does not know if query is a string or a string[] need to check it
  if (lte && typeof lte !== "string") {
    res.status(422).json({ message: "lte must be a string" });
    return;
  }

  try {
    const results = await fetch(
      "https://60a45748fbd48100179dbe04.mockapi.io/frontend/items"
    );
    const json: CatType[] = await results.json();

    let output: CatType[] = [];

    // convert the GTE value to a number and compare to the price
    if (gte) {
      output = json.filter((c) => Number(c.price) > Number(gte));
    }
    // convert the LTE value to a number and compare to the price
    else if (lte) {
      output = json.filter((c) => Number(c.price) < Number(lte));
    }
    // check if the name passed in includes the cats name
    else if (name) {
      output = json.filter((c) =>
        c.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    res.status(200).json(output);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default handler;
