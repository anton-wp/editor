<template>
  <v-row justify="center" class="mt-4">
    <div style="width: 400px">
      <v-card elevation="1">
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>
          <form>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              type="text"
              name="input-10-1"
              label="Email"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="showEye ? 'mdi-eye' : 'mdi-eye-off'"
              :error-messages="passwordErrors"
              :type="showEye ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              counter
              @click:append="showEye = !showEye"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            ></v-text-field>
            <v-text-field
              v-if="!formLogin"
              v-model="passwordConfirm"
              :append-icon="showEyeCon ? 'mdi-eye' : 'mdi-eye-off'"
              :error-messages="passwordConfirmErrors"
              :type="showEyeCon ? 'text' : 'password'"
              name="input-10-1"
              label="Confirm password"
              counter
              @click:append="showEyeCon = !showEyeCon"
              required
              @input="$v.passwordConfirm.$touch()"
              @blur="$v.passwordConfirm.$touch()"
            ></v-text-field>
            <v-btn class="mr-4" @click="submit"> {{ title }} </v-btn>
          </form>
          <div class="mt-2">
            <slot />
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-row>
</template>



<script>
import { required, email } from "vuelidate/lib/validators";
import { mapActions, mapMutations } from "vuex";

export default {
  props: ["formLogin"],
  data: function () {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      errorMessage: "",
      showEye: false,
      showEyeCon: false,
    };
  },
  computed: {
    title() {
      return this.formLogin ? "Login" : "Registration";
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.passwordStrong &&
        errors.push(
          "The length must be 10 or more characters and contain a combination of characters, capital letters, text."
        );
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    passwordConfirmErrors() {
      const errors = [];
      if (!this.$v.passwordConfirm.$dirty) return errors;
      !this.$v.passwordConfirm.match &&
        errors.push("The entered passwords don’t match.");
      !this.$v.passwordConfirm.required && errors.push("Password is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },
  methods: {
    ...mapActions(["login", "registration"]),
    ...mapMutations(["UpdateAlert"]),
    async submit() {
      this.errorMessage = false;
      this.$v.$touch();
      if (this.$v.error) return;

      const data = { email: this.email, password: this.password };
      try {
        if (this.formLogin) {
          let message = await this.login(data);
          this.UpdateAlert({
            type: "success",
            text: message,
          });
          this.$router.push("/");
        } else {
          let message = await this.registration(data);
          this.UpdateAlert({
            type: "success",
            text: message,
          });
          this.$router.push("/login");
        }
      } catch (err) {
        this.UpdateAlert({
          type: "error",
          text: err.message,
        });
        this.errorMessage = true;
      }
    },
  },
  validations: {
    email: { required, email },
    password: {
      required,
      passwordStrong(value) {
        const reg = new RegExp(
          "^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
          "g"
        );
        if (this.formLogin) return true;

        return reg.test(value);
      },
    },
    passwordConfirm: {
      required,
      match(value) {
        return value === this.password;
      },
    },
  },
};
</script>