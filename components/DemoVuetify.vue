<template>
  <v-card color="grey-lighten-4" flat height="200px" rounded="0">
    <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
  <v-list-item link prepend-icon="mdi-inbox-arrow-down">
    <v-btn class="text-none">
      <v-badge content="2" color="error">
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>
  </v-list-item>
  <v-autocomplete
    chips
    label="Autocomplete"
    :items="[
      'California',
      'Colorado',
      'Florida',
      'Georgia',
      'Texas',
      'Wyoming',
    ]"
    multiple
  ></v-autocomplete>
  <v-card>
    <v-card-text>
      <v-slider v-model="value" strict></v-slider>
    </v-card-text>
  </v-card>
  <v-switch label="Switch"></v-switch>
  <v-divider></v-divider>
  <v-text-field label="Label" v-model="text"></v-text-field>
  <v-row>
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      sm="6"
      md="4"
      lg="3"
    >
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        cover
        class="bg-grey-lighten-2"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
  <v-pagination :length="20"></v-pagination>
</template>

<script setup>
const value = ref(10);
const text = ref("");

watch(text, (cur, pre) => {
  console.log(cur + " " + pre);
});

const add = () => {
  console.log("add");
};
</script>
