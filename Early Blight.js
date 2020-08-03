class EarlyBlight{
    constructor(){
        this.symptomH=createElement('h3','Disease Descriptions :-')
        this.symptoms=createP('This disease is caused by the fungi Alternaria tomatophila and A. solani and is first observed on the plants as small, brown lesions mostly on the older foliage. Spots enlarge and concentric rings in a bull’s-eye pattern may be seen in the center of the diseased area. Tissue surrounding the spots may turn yellow.Lesions on the stems are similar to those on leaves and sometimes girdle the plant if they occur near the soil line (collar rot). On the fruits, lesions attain considerable size, usually involving nearly the entire fruit. Concentric rings are also present on the fruit. Infected fruit frequently drops.')
        this.survivalH=createElement('h3','Survival and Spread :-');
        this.survival=createP('Early blight spores survive on old plant debris or in the soil. Spores are spread by wind and rain, but occasionally, flea beetles transmit this disease. Fungal spores enter a host through wounds in the plant cuticle.')
        this.conditionsH=createElement('h3','Favorable Conditions :-');
        this.conditions=createP('High temperature and humidity favors Early Blight of tomatoes.')
        this.pic=createImg('Early Blight.png');
        this.pic2=createImg('Early Blight 2.jpg');
        this.Heading=createElement('h1','Early Blight');
        this.cureH=createElement('h3','Prevention and Cure :-');
        this.cure=createP('Use resistant or tolerant tomato cultivars. Use pathogen-free seed and do not set diseased plants in the field. Use crop rotation, eradicate weeds and volunteer tomato plants, space plants to not touch, mulch plants, fertilize properly, don’t wet tomato plants with irrigation water, and keep the plants growing vigorously. Trim off and dispose of infected lower branches and leaves.To reduce disease severity, test the garden soil annually and maintain a sufficient level of potassium. Side dress tomato plants monthly with calcium nitrate for adequate growth.')
        this.sp=createA('https://www.amazon.in/Bonide-Chemical-862-Mancozeb-Fungicide/dp/B000BWZ9JO#:~:text=Bonide%20Chemical%20862%20PT%20Mancozeb,Amazon.in%3A%20Garden%20%26%20Outdoors','Mancozeb Fungicide','_blank');
        this.sp1=createA('https://www.amazon.in/Bonide-Chemical-881-Fungonil-Fungicide/dp/B000OW9I8Y/ref=pd_lpo_86_t_0/257-3288263-7955236?_encoding=UTF8&pd_rd_i=B000OW9I8Y&pd_rd_r=175fe553-54b9-418f-8c10-833cafdc7ae7&pd_rd_w=AqAEw&pd_rd_wg=qCPqd&pf_rd_p=5a903e39-3cff-40f0-9a69-33552e242181&pf_rd_r=88SYC05ZJZF4XR5V3N6P&psc=1&refRID=88SYC05ZJZF4XR5V3N6P','Chlorothalonil Fungicide (Other Option)','_blank');
        
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

        this.sp.position(300,700*1.8);
        this.sp1.position(600,700*1.8);

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