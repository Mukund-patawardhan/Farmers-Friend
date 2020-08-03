class Info{
    constructor(){
        this.back=createButton("B A C K")
    }
    display(){
        this.back.show();
        this.back.position(0,0);
        this.back.mousePressed(()=>{
            State="Plants"
        })
        push();
        fill("black");
        textSize(30);
        textFont("Bookman Old Style");
        push();
        textSize(60)
        fill("red");
        textStyle(BOLD)
        textFont("Gill Sans MT")
        text("FUTURE  ENHANCEMENTS",300,350)
        pop();
        text("•	Farmer’s profile login.",100,500);
        text("•	Regular reminders to the user to know when to treat which plant",100,550);
        text("(Medicine treatment calendar) based on the profile.",150,600)
        text("•	Exploring Lidar technology to scan the farms and understand about",100,650);
        text("its conditions of water treatment and bacterial spread.",150,700)
        text("•	Plant scanner with AI to figure out the disease.",100,750);
        text("•	Access to market based demand of product.",100,800);
        pop();
    }
    hide(){
        this.back.hide();
    }
}