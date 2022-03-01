const Potion = require('./Potion');
const Character = require('./Character');

class Player extends Character {
    // function to create a new player class object
    constructor(name = '') {
        super(name);

        this.inventory = [new Potion('health'), new Potion()];  
    };

    // function to get player stats
    getStats() {
        // display player properties
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    // function to get player inventory
    getInventory() {
        if (this.inventory.length) {
            // display inventory
            return this.inventory;
        }
        return false;
    };

    // add potion to inventory
    addPotion(potion) {
        this.inventory.push(potion);
    };

    // use a potion from our player's inventory
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];
    
        switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
        }
    };
};

module.exports = Player;