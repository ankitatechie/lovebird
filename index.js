#!/usr/bin/env node

var vorpal = require('vorpal')();
var excuses = require('./store/excuses');
var reaction = require('./store/counter');
var compliments = require('./store/compliments');
var gifts = require('./store/gifts');
var love = require('./lib/love_count');
var chalk = require('chalk');
var emoji = require('node-emoji');
var ascii_art = require('./lib/ascii_art');


//  Excuse command
vorpal
    .command('excuse', 'Best excuses to get out of relationship')
    .action(function(args, callback) {

        var excuse = excuses[getRandomInt(0, excuses.length)];

        this.log(' ');
        this.log(emoji.emojify(':broken_heart: :broken_heart:  '), chalk.yellow(excuse));
        this.log(' ');

        callback();
    });

//  Reaction command
vorpal
    .command('reaction', 'Reaction for dummies who got dumped.')
    .action(function(args, callback) {

        var excuse = reaction[getRandomInt(0, reaction.length)];

        this.log(' ');
        this.log(emoji.emojify(':raised_hands:  :raised_hands:  '), chalk.yellow(excuse));
        this.log(' ');

        callback();
    });

//  Compliment command
vorpal
    .command('compliment', 'Say something nice and save your ass.')
    .action(function(args, callback) {

        var compliment = compliments[getRandomInt(0, compliments.length)];

        this.log(' ');
        this.log(emoji.emojify(':heart_eyes_cat:  :heart_eyes_cat:  '), chalk.yellow(compliment));
        this.log(' ');

        callback();
    });

//  Gifts command
vorpal
    .command('gift', 'Give something nice and save your ass.')
    .action(function(args, callback) {

        var gift = gifts[getRandomInt(0, gifts.length)];

        this.log(' ');
        this.log(emoji.emojify(':heart_eyes_cat:  :heart_eyes_cat:  '), chalk.yellow(gift));
        this.log(' ');

        callback();
    });






// Load Ascii birds art
ascii_art.birds();

// Execute REPL
vorpal
    .delimiter(chalk.bold.green('lovebird$'))
    .show();

// Generate ranged number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
