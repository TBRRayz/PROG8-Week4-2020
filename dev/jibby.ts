class Jibby {

    public hygiene:number
    public food:number
    public happyness:number

    public div:HTMLElement
    public x:number
    public y:number

    private behavior : Behavior;

    public setBehavior(behavior : Behavior) {
        this.behavior = behavior;
    }
            
    constructor(parent:HTMLElement) {
        this.div = document.createElement("jibby")
        parent.appendChild(this.div)

        this.behavior = new Idle();
        // start instellingen
        this.x = 0
        this.y = 220
        this.hygiene = this.food = this.happyness = 50

        // afbeelding voor idle - vervang dit door het gedrag
        this.div.style.backgroundImage = "url('images/idle.png')"
        // this.myBehavior = new Idle()

        // click listeners
        this.div.addEventListener("click", () => this.behavior.onPet(this))
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.behavior.onEat(this))
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.behavior.onWash(this))
        
    }

    public update():void {
        // hier het gedrag updaten
        //
        this.behavior.performBehavior(this);
        // dit moet in het gedrag staan
       
        // check of de waarden te laag zijn
        if (this.food < 0 || this.hygiene < 0 || this.happyness < 0){
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
        
        // 
    }

}