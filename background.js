const commandActions = {
  "toggle-gpt": {
    url: "https://chat.openai.com/"
  },
  "toggle-x": {
    url: "https://x.com/"
  },
  "open-replit": {
    url: "https://replit.com/~"
  },
  "toggle-perp": {
    url: "https://www.perplexity.ai/"
  }
};

chrome.commands.onCommand.addListener(function (command) {
  const action = commandActions[command];

  if (action) {
    chrome.tabs.create({ url: action.url });
  }
});