/*
! Deprecated due to brcrypt and is never used
Name: FortKNOX 
General Description: FortKNOX, inspired from samsaung knox is a encryption algo
Date: Wed 9:14PM GMT+6:30 November 1st
THICC Description: FortKnox is a cryptographic encryption algorithm,
it works by sharing a key
[WEB] 
<-
->
[API]
the Server behind the api is responsible for the keeping of the data,
its basically a version of 2fa, WPA, BCrypt,      
*/
/*
const bcrypt = require("bcrypt");
const twofactor = require("node-2fa");
const fkdb = require("../mongoose/schema/fortknox");
const psg = require("./password_gen");

// Function to generate a unique key with Base64 encoding
function generateUniqueKey() {
  const base64Key = psg(16); // Replace this with your key generation logic
  return base64Key;
}

// Function to create a unique key and store it with 2FA
function createUnique() {
  const base64Key = generateUniqueKey();

  // Generate a 2FA secret
  const newSecret = twofactor.generateSecret({
    name: psg(7),
    account: psg(4),
  });

  // Store the 2FA secret and base64Key in the database
  const newie = new fkdb({ secret: newSecret.secret, key: base64Key });
  newie.save();

  console.log("Unique key and 2FA secret created and stored.");
}

// Function to verify 2FA and Base64 encoded key
function verify(totpToken, base64Key) {
  const storedData = fkdb.find()[0];

  if (!storedData) {
    console.error("No data found for verification");
    return false;
  }

  // Verify the 2FA token
  const totpSecret = storedData.secret;
  const isValidTotp = twofactor.verifyToken(totpSecret, totpToken);

  if (!isValidTotp) {
    console.error("Invalid 2FA token. Verification failed.");
    return false;
  }

  // Verify the Base64 key
  const storedBase64Key = storedData.key;
  const isValidBase64Key = bcrypt.compare(base64Key, storedBase64Key);

  if (!isValidBase64Key) {
    console.error("Invalid Base64 key. Verification failed.");
    return false;
  }

  console.log("Verification successful.");
  return true;
}

module.exports = { createUnique, verify };
*/