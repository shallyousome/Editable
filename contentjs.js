chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    document.getElementsByTagName("body")[0].setAttribute("contenteditable",true) 
    sendResponse();
  });