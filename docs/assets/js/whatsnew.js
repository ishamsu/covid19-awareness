var whatsnew = {
    "Awesome-quarantine - A Curated list of free & useful resources for this quarantine": "https://github.com/ishamsu/awesome-quarantine/blob/master/README.md",
    "Quarantine Vault by @makersofkerala": "https://makers-of-kerala.now.sh/quarantine-vault",
    "List of hackathons and price offering for solving different COVID-19 problem space": "https://makergram.com/community/topic/124/list-of-hackathons-and-price-offering-for-solving-different-covid-19-problem-space",
    "Automated Dino game using arduino": "https://makergram.com/blog/automated-dino-game-using-arduino/"
}
var data = JSON.stringify(whatsnew);
var obj = JSON.parse(data);
var whatsNewContant = Object.keys(obj);
var i = 0;
var button, content

//function which will run every 5 sec
setInterval(function() {
    content = `<h3 style="color:black;"><a  href="${obj[whatsNewContant[i]]}">${whatsNewContant[i]}</a></h3>`;

    i++;
    if (i == whatsNewContant.length) {
        i = 0;
    }
    document.getElementById("whatsNewContant").innerHTML = content;
}, 5000);