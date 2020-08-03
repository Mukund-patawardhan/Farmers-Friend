class Nematode{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('Reduced tree and fruit size, twig dieback, and decline in growth can be caused by root-infecting nematodes. Diagnosing this malady entails ruling out other causes, inspecting roots, and sending root and soil samples to a diagnostic laboratory.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('The highest numbers of nematodes are typically found in late spring and late autumn following the citrus root flushes.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('Hatch, feeding, growth, and reproduction is limited between 68 °F (20 °C) and 86 °F (30 °C). Second-stage juveniles are the persistent stage that can survive for a year or more in field soil.')
        this.pic=createImg('Nematode.jpg');
        this.Heading=createElement('h1','Citrus Canker');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Nematodes are prevented by prevention of over watering. Few Fertilizers and insecticides destroy the nematodes.')
        this.sp=createA('https://www.amazon.in/Biocedar-Plant-Food-Paesilomices-Bio-Nematicide-Horticultural/dp/B07RD6R44P/ref=asc_df_B07RD6R44P/?tag=googleshopdes-21&linkCode=df0&hvadid=397009437277&hvpos=&hvnetw=g&hvrand=1785827974004432835&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062015&hvtargid=pla-912681835894&psc=1&ext_vrnc=hi','Nematicide (Also A growth booster for plants)','_blank')
        this.sp2=createA('https://www.amazon.in/Bioniconema-Organic-Nematode-Control-Nematicide/dp/B00VBVMMZS','Nematicide 2 (Also destroys the nematode eggs)','_blank')

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

        this.Heading.position(1300*0.4,700*0);

        this.cureH.position(1300*0,700*1.7);
        this.cure.position(1300*0,700*1.77);

        this.sp.position(200,700*1.9);
        this.sp2.position(800,700*1.9);

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

        this.Heading.show();

        this.cureH.show();
        this.cure.show();

        this.back.show();

        this.sp.show();
        this.sp2.show();

    }
}