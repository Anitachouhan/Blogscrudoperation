<template>
    <main class="Form-banner">
        <div class="container">

            <div class="row justify-content-center">
                <div class="col-lg-4  col-10 p-0 formpage ">
                    <div class="login-content px-3 py-4 d-flex justify-content-center align-items-center">
                        <form @submit.prevent="submitForm">
                            <div class="row mx-auto w-100">
                                <div class="col-lg-12">
                                    <div class="heading mb-4 mt-3 text-center">
                                        <h1 class="heading">LOGIN</h1>
                                    </div>
                                </div>



                                <div class="col-lg-12">
                                    <div class="mb-1 mt-1">
                                        <label htmlFor="Email address">Email address</label>
                                        <input type="email" class="form-control" placeholder="Enter your email address"
                                            aria-label="Email" v-model="email" />
                                        <span v-if="errors.email" class="error ms-1">{{ errors.email }}</span>
                                    </div>
                                </div>



                                <div class="col-lg-12 position-relative">
                                    <div class="mb-2 mt-2">
                                        <label>Password</label>
                                        <div class="position-relative">
                                            <input type="password" class="form-control" id="pwd"
                                                placeholder="Enter your password" aria-label="Password"
                                                v-model="password" />
                                            <span v-if="errors.password" class="error ms-1">{{ errors.password }}</span>
                                        </div>
                                    </div>
                                </div>



                                <div class="row d-flex justify-content-between align-items-center px-0 mx-auto">
                                    <div class="col-lg-6">
                                        <div class="form-group form-check">
                                            <input class="form-check-input" type="checkbox" id="checkbox" />
                                            <div class="form-check-label" type="checkbox">
                                                Remember me
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-1 text-center px-0">
                                        <NuxtLink to="/ForgotPassword" class="forgot-password">
                                            Forgot your Password?
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div class="col-lg-12 mt-3 mb-2">
                                    <div class="my-2 justify-content-center">
                                        <div class="clearfix pb-3">
                                            <Buttons Btntext="Login" BlackBtn class="w-100 Login" type="submit" />
                                            <div v-if="success" class="success">Login successfully!</div>
                                        </div>
                                    </div>
                                    
                                    <div class="text-center ">
                                        <div class="labels">Don’t have an account? <NuxtLink to="/Signup">Sign up</NuxtLink>
                                        </div>
                                    </div>
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
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
            errors: {},
            success: false
        };
    },
    methods: {
        async submitForm() {
            this.errors = {};
            if (!this.email) {
                this.errors.email = 'Email is required';
            } else if (!this.isValidEmail(this.email)) {
                this.errors.email = 'Invalid email format';
            }
            if (!this.password) {
                this.errors.password = 'Password is required';
            } else if (this.password.length < 6) {
                this.errors.password = 'Password must be 6 characters';
            }
            if (Object.keys(this.errors).length === 0) {

                try {
                    const formData = {
                        email: this.email,
                        password: this.password
                    };
                    const response = await this.$store.dispatch("logIn", formData)
                    if (response.status === 200) {
                        this.$toast.success(response.data.message)
                        this.success = true;
                        localStorage.setItem('userData', JSON.stringify(response.data.data));
                        setTimeout(() => {
                            this.$router.push('/blogs');
                        }, 2000);
                    }
                } catch (error) {
                    if (error.response && error.response.data) {
                        const error_message = error.response.data;
                        this.$toast.error(`${error_message.message}`);
                    } else {
                        this.$toast.error('An error occurred during registration');
                    }
                }


            }
        },
        isValidEmail(email) {
            return true;
        }
    }
};
</script> 
<style scoped>
.error {
    color: red;
    font-size: 12px !important;
    text-transform: capitalize;
    font-family: "Inter-Regular";
}

.error+input {
    border-color: red;
}

::placeholder {
    font-size: 14px;
}

.success {
    color: green;
    margin-top: 10px;
}

.clearfix {
    position: relative;
}

.forgot-password {
    font-size: 14px !important;
    color: #0090FF;
    position: relative;
    left: 20px;
}

@media only screen and (min-width:1650px) {
    .forgot-password {
        font-size: 15px !important;
        margin-left: 26px;
    }

    .form-check-label,
    ::placeholder,
    .error,
    .success {
        font-size: 15px !important;
    }
}
</style>