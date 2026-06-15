function generateQR() {

    let text =
        document.getElementById(
            "textInput"
        ).value;

    if(text.trim() === "") {

        alert(
            "Please enter text or URL"
        );

        return;
    }

    let qrUrl =
        "/qr?text=" +
        encodeURIComponent(text);

    let qrImage =
        document.getElementById(
            "qrImage"
        );

    qrImage.src = qrUrl;

    document
        .getElementById("downloadBtn")
        .href = qrUrl;

    document
        .getElementById("result")
        .style.display = "block";
}

function clearQR() {

    document
        .getElementById("textInput")
        .value = "";

    document
        .getElementById("result")
        .style.display = "none";
}

document
    .getElementById("textInput")
    .addEventListener("keypress", function(event){

        if(event.key === "Enter"){

            generateQR();
        }

    });