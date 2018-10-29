import { observable, action } from "mobx";
import axios from "axios";

export default class ResultStore {
  @observable
  latestValue = "";

  @observable
  upgradeValue = "";

  @observable
  olderValue = [];

  @action
  getInfo = (model, carier, version) => {
    axios
      .get(`${process.env.LOCAL_URL}/result/${version}/${model}/${carier}`)
      .then(res => {
        this.latestValue = res.data[0].version[0].latest;
        for (let i = 0; i < 10; i++) {
          this.olderValue[i] = res.data[0].version[0].upgrade[0].value[i]._;
        }
        this.upgradeValue = res.data[0].version[0].upgrade[0].value[0]._; //value[0]._
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });
  };
}
