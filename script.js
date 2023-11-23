const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});



document.getElementById("downloadBtn").addEventListener("click", function () {
  var canvas = document.getElementsByTagName("canvas")[0];
  var qrCodeUrl = canvas.toDataURL("image/png"); // Keep the MIME type as 'image/png'

  var link = document.createElement("a");
  link.href = qrCodeUrl;
  link.download = "qrcode.png";

  // Append the link to the document body before clicking it
  document.body.appendChild(link);
  link.click();

  // Clean up by removing the link from the document body
  document.body.removeChild(link);
});
