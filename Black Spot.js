class BlackSpot{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('Black spot is a fungal disease (Diplocarpon rosae) that affects roses. The fungus develops as black spots on the leaves, which eventually causes the leaves to turn yellow and drop off. Besides looking unsightly, it can seriously weaken the rose plant.Affected leaves often fall off the plants, and if left unchecked, the entire plant can defoliate.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('It usually occurs on the upper sides of leaves, but can also develop on the undersides. Spots begin on the lower leaves and move upward. They can appear as early as when the leaves first unfurl. These spots can enlarge and eventually merge. The fungus can also infect young canes, making the plants become stressed and susceptible to more problems.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('Black spot thrives during hot, humid, or rainy summers and hot days with cool, damp nights.')
        this.pic=createImg('Black Spot.jpg');
        this.pic2=createImg('Black Spot 2.jpg');
        this.Heading=createElement('h1','Black Spot');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Water carefully and keep the foliage as dry as possible. Remove damaged growth, then spray the affected plant with neem oil, a copper-based product, or fungicide.')
        this.sp=createA('https://www.amazon.in/TOP-BORDO-PLUS-Bordeaux-Mixture/dp/B07J6F4PMB','Bordeaux Mixture','_blank');
        this.sp2=createA('https://www.amazon.in/Sitrus-Bordeaux-Fungicide-Bactericide-Ornamental/dp/B06XVDSBR9','Bordeaux Mixture (Alternate Option)','_blank')

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

        this.sp.position(300,700*1.65);
        this.sp2.position(600,700*1.65);   

        this.back.position(0,0);
        this.back.mousePressed(()=>{
            State="flowers";
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