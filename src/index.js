import "./styles.css";
import { greeting } from "./greeting.js";
import odinImage from "./assets/odin.jpg";
console.log(greeting);
const user = { name: 'Alice', age: 25 };

class post {
    constructor(post,tasks,is_done,date_made){
        this.post = post;
        this.tasks = tasks;
        this.is_done = is_done;
        this.date_made = date_made;
    }
    save(){
        const json_string
    }
}


// Retrieve the object
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.age); // Output: { name: 'Alice', age: 25 }
console.log(JSON.parse(localStorage.getItem(0)));
console.log(localStorage.length)
//const image = document.createElement("img");
//image.src = odinImage;
   
//document.body.appendChild(image);