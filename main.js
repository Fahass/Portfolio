const btn = document.querySelector('.bar')
const links = document.querySelector('.links')

// const bar1 = document.getElementById('#bar1')

btn.addEventListener("click", function(){
    links.classList.toggle('active')
});

links.addEventListener("click", function(){
    links.classList.remove('active')
    btn.classList.remove('change')
});

btn.onclick = function(){
    btn.classList.toggle('change')
};
//-----------------------------navEnd--------------------



const topBtn = document.querySelector('.top')

window.onscroll = function(){
    if (document.documentElement.scrollTop >25){
        topBtn.style.display = "block"
    }
    else{
        topBtn.style.display = "none"
    }
    links.classList.remove('active')
    btn.classList.remove('change')
}
topBtn.addEventListener("click", function(){
    // document.documentElement.scrollTop = 0;
    window.scrollTo(0,0)
})
//-----------------------------scrollTop_BtnEnd--------------------



AOS.init({
    duration: 1500,
});
//-----------------------------AOS-End--------------------
