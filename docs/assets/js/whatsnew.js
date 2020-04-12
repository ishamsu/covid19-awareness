var whatsnew = {
    "Awesome-quarantine - A Curated list of free & useful resources for this quarantine": "https://github.com/ishamsu/awesome-quarantine/blob/master/README.md",
    "Quarantine Vault by @makersofkerala": "https://makers-of-kerala.now.sh/quarantine-vault",
    "List of hackathons and price offering for solving different COVID-19 problem space": "https://makergram.com/community/topic/124/list-of-hackathons-and-price-offering-for-solving-different-covid-19-problem-space",
    "Automated Dino game using arduino": "https://makergram.com/blog/automated-dino-game-using-arduino/"
}
var data = JSON.stringify(whatsnew);
var obj = JSON.parse(data);
var whatsNewContant = Object.keys(obj);
var whatsNewLink = Object.values(obj)
var whatsnewCount = 0;
var button, content
console.log(whatsNewLink);

//function which will run every 5 sec
setInterval(function() {
    console.log(whatsnewCount);
    if (whatsnewCount >= whatsNewContant.length) {
        whatsnewCount = 0;
    }
    
    console.log(whatsnewCount);
    content = `<h3 style="color:black;"><a  href="${whatsNewLink[whatsnewCount]}">${whatsNewContant[whatsnewCount]}</a></h3>`;
    whatsnewCount++;
    console.log(content);  
        document.getElementById("whatsNewContant").innerHTML = content;
  
}, 5000);
