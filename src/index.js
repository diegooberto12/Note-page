import "./styles.css";
//import { greeting } from "./greeting.js";
import odinImage from "./assets/odin.jpg";
import { getDate } from "date-fns";
///console.log(greeting);

class Post {
    constructor(post,description,is_done,date_made,priority){
        this.post = post;
        this.description = description;
        this.is_done = is_done;
        this.date_made = date_made;
        this.priority = priority
    };
    getstringnojson(){
        const normal_string = { "post" : this.post,
                              "description" : this.description,
                              "is_done" : this.is_done,
                              "date_made" : this.date_made,
                              "priority" : this.priority
        }
        return normal_string;
    }
}
///eweq
class project {
   constructor(project){
    this.project = project;

   };
   setproject(){
    const normal_string = {"project" : this.project,
                            "posts" : []
    };
    localStorage.setItem(`${this.project}`,JSON.stringify(normal_string));
   };
   //logica para crear un registro o tarea
    makeapostonproject(post,description,is_done,date_made,priority){
    let newpost = new Post (post,description,is_done,date_made,priority);
    let dedo = JSON.parse(localStorage.getItem(`${this.project}`));
   dedo.posts.push(newpost.getstringnojson());
   localStorage.setItem(`${this.project}`, JSON.stringify(dedo));
    

}
}
    
   

const prueba1 = new project("loco");
prueba1.setproject();

prueba1.makeapostonproject("loco","unmocnddkjfkdkd",true,"azul",3);
prueba1.makeapostonproject("tres","asdadsa",true,"verde",4);


//console.log(JSON.parse(localStorage.getItem("cero")))
for (let i=0; i < localStorage.length;i++){
    const key = localStorage.key(i);
    const item = JSON.parse(localStorage.getItem(key));
   // console.log(key)
    //console.log(item.posts[1]);
    console.log(`${item.posts[0].description}`)
   // for (let e = 0; e < item.posts.length; e++){
   //     console.log(`${item.posts[e].post} esto es una tarea`);
   //     console.log(`${item.posts[e].description} esto es la descripcion de la tarea`);
   // }
}
const img = document.createElement('img');
img.src = odinImage;
const upper = document.querySelector(".upper");
const body = document.querySelector(".bottom");
const title = document.querySelector(".title");
const list = document.querySelector(".list");
upper.appendChild(img);

for (let i=0; i < localStorage.length;i++){
    
    const key = localStorage.key(i);
    const item = JSON.parse(localStorage.getItem(key));
    const div = document.createElement("div");
    const button = document.createElement("button");

    button.textContent="➕ New Post"
    button.id=("openModalBtn");

    div.textContent=`${item.project}`;
    
    div.addEventListener('click',function(){
        title.textContent=item.project; 
        list.innerHTML='';
        for (let j= 0; j< item.posts.length;j++){
            const post1 = item.posts[j];

            const task =document.createElement("div");
            task.classList.add("task");
            task.innerHTML=` 
                <h4>${post1.post}</h4>
                <p>${post1.description}</p>
                <p><strong>Hecho:</strong> ${post1.is_done ? "✅" : "❌"}</p>
                <p><strong>Fecha:</strong> ${post1.date_made}</p>
                <p><strong>Prioridad:</strong> ${post1.priority}</p>
            `;
            list.appendChild(task);

        };
         list.appendChild(button)

    });
    body.appendChild(div);

}




function RetrieveList(){
    let list =[];
    for (let i=0; i < localStorage.length;i++){
        const key = localStorage.key(i);
        const item = JSON.parse(localStorage.getItem(key));
        list.push({item});
    }
    return list;
}

   
//document.body.appendChild(image);