class LeafSpot{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createP('This destructive disease of tomato foliage, petioles and stems (fruit is not infected) is caused by the fungus Septoria lycopersici. Numerous small, circular spots with dark borders surrounding a beige-colored center appear on the older leaves. Tiny black specks, which are spore-producing bodies, can be seen in the center of the spots. Severely spotted leaves turn yellow, die and fall off the plant. ')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP(' Infection usually occurs on the lower leaves near the ground, after plants begin to set fruit. Defoliation weakens the plant, reduces the size and quality of the fruit, and exposes the fruit to sunscald (see below). The fungus is not soil-borne, but can overwinter on crop residue from previous crops, decaying vegetation and some wild hosts related to tomato.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('The fungus is most active when temperatures range from 68 to 77° F, the humidity is high, and rainfall or over-head irrigation wets the plants.')
        this.pic=createImg('Leaf Spot.png');
        this.pic2=createImg('Leaf Spot 2.jpg');
        this.Heading=createElement('h1','Septoria Leaf Spot');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Currently grown tomato cultivars are susceptible to Septoria leaf spot. Crop rotation of 3 years and sanitation (removal of crop debris) will reduce the amount of inoculum. Do not use over-head irrigation. Repeated fungicide applications with chlorothalonil (very good) or copper fungicide, or mancozeb (good) will keep the disease in check.')
        this.sp=createA('https://www.amazon.in/Scotts-Garden-Disease-Control-Concentrate/dp/B00KYP5S9Y/ref=sr_1_1?dchild=1&keywords=Ortho+MAX+Garden+Disease+Control+Concentrate&qid=1596436906&sr=8-1','Chlorothalonil Fungicide','_blank');
        this.sp1=createA('https://www.amazon.in/Southern-Ag-Dithane-Disease-Control/dp/B01MS2UZKW','Mancozeb Fungicide (Alternate Option)','_blank')

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

        this.sp.position(300,700*1.7);
        this.sp1.position(600,700*1.7);

        this.back.position(0,0);
        this.back.mousePressed(()=>{
            State="Tomato";
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
        this.sp1.hide();

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
        this.sp1.show();

    }
}