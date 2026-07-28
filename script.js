function openStory(name) {

    document.getElementById("storyScreen").style.display = "block";

    document.getElementById("storyName").textContent = name;

    if(name === "りほ"){
        document.getElementById("storyText").textContent = "今日ライブ！";
    }

    else if(name === "ゆな"){
        document.getElementById("storyText").textContent = "楽しんできて！";
    }

    else{
        document.getElementById("storyText").textContent = "今日も頑張ろう！";
    }

}

function closeStory(){

    document.getElementById("storyScreen").style.display = "none";

}