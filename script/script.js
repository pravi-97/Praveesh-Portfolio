function doStuff() {
    var colLeft = document.getElementById("col-left");
    var colRight = document.getElementById("col-right");
    var mainImg = document.getElementById("main-img");
    colLeft.style.transform = "translateX(0%)";
    colRight.style.transform = "translateX(0%)";
    mainImg.style.width = "60%"
    setTimeout(runSocial,2000)
    
}

function runSocial(){
    var socialLinks = document.getElementById("social-links")
    socialLinks.style.transform = "translate(-50%, -50%) translateX(0%)";
    setTimeout(runIntro, 1500)
}

function runIntro(){
    var mainBody = document.getElementById("main-body")
    mainBody.style.transform = "translateY(0%)";
}