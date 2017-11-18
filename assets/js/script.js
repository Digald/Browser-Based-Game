$(document).ready(function() {
    // objects containing stats for each hero
    var lukeSkywalker = { health: 300, attack: 25, counterAttack: 25, active: false, activeOp: false, defeated: false };
    var darthVader = { health: 100, attack: 25, counterAttack: 25, active: false, activeOp: false, defeated: false };
    var hanSolo = { health: 100, attack: 25, counterAttack: 25, active: false, activeOp: false, defeated: false };
    var bobaFett = { health: 100, attack: 25, counterAttack: 25, active: false, activeOp: false, defeated: false };

    // variables to hold active hero stats
    var activeFighter;
    var activeOpp;

    // set initial values to html and appropriate starting text
    $("#pickHero").text("Please select a hero to fight on your side:")
    $("#lukeAtk").html(lukeSkywalker.attack);
    $("#lukeHealth").html(lukeSkywalker.health);
    $("#vaderAtk").html(darthVader.attack);
    $("#vaderHealth").html(darthVader.health);
    $("#hanAtk").html(hanSolo.attack);
    $("#hanHealth").html(hanSolo.health);
    $("#bobaAtk").html(bobaFett.attack);
    $("#bobaHealth").html(bobaFett.health);

    // Options for chosing your starting hero
    $("#luke, #vader, #han, #boba").click(function() {
        if ($("#luke").data("clicked", true)) {
            lukeSkywalker.active = true;
            toFight();
        } else if ($("#vader").data("clicked", true)) {
            darthVader.active = true;
            toFight;
        }
    });



    //   $("#luke").click(function() {
    //     lukeSkywalker.active = true; 
    //     toFight();
    //    });
    //   $("#vader").click(function() {
    //     darthVader.active = true; 
    //     toFight();
    //     console.log(darthVader);
    //    });
    //   $("#han").click(function() {
    //     hanSolo.active = true;
    //     toFight();
    //    });
    //   $("#boba").click(function() {
    //     bobaFett.active = true;
    //     toFight();
    //    });


    // Button press calculates every hero matchup
    $("#atkBtn").click(function() {
        // assign stats to generic variable to save a bit of space
        if (lukeSkywalker.active === true && darthVader.activeOp === true) {
            activeFighter = lukeSkywalker;
            activeOpp = darthVader;
        } else if (lukeSkywalker.active === true && hanSolo.activeOp === true) {
            activeFighter = lukeSkywalker;
            activeOpp = hanSolo;
        } else if (lukeSkywalker.active === true && bobaFett.activeOp) {
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
        // calculate stats and refresh
        activeOpp.health -= activeFighter.attack;
        activeFighter.health -= activeOpp.counterAttack;
        activeFighter.attack += 6;
        $("#activeHero .attack").html(activeFighter.attack);
        $("#activeHero .health").html(activeFighter.health);
        $("#activeOp .attack").html(activeOpp.attack);
        $("#activeOp .health").html(activeOpp.health);
        defeatFighter();
        winLose();
    });


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
                $("#vader").off("click");
                $("#han").detach().appendTo("#benchOp1");
                $("#han").off("click");
                $("#boba").detach().appendTo("#benchOp2");
                $("#boba").off("click");
                $("#pickHero").empty();
                console.log(darthVader);
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
        else if (darthVader.active === true) {
            // do
        } else if (hanSolo.active === true) {
            // do
        } else if (bobaFett.active === true) {
            // do
        }

    } // end of toFight();


    function defeatFighter() {
        if (activeFighter.health <= 0) {
            console.log("You Lose");
            $("#atkBtn").off("click");
        } else if (activeOpp.health <= 0) {
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
            //test
            $("#luke").click(function() {
                if (lukeSkywalker.active !== true) {
                    lukeSkywalker.activeOp = true;
                    lukeSkywalker.detach().appendTo("#activeOp");
                    $("#vader, #han, #boba").off("click");
                }
            });
            $("#vader").click(function() {
                if (darthVader.active !== true) {
                    darthVader.activeOp = true;
                    $("#vader").detach().appendTo("#activeOp");
                    $("#luke, #han, #boba").off("click");
                }
            });
            $("#han").click(function() {
                if (hanSolo.active !== true) {
                    hanSolo.activeOp = true;
                    $("#han").detach().appendTo("#activeOp");
                    $("#luke, #vader, #boba").off("click");
                }
            });
            $("#boba").click(function() {
                if (bobaFett.active !== true) {
                    bobaFett.activeOp = true;
                    $("#boba").detach().appendTo("#activeOp");
                    $("#luke, #vader, #han").off("click");
                }
            });
            //test

        }
    } // end defeatFighter();

    function winLose() {
        if (lukeSkywalker.active === true) {
            if (darthVader.defeated === true && hanSolo.defeated === true && bobaFett.defeated === true) {
                $("#atkBtn").off("click");
                console.log("You win");
            }
        } else if (darthVader.active === true) {
            if (lukeSkywalker.defeated === true && hanSolo.defeated === true && bobaFett.defeated === true) {
                $("#atkBtn").off("click");
                console.log("You win");
            }
        } else if (hanSolo.active === true) {
            if (lukeSkywalker.defeated === true && darthVader.defeated === true && bobaFett.defeated === true) {
                $("#atkBtn").off("click");
                console.log("You win");
            }
        } else if (bobaFett.active === true) {
            if (lukeSkywalker.defeated === true && darthVader.defeated === true && hanSolo.defeated === true) {
                $("#atkBtn").off("click");
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

}); // end doc.ready