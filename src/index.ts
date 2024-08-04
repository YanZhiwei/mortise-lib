import "./customIdElement";
console.log("customIdElement test");

const customIdElement = document.getElementById('btnsetCustomId')
if(customIdElement!=null){
    console.log('customIdElement is not null')
    customIdElement.addEventListener('click',()=>{
        console.log('customIdElement is clicked');
        customIdElement.setCustomId();
        console.log('customIdElement.getCustomId()',customIdElement.getCustomId());
    });
}
