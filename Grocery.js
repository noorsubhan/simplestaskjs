var root=document.getElementById('root');
var container =document.createElement('div')
container.setAttribute('class','container')
root.append(container)

var heading=document.createElement('h2')
heading.textContent="Grocery Bud";
container.append(heading)

var tododiv=document.createElement('div')
tododiv.setAttribute('class','tododiv')
container.append(tododiv)

var todoinput=document.createElement('input')
todoinput.setAttribute('placeholder','enter your todo')
tododiv.append(todoinput)

var button=document.createElement('button')
button.textContent="add"
tododiv.append(button)

var listcontainer=document.createElement("div")
listcontainer.setAttribute('class','listcontainer')
container.append(listcontainer)

button.addEventListener('click',function(){
   
    var mainDiv=document.createElement('div')
    listcontainer.append(mainDiv)
    mainDiv.setAttribute('id', 'mainDiv')
   



    var listDiv=document.createElement('div')
    mainDiv.append(listDiv)
    listDiv.setAttribute('class','listDiv')
    var list=document.createElement('h1')
    listDiv.append(list)
    list.innerHTML=todoinput.value

     var btnDiv=document.createElement('div')
     btnDiv.setAttribute("class","btnDiv")
      listDiv.append(btnDiv)

    var delbtn =document.createElement('button')
    var editbtn =document.createElement('button')
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


var updatebtn=document.createElement("button")
updateDiv.appendChild(updatebtn)
updatebtn.innerText="update";
updateDiv.style.display="none";
editbtn.addEventListener('click',function(){
    updateDiv.style.display="flex";
    listDiv.style.display="none";
    updateinput.value=list.innerHTML
})

updatebtn.addEventListener('click',function(){
    updateDiv.style.display="none";
    listDiv.style.display="flex"
    list.innerHTML=updateinput.value
})

todoinput.value="";
});