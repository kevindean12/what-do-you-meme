<template>
  <div class="container">
      <div class="card">
          <div class="card-content">
              <h1 class="title is-1">
                  Game Page
              </h1>
          </div>
      </div>
      <div class="card">
      <div class="card-content">
        <ul>
          <li v-for="player in Game.State.Players" :key="player.Name">
            {{player.Name}} {{player.Score}}
          </li>
        </ul>
      </div>
      <img :src="Game.State.CurrentPicture" class="card-image">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import {Players, PictureDeck, CurrentPicture, Init} from "../models/Game";
import * as Game from "../models/Game"; //import all the named exports, creates an object that holds them all as props
export default { //inside this object are available to our component
  name: 'Home',
  data: () => ({
    Game
  }),
  created(){
    Game.Init();
  },
  components: {
    
  }
}
</script>

<style>
  img.card-image{
    width: 100%;
  }
</style>