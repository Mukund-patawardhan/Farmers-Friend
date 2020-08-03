class Plants{
    constructor(){
        this.mango=createButton("M a n g o");
        this.m=loadImage("Mango.jpg");
        this.tomato=createButton("T o m a t o");
        this.t=loadImage("Tomato.jpg");
        this.flowers=createButton("Flowering Plants");
        this.f=loadImage("Flowers.jpg");
        this.banana=createButton("B a n a n a");
        this.b=loadImage("Banana.jpg");
        this.citrus=createButton("C i t r u s");
        this.c=loadImage("Citrus1.jpg");
        this.a=createImg("Enhance.jpg");
    }

    display(){

        push();
        fill('black');
        textSize(35);
        textFont('Bookman Antiqua')
        text("We know you love your plants. Won’t you be sad if they got diseases and you don't know what to do?",10,250);
        text("Don't Worry !!",600,300);
        text("Just choose the plant, state its symptoms and all is done. You have the cure at your fingertips.",50,350)
        pop();

        this.a.position(1300*0.4,700*1.6)
        this.a.mousePressed(()=>{
            State="Info";
        })

        this.mango.position(1300*0.1,700*0.95);
        this.mango.mousePressed(()=>{
            State="Mango";
        })
        
        image(this.m,0,700*0.6,360,240);

        this.tomato.position(1300*0.5,700*0.95);
        this.tomato.mousePressed(()=>{
            State="Tomato";
        })
        
        image(this.t,1300*0.4,700*0.6,360,240);

        this.flowers.position(1300*0.07,700*1.95);
        this.flowers.mousePressed(()=>{
            State="flowers";
        })
        
        image(this.f,1300*0.0,700*1.6,360,240);

        this.banana.position(1300*0.2,700*1.45);
        this.banana.mousePressed(()=>{
            State="banana";
        })
        
        image(this.b,1300*0.1,700*1.1,360,240);

        this.citrus.position(1300*0.6,700*1.45);
        this.citrus.mousePressed(()=>{
            State="citrus";
        })
        
        image(this.c,1300*0.5,700*1.1,360,240);
    }

    hide(){
        this.mango.hide();
        this.tomato.hide();
        this.flowers.hide();
        this.banana.hide();
        this.citrus.hide();
        this.a.hide();
    }
    show(){
        this.mango.show();
        this.tomato.show();
        this.flowers.show();
        this.banana.show();
        this.citrus.show();
        this.a.show();
    }
}