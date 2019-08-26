<template>
  <div id="app">
    <!-- GitHub Ribbon from https://github.blog/2008-12-19-github-ribbons/ -->
    <a href="https://github.com/fazo96/example-autocomplete" class="github">
      <img
        width="149"
        height="149"
        src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
        class="attachment-full size-full"
        alt="Fork me on GitHub"
        data-recalc-dims="1"
      />
    </a>
    <vue-markdown>{{ markdownContent }}</vue-markdown>
    <hr/>
    <h1>Try it</h1>
    <v-select v-model="selected" :options="options" @search="fetchOptions" :filterable="false">
      <template slot="option" slot-scope="option">
          <b>></b> {{ option.name }} <b>({{ option.email}})</b>
          <br/> <span class="option-body">{{ option.body }}</span>
      </template>
    </v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import VueMarkdown from 'vue-markdown'

import 'vue-select/dist/vue-select.css'

import readme from 'raw-loader!../README.md'

const MAX_BODY_LENGTH = 64
const MAX_RESULTS = 20
const MIN_SEARCH_LENGTH = 3

function sliceBody (body) {
  if (body.length > MAX_BODY_LENGTH - 3) return body.slice(0, MAX_BODY_LENGTH - 3) + '...'
  return body
}

export default {
  name: 'app',
  components: {
    vSelect,
    VueMarkdown,
  },
  data: () => ({
    markdownContent: readme,
    selected: null,
    options: [],
  }),
  methods: {
    async fetchOptions (search, loading) {
      if (search.length >= MIN_SEARCH_LENGTH) {
        loading(true)
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?q=${encodeURIComponent(search)}`)
        if (response.ok) {
          const results = await response.json()
          this.options = results.slice(0, MAX_RESULTS).map(r => ({
            name: r.name,
            email: r.email,
            body: sliceBody(r.body),
            id: r.id
          }))
          console.log(this.options)
        }
        loading(false)
      } else {
        this.options = []
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: auto;
  max-width: 800px;
  padding-top: 60px;
}

.option-body {
  font-size: 14px;
  font-style: italic;
}

.option-title {
  font-size: 16px;
}

.github {
  position: fixed;
  top: 0;
  right: 0;
}
</style>
