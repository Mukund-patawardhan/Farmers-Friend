class BacterialSpot{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createP('This disease is caused by the bacterium Xanthomonas vesicatoria, which attacks green but not red tomatoes. Damage to the plants includes leaf and fruit spots, which result in reduced yields, defoliation and sun- scalded fruit. The symptoms consist of numerous small, angular to irregular, water-soaked spots on the leaves and slightly raised to scabby spots on the fruits. The leaf spots may have a yellow halo. The centers dry out and frequently tear.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('The bacteria survive the winter on volunteer tomato plants and on infected plant debris. Moist weather is conducive to disease development. Most outbreaks of the disease can be traced back to heavy rainstorms that occurred in the area. Infection of leaves occurs through natural openings. Infection of fruits must occur through insect punctures or other mechanical injury.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('The disease is more prevalent during wet seasons. ')
        this.pic=createImg('Bacterial Spot.png');
        this.pic2=createImg('Bacterial Spot 2.png');
        this.Heading=createElement('h1','Bacterial Spot');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Only use certified disease-free seed and plants. Avoid areas that were planted with peppers or tomatoes during the previous year. Avoid overhead watering by using drip or furrow irrigation. Remove all diseased plant material. Prune plants to promote air circulation. Spraying with a copper fungicide will give fairly good control the bacterial disease.')
        this.sp=createA('https://www.amazon.in/Blitox-50-formulation-Copper-Oxychloride/dp/B0852KGM34/ref=sr_1_13?dchild=1&keywords=copper+fungicide&qid=1596429168&sr=8-13','Copper Fungicide 1 (Powder form--Mixed with water and sprayed)','_blank')
        this.sp1=createA('https://www.amazon.in/BONIDE-PRODUCTS-775-Fungicide-32-Ounce/dp/B000UJVDXY/ref=sr_1_16?dchild=1&keywords=copper+fungicide&qid=1596429168&sr=8-16','Copper Fungicide 2 (Liquid form--Sprayed Directly)','_blank')

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

        this.sp.position(200,700*1.6);
        this.sp1.position(700,700*1.6);

        this.back.position(0,0);
        this.back.mousePressed(()=>{
            State="Tomato";
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
        this.sp1.hide();

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