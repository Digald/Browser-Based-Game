$(document).ready(function() {
    // objects containing stats for each characters
    var lukeSkywalker = { health: 150, attack: 25, counterAttack: 25, active: false, activeOp: false };
    var darthVader = { health: 100, attack: 25, counterAttack: 25, active: false, activeOp: false };
    var hanSolo = { health: 100, attack: 25, counterAttack: 25, active: false, acticeOp: false };
    var bobaFett = { health: 100, attack: 25, counterAttack: 25, active: false, activeOp: false };

    // set variables to be compared
    var activeFighter;
    var activeOpp;

    // set initial values and appropriate starting text
    $("#pickHero").text("Please select a hero to fight on your side:")
    $("#lukeAtk").html(lukeSkywalker.attack);
    $("#lukeHealth").html(lukeSkywalker.health);
    $("#vaderAtk").html(darthVader.attack);
    $("#vaderHealth").html(darthVader.health);
    $("#hanAtk").html(hanSolo.attack);
    $("#hanHealth").html(hanSolo.health);
    $("#bobaAtk").html(bobaFett.attack);
    $("#bobaHealth").html(bobaFett.health);

    // conditions for chosing your starter hero
    $("#luke").click(function() {
        lukeSkywalker.active = true;
        toFight();
    });
    $("#vader").click(function() {
        darthVader.active = true;
        toFight();
    });
    $("#han").click(function() {
        hanSolo.active = true;
        toFight();
    });
    $("#boba").click(function() {
        bobaFett.active = true;
        toFight();
    });


    // Button press for every possible match up
    $("#atkBtn").click(function() {
        if (lukeSkywalker.active === true && darthVader.activeOp === true) {
            lukeSkywalker.health -= darthVader.counterAttack;
            darthVader.health -= lukeSkywalker.attack;
            lukeSkywalker.attack += 6;
            $("#lukeAtk").html(lukeSkywalker.attack);
            $("#lukeHealth").html(lukeSkywalker.health);
            $("#vaderAtk").html(darthVader.attack);
            $("#vaderHealth").html(darthVader.health);
            activeFighter = lukeSkywalker;
            activeOpp = darthVader;
            winLose();
        } else if (lukeSkywalker.active === true && hanSolo.activeOp === true) {
            // do
        } else if (lukeSkywalker.active === true && bobaFett.activeOp) {
            // do
        }
        if (darthVader.active === true && lukeSkywalker.activeOp === true) {
            // do
        } else if (darthVader.active == true && hanSolo.activeOp === true) {
            // do
        } else if (darthVader.active === true && bobaFett.activeOp === true) {
            // do
        }
        if (hanSolo.active === true && lukeSkywalker.activeOp === true) {
            // do
        } else if (hanSolo.active === true && darthVader.activeOp === true) {
            // do 
        } else if (hanSolo.active === true && darthVader.activeOp === true) {
            // do
        }
        if (bobaFett.active === true && lukeSkywalker.activeOp === true) {
            // do
        } else if (bobaFett.active === true && darthVader.activeOp === true) {
            // do
        } else if (bobaFett.active === true && hanSolo.activeOp === true) {
            // do
        }
    });


    // function to setup staging area based on picks
    function toFight() {
        if (lukeSkywalker.active === true) {
            $("#luke").detach().appendTo("#activeHero").css({ "border": "5px solid green" });
            $("#pickHero").text("Now select an opponent to face:");
            $("#luke").off("click");
            $("#vader, #han, #boba").css({ "border": "5px solid red" });

            // click enemy now and move to correct positions
            $("#vader").click(function() {
                darthVader.activeOp = true;
                $("#vader").detach().appendTo("#activeOp");
                $("#vader").off("click");
                $("#han").detach().appendTo("#benchOp1");
                $("#han").off("click");
                $("#boba").detach().appendTo("#benchOp2");
                $("#boba").off("click");
                $("#pickHero").empty();
            });
            $("#han").click(function() {
                hanSolo.activeOp = true;
                $("#han").detach().appendTo("#activeOp");
                $("#han").off("click");
                $("#vader").detach().appendTo("#benchOp1");
                $("#vader").off("click");
                $("#boba").detach().appendTo("#benchOp2");
                $("#boba").off("click");
                $("#pickHero").empty();
            });
            $("#boba").click(function() {
                bobaFett.activeOp = true;
                $("#boba").detach().appendTo("#activeOp");
                $("#boba").off("click");
                $("#vader").detach().appendTo("#benchOp1");
                $("#vader").off("click");
                $("#han").detach().appendTo("#benchOp2");
                $("#han").off("click");
                $("#pickHero").empty();
            });


        } // end of luke hero path

    } // end of toFight();


    function winLose() {
        console.log("function happened");
        if (lukeSkywalker.health <= 0) {
            console.log("Did you do first if?");
        } else if (darthVader.health <= 0) {
            console.log("did you do second if?");
            darthVader.activeOp = false;
            $("#vader").remove();
            console.log("Should have been removed");
        }
        console.log("function ended")
    } // end winLose();

    // PSUDOCODE:
    // whatever hero gets assigned to slot uses it's stats
    // when button is pressed 1.) hp is subtracted from atk 2.) hero attack increased
    // when hero hp = 0 game over
    // when enemy hp = 0 remove from game
    // able to click new Op
    // repeat clicks
    // when all Ops are removed, You win
    // reset game button

}); // end doc.ready