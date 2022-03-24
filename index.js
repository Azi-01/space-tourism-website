/*                    HTML elements                 */
let hamburger = document.getElementsByClassName("hamburger")[0];
let mobile_nav = document.getElementsByClassName("mobile-nav")[0];
let close = document.getElementsByClassName("close")[0];
let links = Array.from(document.getElementsByClassName("links"));
let destinations = Array.from(document.getElementsByClassName("dest-links"));
let dest_img = document.getElementById("dest-img");
let dest_name = document.getElementById("dest-name");
let dest_desc = document.getElementById("dest-desc");
let distance = document.getElementById("distance");
let travel = document.getElementById("travel");
let crew_img = document.getElementById("crew-img");
let crew_name = document.getElementById("crew-name");
let crew_desc = document.getElementById("crew-desc");
let crew_role = document.getElementById("crew-role");
let page_links = Array.from(document.getElementsByClassName("page-link"));
let sections = Array.from(document.getElementsByTagName("section"));
let crew_links = Array.from(document.getElementsByClassName("crew-links"));
let tech_links = Array.from(document.getElementsByClassName("tech-links"));
let tech_img = document.getElementById("tech-img");
let tech_name = document.getElementById("tech-name");
let tech_desc = document.getElementById("tech-desc");
let explore = document.getElementsByClassName("explore-btn")[0];
/* ----------------------------------------------------- */


// Hamburger Menu
hamburger.addEventListener("click", function(){
    mobile_nav.style.transform = "translateX(0px)";
})

close.addEventListener("click", function(){
    mobile_nav.style.transform = "translateX(100%)";
})

links.forEach((link)=>{
    link.addEventListener("click", function(){
        links.forEach((link)=>{
            if(link.classList.contains("active")){
                link.classList.remove("active");
            }
        })
        link.classList.add("active"); 
        
    })
})
// Destination Page
destinations.forEach(destination=>{
    fetch("data.json")
  .then(response => response.json())
  .then(json => {
    destination.addEventListener("click", function(){
        destinations.forEach((destination)=>{
            if(destination.classList.contains("active")){
                destination.classList.remove("active");
            }
        })
        destination.classList.add("active");
        switch(destination.id){
            case "moon":
                dest_img.src = `${json["destinations"][0]["images"]["png"]}`;
                dest_name.innerHTML = `${json["destinations"][0]["name"]}`;
                dest_desc.innerHTML = `${json["destinations"][0]["description"]}`;
                distance.innerHTML = `${json["destinations"][0]["distance"]}`;
                travel.innerHTML = `${json["destinations"][0]["travel"]}`;
                break;
            case "mars":
                dest_img.src = `${json["destinations"][1]["images"]["png"]}`;
                dest_name.innerHTML = `${json["destinations"][1]["name"]}`;
                dest_desc.innerHTML = `${json["destinations"][1]["description"]}`;
                distance.innerHTML = `${json["destinations"][1]["distance"]}`;
                travel.innerHTML = `${json["destinations"][1]["travel"]}`;
                break;
            case "europa":
                dest_img.src = `${json["destinations"][2]["images"]["png"]}`;
                dest_name.innerHTML = `${json["destinations"][2]["name"]}`;
                dest_desc.innerHTML = `${json["destinations"][2]["description"]}`;
                distance.innerHTML = `${json["destinations"][2]["distance"]}`;
                travel.innerHTML = `${json["destinations"][2]["travel"]}`;
                break;
            case "titan":
                dest_img.src = `${json["destinations"][3]["images"]["png"]}`;
                dest_name.innerHTML = `${json["destinations"][3]["name"]}`;
                dest_desc.innerHTML = `${json["destinations"][3]["description"]}`;
                distance.innerHTML = `${json["destinations"][3]["distance"]}`;
                travel.innerHTML = `${json["destinations"][3]["travel"]}`;
                break;
        }
    })
    });
})

// Navbar Links
page_links.forEach(page_link => {
    page_link.addEventListener("click", function(){
            sections.forEach(section => {
                if(!section.classList.contains(page_link.id)){
                    section.classList.add("hide");
                }
                else if(section.classList.contains("hide")){
                    section.classList.remove("hide");
                    if(window.screen.width < 720){
                        document.body.childNodes[1].style.backgroundImage = `url(./assets/${page_link.id}/background-${page_link.id}-mobile.jpg)`; 
                    }
                    else if(window.screen.width < 1032){
                        document.body.childNodes[1].style.backgroundImage = `url(./assets/${page_link.id}/background-${page_link.id}-tablet.jpg)`;
                    }
                    else{
                        document.body.childNodes[1].style.backgroundImage = `url(./assets/${page_link.id}/background-${page_link.id}-desktop.jpg)`;
                    }
                }

            })
            
    })
})


// Crew Page
crew_links.forEach(link=>{
    fetch("data.json")
  .then(response => response.json())
  .then(json => {
    link.addEventListener("click", function(){
        crew_links.forEach((link)=>{
            if(link.classList.contains("active-rounded")){
                link.classList.remove("active-rounded");
            }
        })
        link.classList.add("active-rounded"); 
        switch(link.id){
            case "commander":
                crew_img.src = `${json["crew"][0]["images"]["png"]}`;
                crew_role.innerHTML = `${json["crew"][0]["role"]}`;
                crew_name.innerHTML = `${json["crew"][0]["name"]}`;
                crew_desc.innerHTML = `${json["crew"][0]["bio"]}`;
                break;
            case "specialist":
                crew_img.src = `${json["crew"][1]["images"]["png"]}`;
                crew_role.innerHTML = `${json["crew"][1]["role"]}`;
                crew_name.innerHTML = `${json["crew"][1]["name"]}`;
                crew_desc.innerHTML = `${json["crew"][1]["bio"]}`;
                break;
            case "pilot":
                crew_img.src = `${json["crew"][2]["images"]["png"]}`;
                crew_role.innerHTML = `${json["crew"][2]["role"]}`;
                crew_name.innerHTML = `${json["crew"][2]["name"]}`;
                crew_desc.innerHTML = `${json["crew"][2]["bio"]}`;
                break;
            case "engineer":
                crew_img.src = `${json["crew"][3]["images"]["png"]}`;
                crew_role.innerHTML = `${json["crew"][3]["role"]}`;
                crew_name.innerHTML = `${json["crew"][3]["name"]}`;
                crew_desc.innerHTML = `${json["crew"][3]["bio"]}`;
                break;
        }
    })
    });
})

// Technology Page
tech_links.forEach(link=>{
    fetch("data.json")
  .then(response => response.json())
  .then(json => {
    link.addEventListener("click", function(){
        tech_links.forEach((link)=>{
            if(link.classList.contains("active-rounded")){
                link.classList.remove("active-rounded");
            }
        })
        link.classList.add("active-rounded"); 
        switch(link.id){
            case "vehicle":
                tech_img.src = (window.screen.width <= 1024) ? `${json["technology"][0]["images"]["landscape"]}` : `${json["technology"][0]["images"]["portrait"]}`;
                tech_name.innerHTML = `${json["technology"][0]["name"]}`;
                tech_desc.innerHTML = `${json["technology"][0]["description"]}`;
                break;
            case "port":
                tech_img.src = (window.screen.width <= 1024) ? `${json["technology"][1]["images"]["landscape"]}` : `${json["technology"][1]["images"]["portrait"]}`;
                tech_name.innerHTML = `${json["technology"][1]["name"]}`;
                tech_desc.innerHTML = `${json["technology"][1]["description"]}`;
                break;
            case "capsule":
                tech_img.src = (window.screen.width <= 1024) ? `${json["technology"][2]["images"]["landscape"]}` : `${json["technology"][2]["images"]["portrait"]}`;
                tech_name.innerHTML = `${json["technology"][2]["name"]}`;
                tech_desc.innerHTML = `${json["technology"][2]["description"]}`;
                break;
        }

    })
    });
})

if(window.screen.width <= 1024){
    tech_img.src = "./assets/technology/image-launch-vehicle-landscape.jpg";
}
else{
    tech_img.src = "./assets/technology/image-launch-vehicle-portrait.jpg";
}

// Explore Button
explore.addEventListener("click", function(){
    sections.forEach(section =>{
        section.classList.add("hide");
    })
    if(sections[1].classList.contains("hide")){
        sections[1].classList.remove("hide");
        sections[1].classList.add("show");
        if(window.screen.width < 720){
            document.body.childNodes[1].style.backgroundImage = `url(./assets/destination/background-destination-mobile.jpg)`; 
        }
        else if(window.screen.width < 1032){
            document.body.childNodes[1].style.backgroundImage = `url(./assets/destination/background-destination-tablet.jpg)`;
        }
        else{
            document.body.childNodes[1].style.backgroundImage = `url(./assets/destination/background-destination-desktop.jpg)`;
        }
    }
    

})