class Wash implements Behavior {

    public performBehavior(jibby : Jibby) {
        jibby.hygiene -= 0.01;
        jibby.food -= 0.02;
        jibby.happyness -= 0.015;
        console.log("washing jibby!")
        jibby.div.style.backgroundImage = "url('images/washing.png')"
        setTimeout(this.toIdle, 2000, jibby)
        
    }

    public toIdle (jibby : Jibby) : any {
        jibby.setBehavior(new Idle());
    }

    public onEat() {

    }

    public onWash() {

    }

    public onPet() {
        
    }
}