let pick1;
pick1 = Math.floor(Math.random() * (wiki_list.length +1));
let iframeAddress = "https://pt.wikipedia.org" + wiki_list[pick1][1];
document.getElementById('iframe').src = iframeAddress;
wiki_list.splice(pick1,1);

//problems with this part:
const parser = new DOMParser();
const doc = parser.parseFromString(htmlText, 'text/html');
const contentDiv = doc.querySelector('#mw-content-text');
console.log(contentDiv);
//

let content0 = document.getElementById('iframe');
let content1 = (content0.contentDocument) 
        ? content0.contentDocument 
        : content0.contentWindow.document;
let content2 = content1.getElementById('firstHeading');
//document.getElementById('main_screen').innerHTML = content2;
//let content1b = content2.getElementById('content');
console.log(content2);

let pick2;
pick2 = Math.floor(Math.random() * (wiki_list.length +1));
document.getElementById('mission').innerHTML = "OBJETIVO: com até 5 cliques, chegue na página sobre "+ wiki_list[pick2][0];
wiki_list.splice(pick2,1);

console.log(wiki_list.length);

let alink = document.getElementsByTagName('a');
console.log(alink);
/*
alink.addEventListener('click', function(event){
    console.log("conta 1");
    event.preventDefault();
});
*/