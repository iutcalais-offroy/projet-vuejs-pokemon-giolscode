import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || null,
    userId: localStorage.getItem("userId") || null,
  }),
  actions: {
    async register(email, password) {
      try {
        await axios.post("https://pokemon-api-seyrinian-production.up.railway.app/users", {
          email,
          password,
        });

        alert("Inscription réussie !");
        return true; 

      } catch (error) {
        alert(error.response?.data?.message || "Erreur d'inscription");
        return false;
      }
    },

    async login(email, password) {
      try {
        const response = await axios.post("https://pokemon-api-seyrinian-production.up.railway.app/users/login", {
          email,
          password,
        });

        this.token = response.data.token;
        this.userId = response.data.userId;

        localStorage.setItem("token", this.token);
        localStorage.setItem("userId", this.userId);

        alert("Connexion réussie !");
        return true; 
      } catch (error) {
        alert(error.response?.data?.message || "Erreur de connexion");
        return false;
      }
    },

    logout() {
      this.token = null;
      this.userId = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      alert("Déconnexion réussie !");
    },
  },
});
