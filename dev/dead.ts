class Dead implements Behavior {

    public performBehavior(jibby : Jibby) {
        console.log("jibby is Dead!")
        jibby.div.style.backgroundImage = "url('images/dead.png')"
    }

    public onTimerFinished() {
        
    }

    public onEat() {

    }

    public onWash() {

    }

    public onPet() {
        
    }
}