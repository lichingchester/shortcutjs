/**
 * qrcode generator
 * -------------------------
 *
 * * Install
 * npm install --save qrcode
 *
 *
 */

export const generateQRCode = (canvas) => {
  var QRCode = require("qrcode");

  QRCode.toCanvas(canvas, "sample text", function (error) {
    if (error) console.error(error);
    console.log("success!");
  });
};
