    class Buttons{
        constructor() {
            
            this.va = createButton('VOICE ASSISTANT');
            this.pic = createButton('TAKE A PIC!');
            this.overallWG = createButton('TIPS TO MANAGE OVERALL WASTE GENERATION');
            this.specificWM = createButton('TIPS TO REDUCE A SPECIFIC WASTE MATERIAL');
            //this.other = createInput("");
              /*this.twoThreeKg = createButton('2-3 kg');
              this.fourFiveKg = createButton('4-5 kg');
              this.sixSevenKg = createButton('6-7 kg');*/
            
            
            /*this.greeting = createElement('h2');
            this.title = createElement('h2');
            this.reset = createButton('Reset');*/
          }

          hide(){
           this.va.hide();
            this.pic.hide();
            this.overallWG.hide();
            this.specificWM.hide();

          }
          
          display(){
            this.va.position(100,200);
            this.pic.position(100,300);
            this.overallWG.position(100,400);
            this.specificWM.position(100,500);
            
            
           this.va.mousePressed(()=>{
              this.va.hide();
              this.pic.hide();
              this.overallWG.hide();
              this.specificWM.hide();
              textSize(25);
              //fill("turqouise")
              text("PRESS TO SPEAK!",130,500);
            });

            this.pic.mousePressed(()=>{
              this.va.hide();
              this.pic.hide();
              this.overallWG.hide();
              this.specificWM.hide();
              textSize(25);
              text("TAKE A PIC!",130,500);
            });

            this.overallWG.mousePressed(()=>{
              this.va.hide();
              this.pic.hide();
              this.overallWG.hide();
              this.specificWM.hide();
              textSize(16);
              /*text("How much waste do you generate per day",100,100);
              text("2-3 kg",100, 250);
              text("4-5 kg",100,350);
              text("6-7 kg",100,450);*/
              //text("Other: ",100,550);
              this.other = createInput("Other");
              //this.other.size(250);
              this.twoThreeKg = createButton('2-3 kg');
              this.fourFiveKg = createButton('4-5 kg');
              this.sixSevenKg = createButton('6-7 kg');
              this.twoThreeKg.position(100,250);
            this.fourFiveKg.position(100,350);
            this.sixSevenKg.position(100,450);
            this.other.position(100,550);
            
            this.twoThreeKg.mousePressed(()=>{
              this.twoThreeKg.hide();
              this.fourFiveKg.hide();
              this.sixSevenKg.hide();
              this.other.hide();
              text("2-3 kg! That is very good!",50,120);
              text("Here are some tips to reduce that :",50,140);
      
            });

            this.fourFiveKg.mousePressed(()=>{
              this.twoThreeKg.hide();
              this.fourFiveKg.hide();
              this.sixSevenKg.hide();
              this.other.hide();
              text("4-5 kg! You can do better!",50,120);
              text("Here are some tips to reduce that :",50,140);
            });

            this.sixSevenKg.mousePressed(()=>{
              this.twoThreeKg.hide();
              this.fourFiveKg.hide();
              this.sixSevenKg.hide();
              this.other.hide();
              text("6-7 kg! That is very hazardous!",50,120);
              text("Here are some tips to reduce that :",50,140);
            });
              
            });

            this.specificWM.mousePressed(()=>{
              this.va.hide();
              this.pic.hide();
              this.overallWG.hide();
              this.specificWM.hide();
              this.search = createInput("");
              this.search.position(75,120);
              this.search.size(320);
            });
          }
          
    
          
    }