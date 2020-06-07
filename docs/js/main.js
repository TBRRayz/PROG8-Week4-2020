"use strict";
var Behavior = (function () {
    function Behavior() {
    }
    Behavior.prototype.performBehavior = function (jibby) {
        setTimeout(this.onTimerFinished, 2000, jibby);
    };
    Behavior.prototype.onTimerFinished = function (jibby) {
        jibby.setBehavior(new Idle());
    };
    return Behavior;
}());
var Dead = (function () {
    function Dead() {
    }
    Dead.prototype.performBehavior = function (jibby) {
        console.log("jibby is Dead!");
        jibby.div.style.backgroundImage = "url('images/dead.png')";
    };
    Dead.prototype.onTimerFinished = function () {
    };
    Dead.prototype.onEat = function () {
    };
    Dead.prototype.onWash = function () {
    };
    Dead.prototype.onPet = function () {
    };
    return Dead;
}());
var Dirty = (function () {
    function Dirty() {
    }
    Dirty.prototype.performBehavior = function (jibby) {
        jibby.hygiene -= 0.01;
        jibby.food -= 0.02;
        jibby.happyness -= 0.015;
        console.log("jibby is dirty!");
        jibby.div.style.backgroundImage = "url('images/dirty.png')";
    };
    Dirty.prototype.onTimerFinished = function () {
    };
    Dirty.prototype.onEat = function (jibby) {
        jibby.setBehavior(new Eat());
        jibby.food += 10;
    };
    Dirty.prototype.onWash = function (jibby) {
        jibby.setBehavior(new Wash());
        jibby.hygiene += 10;
        jibby.happyness += 5;
    };
    Dirty.prototype.onPet = function (jibby) {
        jibby.setBehavior(new Pet());
        jibby.happyness += 2;
    };
    return Dirty;
}());
var Eat = (function () {
    function Eat() {
    }
    Eat.prototype.performBehavior = function (jibby) {
        jibby.hygiene -= 0.01;
        jibby.food -= 0.02;
        jibby.happyness -= 0.015;
        console.log("jibby is eating!");
        jibby.div.style.backgroundImage = "url('images/eating.gif')";
        setTimeout(this.onTimerFinished, 2000, jibby);
    };
    Eat.prototype.onTimerFinished = function (jibby) {
        jibby.setBehavior(new Idle());
    };
    Eat.prototype.onEat = function () {
    };
    Eat.prototype.onWash = function () {
    };
    Eat.prototype.onPet = function () {
    };
    return Eat;
}());
var Jibby = (function () {
    function Jibby(parent) {
        var _this = this;
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);
        this.behavior = new Idle();
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happyness = 50;
        this.div.style.backgroundImage = "url('images/idle.png')";
        this.div.addEventListener("click", function () { return _this.behavior.onPet(_this); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.behavior.onEat(_this); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.behavior.onWash(_this); });
    }
    Jibby.prototype.setBehavior = function (behavior) {
        this.behavior = behavior;
    };
    Jibby.prototype.update = function () {
        this.behavior.performBehavior(this);
        if (this.food < 0 || this.hygiene < 0 || this.happyness < 0) {
            this.setBehavior(new Dead());
        }
        else if (this.food < 10) {
            this.setBehavior(new Hunger());
        }
        else if (this.hygiene < 10) {
            this.setBehavior(new Dirty());
        }
        else if (this.happyness < 10) {
            this.setBehavior(new Sad());
        }
    };
    return Jibby;
}());
var Game = (function () {
    function Game() {
        var container = document.getElementById("container");
        this.jibby = new Jibby(container);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.jibby.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString();
        document.getElementsByTagName("happyness")[0].innerHTML = Math.round(this.jibby.happyness).toString();
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Hunger = (function () {
    function Hunger() {
    }
    Hunger.prototype.performBehavior = function (jibby) {
        jibby.hygiene -= 0.01;
        jibby.food -= 0.02;
        jibby.happyness -= 0.015;
        console.log("jibby is eating!");
        jibby.div.style.backgroundImage = "url('images/hungry.png')";
    };
    Hunger.prototype.onTimerFinished = function () {
    };
    Hunger.prototype.onEat = function (jibby) {
        jibby.setBehavior(new Eat());
        jibby.food += 10;
    };
    Hunger.prototype.onWash = function (jibby) {
        jibby.setBehavior(new Wash());
        jibby.hygiene += 10;
        jibby.happyness += 5;
    };
    Hunger.prototype.onPet = function (jibby) {
        jibby.setBehavior(new Pet());
        jibby.happyness += 2;
    };
    return Hunger;
}());
var Idle = (function () {
    function Idle() {
    }
    Idle.prototype.performBehavior = function (jibby) {
        jibby.hygiene -= 0.01;
        jibby.food -= 0.02;
        jibby.happyness -= 0.015;
        console.log("jibby is Idle!");
        jibby.div.style.backgroundImage = "url('images/idle.png')";
    };
    Idle.prototype.onTimerFinished = function () {
    };
    Idle.prototype.onEat = function (jibby) {
        jibby.setBehavior(new Eat());
        jibby.food += 10;
    };
    Idle.prototype.onWash = function (jibby) {
        jibby.setBehavior(new Wash());
        jibby.hygiene += 10;
        jibby.happyness += 5;
    };
    Idle.prototype.onPet = function (jibby) {
        jibby.setBehavior(new Pet());
        jibby.happyness += 2;
    };
    return Idle;
}());
var Pet = (function () {
    function Pet() {
    }
    Pet.prototype.performBehavior = function (jibby) {
        jibby.hygiene -= 0.01;
        jibby.food -= 0.02;
        jibby.happyness -= 0.015;
        console.log("you clicked on jibby!");
        jibby.div.style.backgroundImage = "url('images/happy.png')";
        setTimeout(this.onTimerFinished, 2000, jibby);
    };
    Pet.prototype.onTimerFinished = function (jibby) {
        jibby.setBehavior(new Idle());
    };
    Pet.prototype.onEat = function () {
    };
    Pet.prototype.onWash = function () {
    };
    Pet.prototype.onPet = function () {
    };
    return Pet;
}());
var Sad = (function () {
    function Sad() {
    }
    Sad.prototype.performBehavior = function (jibby) {
        jibby.hygiene -= 0.01;
        jibby.food -= 0.02;
        jibby.happyness -= 0.015;
        console.log("jibby is eating!");
        jibby.div.style.backgroundImage = "url('images/sad.png')";
    };
    Sad.prototype.onTimerFinished = function () {
    };
    Sad.prototype.onEat = function (jibby) {
        jibby.setBehavior(new Eat());
        jibby.food += 10;
    };
    Sad.prototype.onWash = function (jibby) {
        jibby.setBehavior(new Wash());
        jibby.hygiene += 10;
        jibby.happyness += 5;
    };
    Sad.prototype.onPet = function (jibby) {
        jibby.setBehavior(new Pet());
        jibby.happyness += 2;
    };
    return Sad;
}());
var Wash = (function () {
    function Wash() {
    }
    Wash.prototype.performBehavior = function (jibby) {
        jibby.hygiene -= 0.01;
        jibby.food -= 0.02;
        jibby.happyness -= 0.015;
        console.log("washing jibby!");
        jibby.div.style.backgroundImage = "url('images/washing.png')";
        setTimeout(this.onTimerFinished, 2000, jibby);
    };
    Wash.prototype.onTimerFinished = function (jibby) {
        jibby.setBehavior(new Idle());
    };
    Wash.prototype.onEat = function () {
    };
    Wash.prototype.onWash = function () {
    };
    Wash.prototype.onPet = function () {
    };
    return Wash;
}());
//# sourceMappingURL=main.js.map