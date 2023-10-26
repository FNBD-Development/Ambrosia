import { normalize } from "path";

function normalizeURL(url) {
  // Use a regular expression to remove the front slash if it exists
  const regex = /^https?:\/\/(.+)$/; // Match the protocol and the rest of the URL

  const result = url.match(regex);
  if (result && result[1]) {
    return result[1];
  }

  return url; // Return the original URL if it doesn't match the regex
}

module.exports = normalizeURL;
