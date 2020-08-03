class CurlVirus{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createP('Symptoms in tomato plants are the upward curling of leaves, yellow (chlorotic) leaf margins, smaller leaves than normal, plant stunting, and flower drop. If tomato plants are infected early in their growth, there may be no fruit formed. Infected plants may appear randomly throughout the garden. Pepper plants may also become infected, but will show no symptoms.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('TYLCV is not seed-borne, but is transmitted by whiteflies. This disease is extremely damaging to fruit yield in both tomato and pepper crops. Whiteflies may bring the disease into the garden from infected weeds nearby, such as various nightshades and jimsonweed. After infection, tomato plants may be symptomless for as long as 2 – 3 weeks.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('Spreads with the help of Bemisia Whitefly Hence it thrives in places where the whitefly thrives--Warm, Himid Condition. They generaly cannot survive in cold climates.')
        this.pic=createImg('Curl Virus.png');
        this.pic2=createImg('Curl Virus 3.png');
        this.Heading=createElement('h1','Tomato Yellow Leaf Curl Virus (TYLCV)');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Removal of plants with initial symptoms may slow the spread of the disease. Rogued (pulled out) infected plants should be immediately bagged to prevent the spread of the whiteflies feeding on those plants. Keep weeds controlled within and around the garden site, as these may be alternate hosts for whiteflies. Reflective mulches (aluminum or silver-colored) can be used in the rows to reduce whitefly feeding.Low concentration sprays of a horticultural oil or canola oil will act as a whitefly repellent, reduce feeding and possibly transmission of the virus. Use a 0.25 to 0.5% oil spray (2 to 4 teaspoons horticultural or canola oil & a few drops of dish soap per gallon of water) weekly.')
        this.sp=createA('https://www.amazon.com/Bonide-Products-BND213-Seasons-Horticultural/dp/B009YNZX42','Horticultural Oil Spray','_blank')
        this.sp2=createA('https://www.amazon.com/Fertilome-16-Horticultural-Oil-Spray/dp/B005XOP076','Horticultural Oil Spray (Alternative Option)','_blank')
        this.sp3=createA('https://www.amazon.in/Espoma-Organic-Earth-Tone-Insect-Control/dp/B000HHHEHS','Canola Oil Spray (Alternate with Horticultural Sprays)','_blank')

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

        this.Heading.position(1300*0.2,700*0);

        this.cureH.position(1300*0,700*1.4);
        this.cure.position(1300*0,700*1.47);

        this.sp.position(100,700*1.8);
        this.sp2.position(500,700*1.8);
        this.sp3.position(900,700*1.8);

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
        this.sp2.hide();
        this.sp3.hide();

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
        this.sp3.show();

    }
}