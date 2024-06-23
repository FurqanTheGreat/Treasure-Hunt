// Heading animation
$('h1').fadeOut(3000).fadeIn(2000).fadeTo(2000, 0.5);
// Generate a random number
function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}
// Clicks counter
var clicks = 0;
// Calculate the distance between click and treasure
function getDistance(event, target) {
    var map = $('#map');
    var mapWidth = map.width();
    var mapHeight = map.height();
    var targetX = target.x / 600 * mapWidth;
    var targetY = target.y / 600 * mapHeight;

    var diffX = event.offsetX - targetX;
    var diffY = event.offsetY - targetY;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}
// Give player a distance hint
function getDistanceHint(distance) {
    if (distance < 25) {
        return "Boiling hot!";
    } else if (distance < 50) {
        return "Really hot";
    } else if (distance < 75) {
        return "Hot";
    } else if (distance < 150) {
        return "Warm";
    } else if (distance < 300) {
        return "Cold";
    } else if (distance < 600) {
        return "Really cold";
    } else {
        return "Freezing!";
    }
}
// Set coordinates for the treasure
var width = 600;
var height = 600;
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}
// Click handler
$('#map').click(function (event) {
    clicks++;
    var distance = getDistance(event, target);
    var distanceHint = getDistanceHint(distance);
    $('#distance').text(distanceHint);

    // Congratulate the player if they have won
    if (distance < 10) {
        alert("Congratulations! You found the treasure in " + clicks + " clicks!");

        // Show the treasure image at the target location
        $('#treasure').css({
            top: target.y / 600 * $('#map').height() - $('#treasure').height() / 2 + 'px', // Adjust for responsiveness
            left: target.x / 600 * $('#map').width() - $('#treasure').width() / 2 + 'px' // Adjust for responsiveness
        }).show();
    }
});
