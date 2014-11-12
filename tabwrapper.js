console.log("hello from tab wrapper");
chrome.devtools.panels.create("MyTab",
    "mytabicon.png",
    "tabcontent.html",
    function(panel) { console.log("hello from callback"); });
                              
