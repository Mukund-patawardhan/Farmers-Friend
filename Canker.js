class Canker{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('Citrus canker is a highly contagious bacterial infection of citrus trees causing yellow halo-like lesions or scabs on the fruit, leaves and twigs of citrus trees. Severe infections can cause leaf loss, blemished fruit, fruit drop and die back. It is caused by the bacterium Xanthomonas citri.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('Bacteria survive in lesions.They spread easily and quickly on air currents, insects, birds and on humans by means of clothing and infected implements.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('Axonopodis declines after the first event of wind-blown rain dispersal. Apart from that, the bacteria also favor warm weather. The cases of citrus canker are more acute in areas that receive high rainfall and have high mean temperature.')
        this.pic=createImg('Canker.png');
        this.pic2=createImg('Canker 2.png');
        this.Heading=createElement('h1','Citrus Canker');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('There is no cure for citrus canker. Prevention is the best option to protect against citrus canker. Citrus canker host plants, fruit or material that has been in contact with these plants, fruit or material MUST NOT BE TAKEN outside the 50km Quarantine Area.')

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
    }
}