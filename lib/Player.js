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

// display health value
Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

// evaluate if player is still alive
Player.prototype.isAlive = function() {
    if (this.health === 0) {
      return false;
    }
    return true;
};

// reduce health
Player.prototype.reduceHealth = function(health) {
    this.health -= health;
  
    if (this.health < 0) {
      this.health = 0;
    }
};

// create attack value
Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;
  
    return Math.floor(Math.random() * (max - min) + min);
};

// add potion to inventory
Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
};

// use a potion from our player's inventory
Player.prototype.usePotion = function(index) {
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

module.exports = Player;