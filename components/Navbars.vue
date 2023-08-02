<template>
    <div class="Nav-container px-0">
        <div class="container-fluid">
            <div class="das-navbar">
                <div class="container-fluid d-flex h-100 justify-content-between align-items-center">
                    <div class="user-deatils d-flex justify-content-start align-items-center me-1">
                        <div class="row">
                            <!-- <div class="search-input">
                                <img src="/assets/search-icon.png" alt="search" class="img-fluid" />
                                ​<input type="text" placeholder="Search...." class="search" autocomplete="off" />
                            </div> -->
                            <!-- <div class="ms-2">
                                <div class="d-flex form-inputs">
                                    <img src="/assets/search-icon.png" alt="search" className="img-fluid" />
                                    <input type="text" placeholder="Search...." class="search" autocomplete="off" />
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="user-deatils d-flex justify-content-end align-items-center me-1">
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
            const token = JSON.parse(localStorage.getItem("userData")).refreshToken
            const logoutData = {
                refresh: token
            }
            const response = await this.$store.dispatch("logOut", logoutData)

            if (response) {
                if (response.status === 200) {
                    this.$toast.success('User successfully logged out.')
                    this.$router.push('/Login')
                    this.$store.dispatch("getUser")
                }
            }
        },
    }
};
</script>
<style scoped>
.search-input {
    box-shadow: 1px 2px 2px 2px #fcfcfc;
    padding: 0px 10px;
    margin-right: auto;
    width: 310px;
    background-color: #f2f6fa;
    border-radius: 4px;
    border: none;
    margin: 0px 19px;
}

.search-input:-webkit-autofill {
    background-color: #f2f6fa;
}

.search-input input {
    border: none;
    padding: 9px;
    font-size: 14px;
    width: 90%;
}

.search-input img {
    width: 16px;
    height: auto;
}

.search-icon {
    cursor: pointer;
    font-size: 14px;
    color: var(--btn-golden);
}

.search-input input:focus {
    border: none !important;
    outline: none;
}

.search {
    background-color: #f2f6fa;
}

@media only screen and (max-width:1024px) {

    ::placeholder,
    .dropdown-item {
        font-size: 13px;
    }

    .das-navbar {
        height: 60px;
    }

    .user-deatils .dropdown-item {
        padding: 8px 20px !important;
        width: 175px !important;
    }

    .user-images {
        width: 40px;
        height: 40px;
    }

    .search-input input {
        padding: 8px;
    }

    .search-input img {
        width: 15px;
    }

    .search-input {
        width: 280px;
        padding: 0px 14px;
        margin: 0px 16px;
    }

    .notification_badege svg {
        width: 20px;
    }

    .user-deatils .dropdown-menu.show {
        transform: translate(0px, 50px) !important;
    }
}

@media only screen and (max-width:768px) {
    .Nav-container {
        width: calc(100% - 26%);
    }
    ::placeholder,
    .dropdown-item {
        font-size: 12px;
    }

    .das-navbar {
        height: 58px;
    }

    .user-deatils .dropdown-item {
        padding: 6px 16px !important;
        width: 160px !important;
    }

    .user-images {
        width: 38px;
        height: 38px;
    }

    .search-input input {
        padding: 6px;
    }

    .search-input img {
        width: 14px;
    }

    .search-input {
        width: 260px;
        padding: 0px 12px;
        margin: 0px 14px;
    }

    .notification_badege svg {
        width: 18px;
    }

    .user-deatils .dropdown-menu.show {
        transform: translate(0px, 47px) !important;
    }
}
</style>

