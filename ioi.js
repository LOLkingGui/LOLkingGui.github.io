function ohio(){
    var SetTheme = document.body;
    SetTheme.classList.toggle("ohio")
    var theme;
    if(SetTheme.classList.contains("ohio")){
        console.log("Ohio mode on");
        theme = "Ohio";
    }else{
        console.log("Light mode");
        theme = "Light";
    }
    // save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    // ensure you convert to JSON like i have done -----JSON.stringify(theme)
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    console.log(GetTheme);
    if(GetTheme === "DARK"){
        document.body.classList = "dark-mode";
    }else{
        if (GetTheme === "Ohio") {
            document.body.classList = "ohio";
        } else {
            document.body.classList = "";
        }
    }
}, 5);