import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { $axios } from "~/utils/api";
@Module({
  name: "dbaccess",
  stateFactory: true,
  namespaced: true,
})
export default class dbaccess extends VuexModule {
  private _plant: string = "";

  get plant() {
    return this._plant;
  }

  @Mutation
  setPlant(item: string) {
    this._plant = item;
  }

  @Action({ rawError: true })
  async initPlantData() {
    this.setPlant("");
    const tplants = await $axios.$get("api/Tplants").catch((err) => {
      return err;
    });
    this.setPlant(tplants);
  }
}
