class Game
{
    constructor()
    {

    }

    getState()
    {
      var gameStateref=database.ref("gameState");
      gameStateref.on("value",(data)=>{
          gameState=data.val();
      })
    }
    updateState(state)
    {
      database.ref('/').update({
          gameState:state
      })
    }
    async start()
    {
        if(gameState===0)
        {

            player=new Player();
            var playerCountref=await database.ref("playerCount").once("value");
            if(playerCountref.exists())
            {
                playerCount=playerCountref.val();
                player.getCount();
            }
           
            form=new Form();
            form.display();
        }
    }

    play()
    {
        form.hide();
        textSize(30);
        text("Game Start!",120,100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined)
        {

            var displayPosition=130;
            
            for(var p in allPlayers)
            {
                if(p ==="player"+player.index)
                {
                    fill("red");
                }
                else{
                    fill("black");
                }
                displayPosition+=20;
            textSize(15);
        text(allPlayers[p].name+":"+allPlayers[p].distance,120,displayPosition);
        }
    }
        if(keyIsDown(UP_ARROW)&& player.index !== null)
        {
            player.distance+=50;
            player.update();
        }


    }
}