class RootRot{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('This soil-borne fungus causes stunted growth and wilted, shriveled leaves. Roots of an affected plant often display a wet, rotten appearance and a foul smell. Some may display stringy brown or black strands.Root rot Symptoms vary, depending on the pathogen. Some root rot diseases cause a light brown discoloration on roots. Roots may be mushy or not. Others cause distinct, dark reddish-brown lesions on roots. ')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('Many cases of root rot are caused by pathogens, such as the water mold genus Phytophthora;particularly the species P. cinnamomi. Other commonly responsible pathogens include Pythium, Rhizoctonia, and Fusarium.[7][2] Spores from root rot causing agents do contaminate other plants, but the rot cannot take hold unless there is adequate moisture.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('Spores from root rot causing agents do contaminate other plants, but the rot cannot take hold unless there is adequate moisture.[citation needed] Spores are not only airborne, but are also carried by insects and other arthropods in the soil.[citation needed] The wet environment of waterlogged soil promotes the growth of these fungi, allowing them to cause the disease.')
        this.pic=createImg('Root Rot.png');
        this.Heading=createElement('h1','Root Rot');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('The most effective treatment for root rot is prevention such as destruction of affected plants. To treat root rot, is recommended to replant the affected plant in fresh soil with good drainage to avoid standing water.It is also recommended to gently wash diseased roots and remove all brown, soft parts of the roots with a sterilized pair of scissors or a tool such as a pulaski for larger roots.')
        this.sp=createA('https://www.amazon.in/Guard-Certified-Organic-Fungicide-Trichoderma/dp/B0744KPRP1/ref=sr_1_1_sspa?dchild=1&keywords=Hi-Yield+Vegetable%2C+Flower%2C+Fruit+%26+Ornamental+Fungicide+Conc.&qid=1596437123&sr=8-1-spons&psc=1&smid=A3FS52JUK245S6&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVkIxRk44VjgzNEZEJmVuY3J5cHRlZElkPUEwNzIxNzAxMzAwMEdRUkNVRTFNVSZlbmNyeXB0ZWRBZElkPUEwMDgxMjk5MkhFVzJCWFoySUlXRiZ3aWRnZXROYW1lPXNwX210ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=','Tricoderma Fungicide','_blank')
        this.sp2=createA('https://www.amazon.com/Terrazole-Fungicide-Pythium-Damping-Off-Phytopthora/dp/B07CSGRKLN','Etridiazole Fungicide','_blank')

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

        this.cureH.position(1300*0,700*1.4);
        this.cure.position(1300*0,700*1.47);

        this.sp.position(300,700*1.7);
        this.sp2.position(600,700*1.7);

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