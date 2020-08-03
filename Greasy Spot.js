class GreasySpot{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('The disease is caused by the fungus Mycosphaerella citri. Telltale signs include yellowish-brownish blister spots on leaves, often on the underside of the leaf. As the disease develops, the spots develop into oily looking blisters. Greasy spot can cause significant leaf loss, particularly during winter and can also infest citrus, particularly grapefruit, rind. ')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('It survives in crop debris on the soil surface when no suitable crop is available. In the spring, when conditions are favorable, the fungus produces spores that are released by rain splashes, overhead irrigation or heavy dew.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('The fungus require certain conditions to release its spores. One is the available of suitable crop and the other is rain.')
        this.pic=createImg('Greasy.jpg');
        this.pic2=createImg('Grease 2.jpg');
        this.Heading=createElement('h1','Greasy Spot');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('To control Greasy Spot, regularly collect and remove any fallen leaves, thus reducing the source of new spores. Spay the tree with Liquid Copper Fungicide in June or July. A second spray application may be needed to be applied in August or September to protect late-summer growth.')
        this.sp=createA('https://www.amazon.in/BONIDE-PRODUCTS-775-Fungicide-32-Ounce/dp/B000UJVDXY/ref=sr_1_16?dchild=1&keywords=copper+fungicide&qid=1596429168&sr=8-16','Copper Fungicide (Liquid form--Sprayed Directly)','_blank')

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
        this.cure.position(1300*0,700*1.47);

        this.sp.position(650,700*1.6)

        this.back.position(0,0);
        this.back.mousePressed(()=>{
            State="citrus";
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