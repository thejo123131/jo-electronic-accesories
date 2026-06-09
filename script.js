‏function setTheme(theme){

    if(theme === "white"){
        document.body.style.background = "white";
        document.body.style.color = "black";
    }

    else if(theme === "black"){
        document.body.style.background = "black";
        document.body.style.color = "white";
    }

    else if(theme === "rgb"){
        document.body.style.background =
        "linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet)";
        document.body.style.color = "white";
    }

}
