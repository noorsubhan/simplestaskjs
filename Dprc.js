
var root=document.getElementById('root')
var container=document.createElement('div')
root.append(container)
container.setAttribute('class','container')

var tododiv=document.createElement('div')
container.appendChild(tododiv);
tododiv.setAttribute('class','tododiv')

var todoinput=document.createElement("input")
tododiv.appendChild(todoinput)
todoinput.setAttribute('placeholder','enter your todo')


var addbutton=document.createElement('button')
tododiv.appendChild(addbutton)
addbutton.innerText="add button"


var listcontainer=document.createElement("div")
container.appendChild(listcontainer)
listcontainer.setAttribute('class','listcontainer')

addbutton.addEventListener('click',function(){
    var mainDiv=document.createElement('div')
    listcontainer.append(mainDiv)
    mainDiv.setAttribute('id','mainDiv')

    var listDiv=document.createElement('div')
    mainDiv.appendChild(listDiv)
    listDiv.setAttribute("class","listDiv")
    var list=document.createElement("h1")
    listDiv.append(list)
    list.innerHTML=todoinput.value;
    var btnDiv=document.createElement("div")
    btnDiv.setAttribute("class","btndiv")
    listDiv.append(btnDiv)
    var delbtn=document.createElement("button")
    var editbtn=document.createElement("button")
    delbtn.innerHTML="delete";
    editbtn.innerHTML="edit";
    btnDiv.append(delbtn)
    btnDiv.append(editbtn);
    delbtn.addEventListener("click",function(){
        mainDiv.remove();
    });

 var updateDiv=document.createElement("div")
 mainDiv.append(updateDiv)
 updateDiv.setAttribute("class","updateDiv")
 var updateinput=document.createElement("input")
 updateDiv.append(updateinput)


 var updatebutton=document.createElement("button")
 updateDiv.append(updatebutton)
 updatebutton.innerText="update"
 updateDiv.style.display="none"
 editbtn.addEventListener('click',function(){
    updateDiv.style.display="flex";
    listDiv.style.display="none"
    updateinput.value=list.innerHTML
 })
    updatebutton.addEventListener('click',function(){
        updateDiv.style.display="none"
        listDiv.style.display="flex"
        list.innerHTML=updateinput.value
    })
    todoinput.value=""
})
