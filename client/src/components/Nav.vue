<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>

            <a :class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div :class="{ 'is-active':isOpen }" class="navbar-menu">
            <div class="navbar-start">

            <router-link class="navbar-item" to="/" active-class="is-current" exact>Home</router-link>
            <router-link class="navbar-item" to="/about" active-class="is-current">About</router-link>
            <router-link class="navbar-item" to="/game" active-class="is-current">Game</router-link>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                More
                </a>

                <div class="navbar-dropdown">
                <a class="navbar-item">
                    About
                </a>
                <a class="navbar-item">
                    Jobs
                </a>
                <a class="navbar-item">
                    Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                    Report an issue
                </a>
                </div>
            </div>
            </div>

            <div class="navbar-end">
            <div class="navbar-item">
                <!-- <Login :CurrentUser="CurrentUser"></Login> -->
                <div class="buttons">
                <a class="button is-primary">
                    <strong>Sign up</strong>
                </a>
                <a class="button is-light" href="/login">
                    Log in
                </a>
                </div>
            </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data: () => ({ //tells JS that it's a one-line arrow function, which returns results of that one line
        isOpen: false,
    }),
    //alternate: data(){return{objectKey:objectValue}}
}
</script>

<style>
.is-current{
    font-weight: bold;
    color: purple;
}
</style>