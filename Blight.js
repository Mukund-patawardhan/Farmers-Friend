class Blight{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createDiv('Botrytis blight, sometimes known as grey mold, begins with fluffy, gray, white or tan growth on flowers, soon spreading to the stalks and causing plants to become dry and brittle.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('Grape-like clusters produce many tiny spores that are dispersed primarily by air or water. These spores give a fuzzy, moldy appearance to infected plant tissue. This fungus can also produce sclerotia, which look like tiny black pellets. A sclerotium is a structure that allows the fungus to survive unfavorable conditions (such as over the winter). Botrytis can also survive as mycelia and spores on diseased plant parts or plant debris.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('Botrytis thrives in cool, humid weather, especially during the spring and fall. In summers, it rarely occurs on outdoor roses when conditions are hot and dry.')
        this.pic=createImg('Blight.jpg');
        this.pic2=createImg('Bight 2.png');
        this.Heading=createElement('h1','Botrytis blight');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Make sure the growing area is free from diseased plant materials.Irrigate carefully to reduce  excessive wetness and humidity on the plants.Fungicides are available to manage this disease. Natural products such as potassium bicarbonate,when used as a preventive measure,can provide some protection when disease is not prevalent.')
        this.sp=createA('https://www.amazon.in/Fertilome-Liquid-Systemic-Fungicide-packs/dp/B01N9JYEGX','Systemic Fungicide for roses','_blank')

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

        this.cureH.position(1300*0,700*1.45);
        this.cure.position(1300*0,700*1.52);

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