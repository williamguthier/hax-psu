import { stdPostBody, stdResponse, invalidRequest } from "../utilities/requestHelpers.js";

// vercel to slice our data into views that we can remix at will
export default async function handler(req, res) {
  // use this if POST data is what's being sent
  let body = {};
  if (req.query) {
    body = req.query;
  }
  else {
    body = stdPostBody(req);
  }
  // cache for a day
  let options = {
    cache: 60 * 60 * 24
  };
  // process.env.HAX_STATS has our stats compiled by our staging system
  let data = await fetch(process.env.HAX_STATS).then((res) => {
      return res.json()
      }
  );
  res = stdResponse(res, data || [], options);
}