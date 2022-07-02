

const changeImg = () =>{
    if(document.getElementById("checkBox").src == "assets/img/uncheckedCheckBox.png"){
        document.getElementById("checkBox").src = "assets/img/checkedCheckBox.png";
    }
    if(document.getElementById("checkBox").src == "assets/img/checkedCheckBox.png"){
        document.getElementById("checkBox").src = "assets/img/uncheckedCheckBox.png"
    }    
}
// changeState();