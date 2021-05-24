class Form
{
    constructor()
    {
        this.title=createElement('h1');
        this.inp=createInput('').attribute("placeholder","name");
        this.button=createButton('Play');
        this.greeting=createElement('h3');
    }
    hide ()
    {
        this.inp.hide();
            this.button.hide();
            this.title.hide();
            this.greeting.hide();
    }
     display()
     {
        
         this.title.html('Car Racing Game');
         this.title.style("color","blue");
         this.title.position(130,0);

         
         this.inp.position(130,160);
        
         this.button.position(250,200);

         
         this.button.mousePressed(()=>
         {
            this.inp.hide();
            this.button.hide();
            player.name= this.inp.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html('Hello'+player.name);
            this.greeting.style("color","blue");
            this.greeting.position(130,180);
         })
     }
}