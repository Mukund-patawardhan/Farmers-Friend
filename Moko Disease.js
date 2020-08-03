class MokoDisease{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('CLeaves become yellow and progress upwards. The petiole breaks and leaves hang.When it is cut open discolouration in vascular region with pale yellow to dark brown colour.The discolouration is in the central portion of the corm. Internal rot of fruits with dark brown discoloration. When the pseudostem is cut transversely bacterial ooze can be seen.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('The bacterium survives in infected plant material, vegetative propagative organs, wild host plants, and soil.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('•	High temperatures and high soil moisture generally favors disease')
        this.pic=createImg('Moko Disease.jpg');
        this.pic2=createImg('Moko Disease 2.jpg');
        this.Heading=createElement('h1','Moko Disease');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('There is no cure for Moko Disease. It has to be prevented before it reaches the plant. Bleach should be applied on the plan often. Soils are to be drenched with Copper Oxychloride before planting.')
        this.sp=createA('https://www.amazon.in/Blitox-50-formulation-Copper-Oxychloride/dp/B0852KGM34/ref=sr_1_13?dchild=1&keywords=copper+fungicide&qid=1596429168&sr=8-13','Copper Oxychloride (Powder form--Mixed with water and added to soil)','_blank')

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

        this.sp.position(650,700*1.65)

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