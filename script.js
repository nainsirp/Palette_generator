 const generate_btn = document.getElementById("generate-btn");
 const palettecontainer = document.querySelector(".palette-container")
// const button  = document.querySelectorAll("copy-btn")
generate_btn.addEventListener("click",generate_pallete);
palettecontainer.addEventListener("click",function(e) {
    if(e.target.classList.contains("copy-btn")){
        const hexValue = e.target.previousElementSibling.textContent;
        navigator.clipboard.writeText(hexValue)
        .then(()=>showCopySuccess(e.target))
        .catch((err)=>console.log(err))
    }
    else if(e.target.classList.contains("color")){
        const hexValue = e.target.nextElementSibling.querySelector(".hex-value").textContent;
         navigator.clipboard.writeText(hexValue)
        .then(()=>showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn")))
        .catch((err)=>console.log(err))
    }
})
function showCopySuccess(button){
    button.classList.remove("far","fa-copy");
    button.classList.add("fas","fa-check");
    button.style.color = "green";
    setTimeout(() => {
    button.classList.add("far","fa-copy");
    button.classList.remove("fas","fa-check");
    button.style.color = "";
    }, 1500);
}
function generate_pallete(){
    const colors= [];
    for(let i=0;i<5;i++){
        colors.push(generate_color());
    }
    updatePaletteDisplay(colors)
}
function generate_color(){
    const str = "0123456789ABCDEF";
    random_color = '#'
    for(let i=0;i<6;i++){
       random_color += str[Math.floor(Math.random()*16)]
    }
    return random_color;
}
function updatePaletteDisplay(colors){
    const colorbox = document.querySelectorAll(".color-box")
    colorbox.forEach((box,index)=>{
        const color = colors[index]
        const div_color = box.querySelector(".color");
        const hex_color = box.querySelector(".hex-value");
        div_color.style.backgroundColor = color;
        hex_color.textContent = color;
    });
}

generate_pallete();
