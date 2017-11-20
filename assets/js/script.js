$(document).ready(function() {

    // objects containing stats for each hero
    var lukeSkywalker = { name: "Luke Skywalker", health: 120, attack: 12, counterAttack: 12, active: false, activeOp: false, defeated: false };
    var darthVader = { name: "Darth Vader", health: 105, attack: 15, counterAttack: 15, active: false, activeOp: false, defeated: false };
    var hanSolo = { name: "Han Solo", health: 150, attack: 8, counterAttack: 8, active: false, activeOp: false, defeated: false };
    var bobaFett = { name: "Boba Fett", health: 140, attack: 10, counterAttack: 10, active: false, activeOp: false, defeated: false };

    // html cards set to variables
    var lukeCard = $("#luke");
    var vaderCard = $("#vader");
    var hanCard = $("#han");
    var bobaCard = $("#boba");

    // variables to hold active hero stats
    var activeFighter;
    var activeOpp;

    // working on reset
    $("#reset").click(function() {
        location.reload();

        // ATTEMPT AT RESETTING THE GAME BUT CLICK EFFECTS AND STATS WOULD NOT FUNCTION AFTER RESETTING
        // $("#placeLuke").append(lukeCard);
        // $("#placeVader").append(vaderCard);
        // $("#placeHan").append(hanCard);
        // $("#placeBoba").append(bobaCard);
        // $("#luke, #vader, #han, #boba").css({ "border": "none" });
        // $("#attackLog").empty();
        // $("#newOp").empty();
        // $("#displayLose").empty();
        // $("#lukeAtk").html(lukeSkywalker.attack);
        // $("#lukeHealth").html(lukeSkywalker.health);
        // $("#vaderAtk").html(darthVader.attack);
        // $("#vaderHealth").html(darthVader.health);
        // $("#hanAtk").html(hanSolo.attack);
        // $("#hanHealth").html(hanSolo.health);
        // $("#bobaAtk").html(bobaFett.attack);
        // $("#bobaHealth").html(bobaFett.health);
        // activeFighter = undefined;
        // activeOpp =  undefined;
        // startGame();
    });

    // Main game flow function
    function startGame() {

        // set initial values to html and appropriate starting text
        $("#pickHero").text("Please select a hero to fight on your side:");
        $("#lukeAtk").html(lukeSkywalker.attack);
        $("#lukeHealth").html(lukeSkywalker.health);
        $("#vaderAtk").html(darthVader.attack);
        $("#vaderHealth").html(darthVader.health);
        $("#hanAtk").html(hanSolo.attack);
        $("#hanHealth").html(hanSolo.health);
        $("#bobaAtk").html(bobaFett.attack);
        $("#bobaHealth").html(bobaFett.health);

        // Options for chosing your starting hero
        var pickLuke = $("#luke").click(function() {
            if (lukeSkywalker.active === false && darthVader.active === false && hanSolo.active === false && bobaFett.active === false) {
                lukeSkywalker.active = true;
                toFight();
            }
        });
        $("#vader").click(function() {
            if (lukeSkywalker.active === false && darthVader.active === false && hanSolo.active === false && bobaFett.active === false) {
                darthVader.active = true;
                toFight();
            }
        });
        $("#han").click(function() {
            if (lukeSkywalker.active === false && darthVader.active === false && hanSolo.active === false && bobaFett.active === false) {
                hanSolo.active = true;
                toFight();
            }
        });
        $("#boba").click(function() {
            if (lukeSkywalker.active === false && darthVader.active === false && hanSolo.active === false && bobaFett.active === false) {
                bobaFett.active = true;
                toFight();
            }
        });

        // Button press calculates every hero matchup
        $("#atkBtn").click(function() {
            // assign stats to generic variable to save a bit of space
            if (lukeSkywalker.active === true && darthVader.activeOp === true) {
                activeFighter = lukeSkywalker;
                activeOpp = darthVader;
            } else if (lukeSkywalker.active === true && hanSolo.activeOp === true) {
                activeFighter = lukeSkywalker;
                activeOpp = hanSolo;
            } else if (lukeSkywalker.active === true && bobaFett.activeOp === true) {
                activeFighter = lukeSkywalker;
                activeOpp = bobaFett;
            }
            if (darthVader.active === true && lukeSkywalker.activeOp === true) {
                activeFighter = darthVader;
                activeOpp = lukeSkywalker;
            } else if (darthVader.active === true && hanSolo.activeOp === true) {
                activeFighter = darthVader;
                activeOpp = hanSolo;
            } else if (darthVader.active === true && bobaFett.activeOp === true) {
                activeFighter = darthVader;
                activeOpp = bobaFett;
            }
            if (hanSolo.active === true && lukeSkywalker.activeOp === true) {
                activeFighter = hanSolo;
                activeOpp = lukeSkywalker;
            } else if (hanSolo.active === true && darthVader.activeOp === true) {
                activeFighter = hanSolo;
                activeOpp = darthVader;
            } else if (hanSolo.active === true && bobaFett.activeOp === true) {
                activeFighter = hanSolo;
                activeOpp = bobaFett;
            }
            if (bobaFett.active === true && lukeSkywalker.activeOp === true) {
                activeFighter = bobaFett;
                activeOpp = lukeSkywalker;
            } else if (bobaFett.active === true && darthVader.activeOp === true) {
                activeFighter = bobaFett;
                activeOpp = darthVader;
            } else if (bobaFett.active === true && hanSolo.activeOp === true) {
                activeFighter = bobaFett;
                activeOpp = hanSolo;
            }
            // calculate stats differences, apply, and refresh
            activeOpp.health -= activeFighter.attack;
            activeFighter.health -= activeOpp.counterAttack;
            // announce attacks to the attack log
            $("#attackLog").html("You attacked " + activeOpp.name + " for " + activeFighter.attack + " damage! Meanwhile, " + activeOpp.name + " attacked you for " + activeOpp.attack + " damage.");
            activeFighter.attack += 8;
            $("#activeHero .attack").html(activeFighter.attack);
            $("#activeHero .health").html(activeFighter.health);
            $("#activeOp .attack").html(activeOpp.counterAttack);
            $("#activeOp .health").html(activeOpp.health);

            defeatFighter();
            winLose();
        }); // end of button click function
    } // end startGame function
    startGame();

    // ============================================================
    // ONLY NESTED FUNCTIONS BEYOND THIS POINT
    // ============================================================

    // set up fighting area depending on what hero has been picked
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
                $("#han").detach().appendTo("#benchOp1");
                $("#boba").detach().appendTo("#benchOp2");
                $("#vader, #han, #boba").off("click");
                $("#pickHero").empty();
            });
            $("#han").click(function() {
                hanSolo.activeOp = true;
                $("#han").detach().appendTo("#activeOp");
                $("#vader").detach().appendTo("#benchOp1");
                $("#boba").detach().appendTo("#benchOp2");
                $("#vader, #han, #boba").off("click");
                $("#pickHero").empty();
            });
            $("#boba").click(function() {
                bobaFett.activeOp = true;
                $("#boba").detach().appendTo("#activeOp");
                $("#vader").detach().appendTo("#benchOp1");
                $("#han").detach().appendTo("#benchOp2");
                $("#vader, #han, #boba").off("click");
                $("#pickHero").empty();
            });
        } // end of luke hero path
        else if (darthVader.active === true) {
            $("#vader").detach().appendTo("#activeHero").css({ "border": "5px solid green" });
            $("#pickHero").text("Now select an opponent to face:");
            $("#vader").off("click");
            $("#luke, #han, #boba").css({ "border": "5px solid red" });

            // click enemy now and move to correct positions
            $("#luke").click(function() {
                lukeSkywalker.activeOp = true;
                $("#luke").detach().appendTo("#activeOp");
                $("#han").detach().appendTo("#benchOp1");
                $("#boba").detach().appendTo("#benchOp2");
                $("#luke, #han, #boba").off("click");
                $("#pickHero").empty();
            });
            $("#han").click(function() {
                hanSolo.activeOp = true;
                $("#han").detach().appendTo("#activeOp");
                $("#luke").detach().appendTo("#benchOp1");
                $("#boba").detach().appendTo("#benchOp2");
                $("#han, #luke, #boba").off("click");
                $("#pickHero").empty();
            });
            $("#boba").click(function() {
                bobaFett.activeOp = true;
                $("#boba").detach().appendTo("#activeOp");
                $("#luke").detach().appendTo("#benchOp1");
                $("#han").detach().appendTo("#benchOp2");
                $("#luke, #han, #boba").off("click");
                $("#pickHero").empty();
            });
        } // end of vader hero path
        else if (hanSolo.active === true) {
            $("#han").detach().appendTo("#activeHero").css({ "border": "5px solid green" });
            $("#pickHero").text("Now select an opponent to face:");
            $("#han").off("click");
            $("#luke, #vader, #boba").css({ "border": "5px solid red" });

            // click enemy now and move to correct positions
            $("#luke").click(function() {
                lukeSkywalker.activeOp = true;
                $("#luke").detach().appendTo("#activeOp");
                $("#vader").detach().appendTo("#benchOp1");
                $("#boba").detach().appendTo("#benchOp2");
                $("#luke, #vader, #boba").off("click");
                $("#pickHero").empty();
            });
            $("#vader").click(function() {
                darthVader.activeOp = true;
                $("#vader").detach().appendTo("#activeOp");
                $("#luke").detach().appendTo("#benchOp1");
                $("#boba").detach().appendTo("#benchOp2");
                $("#luke, #vader, #boba").off("click");
                $("#pickHero").empty();
            });
            $("#boba").click(function() {
                bobaFett.activeOp = true;
                $("#boba").detach().appendTo("#activeOp");
                $("#luke").detach().appendTo("#benchOp1");
                $("#vader").detach().appendTo("#benchOp2");
                $("#luke, #vader, #boba").off("click");
                $("#pickHero").empty();
            });
        } // end of han hero path
        else if (bobaFett.active === true) {
            $("#boba").detach().appendTo("#activeHero").css({ "border": "5px solid green" });
            $("#pickHero").text("Now select an opponent to face:");
            $("#boba").off("click");
            $("#luke, #vader, #han").css({ "border": "5px solid red" });

            // click enemy now and move to correct positions
            $("#luke").click(function() {
                lukeSkywalker.activeOp = true;
                $("#luke").detach().appendTo("#activeOp");
                $("#vader").detach().appendTo("#benchOp1");
                $("#han").detach().appendTo("#benchOp2");
                $("#luke, #vader, #han").off("click");
                $("#pickHero").empty();
            });
            $("#vader").click(function() {
                darthVader.activeOp = true;
                $("#vader").detach().appendTo("#activeOp");
                $("#luke").detach().appendTo("#benchOp1");
                $("#han").detach().appendTo("#benchOp2");
                $("#luke, #vader, #han").off("click");
                $("#pickHero").empty();
            });
            $("#han").click(function() {
                hanSolo.activeOp = true;
                $("#han").detach().appendTo("#activeOp");
                $("#luke").detach().appendTo("#benchOp1");
                $("#vader").detach().appendTo("#benchOp2");
                $("#luke, #vader, #han").off("click");
                $("#pickHero").empty();
            });
        } // end of boba hero path
    } // end of toFight function

    function defeatFighter() {
        if (activeFighter.health <= 0) {
            // if you get beaten
            $("#atkBtn").off("click");
            $("#activeHero").remove();
            $("#displayLose").html("YOU LOST THE FIGHT").addClass("redColor");
            console.log("You Lose");
            $("#atkBtn").off("click");
        } else if (activeOpp.health <= 0) {
            // if you beat your enemy
            if (lukeSkywalker.activeOp === true) {
                lukeSkywalker.activeOp = false;
                lukeSkywalker.defeated = true;
            } else if (darthVader.activeOp === true) {
                darthVader.activeOp = false;
                darthVader.defeated = true;
            } else if (hanSolo.activeOp === true) {
                hanSolo.activeOp = false;
                hanSolo.defeated = true;
            } else if (bobaFett.activeOp === true) {
                bobaFett.activeOp = false;
                bobaFett.defeated = true;
            }
            activeOpp = undefined;
            $("#activeOp .card").remove();

            $("#newOp").show().html("Now click a new opponent from the bench to cut down!");
            // Get new opponent going
            $("#luke").click(function() {
                if (lukeSkywalker.active !== true) {
                    lukeSkywalker.activeOp = true;
                    $("#luke").detach().appendTo("#activeOp");
                    $("#newOp").hide();
                    $("#vader, #han, #boba").off("click");
                }
            });
            $("#vader").click(function() {
                if (darthVader.active !== true) {
                    darthVader.activeOp = true;
                    $("#vader").detach().appendTo("#activeOp");
                    $("#newOp").hide();
                    $("#luke, #han, #boba").off("click");
                }
            });
            $("#han").click(function() {
                if (hanSolo.active !== true) {
                    hanSolo.activeOp = true;
                    $("#han").detach().appendTo("#activeOp");
                    $("#newOp").hide();
                    $("#luke, #vader, #boba").off("click");
                }
            });
            $("#boba").click(function() {
                if (bobaFett.active !== true) {
                    bobaFett.activeOp = true;
                    $("#boba").detach().appendTo("#activeOp");
                    $("#newOp").hide();
                    $("#luke, #vader, #han").off("click");
                }
            });
        }

    } // end defeatFighter();

    function winLose() {
        if (lukeSkywalker.active === true) {
            if (darthVader.defeated === true && hanSolo.defeated === true && bobaFett.defeated === true) {
                $("#atkBtn").off("click");
                $("#newOp").hide();
                $("#activeOp").html("<h1>YOU WON THE FIGHT</h1>").addClass("greenColor");
                console.log("You win");
            }
        } else if (darthVader.active === true) {
            if (lukeSkywalker.defeated === true && hanSolo.defeated === true && bobaFett.defeated === true) {
                $("#atkBtn").off("click");
                $("#newOp").hide();
                $("#activeOp").html("<h1>YOU WON THE FIGHT</h1>").addClass("greenColor");
                console.log("You win");
            }
        } else if (hanSolo.active === true) {
            if (lukeSkywalker.defeated === true && darthVader.defeated === true && bobaFett.defeated === true) {
                $("#atkBtn").off("click");
                $("#newOp").hide();
                $("#activeOp").html("<h1>YOU WON THE FIGHT</h1>").addClass("greenColor");
                console.log("You win");
            }
        } else if (bobaFett.active === true) {
            if (lukeSkywalker.defeated === true && darthVader.defeated === true && hanSolo.defeated === true) {
                $("#atkBtn").off("click");
                $("#newOp").hide();
                $("#activeOp").html("<h1>YOU WON THE FIGHT</h1>").addClass("greenColor");
                console.log("You win");
            }
        }
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
});