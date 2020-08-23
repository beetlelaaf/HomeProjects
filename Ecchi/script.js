//Image Array
let random_images_array = [];

//Global variables
let spots = [];
let antidup = [];
let available = [];
let root = document.documentElement;

function loadJSON () {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
            random_images_array = JSON.parse(xhttp.responseText);  
            for(let i=0; i<random_images_array.length; i++) {
                available[i] = i;
            }
            chooseRandom();

            function chooseRandom() {
                spots = document.getElementsByClassName("img");
                chooser = Math.floor(Math.random() * available.length);
                antidup.push(available[chooser]);
                available.splice(chooser, 1);
                if(available.length == 0) {
                    displayRandom();
                } else {
                    chooseRandom();
                }
            }
            
            function displayRandom() {
                for(let i=0; i<spots.length; i++) {
                    spots[i].src = "images/" + random_images_array[antidup[i]];
                }
                console.log("Spots are filled!");
            }
        }
    }
    xhttp.open("GET", "collection.json", true);
    xhttp.send();
}

function hidetext1() {
    let x = document.getElementById("main1");
    let y = document.getElementById("nav1");
    if(x.classList.contains("active")) {}
    else {
        let currActive = document.getElementsByClassName("hidden active");
        currActive[0].classList.remove("active");
        x.classList.add("active"); 
    }

    if(!y.classList.contains("actief")) {
        let currActief = document.getElementsByClassName("nav actief");
        currActief[0].classList.remove("actief");
        y.classList.add("actief");
    }

}

function hidetext2() {
    let x = document.getElementById("main2");
    let y = document.getElementById("nav2");
    if(x.classList.contains("active")) {}
    else {
        let currActive = document.getElementsByClassName("hidden active");
        currActive[0].classList.remove("active");
        x.classList.add("active"); 
    }

    if(!y.classList.contains("actief")) {
        let currActief = document.getElementsByClassName("nav actief");
        currActief[0].classList.remove("actief");
        y.classList.add("actief");
    }
}

function hidetext3() {
    let x = document.getElementById("main3");
    let y = document.getElementById("nav3");
    if(x.classList.contains("active")) {}
    else {
        let currActive = document.getElementsByClassName("active");
        currActive[0].classList.remove("active");
        x.classList.add("active"); 
    }

    if(!y.classList.contains("actief")) {
        let currActief = document.getElementsByClassName("nav actief");
        currActief[0].classList.remove("actief");
        y.classList.add("actief");
    }
}

function hidetext4() {
    let x = document.getElementById("main4");
    let y = document.getElementById("nav4");
    if(x.classList.contains("active")) {}
    else {
        let currActive = document.getElementsByClassName("active");
        currActive[0].classList.remove("active");
        x.classList.add("active"); 
    }

    if(!y.classList.contains("actief")) {
        let currActief = document.getElementsByClassName("nav actief");
        currActief[0].classList.remove("actief");
        y.classList.add("actief");
    }
}

function hidetext5() {
    let x = document.getElementsByClassName("content2");
    let y = document.getElementById("nav5");
    if(x[0].classList.contains("active")) {}
    else {
        let currActive = document.getElementsByClassName("active");
        currActive[0].classList.remove("active");
        x[0].classList.add("active");
        let z = document.getElementsByClassName("card");
        for(i=0; i<z.length; i++) {
            z[i].classList.remove("show");
            z[i].classList.add("hide");
        }
    }

    if(!y.classList.contains("actief")) {
        let currActief = document.getElementsByClassName("nav actief");
        currActief[0].classList.remove("actief");
        y.classList.add("actief");
        let z = document.getElementsByClassName("card");
        for(i=0; i<z.length; i++) {
            z[i].classList.remove("hide");
            z[i].classList.add("show");
        }
    }

    // if(x[0].classList.contains("active2")) {
    //     x[0].classList.remove("active2");
    //     let y = document.getElementsByClassName("card");
    //     for(i=0; i<y.length; i++) {
    //         y[i].classList.remove("show");
    //         y[i].classList.add("hide");
    //     }
    // } else {
    //     x[0].classList.add("active2");
    //     let z = document.getElementsByClassName("card");
    //     for(i=0; i<z.length; i++) {
    //         z[i].classList.remove("hide");
    //         z[i].classList.add("show");
    //     }
    // }   
}


function colorTheme() {
    document.getElementById("logo").src = "siteimages/logo-default.svg";
    root.style.setProperty("--background-main", "#212121");
    root.style.setProperty("--background-sub", "#1a1a1a"); 
    root.style.setProperty("--background-sub2", "#3d3d3d"); 
    root.style.setProperty("--background-alt", "#FF3F60"); 
    root.style.setProperty("--background-card", "#252525");
    root.style.setProperty("--scrollbar", "#252833");
    root.style.setProperty("--text-main", "#ffffff");
    root.style.setProperty("--text-alt", "#000000");
    root.style.setProperty("--text-footer", "#9e9e9e");
    root.style.setProperty("--border-main", "#303030");
    root.style.setProperty("--twitter", "#3E50B4");
    root.style.setProperty("--youtube", "#3E50B4");
    root.style.setProperty("--facebook", "#3E50B4");
    root.style.setProperty("--skill-bar", "#FF3F60");
}

function lightTheme() {
    document.getElementById("logo").src = "siteimages/logo-light.svg"; 
    root.style.setProperty("--background-main", "#e0e0e0");
    root.style.setProperty("--background-sub", "#d4d4d4"); 
    root.style.setProperty("--background-sub2", "#bababa");
    root.style.setProperty("--background-alt", "#8c8c8c");
    root.style.setProperty("--background-card", "#c7c7c7");
    root.style.setProperty("--scrollbar", "#616161");
    root.style.setProperty("--text-main", "#000000");
    root.style.setProperty("--text-alt", "#ffffff");
    root.style.setProperty("--text-footer", "#525252");
    root.style.setProperty("--twitter", "#d94545");
    root.style.setProperty("--youtube", "#d94545");
    root.style.setProperty("--facebook", "#d94545");
    root.style.setProperty("--skill-bar", "#d94545");
}

function blueTheme() {
    document.getElementById("logo").src = "siteimages/logo-blue.svg";
    root.style.setProperty("--background-main", "#42455a");
    root.style.setProperty("--background-sub", "#383a4d"); /*383a4d*/
    root.style.setProperty("--background-sub2", "#36427a"); /**/
    root.style.setProperty("--background-alt", "#404f92"); /**/ 
    root.style.setProperty("--background-card", "#404f92");
    root.style.setProperty("--scrollbar", "#252833");
    root.style.setProperty("--text-main", "#ffffff");
    root.style.setProperty("--text-alt", "#000000");
    root.style.setProperty("--text-footer", "#9e9e9e");
    root.style.setProperty("--twitter", "#FF3F60");
    root.style.setProperty("--youtube", "#FF3F60");
    root.style.setProperty("--facebook", "#FF3F60");
    root.style.setProperty("--skill-bar", "#FF3F60");
}
