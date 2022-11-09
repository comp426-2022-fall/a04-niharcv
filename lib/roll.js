export function roll(num_sides, num_dice, num_rolls) {
    
    var all_rolls = [];

    for(var i = 0; i < num_rolls; i++) {
        var result = 0;

        for(var j = 0; j < num_dice; j++) {
            result = result + single_roll(num_sides);
        }

        all_rolls.push(result);

    }
    
    var rv = {
        sides: parseInt(num_sides),
        dice: parseInt(num_dice),
        rolls: parseInt(num_rolls),
        results: all_rolls
    }

    return JSON.stringify(rv);

}

function single_roll(num_sides) {
    return Math.floor(Math.random() * num_sides) + 1;
}