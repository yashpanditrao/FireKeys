chrome.commands.onCommand.addListener(function (command) {
  if (command === "toggle-gpt") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Replace the URL with the ChatGPT URL or the desired URL
      const chatGPTUrl = "https://chat.openai.com/";
      chrome.tabs.create({ url: chatGPTUrl });
    });
  }
  if (command === "toggle-x") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Replace the URL with the ChatGPT URL or the desired URL
      const xUrl = "https://x.com/";
      chrome.tabs.create({ url: xUrl });
    });
  }
  if (command === "toggle-perp") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Replace the URL with the ChatGPT URL or the desired URL
      const xUrl = "https://www.perplexity.ai/";
      chrome.tabs.create({ url: xUrl });
    });
  }
});
