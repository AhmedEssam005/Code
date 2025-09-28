    let btnn=document.querySelector(".droplist .fa-solid.fa-bars")
    let dropdown=document.querySelector(".droplist ul")
    let links=document.querySelectorAll("a")

    links.forEach((ele)=>{
        ele.target="_blank"
    })
    btnn.addEventListener("click",(e)=>{

        if(dropdown.style.display=="block")
        {
            dropdown.style.display="none";
            e.target.style="none";
        }
        else{
            dropdown.style.display="block"
            e.target.style="border:1px solid white";
        }
    })

    let scroll=document.querySelector(".scroll")

    window.onscroll=()=>{
        if(window.scrollY>=600) scroll.classList.add("scrollup")
        else scroll.classList.remove("scrollup")
    }

    scroll.onclick= () =>{
        window.scrollTo({top:0,behavior:"smooth"})
    }