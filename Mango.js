class Mango{
    constructor(){
        this.diseases=createSelect();
        
        this.diseases.option("White Powdery Fungal Growth on Leaves, Flowers and Fruits");
        this.diseases.option("Black Spots on Leaves And Fruits");
        this.diseases.option("Red Spots on Leaves, Young Stems and Petioles");
        this.diseases.option("Black, powdery covering on Leaves and Stems");
        this.diseases.option("Abnormal growth of Leaves, Flowers and Fruits");

        this.submit=createButton("S U B M I T");

        this.text=createElement('h2','What is The Symptoms of the Plant ?');

        this.a=loadImage("Powdery Mildew.png");
        this.b=loadImage("Anthracnose 3.png");
        this.c=loadImage("Red Rust 2.png");
        this.d=loadImage("Sooty Mould 3.jpg");
        this.e=loadImage("Mango Malformation 3.jpg");

        this.back=createButton("B A C K");
    }

    display(){

        this.back.position(0,0);
        this.back.mousePressed(()=>{
            State="Plants";
        })

        this.text.position(700,250);

        this.diseases.position(1300/2,700/2);
        this.submit.position(1300*0.6,700*0.7)
        this.submit.mousePressed(()=>{
            State=this.diseases.value();
        })

        textSize(40);
        textFont("Book Antiqua")
        fill("Black")
        if(this.diseases.value()==="White Powdery Fungal Growth on Leaves, Flowers and Fruits"){
            image(this.a,1300*0.1,700*0.4);
            text("Powdery Mildew",200,200);
        }
        if(this.diseases.value()==="Black Spots on Leaves And Fruits"){
            image(this.b,1300*0.1,700*0.4);
            text("Anthracnose",200,200);
        }
        if(this.diseases.value()==="Red Spots on Leaves, Young Stems and Petioles"){
            image(this.c,1300*0.1,700*0.4);
            text("Red Rust",200,200);
        }
        if(this.diseases.value()==="Black, powdery covering on Leaves and Stems"){
            image(this.d,1300*0.1,700*0.4);
            text("Sooty Mould",200,200);
        }
        if(this.diseases.value()==="Abnormal growth of Leaves, Flowers and Fruits"){
            image(this.e,1300*0.1,700*0.4);
            text("Mango Malformation",200,200);
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