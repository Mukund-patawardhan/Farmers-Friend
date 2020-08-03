class Citrus{
    constructor(){
        this.diseases=createSelect();
        
        this.diseases.option("Halo-like scabs on the leaves, fruit or stem");
        this.diseases.option("Oily, Yellowish-brown spots on the underside of the leaf and fruit");
        this.diseases.option("Decline in growth, shrinked roots twig dieback");

        this.submit=createButton("S U B M I T");

        this.text=createElement('h2','What is The Symptoms of the Plant ?');

        this.a=loadImage("Canker 3.jpg");
        this.b=loadImage("Grease 3.jpg");
        this.c=loadImage("Nematode 3.jpg");
        this.d=loadImage("Mosaic Virus 3.jpg");
        this.e=loadImage("Chlorosis 3.jpg");

        this.back=createButton("B A C K");
    }

    display(){

        textSize(40);
        textFont("Book Antiqua");
        fill("Black")

        this.text.position(700,250);

        this.diseases.position(1300/2,700/2);
        this.submit.position(1300*0.6,700*0.7)
        this.submit.mousePressed(()=>{
            State=this.diseases.value();
        })

        if(this.diseases.value()==="Halo-like scabs on the leaves, fruit or stem"){
            image(this.a,1300*0.1,700*0.4);
            text("Citrus Canker",200,200)
        }
        if(this.diseases.value()==="Oily, Yellowish-brown spots on the underside of the leaf and fruit"){
            image(this.b,1300*0.1,700*0.4);
            text("Greasy Spot",200,200)
        }
        if(this.diseases.value()==="Decline in growth, shrinked roots twig dieback"){
            image(this.c,1300*0.1,700*0.4);
            text("Tip Over",200,200);
        }
        if(this.diseases.value()==="Yellow Streaks Parallel to Leaf Veins"){
            image(this.d,1300*0.1,700*0.4);
            text("Infectious Chlorosis",200,200)
        }
        if(this.diseases.value()==="Abnormal growth of Leaves, Flowers and Fruits"){
            image(this.e,1300*0.1,700*0.4);
        }

        this.back.position(0,0);
        this.back.mousePressed(()=>{
            State="Plants";
        })
    }

    hide(){
        this.diseases.hide();
        this.submit.hide();
        this.text.hide();
        this.back.hide();
    }

    show(){
        this.diseases.show();
        this.submit.show();
        this.text.show();
        this.back.show();
    }
}