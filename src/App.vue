<template>
  <v-app>

    <v-navigation-drawer v-model="sideNav" app disable-resize-watcher>
      <v-list>

        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          v-if="userIsAuthenticated"
          @click="onLogout">

          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            Logout
          </v-list-tile-content>

        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark class="primary elevation-1" >

      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"></v-toolbar-side-icon>

      <v-toolbar-title class="mr-4">
        <router-link class="logo__text" to="/" tag="span" style="cursor: pointer">PikaDeck</router-link>
      </v-toolbar-title>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat to="/sets">
          Sets
        </v-btn>
        <v-btn flat to="/decks">
          Decks
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-btn
        router
        to="/deck/new"
        class="accent">Create Deck</v-btn>

      <v-menu :nudge-width="150" :nudge-bottom="12" offset-y right>
        <v-btn flat icon slot="activator">
          <v-icon>person</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="item in menuItems"
            :key="item.title"
            :to="item.link">
            <v-list-tile-title>
              <v-icon left>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile
            v-if="userIsAuthenticated"
            @click="onLogout">
            <v-list-tile-title>
              <v-icon left>exit_to_app</v-icon>
              Logout
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <app-search-dialog></app-search-dialog>

    </v-toolbar>

    <v-content class="content-main">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

  </v-app>
</template>



<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          { icon: 'face', title: 'Sign up', link: '/signup' },
          { icon: 'lock_open', title: 'Sign in', link: '/signin' }
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            { icon: 'dashboard', title: 'Your Dashboard', link: '/dashboard' },
            { icon: 'person', title: 'Your Profile', link: '/profile' },
            { icon: 'library_add', title: 'Create Deck', link: '/deck/new' }
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    },
    name: 'App'
  }
</script>

<style>
  .logo__text {
    font-family: 'Ranchers', cursive;
    font-size: 2rem;
    font-weight: 400;
  }
  .content-main {
    background-image: url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png');
    background-repeat: repeat;
  }
</style>
