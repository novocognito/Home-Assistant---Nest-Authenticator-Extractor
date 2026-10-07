// Listen for issueToken URL requests
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (details.url.includes("issueToken")) {
      chrome.storage.local.set({ issueTokenUrl: details.url, issueTokenTime: Date.now() });
      console.log("[Nest Auth] Captured issueToken URL:", details.url);
    }
  },
  { urls: ["https://accounts.google.com/*"] }
);

// Listen for oauth2/iframe request headers to grab the Cookie header string
chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    if (details.url.includes("oauth2/iframe")) {
      const cookieHeader = details.requestHeaders.find(
        (h) => h.name.toLowerCase() === "cookie"
      );
      if (cookieHeader && cookieHeader.value) {
        chrome.storage.local.set({ cookieHeader: cookieHeader.value, cookieTime: Date.now() });
        console.log("[Nest Auth] Captured Cookie Header successfully.");
      }
    }
  },
  { urls: ["https://accounts.google.com/*"] },
  ["requestHeaders", "extraHeaders"]
);