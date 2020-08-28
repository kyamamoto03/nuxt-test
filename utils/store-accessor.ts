import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import DBAccess from "~/store/dbaccess";

// eslint-disable-next-line import/no-mutable-exports
let dbaccessStore: DBAccess;

// let someStore: Something

function initializeStores(store: Store<any>): void {
  dbaccessStore = getModule(DBAccess, store);
}

export { initializeStores, dbaccessStore };
