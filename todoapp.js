let btn = document.querySelector("button");
        let inp = document.querySelector("input");
        let ul = document.querySelector("ul");
        btn.addEventListener("click",function() {
            let item = document.createElement("li");
            item.innerText = inp.value;
            let delbtn = document.createElement("button");
            delbtn.innerText = "delete";
            delbtn.classList.add(".delete");
            item.appendChild(delbtn);
            ul.appendChild(item);
            inp.value = "";
        });
        

        ul.addEventListener("click",function (e){
            if(e.target.nodeName == "BUTTON"){
                let listitem = e.target.parentElement;
                listitem.remove();
                console.log("deleted");
            }
        });