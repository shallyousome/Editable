var radio1 = chrome.contextMenus.create({
  "title": "Editable",
  "contexts": ["all"],
  "onclick": function (e, f) {
    try {
      chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.sendRequest(tab.id, {
        }, function (response) {});
      });
    } catch (e) {
      console.warn(e)
    }
  }

});