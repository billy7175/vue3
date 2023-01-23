import { defineStore } from "pinia";

export const userStore = defineStore('user', {
  state: () => ({
    isLoggedIn:false
  }),
  actions: {
    loginUser(){
      this.isLoggedIn = true;
    }
  }
})