const Potion = require('../lib/Potion');

// function to create a new player object
function Player(name = '') {
    // assign player properties
    this.name = name;
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
};

// function to get player stats
Player.prototype.getStats = function() {
    // display player properties
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

// function to get player inventory
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        // display inventory
        return this.inventory;
    }
    return false;
};

module.exports = Player;