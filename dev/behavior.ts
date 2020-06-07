abstract class Behavior {


    performBehavior(jibby: Jibby) : void {
        setTimeout(this.onTimerFinished, 2000, jibby);
    }

    onTimerFinished(jibby : Jibby) {
        jibby.setBehavior(new Idle());
    }
    abstract onWash(jibby : Jibby) : void
    abstract onPet(jibby : Jibby) : void
    abstract onEat(jibby : Jibby) : void
}