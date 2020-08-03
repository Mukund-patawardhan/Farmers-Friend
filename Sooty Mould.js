class SootyMould{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('The disease is common in the orchards where mealy bug, scale insect and hopper are not controlled efficiently.The disease in the field is recognized by the presence of a black velvety coating, i.e., sooty mould on the leaf surface. In severe cases the trees turn completely black due to the presence of mould over the entire surface of twigs and leaves.The severity of infection depends on the honey dew secretion by the above said insects. Honey dew secretions from insects sticks to the leaf surface and provide necessary medium for fungal growth.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('The severity of infection depends on the honey dew secretions by the scale insects which provide the necessary medium for the fungal growth.Transmission occurs by air-borne as co-spores.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('High humidity and moist situation favours the development of disease.')
        this.pic=createImg('Sooty Mould.jpg');
        this.pic2=createImg('Sooty Mould 2.png');
        this.Heading=createElement('h1','Sooty Mould');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Use formulations of neem oil, which is an organic broad spectrum compound, to ward off whiteflies, aphids, scales, ants, and mealy bugs. Neem oil also reduces the growth of the fungus itself. Insecticidal soap or dish soap (e.g. one tablespoon per 5 liters of water) can be sprayed on affected plants.')
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

        this.sp.position(0,700*1.6);

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