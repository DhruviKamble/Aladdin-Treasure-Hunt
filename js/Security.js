class Security {
    constructor(){
        this.access1 = createInput("Answer 1");
        this.button1 = createButton("Check"); 
        
        this.access2 = createInput("Answer 2");
        this.button2 = createButton("Check"); 

        this.access3 = createInput("Answer 3");
        this.button3 = createButton("Check"); 
    }

    display(){
        this.access1.position(100,90);
        this.access1.style("background","white");
        this.button1.position(100,120);
        this.button1.style("background","lightgrey");

        this.button1.mousePressed(() => {
            if(system.athenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        })

        this.access2.position(680,190);
        this.access2.style("background","white");
        this.button2.position(680,220);
        this.button2.style("background","lightgrey");

        this.button2.mousePressed(() => {
            if(system.athenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        })

        this.access3.position(100,290);
        this.access3.style("background","white");
        this.button3.position(100,320);
        this.button3.style("background","lightgrey");

        this.button3.mousePressed(() => {
            if(system.athenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        })
    }
}