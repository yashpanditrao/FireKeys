const commandActions = [
  {
    command: "toggle-gpt",
    url: "https://chat.openai.com/"
  },
  {
    command: "toggle-x",
    url: "https://x.com/"
  },
  {
    command: "open-replit",
    url: "https://replit.com/~"
  },
  {
    command: "toggle-perp",
    url: "https://www.perplexity.ai/"
  }
];

chrome.commands.onCommand.addListener(function (command) {
  const action = commandActions.find(item => item.command === command);

  if (action) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.create({ url: action.url });
    });
  }
});
