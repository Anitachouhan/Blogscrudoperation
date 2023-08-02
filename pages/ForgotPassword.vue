<template>
  <main class="Form-banner">
    <div class="container">

      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-8 col-10 p-0 formpage me-3">
          <div class="login-content px-3 py-4 d-flex justify-content-center align-items-center">
            <form @submit.prevent="handleSubmit">
              <div class="row mx-auto w-100">
                <div class="col-lg-12">
                  <div class="heading mb-4 mt-3 text-center">
                    <h1 class="heading">Forgot Password?</h1>
                    <p>Enter your email and we'll send you instructions to reset your password</p>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-1 mt-1">
                    <label htmlFor="Email address">Email address</label>
                    <input type="email" class="form-control" placeholder="Enter your email address" aria-label="Email"
                      v-model="form.email" :style="emailstyle" />

                    <span class="error-message" v-if="form.errors.email">{{
                      form.errors.email
                    }}</span>
                  </div>
                </div>

                <div class="col-lg-12 mt-4">
                  <div class="my-2 justify-content-center">
                    <div class="clearfix">
                      <Buttons Btntext=" Send reset link" BlackBtn class="w-100" type="submit" />
                    </div>

                  </div>
                </div>
                <div class="back-login mt-2 mb-2">
                  <NuxtLink to="/login">
                    <div class="back-to-login text-center"><i class="bi bi-chevron-left"></i> Back to login</div>
                  </NuxtLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      emailstyle: {
        borderColor: "#979797",
      },
      form: {
        email: "",
        errors: {},
      },
    };
  },
  methods: {
    validate() {
      const { email } = this.form;
      const errors = {};

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Please Enter Your valid email";

      } else {
        this.emailstyle.borderColor = "#979797";
      }

      if (email == "") {
        errors.email = "Please Enter Your email";

      } else {
        this.emailstyle.borderColor = "#979797";
      }
      this.form.errors = errors;
      return Object.keys(errors).length === 0;
    },
    handleSubmit() {
      if (this.validate()) {
        console.log(submit);
      }
    },
  },
};
</script> 
<style scoped>
.error-message {
  color: red;
  font-size: 12px;
  text-transform: capitalize;
}
</style>

