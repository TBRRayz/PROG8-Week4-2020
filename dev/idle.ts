class Idle implements Behavior {

    public performBehavior(jibby : Jibby) {
        jibby.hygiene -= 0.01;
        jibby.food -= 0.02;
        jibby.happyness -= 0.015;
        console.log("jibby is Idle!")
        jibby.div.style.backgroundImage = "url('images/idle.png')"
    }

    public onEat(jibby : Jibby) {
        jibby.setBehavior(new Eat());
        jibby.food += 10;
    }

    public onWash(jibby : Jibby) {
        jibby.setBehavior(new Wash());
        jibby.hygiene += 10;
        jibby.happyness += 5;
    }

    public onPet(jibby : Jibby) {
        jibby.setBehavior(new Pet());
        jibby.happyness += 2;
    }
}