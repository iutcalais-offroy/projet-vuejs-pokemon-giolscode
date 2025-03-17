<template>
  <div>
    <button @click="showForm = 'inscription'">Inscription</button>
    <button @click="showForm = 'connexion'">Connexion</button>

    <div v-if="showForm === 'inscription'">
      <h1>Page d'inscription</h1>

      <form @submit.prevent="VerifRegister">

        <div>
          <label>Email</label><br>
          <input type="email" v-model="email" required>
        </div>

        <div>
          <label>Mot de passe</label><br>
          <input type="password" v-model="password" required>
        </div>

        <div>
          <label>Confirmer le mot de passe</label><br>
          <input type="password" v-model="confirmPassword" required>
        </div>

        <button type="submit">S'inscrire</button>
        <p>Déjà inscrit ? <a href="#" @click.prevent="showForm = 'connexion'">Se connecter</a></p>
      </form>

    </div>

    <div v-if="showForm === 'connexion'">

      <h1>Page de connexion</h1>
      <form @submit.prevent="VerifLogin">
        <div>
          <label>Email</label><br>
          <input type="email" v-model="email" required>
        </div>
        <div>
          <label>Mot de passe</label><br>
          <input type="password" v-model="password" required>
        </div>
        <button type="submit">Se connecter</button>
        <p>Pas encore inscrit ? <a href="#" @click.prevent="showForm = 'inscription'">S'inscrire</a></p>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "../stores/authStore.js";
import { useRouter } from "vue-router";

export default {
  setup() {

    const authStore = useAuthStore();
    const router = useRouter();

    const showForm = ref("inscription");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");

    const VerifRegister = async () => {
      
      if (password.value !== confirmPassword.value) {
        alert("Les mots de passe ne correspondent pas !");
        return;
      }
      const success = await authStore.register(email.value, password.value);
      if (success) {
        alert("Inscription réussie !");
        showForm.value = "connexion"; 
      } else {
        alert("Erreur lors de l'inscription !");
      }
    };

    const VerifLogin = async () => {
      const success = await authStore.login(email.value, password.value);
      if (!success) {
        alert("Erreur lors de la connexion !");
        return;
      }
      alert("Connexion réussie !");
      router.push("/deckbuilder"); 
    };

    return {
      showForm,
      email,
      password,
      confirmPassword,
      VerifRegister,
      VerifLogin,
    };
  },
};
</script>

<style>
  div {
    font-family: Arial, sans-serif;
    color: #333;
  }

  label {
    font-weight: bold;
  }

  h1 {
    color: #4CAF50;
  }

  a {
    color: #4CAF50;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }

  form {
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 5px;
    max-width: 400px;
    margin: auto;
  }

  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 5px 0 10px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

</style>
