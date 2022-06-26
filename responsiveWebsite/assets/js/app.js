
const getImgSrc = (imgStr) => {
    const div = document.createElement('div')
    div.innerHTML = imgStr
    const img = div.querySelector('img')
    return img.src
}
const changeState = () =>{
    let curentState = 1;
    const states = ["assets\\img\\uncheckedCheckBox.png", "assets\\img\\checkedCheckBox.png"];
    if (curentState == 1) {
        document.getElementById('checkbox').src = states[curentState];
        curentState = 0;
    }
    if(curentState == 0){
        document.getElementById('checkbox').src = states[curentState];
        curentState = 1;
        console.log("Zashol");
        
    }
    console.log(curentState)
    // console.log(curentElementSrc)
    // console.log(typeof(curentElementSrc))
}
// changeState();