class Eat implements Behavior {

    public performBehavior(jibby : Jibby) {
        jibby.hygiene -= 0.01;
        jibby.food -= 0.02;
        jibby.happyness -= 0.015;
        console.log("jibby is eating!")
        jibby.div.style.backgroundImage = "url('images/eating.gif')"
        setTimeout(this.onTimerFinished, 2000, jibby)
        
    }

    public onTimerFinished(jibby: Jibby) {
        jibby.setBehavior(new Idle());
    }



    public onEat() {

    }

    public onWash() {

    }

    public onPet() {
        
    }
}