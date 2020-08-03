class Chlorosis{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('Light yellow streaks run parallel to leaf veins giving the leaf a striped appearance.The streaks run usually from mid rib to edge of the blade.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('The disease manifests itself in all stages of crop growth.Due to repeated use of suckers from infected plants the disease spreads and resulting in the gradual decrease in yield and quality. The virus is disseminated by suckers and Aphis gossypi.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('The disease is known to occur in all banana-growing states. This Virus needs no special conditions, it thrives where bananas are grown.')
        this.pic=createImg('Chlorosis.jpg');
        this.pic2=createImg('Chlorosis 2.jpg');
        this.Heading=createElement('h1','Infectious Chlorosis');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Chlorosis cannot be cured by chemicals. It can be prevented by the use of fertilizers. A nitrogen-sulphur based fertilizer is best.')
        this.sp=createA('https://www.amazon.in/dp/B07CXSMG1X/ref=twister_B07D8SNM5X?_encoding=UTF8&psc=1','Multi-mineral fertilizer','_blank');

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
            State="banana";
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