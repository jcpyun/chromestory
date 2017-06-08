// if (window.location.href=="http://www.jcpyun.com"){
//     window.history.back();
// }
// chrome.windows.getCurrent(function(window){
//     chrome.windows.update(window.id,{top:0,left:0,width:500,height:100})
// });
// alert("wow!")

// chrome.browserAction.onClicked.addListener(function(tab) {
//   alert("test");
// });
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
});
