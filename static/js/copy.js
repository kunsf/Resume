function copyText() {
    var text = document.getElementById("textToCopy");
    var copyButton = document.getElementById("copyButton");

    var tempInput = document.createElement("input");
    tempInput.value = text.textContent;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    copyButton.textContent = "Copied!";

    setTimeout(function() {
        copyButton.textContent = "Copy";
    }, 2000); // 2秒后恢复按钮文本
}