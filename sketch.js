var State="Plants";
var plants;
var mango,anthracnose,pm,rr,sm,mm;
var tomato,bs,cv,ls,eb;
var flowers,bl,ror,bls,mv;
var banana,cr,md,to,c;
var citrus,ca,gs,n;
var bg,about;

function preload(){
  bg=loadImage("bg3.jpg");
}

function setup() {
  createCanvas(1500,1400);

  about=new Info();

  plants=new Plants();
  mango=new Mango();
  anthracnose=new Anthracnose();
  pm=new PowderyMildew();
  rr=new RedRust();
  sm=new SootyMould();
  mm=new MangoMalformation();

  tomato=new Tomato();
  bs=new BacterialSpot();
  cv=new CurlVirus();
  ls=new LeafSpot();
  eb=new EarlyBlight();

  flowers=new FloweringPlants();
  bl=new Blight();
  ror=new RootRot();
  bls=new BlackSpot();
  mv=new MosaicVirus();

  banana=new Banana();
  cr=new CigarRot();
  md=new MokoDisease();
  to=new TipOver();
  c=new Chlorosis();

  citrus=new Citrus();
  ca=new Canker();
  gs=new GreasySpot();
  n=new Nematode();
}

function draw() {
  background(255,255,255); 

  push();
  tint(255,100);
  image(bg,0,0,width,height);
  
  textSize(60);
  fill("green");
  textFont("Jokerman")
  //text("Farmer's Friend",1500*0.3,700*0.2);
  pop();

  if(State==="Info"){
    about.display();
  }else{
    about.hide();
  }

  if(State==="Plants"){
    plants.display();
    plants.show();
  }else{
    plants.hide();
  }
  if(State==="Mango"){
    mango.display();
    mango.show();
  }else{
    mango.hide();
  }
  if(State==="Black Spots on Leaves And Fruits"){
    anthracnose.display();
    anthracnose.show();
  }else{
    anthracnose.hide();
  }
  if(State==="White Powdery Fungal Growth on Leaves, Flowers and Fruits"){
    pm.display();
    pm.show();
  }else{
    pm.hide();
  }
  if(State==="Red Spots on Leaves, Young Stems and Petioles"){
    rr.display();
    rr.show();
  }else{
    rr.hide();
  }
  if(State==="Black, powdery covering on Leaves and Stems"){
    sm.display();
    sm.show();
  }else{
    sm.hide();
  }
  if(State==="Abnormal growth of Leaves, Flowers and Fruits"){
    mm.display();
    mm.show();
  }else{
    mm.hide();
  }

  if(State==="Tomato"){
    tomato.display();
    tomato.show();
  }else{
    tomato.hide();
  }
  if(State==="Water-soaked, shabby spots on leaves and fruits with light yellow halo."){
    bs.display();
    bs.show();
  }else{
    bs.hide();
  }
  if(State==="Upward Curling and Yellowish Margin of Leaves and Stunted Growth of Plant"){
    cv.display();
    cv.show();
  }else{
    cv.hide();
  }
  if(State==="Circular Spots with Dark Borders"){
    ls.display();
    ls.show();
  }else{
    ls.hide();
  }
  if(State==="Small, brown lesions on the foliage and concentric rings in a bull’s-eye pattern in the center of the diseased area"){
    eb.display();
    eb.show();
  }else{
    eb.hide();
  }

  if(State==="flowers"){
    flowers.display();
    flowers.show();
  }else{
    flowers.hide();
  }
  if(State==="Grey, Brown, White or Tan coloured Fluffy Growth on leaves and fruits."){
    bl.display();
    bl.show();
  }else{
    bl.hide();
  }
  if(State==="Stunted growth of plant + dark-red lesions on root/mushy root/discoloured roots"){
    ror.display();
    ror.show();
  }else{
    ror.hide();
  }
  if(State==="Black Spots on leaf that merge together and make leaves fall off"){
    bls.display();
    bls.show();
  }else{
    bls.hide();
  }
  if(State==="Yellow, white and green patches,spots or streaks on leaf"){
    mv.display();
    mv.show();
  }else{
    mv.hide();
  }

  if(State==="banana"){
    banana.display();
    banana.show();
  }else{
    banana.hide();
  }
  if(State==="Withered Mummified flowers and fruits + fruits have black tip"){
    cr.display();
    cr.show();
  }else{
    cr.hide();
  }
  if(State==="Weakening and breaking of leaf + Bacterial ooze in psedostem + discolouration in vascular region"){
    md.display();
    md.show();
  }else{
    md.hide();
  }
  if(State==="Rotting of base and collar region + sagging of leaves"){
    to.display();
    to.show();
  }else{
    to.hide();
  }
  if(State==="Yellow Streaks Parallel to Leaf Veins"){
    c.display();
    c.show();
  }else{
    c.hide();
  }

  if(State==="citrus"){
    citrus.display();
    citrus.show();
  }else{
    citrus.hide();
  }
  if(State==="Halo-like scabs on the leaves, fruit or stem"){
    ca.display();
    ca.show();
  }else{
    ca.hide();
  }
  if(State==="Oily, Yellowish-brown spots on the underside of the leaf and fruit"){
    gs.display();
    gs.show();
  }else{
    gs.hide();
  }
  if(State==="Decline in growth, shrinked roots twig dieback"){
    n.display();
    n.show();
  }else{
    n.hide();
  }

}