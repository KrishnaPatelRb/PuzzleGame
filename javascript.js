let data1=0;
let data1parent=0;
let data2=0;
let data2parent=0;
let currentParent="parent"
let crossedLevel1=false;
let crossedLevel2=false;
let crossedLevel3=false;
function start(){
document.getElementById("instruction").style.display="none"
document.getElementById("startButton").style.display="none"
document.getElementById("image").style.display="none"
document.getElementById("displayLevel").innerHTML="Level 1"
document.getElementById("parent").style.display="grid"
}




function allowDrop(event) {
event.preventDefault();
}

function drag(event) {
// store the dragimage in data1 variable.
data1=event.target;
data1parent=event.target.parentElement;

}

function drop(event) {
event.preventDefault();
//store the dragover image parent in data2parent
  data2=event.target;
  data2parent=event.target.parentElement;

//Then remove the dragover image.
event.target.remove();

//made clone of dragimage and append to parent of dragover image
let data2child=data1.cloneNode(true);
data2parent.appendChild(data2child);

 // remove drag image and append dragover image in place of drag image
let childlist=document.getElementById(currentParent).childNodes;
for(let i=0;i<childlist.length;i++) {
if(childlist[i].id==data1parent.id){
  let getElement=document.getElementById(childlist[i].id);
  getElement.innerHTML="";
  getElement.appendChild(data2);
}
}

if(crossedLevel1===false && document.getElementById("drag1").parentNode.id==="div2" && document.getElementById("drag2").parentNode.id==="div6" && document.getElementById("drag3").parentNode.id==="div5" && document.getElementById("drag4").parentNode.id==="div3" && document.getElementById("drag5").parentNode.id==="div4" && document.getElementById("drag6").parentNode.id==="div1" ){
  let speech = new SpeechSynthesisUtterance('Excellent, you have crossed level 1');
              speech.lang = 'en-us';
              window.speechSynthesis.speak(speech)

            setTimeout(()=>{
              document.getElementById("displayLevel").innerHTML="Level 2"
              document.getElementById("parent").style.display="none"
              document.getElementById("parent2").style.display="grid"
              currentParent="parent2"
              crossedLevel1=true
            },4000)
              
}
if( crossedLevel2===false && document.getElementById("drag12").parentNode.id==="div11" && document.getElementById("drag15").parentNode.id==="div12" && document.getElementById("drag11").parentNode.id==="div13" && document.getElementById("drag13").parentNode.id==="div14" && document.getElementById("drag16").parentNode.id==="div15" && document.getElementById("drag14").parentNode.id==="div16"  ){
  let speech = new SpeechSynthesisUtterance('Excellent , you have crossed level 2');
              speech.lang = 'en-us';
              window.speechSynthesis.speak(speech)
                 setTimeout(()=>{
                  document.getElementById("displayLevel").innerHTML="Level 3"
                  document.getElementById("parent2").style.display="none"
              document.getElementById("parent3").style.display="grid"
              currentParent="parent3"
              crossedLevel2=true;
               },4500)
}
if(document.getElementById("drag21").parentNode.id==="div21" && document.getElementById("drag25").parentNode.id==="div22" && document.getElementById("drag23").parentNode.id==="div23" && document.getElementById("drag22").parentNode.id==="div24" && document.getElementById("drag24").parentNode.id==="div25" && document.getElementById("drag26").parentNode.id==="div26"  ){
  let speech = new SpeechSynthesisUtterance('congratulations , you have crossed level 3');
              speech.lang = 'en-us';
              window.speechSynthesis.speak(speech)
}
}
