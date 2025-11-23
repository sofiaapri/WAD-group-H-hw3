<template>
  <div class="signup-page">
    <h1>Signup Page</h1>
      <div class="signup-box ">
          <form @submit.prevent="submitForm">
              <div class="field">
                  <label>Email</label>
                  <input type="email" v-model="email" required />
              </div>

              <div class="field">
                  <label>Password</label>
                  <input type="password" v-model="password" required />
              </div>

              <div v-if="shouldShowPasswordErrors" class="error-box">
                <p>The password is not valid:</p>
                <ul>
                  <li v-for="err in passwordErrors" :key="err">{{ err }}</li>
                </ul>
              </div>

              <button type="submit">Signup</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
  data() {
      return {
        email:"",
        password:""
      }
  },
  computed: {
    passwordErrors() {
      const errors = [];
      if (this.password.length < 8 || this.password.length > 14) {
        errors.push("The password must be 8-14 characters long.");
      }

      if (!/[A-Z]/.test(this.password)) {
        errors.push("Includes at least one uppercase alphabet character.");
      }

      const lowercase = this.password.match(/[a-z]/g);
      if (!lowercase || lowercase.length < 2) {
        errors.push("Includes at least two lowercase alphabet characters.");
      }

      if (!/[0-9]/.test(this.password)) {
        errors.push("Includes at least one numeric value.");
      }

      if (!/^[A-Z]/.test(this.password)) {
        errors.push("It should start with an uppercase alphabet.");
      }

      if (!this.password.includes("_")) {
        errors.push("It should include the character “_”.");
      }

      return errors;
    }, 
    
    shouldShowPasswordErrors() {
      return (this.password.length > 0 || this.email.length > 0) && this.passwordErrors.length > 0;
    }
  },

  methods: {
    submitForm() {
      if (this.passwordErrors.length > 0 ){
        console.log("Password invalid:", this.passwordErrors);
        return;
      }
      console.log("Signup:", this.email, this.password);

      this.email = "";
      this.password = "";
    }
  }
};
</script>