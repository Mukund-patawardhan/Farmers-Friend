class MosaicVirus{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('The disease is characterized by leaves that are mottled with yellow, white, and light or dark green spots and streaks (in other words, a “mosaic” of these colors). This gives the leaves a blister-like appearance. Infected plants are stunted and often exhibit “shoestring sydrome,” which is a characteristic malformation in which the edges of the leaves fail to develop, with the leaf veins developing as long, narrow strips.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('The viruses can also survive in infected root debris in the soil for up to two years. Seed can be infected and pass the virus to the plant but the disease is usually introduced and spread primarily through human activity.Mosaic virus overwinters on perennial weeds and is spread by insects that feed on them.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('Humid and Moist clmates help in its spread')
        this.pic=createImg('Mosaic Virus.jpg');
        this.pic2=createImg('Mosaic Virus 2.jpg');
        this.Heading=createElement('h1','Mosaic Virus');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('There are no cures for viral diseases such as mosaic once a plant is infected. As a result, every effort should be made to prevent the disease from entering your garden. Treat with insecicides to reduce the number of disease-carrying insects.Horticultural oil can prevent insects from harming the plant.');
        this.sp=createA('https://www.amazon.in/Dragons-Horticultural-Dormant-Concentrate-Diseases/dp/B084VJL84C/ref=sr_1_1?crid=1MJ7PXGZJHKWK&dchild=1&keywords=horticultural+oil&qid=1596432256&sprefix=horticultural+%2Caps%2C274&sr=8-1','Horicultural Oil Spray (To Be Sprayed when necessary and only in the evenings)','_blank')

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

        this.sp.position(700,700*1.65);

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