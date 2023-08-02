import axios from 'axios';
import { createStore } from 'vuex';

const base_url = 'http://tutorial.itaims.in';
export const getToken = () => {
    if (localStorage.getItem("userData")) {
        var user = JSON.parse(localStorage.getItem("userData"))
        const accessToken = user.accessToken
        return accessToken;
    }
    else return null
}

export const getUser = () => {
    if (localStorage.getItem("userData")) {
        var user = JSON.parse(localStorage.getItem("userData"))
        return user;
    }
    else return null
}

export const isLoggedIn = () => {
    var user = false
    if (localStorage.getItem("userData")) {
        user = true
        return user;
    }
    else return user
}
const store = createStore({
    state() {
        return {
            blogs: [],
            blog: null,
            isLogin: false,
            authToken: '',
            user_data: null,
        };
    },
    mutations: {
        SET_BLOGS(state, blogs) {
            state.blogs = blogs;
        },
        GET_BLOGS(state, blog) {
            state.blog = blog;
        },
        LOGIN_SUCCESS(state, response) {
            state.isLogin = response;
        },
        TOKEN(state, response) {
            state.authToken = response;
        },
        USER_DATA(state, response) {
            state.user_data = response
        },
    },
    actions: {
        async logIn({ commit }, formData) {
            var response = await axios.post(`${base_url}/auth-api/login`, formData)
            if (response.status === 200) {
                const userData = JSON.stringify(response.data.data)
                localStorage.setItem('userData', userData)
            }
               
          
            return response
        },
        getUser({ commit }) {
            if (localStorage.getItem("userData")) {
                var user = localStorage.getItem("userData")
                const accessToken = JSON.parse(user)
                commit('TOKEN', accessToken.accessToken)
                commit('LOGIN_SUCCESS', true)
                return user;
            }
        },
        async register({ commit }, formData) {
            var response = await axios.post(`${base_url}/auth-api/register`, formData)
            if (response.status === 201) {
                const userData = JSON.stringify(response.data.data)
                localStorage.setItem('userData', userData)
            }
        
             return response
        },
        async logOut({ commit }) {
           
           
                var response = await axios.post(`${base_url}/auth-api/logout`)
                if (response.status === 200) {
                    
                    localStorage.removeItem("userData");
                }
                return response
            
        },
    
        async fetchBlogs({ commit }) {
            const response = await axios.get(`${base_url}/blog-api/blog`);
            const blogs = response.data.data;
            commit('SET_BLOGS', blogs);
        },
        async retrieveBlog({ commit }, id) {
            const response = await axios.get(`${base_url}/blog-api/blog/${id}`)
            const blogs = response.data.data
            commit('GET_BLOGS', blogs);
            return response
        },
        async createBlog({ commit }, blogData) {
            const response = await axios.post(`${base_url}/blog-api/blog`, blogData);
            return response
        },
        async updateBlog({ commit },  blogData ) {
            const response = await axios.patch(`${base_url}/blog-api/blog/${blogData['id']}`, blogData)
            return response
        },
        async deleteBlog({ commit }, blogId) {
            const response = await axios.delete(`${base_url}/blog-api/blog/${blogId}`);
            return response
        },
    }
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
});
