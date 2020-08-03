class Banana{
    constructor(){
        this.diseases=createSelect();
        
        this.diseases.option("Withered Mummified flowers and fruits + fruits have black tip");
        this.diseases.option("Weakening and breaking of leaf + Bacterial ooze in psedostem + discolouration in vascular region");
        this.diseases.option("Rotting of base and collar region + sagging of leaves");
        this.diseases.option("Yellow Streaks Parallel to Leaf Veins");

        this.submit=createButton("S U B M I T");

        this.text=createElement('h2','What is The Symptoms of the Plant ?');

        this.a=loadImage("Cigar Rot 3.jpg");
        this.b=loadImage("Moko Disease 3.jpg");
        this.c=loadImage("Tip Over 3.jpg");
        this.d=loadImage("Chlorosis 3.jpg");
        this.e=loadImage("Chlorosis 3.jpg");

        this.back=createButton("B A C K");
    }

    display(){

        this.back.position(0,0);
        this.back.mousePressed(()=>{
            State="Plants";
        })

        textSize(40);
        textFont("Book Antiqua");
        fill("Black")

        this.text.position(700,250);

        this.diseases.position(1300/2,700/2);
        this.submit.position(1300*0.6,700*0.7)
        this.submit.mousePressed(()=>{
            State=this.diseases.value();
        })

        if(this.diseases.value()==="Withered Mummified flowers and fruits + fruits have black tip"){
            image(this.a,1300*0.1,700*0.4);
            text("Cigar Rot",200,200)
        }
        if(this.diseases.value()==="Weakening and breaking of leaf + Bacterial ooze in psedostem + discolouration in vascular region"){
            image(this.b,1300*-0.1,700*0.4,750,550);
            text("Moko Disease",200,200)
        }
        if(this.diseases.value()==="Rotting of base and collar region + sagging of leaves"){
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
    }

    hide(){
        this.diseases.hide();
        this.submit.hide();
        this.text.hide();
        this.back.hide();

    }

    show(){
        this.back.show();
        this.diseases.show();
        this.submit.show();
        this.text.show();
    }
}