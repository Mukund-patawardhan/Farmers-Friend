class CigarRot{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('Cigar end rot is an important disease of banana, which is caused by the fungus Verticillium theobromae. It causes a dry rot of the flower end that produces an ash grey wrinkled lesion on the banana fingers, similar to the burnt end of a cigar.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('The pathogen enters the banana finger through the flower causing a dry rot which spreads from the flower into the tip of immature banana fingers. Spores/conidia are spread majorly by air currents and infection is common in the early days of fruit emergence.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('The disease is common in warm moist conditions especially in high altitude areas and plantations with excessive shade.')
        this.pic=createImg('Cigar Rot.jpg');
        this.pic2=createImg('Cigar Rot 2.jpg');
        this.Heading=createElement('h1','Cigar Rot');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Infected fingers should be removed immediately. Remove the untransformed flowers after the finger emergence.')
        this.sp2=createA('https://www.amazon.com/Topsin-Fungicide-Thiophanate-methyl-Water-Souluble/dp/B00O19M8B0','Triophanate Fungicide (Alternative)','_blank')
        this.sp=createA('https://www.amazon.in/RIDOMIL-Gold-SYNGENTA-METALAXYL-MANCOZEB/dp/B07ZVSKFYT','Metalaxyl + Macozeb Fungicide (Better option)','_blank')

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
        this.sp2.position(800,700*1.6);

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
        this.sp2.hide();

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
        this.sp2.show();
    }
}