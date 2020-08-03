class Tomato{
    constructor(){
        this.diseases=createSelect();
        
        this.diseases.option("Water-soaked, shabby spots on leaves and fruits with light yellow halo.");
        this.diseases.option("Upward Curling and Yellowish Margin of Leaves and Stunted Growth of Plant");
        this.diseases.option("Circular Spots with Dark Borders");
        this.diseases.option("Small, brown lesions on the foliage and concentric rings in a bull’s-eye pattern in the center of the diseased area");

        this.submit=createButton("S U B M I T");

        this.text=createElement('h2','What is The Symptoms of the Plant ?');

        this.a=loadImage("Bacterial Spot 3.jpg");
        this.b=loadImage("Curl Virus 2.png");
        this.c=loadImage("Leaf Spot 3.jpg");
        this.d=loadImage("Early Blight 3.jpg");
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

        if(this.diseases.value()==="Water-soaked, shabby spots on leaves and fruits with light yellow halo."){
            image(this.a,1300*0.1,700*0.4);
            text("Bacterial Spot",200,200)
        }
        if(this.diseases.value()==="Upward Curling and Yellowish Margin of Leaves and Stunted Growth of Plant"){
            image(this.b,1300*0,700*0.4);
            text("Tomato Yellow Leaf Curl Virus (TYLCV)",0,200)
        }
        if(this.diseases.value()==="Circular Spots with Dark Borders"){
            image(this.c,1300*0.1,700*0.4);
            text("Septoria Leaf Spot",200,200);
        }
        if(this.diseases.value()==="Small, brown lesions on the foliage and concentric rings in a bull’s-eye pattern in the center of the diseased area"){
            image(this.d,1300*0,700*0.4);
            text("Early Blight",200,200)
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
        this.diseases.show();
        this.submit.show();
        this.text.show();
        this.back.show();
    }
}