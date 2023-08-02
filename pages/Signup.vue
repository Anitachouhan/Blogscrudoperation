<template>
    <main class="Form-banner">
        <div class="container">

            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-8 col-10 p-0 formpage ">
                    <div class="login-content px-4 py-3 d-flex justify-content-center align-items-center">
                        <form @submit.prevent="submitForm">
                            <div class="row mx-auto w-100">
                                <div class="col-lg-12">
                                    <div class="heading mb-4 mt-3 text-center">
                                        <h1 class="heading">SIGNUP</h1>
                                    </div>
                                </div>
                                <div class="row d-flex justify-content-between align-items-center px-0 mx-auto">
                                    <div class="col-lg-6">
                                        <div class="mb-1 mt-1">
                                            <label htmlFor="First Name">First Name</label>
                                            <input type="text" class="form-control" placeholder="Enter your first name"
                                                aria-label="Name" v-model="fname" />
                                            <span v-if="errors.fname" class="error ms-1">{{ errors.fname }}</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mb-1 mt-1">
                                            <label htmlFor="Last Name">Last Name</label>
                                            <input type="text" class="form-control" placeholder="Enter your last name"
                                                aria-label="Name" v-model="lname" />
                                            <span v-if="errors.lname" class="error ms-1">{{ errors.lname }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row d-flex justify-content-between align-items-center px-0 mx-auto">
                                    <div class="col-lg-6">
                                        <div class="mb-1 mt-1">
                                            <label htmlFor="Email address">Email address</label>
                                            <input type="email" class="form-control" placeholder="Enter your email address"
                                                aria-label="Email" v-model="email" />
                                            <span v-if="errors.email" class="error ms-1">{{ errors.email }}</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="mb-1 mt-1">
                                            <label htmlFor="Last Name">Phone Number</label>
                                            <input type="text" class="form-control" placeholder="Enter your Phone Number"
                                                aria-label="text" v-model="phone" />
                                            <span v-if="errors.phone" class="error ms-1">{{ errors.phone }}</span>
                                        </div>
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
                                <div class="col-lg-12 position-relative">
                                    <div class="mb-2 mt-2">
                                        <label>Confirm Password</label>
                                        <div class="position-relative">
                                            <input type="password" class="form-control" id="pwd"
                                                placeholder="Enter your confirm password" aria-label="Password"
                                                v-model="confirmPassword" />
                                            <span v-if="errors.confirmPassword" class="error ms-1">{{
                                                errors.confirmPassword }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row d-flex justify-content-between align-items-center px-0 mx-auto">
                                    <div class="col-lg-12">
                                        <div class="form-group form-check">
                                            <input class="form-check-input" type="checkbox" id="checkbox" />
                                            <div class="form-check-label" type="checkbox">
                                                I agree to all the Terms & Privacy policy
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-12 mt-3 mb-2">
                                    <div class="my-2 justify-content-center">
                                        <div class="clearfix pb-3">
                                            <Buttons Btntext="Signup" BlackBtn class="w-100 Login" type="submit" />
                                            <div v-if="success" class="success">Signup successfully!</div>
                                        </div>

                                    </div>
                                    <div class="text-center ">
                                        <div class="labels">You have an account? <NuxtLink to="/LOGIN">Login</NuxtLink>
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
    name: "Signup",
    data() {
        return {
            fname: '',
            lname: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            errors: {},
            success: false,
        };
    },
    methods: {
        async submitForm() {
            this.errors = {};
            if (!this.fname) {
                this.errors.fname = 'First Name is required';
            }
            if (!this.lname) {
                this.errors.lname = 'Last Name is required';
            }
            if (!this.email) {
                this.errors.email = 'Email is required';
            } else if (!this.isValidEmail(this.email)) {
                this.errors.email = 'Invalid email format';
            }
            if (!this.phone) {
                this.errors.phone = 'phone no. is required';
            } else if (this.phone.length < 10) {
                this.errors.phone = 'phone must be at least 10 characters';
            }

            if (!this.password) {
                this.errors.password = 'Password is required';
            } else if (this.password.length < 6) {
                this.errors.password = 'Password must be at least 6 characters';
            }
            if (!this.confirmPassword) {
                this.errors.confirmPassword = 'Confirm Password is required';
            } else if (this.password !== this.confirmPassword) {
                this.errors.confirmPassword = 'Passwords do not match';
            }
            if (Object.keys(this.errors).length === 0) {



                try {
                    const formData = {
                        first_name: this.fname,
                        last_name: this.lname,
                        email: this.email,
                        password: this.password,
                        phone: this.phone,
                        confirm_password: this.confirmPassword,
                    };
                    const response = await this.$store.dispatch("register", formData);
                    if (response.status === 201) {
                        this.$toast.success(response.data.message);
                        this.success = true;
                        setTimeout(() => {
                            this.$router.push('/login');
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