<template>
  <section class="container">
    <div class="hero">
        <h1 class="title">
          Home Page
        </h1>
    </div>
    <div class="card">
      <div class="card-content">
        <ul>
          <li v-for="player in Players" :key="player.Name">
            {{player.Name}} {{player.Score}}
          </li>
        </ul>
      </div>
      <img :src="CurrentPicture" class="card-image">
    </div>
  </section>
</template>

