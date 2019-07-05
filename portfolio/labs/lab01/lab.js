/*

*/


function start(e) {
    var name=[
    {
        char: "陳",
        big5: 'B3AF',
        cns: '1-5D73',
        unicode: '9673'
    },
    {
        char: "珈",
        big5: 'CFC9',
        cns: '2-2C2B',
        unicode: '73C8'
    },
    {
        char: "緡",
        big5: 'E6E8',
        cns: '2-5270',
        unicode: '7DE1'
    },
    ];

    var ele=document.getElementById("div1");

    for(var i=0;i<3;i++) {
        ele.innerHTML += name[i].char;
        ele.innerHTML += ' big5=';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += ' cns=';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += ' unicode=';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';
    }

}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
