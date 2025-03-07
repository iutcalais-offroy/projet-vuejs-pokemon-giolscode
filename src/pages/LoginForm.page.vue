<template>
  <div>
    <button @click="showForm = 'inscription'">Inscription</button>
    <button @click="showForm = 'connexion'">Connexion</button>

    <div v-if="showForm === 'inscription'">
      <h1>Formulaire d'inscription</h1>
      <form @submit.prevent="submitInscription">
        <div>
          <label>Email</label><br />
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label>Mot de passe</label><br />
          <input type="password" v-model="password" required />
        </div>
        <div>
          <label>Confirmer le mot de passe</label><br />
          <input type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit">S'inscrire</button>
        <p>
          Déjà inscrit ?<a href="#" @click.prevent="showForm = 'connexion'">Se connecter</a>
        </p>
      </form>
    </div>

    <div v-if="showForm === 'connexion'">
      <h1>Formulaire de connexion</h1>
      <form @submit.prevent="submitConnexion">
        <div>
          <label>Email</label><br />
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label>Mot de passe</label><br />
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Se connecter</button>
        <p>
          Pas encore inscrit ?<a href="#" @click.prevent="showForm = 'inscription'"> Inscrit-toi !!!</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showForm: "inscription", // "inscription" ou "connexion"
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    submitInscription() {
      if (this.password !== this.confirmPassword) {
        alert("Les mots de passe ne correspondent pas !");
      } else {
        alert("Inscription réussie !");
      }
    },
    submitConnexion() {
      alert("Connexion réussie !");
    },
  },
};
</script>

<style>
  
</style>
