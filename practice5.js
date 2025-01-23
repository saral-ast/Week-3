console.log( "hi" ); // NodeList(9) [text, div, text, ul, text, div, text, script, text]
// for (let i = 0; i < document.body.childNodes.length; i++) {
//     console.log( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
// }


setTimeout(() => {
    let header = document.getElementById( "header1" );
    header.style.backgroundColor = 'red';
    header.style.color = 'white'; 
    let submit = document.getElementById('btn');
let content = document.getElementById('content');

console.log(submit)
console.log(content)
    

},1000)



// submit.addEventListener('click', function(event){
//     event.preventDefault();
//     let data = document.forms.form ;
//     console.log(data)
//     console.log(data.name.value)
// })
