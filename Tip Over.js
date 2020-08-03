class TipOver{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('This disease is more pronounced on young suckers leading to rotting and emitting of foul odour.Roting of collar region is a commonest symptom followed by epinasty of leaves, which dry out suddenly. If affected plants are pulled out it comes out from the collar region leaving the corm with their roots in the soil.	In early stage of infection dark brown or yellow water soaked areas are more in the cortex area When affected plants are cut open at collar region yellowish to reddish ooze is seen.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('Bacteria survive in crop debris and infect by water splash through damaged tissues.Worse in hot wet weather. The bacteria spread in contaminated water.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('Higher temperatures and high humidity are ideal growing conditions for the bacteria')
        this.pic=createImg('Tip Over.png');
        this.pic2=createImg('Tip Over 2.png');
        this.Heading=createElement('h1','Tip Over');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Practice crop rotation. Banana should not be grown along with onion and other vegetables. void planting during rainy season and use of bigger suckers (more than 500g) for planting. Disinfect the area with bleaching powder 0.1% (1g/L) solution. Disinfect the irrigation water with bleaching powder 0.1% (1g/L) solution. ')
        this.sp=createA('https://www.amazon.in/s?k=pseudomonas+fluorescence&adgrpid=58428997406&ext_vrnc=hi&gclid=Cj0KCQjw6575BRCQARIsAMp-ksPXIhaYnFJgoZTxiB4qC4iTw4B1jNKNMuQMZBN-gc5u4FwFikYx-eoaAse0EALw_wcB&hvadid=426091563784&hvdev=c&hvlocphy=9062015&hvnetw=g&hvqmt=b&hvrand=18006571005168033345&hvtargid=kwd-621973191029&hydadcr=7114_1998359&tag=googinhydr1-21&ref=pd_sl_1fvk9lcr8g_b','Pseudomonas Fluorescence','_blank')
        this.sp2=createA('https://www.amazon.in/Phosphobacteria-phosphaticum-solubilising-phytohormones-gibberellins/dp/B07YFKB78J/ref=asc_df_B07YFKB78J/?tag=googleshopdes-21&linkCode=df0&hvadid=413480783947&hvpos=&hvnetw=g&hvrand=1863785170497785616&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062015&hvtargid=pla-869144969735&psc=1&ext_vrnc=hi','Bacillus subtillis','_blank')

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

        this.sp.position(400,700*1.65);
        this.sp2.position(800,700*1.65);

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