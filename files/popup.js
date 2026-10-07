document.addEventListener("DOMContentLoaded", () => {
  const tokenArea = document.getElementById("issue-token");
  const cookieArea = document.getElementById("cookie-header");
  const copyTokenBtn = document.getElementById("copy-token-btn");
  const copyCookieBtn = document.getElementById("copy-cookie-btn");
  const clearBtn = document.getElementById("clear-btn");

  // Load stored credentials on opening popup
  chrome.storage.local.get(["issueTokenUrl", "cookieHeader"], (data) => {
    if (data.issueTokenUrl) tokenArea.value = data.issueTokenUrl;
    if (data.cookieHeader) cookieArea.value = data.cookieHeader;
  });

  // Copy helper
  function copyToClipboard(text, statusElement) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      statusElement.style.display = "inline";
      setTimeout(() => {
        statusElement.style.display = "none";
      }, 2000);
    });
  }

  copyTokenBtn.addEventListener("click", () => {
    copyToClipboard(tokenArea.value, document.getElementById("token-status"));
  });

  copyCookieBtn.addEventListener("click", () => {
    copyToClipboard(cookieArea.value, document.getElementById("cookie-status"));
  });

  clearBtn.addEventListener("click", () => {
    chrome.storage.local.remove(["issueTokenUrl", "cookieHeader"], () => {
      tokenArea.value = "";
      cookieArea.value = "";
    });
  });
});