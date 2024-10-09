 var root=document.getElementById("root")
 var container=document.createElement('div')
 root.append(container)

 container.setAttribute('class','container')

var heading = document.createElement('h1');
heading.textContent = "I'm in a div";
container.appendChild(heading);

var para=document.createElement('p');
para.textContent="that says “ME TOO!”";
container.appendChild(para);

