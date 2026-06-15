function generateQR() {
  let text = document.getElementById("textInput").value;

  if (text.trim() === "") {
    showToast("⚠ Please enter text or URL");
    return;
  }

  let qrUrl = "/qr?text=" + encodeURIComponent(text);
  let qrImage = document.getElementById("qrImage");

  qrImage.src = qrUrl;

  document.getElementById("downloadBtn").href = qrUrl;

  document.getElementById("result").style.display = "block";
}

function clearQR() {
  document.getElementById("textInput").value = "";
  document.getElementById("result").style.display = "none";
}

document
  .getElementById("textInput")
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      generateQR();
    }
  });

async function scanQR() {
  const file = document.getElementById("qrFile").files[0];

  if (!file) {
    showToast("⚠ Please choose a QR image");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("/scan", {
      method: "POST",
      body: formData,
    });

    const result = await response.text();

    let type = "TEXT";

    if (result.startsWith("http")) {
      type = "URL";
    } else if (result.includes("@")) {
      type = "EMAIL";
    } else if (/^[0-9]+$/.test(result)) {
      type = "PHONE";
    }

    document.getElementById("qrType").innerHTML = "<b>Type:</b> " + type;

    document.getElementById("qrContent").innerHTML = "<b>Content:</b> " + result;

    const openLink = document.getElementById("openLink");

    if (type === "URL") {
      openLink.href = result;
      openLink.style.display = "inline-block";
    } else {
      openLink.style.display = "none";
    }

    document.getElementById("scanResult").style.display = "block";
  } catch (error) {
    showToast("❌ Invalid QR Code");
  }
}

function copyContent() {
  const text = document
    .getElementById("qrContent")
    .innerText.replace("Content: ", "");

  navigator.clipboard.writeText(text);

  showToast("✅ Copied to Clipboard");

  setTimeout(() => {
    document.getElementById("copyStatus").innerText = "";
  }, 2000);
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.innerText = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}