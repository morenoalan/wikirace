var pick1;
pick1 = Math.floor(Math.random() * (wiki_list.length +1));
iframeAddress = "https://pt.wikipedia.org" + wiki_list[pick1][1];
document.getElementById('iframe').src = iframeAddress;
wiki_list.splice(pick1,1);

var content0 = document.getElementById('iframe');
var content1 = (content0.contentDocument) 
        ? content0.contentDocument 
        : content0.contentWindow.document;
var content2 = content1.getElementById('firstHeading');
//document.getElementById('main_screen').innerHTML = content2;
//var content1b = content2.getElementById('content');
console.log(content2);

var pick2;
pick2 = Math.floor(Math.random() * (wiki_list.length +1));
document.getElementById('mission').innerHTML = "OBJETIVO: com até 5 cliques, chegue na página sobre "+ wiki_list[pick2][0];
wiki_list.splice(pick2,1);

console.log(wiki_list.length);



/*
console.log(document.getElementById('iframe').clientHeight);
*/
var alink = document.getElementsByTagName('a');
console.log(alink);
/*
alink.addEventListener('click', function(event){
    console.log("conta 1");
    event.preventDefault();
});
*/