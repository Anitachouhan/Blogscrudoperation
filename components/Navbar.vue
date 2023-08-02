<template>
    <div class="Navbar">

        <div class="">
            <div class=" d-flex h-100 justify-content-between align-items-center">

                <div class="nav-img">
                    <NuxtLink to="/blogs"> <img src="/assets/blogs.png"  alt="blogs"></NuxtLink>
                </div>


                <div class="d-flex  justify-content-between align-items-center">
                    <div>
                        <NuxtLink to="/login">
                            <Buttons Btntext="Login " OutlineBtn class="w-auto"> </Buttons>
                        </NuxtLink>
                    </div>
                    <div class="ms-2">
                        <NuxtLink to="/signup">
                            <Buttons Btntext="Signup " OutlineBtn class="w-auto"> </Buttons>
                        </NuxtLink>
                    </div>
                    <div class="ms-2">
                        <Buttons Btntext="Log Out " BlackBtn class="w-auto" @click="logout"> </Buttons>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>
<script>
export default {
    name: "Navbar",
    data() {
        return {
            opendropdown: false,
        };
    },
    methods: {
        async logout() {
            localStorage.clear();
            this.$toast.success('User successfully logged out.')
            this.$router.push("/signup");
        }

    },
}

</script>
<style scoped>
.navbar{
    width: calc(100% - 20%);
}
</style>

