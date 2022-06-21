import { makeAutoObservable, observable } from "mobx";

import axios from "axios";
class AwesomeStore {
  shops = [];

  constructor() {
    makeAutoObservable(this);
  }
  fetchShops = async () => {
    try {
      const response = await axios.get(
        "https://zoo-animal-api.herokuapp.com/animals/rand/7"
      );
      this.shops = response.data;
    } catch (error) {
      console.error("shop-> fetchShop -> error", error);
    }
  };
}
const awesomeStore = new AwesomeStore();
awesomeStore.fetchShops();
export default awesomeStore;
