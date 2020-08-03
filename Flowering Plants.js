class FloweringPlants{
    constructor(){
        this.diseases=createSelect();
        
        this.diseases.option("Grey, Brown, White or Tan coloured Fluffy Growth on leaves and fruits.");
        this.diseases.option("Stunted growth of plant + dark-red lesions on root/mushy root/discoloured roots");
        this.diseases.option("Black Spots on leaf that merge together and make leaves fall off");
        this.diseases.option("Yellow, white and green patches,spots or streaks on leaf");

        this.submit=createButton("S U B M I T");

        this.text=createElement('h2','What is The Symptoms of the Plant ?');

        this.a=loadImage("Blight 3.jpg");
        this.b=loadImage("Root Rot 3.jpg");
        this.b1=loadImage("Root Rot 2.png");
        this.c=loadImage("Black Spot 3.jpg");
        this.d=loadImage("Mosaic Virus 3.jpg");
        this.e=loadImage("Mango Malformation 2.png");

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

        if(this.diseases.value()==="Grey, Brown, White or Tan coloured Fluffy Growth on leaves and fruits."){
            image(this.a,1300*0.1,700*0.4);
            text("Botrytis blight",200,200)
        }
        if(this.diseases.value()==="Stunted growth of plant + dark-red lesions on root/mushy root/discoloured roots"){
            image(this.b,1300*0.1,700*0.4);
            image(this.b1,1300*0.1,700*1);
            text("Root Rot",200,200)
        }
        if(this.diseases.value()==="Black Spots on leaf that merge together and make leaves fall off"){
            image(this.c,1300*0.1,700*0.4);
            text("Black Spot",200,200);
        }
        if(this.diseases.value()==="Yellow, white and green patches,spots or streaks on leaf"){
            image(this.d,1300*0.1,700*0.4);
            text("Mosaic Virus",200,200)
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