var defaultPlayerName = 'Player Name';
var adjectives = ["fo","sho","shizzle","tizzle","fizzle"];
var defaultPlayerName = 'Player Name';
var middle = ["my","yo","farizzle"]

var nouns = ["headizzle","crestizzle","crownizzle","toothizzle","fangizzle","hornizzle","frillizzle","skullizzle","boneizzle","tongueizzle","throatizzle","voiceizzle","noseizzle","snoutizzle","chinizzle","eyeizzle","sightizzle","seerizzle","speakerizzle","singerizzle","songizzle","chanterizzle","howlerizzle","chatterizzle","shriekerizzle","shriekizzle","jawizzle","biteizzle","biterizzle","neckizzle","shoulderizzle","finizzle","wingizzle","armizzleizzle","lifterizzle","graspizzle","grabberizzle","handizzle","pawizzle","footizzle","fingerizzle","toeizzle","thumbizzle","talonizzle","palmizzle","touchizzle","racerizzle","runnerizzle","hoofizzle","flyizzle","flierizzle","swoopizzle","roarizzle","hissizzle","hisserizzle","snarlizzle","diveizzle","diverizzle","ribizzle","chestizzle","backizzle","ridgeizzle","legizzle","legsizzle","tailizzle","beakizzle","walkerizzle","lasherizzle","swisherizzle","carverizzle","kickerizzle","roarerizzle","crusherizzle","spikeizzle","shakerizzle","chargerizzle","hunterizzle","weaverizzle","crafterizzle","binderizzle","scribeizzle","museizzle","snapizzle","snapperizzle","slayerizzle","stalkerizzle","trackizzle","trackerizzle","scarizzle","scarerizzle","frightizzle","killerizzle","deathizzle","doomizzle","healerizzle","saverizzle","friendizzle","foeizzle","guardianizzle","thunderizzle","lightningizzle","cloudizzle","stormizzle","forgerizzle","scaleizzle","hairizzle","braidizzle","napeizzle","bellyizzle","thiefizzle","stealerizzle","reaperizzle","giverizzle","takerizzle","dancerizzle","playerizzle","gamblerizzle","twisterizzle","turnerizzle","painterizzle","dartizzle","drifterizzle","stingizzle","stingerizzle","venomizzle","spurizzle","ripperizzle","swallowizzle","devourerizzle","knightizzle","ladyizzle","lordizzle","queenizzle","kingizzle","masterizzle","mistressizzle","princeizzle","princessizzle","dukeizzle","dutchessizzle","samuraiizzle","ninjaizzle","knaveizzle","slaveizzle","servantizzle","sageizzle","wizardizzle","witchizzle","warlockizzle","warriorizzle","jesterizzle","paladinizzle","bardizzle","traderizzle","swordizzle","shieldizzle","knifeizzle","daggerizzle","arrowizzleizzle","bowizzle","fighterizzle","baneizzle","followerizzle","leaderizzle","scourgeizzle","watcherizzle","catizzle","pantherizzle","tigerizzle","cougarizzle","pumaizzle","jaguarizzle","ocelotizzle","lynxizzle","lionizzle","leopardizzle","ferretizzle","weaselizzle","wolverineizzle","bearizzle","raccoonizzle","dogizzle","wolfizzle","kittenizzle","puppyizzle","cubizzle","foxizzle","houndizzle","terrierizzle","coyoteizzle","hyenaizzle","jackalizzle","pigizzle","horseizzle","donkeyizzle","stallionizzle","mareizzle","zebraizzle","antelopeizzleizzle","gazelleizzle","deerizzle","buffaloizzle","bisonizzle","boarizzle","elkizzle","whaleizzle","dolphinizzle","sharkizzle","fishizzle","minnowizzle","salmonizzle","rayizzle","fisherizzle","otterizzle","gullizzle","duckizzle","gooseizzle","crowizzle","ravenizzle","birdizzle","eagleizzle","raptorizzle","hawkizzle","falconizzle","mooseizzle","heronizzle","owlizzle","storkizzle","craneizzle","sparrowizzle","robinizzle","parrotizzle","cockatooizzle","carpizzle","lizardizzle","geckoizzle","iguanaizzle","snakeizzle","pythonizzle","viperizzle","boaizzle","condorizzle","vultureizzle","spiderizzle","flyizzle","scorpionizzle","heronizzle","orioleizzle","toucanizzle","beeizzle","waspizzle","hornetizzle","rabbitizzle","bunnyizzle","hareizzle","browizzle","mustangizzle","oxizzle","piperizzle","soarerizzle","flasherizzle","mothizzle","maskizzle","hideizzle","heroizzle","antlerizzleizzle","chillizzle","chillerizzle","gemizzle","ogreizzle","mythizzle","elfizzle","fairyizzle","pixieizzle","dragonizzle","griffinizzle","unicornizzle","pegasusizzle","spriteizzle","fancierizzle","chopperizzle","slicerizzle","skinnerizzle","butterflyizzle","legendizzle","wandererizzle","roverizzle","raverizzle","loonizzle","lancerizzle","glassizzle","glazerizzle","flameizzle","crystalizzle","lanternizzle","lighterizzle","cloakizzle","bellizzle","ringerizzle","keeperizzle","centaurizzle","boltizzle","catcherizzle","whimseyizzle","questerizzle","ratizzle","mouseizzle","serpentizzle","wyrmizzle","gargoyleizzle","thornizzle","whipizzle","riderizzle","spiritizzle","sentryizzle","batizzle","beetleizzle","burnizzle","cowlizzle","stoneizzle","gemizzle","collarizzle","markizzle","grinizzle","scowlizzle","spearizzle","razorizzle","edgeizzle","seekerizzle","jayizzle","apeizzleizzle","monkeyizzle","gorillaizzle","koalaizzle","kangarooizzle","yakizzle","slothizzle","antizzleizzle","roachizzle","weedizzle","seedizzle","eaterizzle","razorizzle","shirtizzle","faceizzle","goatizzle","mindizzle","shiftizzle","riderizzle","faceizzle","moleizzle","voleizzle","pirateizzle","llamaizzle","stagizzle","bugizzle","capizzle","bootizzle","dropizzle","huggerizzle","sargentizzle","snagglefootizzle","carpetizzle","curtainizzle"];

function randomNoun() {
    return nouns[Math.floor(Math.random()*nouns.length)];
}

function randomAdjective() {
    return adjectives[Math.floor(Math.random()*adjectives.length)];
}
function randomMiddle() {
    return middle[Math.floor(Math.random()*middle.length)];
}
function generateStupidName(){
    var noun1 = randomNoun();
    var noun2 = randomNoun();
    var middle = randomMiddle();
    noun2 = noun2.substr(0, 1).toUpperCase() + noun2.substr(1);
    var adjective = randomAdjective();
    return adjective + middle +noun1 + ' ' + noun2;
}

$(window).bind("load", function() {
  $('#generate').click( function() {
    $('h3').hide();
    $("<h3>" + generateStupidName() + "</h3>").insertAfter('#generate');
  });
});
