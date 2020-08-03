class MangoMalformation{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('Mango malformation disease is a fungal disease of mango. It occurs throughout many mango-production areas in the world. Mango malformation disease causes abnormal flower and leaf development, resulting in reduced plant growth and fruit yield.•	Vegetative malformation: Vegetative malformation is pronounced in young seedlings. The affected seedlings develop vegetative growths which are abnormal growth, swollen and have very short internodes.Floral malformation: The flower buds are transformed into vegetative buds and a large number of small leaves and stems, which are characterized by appreciably reduced internodes and give an appearance of witches‟ broom. The flower buds seldom open and remain dull green.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('The disease is mainly spread via infected plant material. Mango malformation disease spreads slowly within affected orchards.The mango bud mite, Aceria mangiferae, has been associated with mango malformation disease as wounds from the mites‟ feeding activity are thought to facilitate fungal infection.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('Moist weather favors the development of disease.')
        this.pic=createImg('Mango Malformation.jpg');
        this.pic2=createImg('Mango Malformation 2.png');
        this.Heading=createElement('h1','Mango Malformation');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Diseased plants should be destroyed. Incidence reduced by spraying 100-200ppm NAA during October.This is followed by the spraying of Carbendazim (0.1%) or Captafol (0.2%).')
        this.sp=createA('https://www.amazon.in/Southern-Ag-Captan-50-Fungicide/dp/B000YHB4HW/ref=sr_1_3?dchild=1&keywords=Captan+Fungicide&qid=1596433236&sr=8-3','CAPTAN Fungicide (Sprayed Once in April and Again in July)','_blank')

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