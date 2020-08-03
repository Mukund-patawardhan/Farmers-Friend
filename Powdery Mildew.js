class PowderyMildew{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('The characteristic symptom of the disease is the white superficial powdery fungal growth on leaves, stalks of panicles, flowers and young fruits.The affected flowers and fruits drop pre-maturely reducing the crop load considerably or might even prevent the fruit set.The fungus parasitizes young tissues of all parts of the inflorescence, leaves and fruits.Young leaves are attacked on both the sides but it is more conspicuous on the grower surface. Often these patches coalesce and occupy larger areas turning into purplish brown in colour')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('The powdery mildew fungus overwinters in dormant buds. When conditions are favorable for growth of the fungus in spring, spores are produced, released, and cause new infections. Secondary spread of the disease can occur if spores are produced in these new infections')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('Rains or mists accompanied by cooler nights during flowering are congenial for the disease spread.')
        this.pic=createImg('Powdery Mildew 3.jpg');
        this.pic2=createImg('Powdery Mildew 2.png');
        this.Heading=createElement('h1','Powdery Mildew');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Powdery Mildew can be prevented displosal of diseased leaves. If Powdery Mildew has spread widely, it can be cured by the spraying of Pottasium Bicarbonate (baking soda) solution every one or two weeks.Just Mix with water and dish soap and spray! Few other sprays also do the trick.')
        this.sp=createA('https://www.amazon.in/Bonide-Copper-Fungicide-16oz-473ML/dp/B013NNHONQ/ref=sr_1_1?dchild=1&keywords=Bonide+811+Copper+4E+Fungicide&qid=1596431228&sr=8-1','Fungicide for Powdery Mildew 1','_blank')
        this.sp1=createA('https://www.amazon.in/Katyayani-Organic-Fungicide-Vegetable-Disease/dp/B082GDFTSX/ref=sr_1_6?dchild=1&keywords=Fungicide+for+powdery+mildew&qid=1596431453&sr=8-6','Fungicide for Powdery Mildew 2','_blank')

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
        this.sp1.position(800,700*1.6);

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

        this.sp1.hide();
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
        this.sp1.show();

    }
}