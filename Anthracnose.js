class Anthracnose{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('The disease causes serious losses to young shoots, flowers and fruits. It also affects fruits during storage.The disease produces leaf spot, blossom blight, wither tip, twig blight and fruit rot symptoms. Tender shoots and foliage are easily affected which ultimately cause "die back" of young branches. Older twigs may also be infected through wounds which in severe cases may be fatal.Depending on the prevailing weather conditions blossom blight may vary in severity from slight to a heavy infection of the panicles. Black spots develop on panicles as well as on fruits. Severe infection destroys the entire inflorescence resulting in no setting of fruits. Young infected fruits develop black spots, shrivel and drop off.Fruits infected at mature stage carry the fungus into storage and cause considerable loss during storage, transit and marketing.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('Fungus survives in dead twig and other host for long time which is the source of primary infection.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('High humidity, frequent rains and a temperature of 24-32 C favors the development of disease.')
        this.pic=createImg('Anthracnose.png');
        this.pic2=createImg('Anthracnose 2.png');
        this.Heading=createElement('h1','Anthracnose');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Anthracnose can be prevented by the regular pruning of leaves and displosal of diseased leaves. If Anthracnose has spread widely, it can be cured by the spraying of copper and systematic sprays alternating them every month. Alternate between the two varities of copper and systemic sprays. Keep on mind that Two sprays should not be sprayed in the same month and that systemic sprays should not be sprayed more than thrice in a year.');
        this.cuFung=createA('https://www.amazon.in/Blitox-50-formulation-Copper-Oxychloride/dp/B0852KGM34/ref=sr_1_13?dchild=1&keywords=copper+fungicide&qid=1596429168&sr=8-13','Copper Fungicide 1 (Powder form--Mixed with water and sprayed)','_blank')
        this.cuFung2=createA('https://www.amazon.in/BONIDE-PRODUCTS-775-Fungicide-32-Ounce/dp/B000UJVDXY/ref=sr_1_16?dchild=1&keywords=copper+fungicide&qid=1596429168&sr=8-16','Copper Fungicide 2 (Liquid form--Sprayed Directly)','_blank')
        this.sysFung=createA('https://www.amazon.in/BAVISTIN-50-W-P-Systematic-Fungicide/dp/B07DQL6VT6/ref=sr_1_9?dchild=1&keywords=copper+fungicide&qid=1596429168&sr=8-9','Systemic Fungicide 1','_blank')
        this.sysFung2=createA('https://www.amazon.in/SAAF-%E0%A4%95%E0%A4%B5%E0%A4%95%E0%A4%A8%E0%A4%BE%E0%A4%B6-500-GMS/dp/B07CPZ1KXC/ref=sr_1_11?dchild=1&keywords=copper+fungicide&qid=1596429168&sr=8-11','Systemic Fungicide 2','_blank')
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

        this.cuFung.position(0,700*1.8)
        this.cuFung2.position(500,700*1.8)
        this.sysFung.position(1000,700*1.8)
        this.sysFung2.position(1200,700*1.8)


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

        this.cuFung.hide();
        this.cuFung2.hide();
        this.sysFung.hide();
        this.sysFung2.hide();

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

        this.cuFung.show();
        this.cuFung2.show();
        this.sysFung.show();
        this.sysFung2.show();
    }
}