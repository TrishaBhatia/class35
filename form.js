class Form
{
    constructor()
    {

    }
     display()
     {
         var title=createElement('h1');
         title.html('Car Racing Game');
         title.style("color","blue");
         title.position(130,0);

         var inp=createInput('').attribute("placeholder","name");
         inp.position(130,160);
         var button=createButton('Play');
         button.position(250,200);

         var greeting=createElement('h3');
         button.mousePressed=()=>
         {
           inp.hide();
            button.hide();
            var n=inp.value();
            playerCount+=1;
            player.update(n);
            player.updateCount(playerCount);
            greeting.html('Hello'+n);
            greeting.style("color","blue");
         greeting.position(130,180);
         }
     }
}