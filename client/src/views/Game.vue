<template>
  <div class="container">
     
    <h1 class="title is-5">
        Game Page
    </h1>

    <div class="columns">
      <div class="column is-one-third">
        <div class="">
          <ul class="panel">
            <li class="panel-heading">Players</li>
            <li v-for="player in Game.State.Players" :key="player.Name" class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-user-graduate" aria-hidden="true"></i>
              </span>
              <span class="is-expanded flex-name">
                {{player.Name}}
              </span>
              <span class="tag is-rounded"> {{player.Score}} </span>
            </li>
          </ul>
        </div>
      </div>

      <img :src="Game.State.CurrentPicture" alt="" class="card column">
    </div>
    <div class="columns">
      <div class="column is-one-third">
        <div class="">
          <ul class="panel">
            <li class="panel-heading">My Cards</li>
            <li v-for="card in Game.MyCards" :key="card" class="panel-block">
              {{card}}
            </li>
          </ul>
        </div>
      </div>
      <div class="column">
        <div>
          <ul class="panel">
            <li class="panel-heading">Cards In Play</li>
            <li v-for="card in Game.State.CardsInPlay" :key="card.Text" class="panel-block">
              {{card.Text}}, {{card.PlayerID}}, {{card.IsChosen}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import {Players, PictureDeck, CurrentPicture, Init} from "../models/Game";
import Game from "../models/Game"; //import all the named exports, creates an object that holds them all as props
export default { //inside this object are available to our component
  name: 'Home',
  created(){
    Game.Init();
    Game.Start();
  },
  destroyed(){
    Game.Pause();
  },
  data: () => ({
    Game
  })
}
</script>

<style>
  img.card-image{
    width: 100%;
  }
  .flex-name {
    flex-grow: 1;
  }
</style>