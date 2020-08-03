class RedRust{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('Red rust disease, caused by an alga, has been observed in mango growing areas. The algal attack causes reduction in photosynthetic activity and defoliation of leaves thereby lowering vitality of the host plant.The disease can easily be recognized by the rusty red spots mainly on leaves and sometimes on petioles and bark of young twigs and is epiphytic in nature.The spots are greenish grey in colour and velvety in texture. Later, they turn reddish brown. The circular and slightly elevated spots sometimes coalesce to form larger and irregular spots. The disease is more common in closely planted orchards.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('The pathogens reproduce and survive in spots on leaves or stems and in fallen plant host debris')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('Frequent rains and warm weather are favorable conditions for these pathogens. For hosts, poor plant nutrition, poor soil drainage, and stagnant air are predisposing factors to infection by the algae')
        this.pic=createImg('Red Rust.png');
        this.pic2=createImg('Red Rust 3.jpg');
        this.Heading=createElement('h1','Red Rust');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Red Rust of Mango Management It is controlled by spraying with Bordeaux mixture 1.2 % or lime - sulphur on plant foliage.')
        this.sp=createA('https://www.amazon.in/Kondodys-Bordaeaux-Paint-Organic-Fungicide/dp/B07Z3FYK5Q/ref=sr_1_1?dchild=1&keywords=Bordeaux&qid=1596431831&sr=8-1','Bordeaux Spray(Spray as needed--when the disease gets high)','_blank')

        this.back=createButton("B A C K");
        
    }

    display(){
        this.symptomH.position(1300*0,700*0.2);
        this.symptoms.position(1300*0,700*0.30);

        this.survivalH.position(1300*0,700*0.55);
        this.survival.position(1300*0,700*0.60);

        this.conditionsH.position(1300*0,700*0.7);
        this.conditions.position(1300*0,700*0.75);

        this.pic.position(1300*0,700*0.9);
        this.pic2.position(1300*0.6,700*0.9);

        this.Heading.position(1300*0.4,700*0);

        this.cureH.position(1300*0,700*1.4);
        this.cure.position(1300*0,700*1.45);

        this.sp.position(400,700*1.6);

        this.back.position(0,0);
        this.back.mousePressed(()=>{
            State="Mango";
        })
    }

    hide(){
        this.symptomH.hide();
        this.symptoms.hide();

        this.survivalH.hide();
        this.survival.hide();

        this.conditionsH.hide();
        this.conditions.hide();

        this.pic.hide();
        this.pic2.hide();

        this.Heading.hide();

        this.cureH.hide();
        this.cure.hide();

        this.back.hide();

        this.sp.hide();
    }

    show(){
        this.symptomH.show();
        this.symptoms.show();

        this.survivalH.show();
        this.survival.show();

        this.conditionsH.show();
        this.conditions.show();

        this.pic.show();
        this.pic2.show();

        this.Heading.show();

        this.cureH.show();
        this.cure.show();

        this.back.show();

        this.sp.show();

    }
}