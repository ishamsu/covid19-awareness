var whatsnew = [
    "Awesome-quarantine - A Curated list of free & useful resources for this quarantine",
    "Quarantine Vault by @makersofkerala",
    "List of hackathons and price offering for solving different COVID-19 problem space",
    "Automated Dino game using arduino"

]
var links = [
    "https://github.com/ishamsu/awesome-quarantine/blob/master/README.md",
    "https://makers-of-kerala.now.sh/quarantine-vault",
    "https://makergram.com/community/topic/124/list-of-hackathons-and-price-offering-for-solving-different-covid-19-problem-space",
    "https://makergram.com/blog/automated-dino-game-using-arduino/"

]

function newquote() {
    var randomno = Math.floor(Math.random() * (whatsnew.length));
    document.getElementById('displaywhatsnew').innerHTML = whatsnew[randomno];
    document.getElementById('displaywhatsnew').style.color = randomColors();
    var str = links[randomno];
    var result = str.link(links[randomno]);
    document.getElementById("displaylink").innerHTML = result;


}

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}