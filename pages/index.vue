<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-btn color="success" @click="onClickWebAPI">WebAPI通信</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="title teal--text text--darken-1">時刻：{{ nowdate }}</div>
        <div class="title teal--text text--darken-1">
          通信結果：{{ apidata }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "nuxt-property-decorator";
import { dbaccessStore } from "~/store";
@Component({})
export default class index extends Vue {
  get apidata() {
    return dbaccessStore.plant;
  }

  nowdate: Date | string = "";

  async onClickWebAPI() {
    this.nowdate = "";
    await dbaccessStore.initPlantData();
    this.nowdate = new Date();
  }
}
</script>
