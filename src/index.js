import "./styles.css";
import { greeting } from "./greeting.js";
import odinImage from "./assets/odin.jpg";
import { getDate } from "date-fns";
///console.log(greeting);

const body = document.querySelector(".upper");
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
    console.log(`${item.project} esto es el titulo del projecto o tarea principal`)
   // for (let e = 0; e < item.posts.length; e++){
   //     console.log(`${item.posts[e].post} esto es una tarea`);
   //     console.log(`${item.posts[e].description} esto es la descripcion de la tarea`);
   // }
}
for (let i=0; i < localStorage.length;i++){
    const key = localStorage.key(i);
    const item = JSON.parse(localStorage.getItem(key));
    const div = document.createElement("div");
    div.textContent=`${item.project}`;
    div.addEventListener('click',function(){
        alert(`${item.posts[0].post}`)
        alert(`${item.posts[0].description}`)

    })
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