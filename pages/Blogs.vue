<template>
     <main class="main-page">
        <div class="index-page">
    <div class="main-container">
        <Navbar />
        <h1 class="text-center">This is Blog page.</h1>
        <div class="container ">
            <div class="cardheader mt-1 d-flex justify-content-center align-items-center">
                <div class="d-flex justify-content-between align-items-center w-100">
                    <h1 class="h5 mb-0">Blogs</h1>
                    <div class="button-menu d-flex">
                        <Buttons Btntext="Add BLog" BlackBtn class="w-auto" @click="openblogModal" />
                    </div>
                </div>
            </div>
            <div class="card ordersales mt-4" v-if="blogs">
                <table class="table mt-3">
                    <thead class="thead">
                        <tr>
                            <th>Image</th>
                            <th>BLog Title</th>
                            <th>BLog Discriptions</th>
                            <th class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="tbody">
                        <tr v-for="(blog, index) in blogs" :key="index" :class="{ 'alternate-row': index % 2 === 1 }">
                            <td>
                                <div class="img-user d-flex justify-content-flex-start align-items-center">

                                    <div class="tabelimage" v-if="blog.image">
                                        <img :src="blog.image" alt="Blog Image" />
                                    </div>

                                </div>
                            </td>
                            <td>{{ blog.title }}</td>
                            <td>{{ blog.description }}</td>
                            <td class="actions">
                                <div class="d-flex justify-content-center align-items-center ms-3">
                                    <i class="bi bi-pencil-square icon" @click="editopenModal(blogId = blog.id)"></i>
                                    <span class="mx-3"><i class="bi bi-trash icon"
                                            @click="deleteModal(blogId = blog.id)"></i></span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <DeleteBlogModal v-if="deleteblogmoadal" @close="blogclose" :blogId="blogId" />
            <AddBlogModal v-if="addblogmoadal" @close="blogclose" />
            <AddBlogModal v-if="editblogmoadal" @close="blogclose" :blogId="blogId" />
            <div class="footer-container d-flex justify-content-end aligns-item-center">

                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item prev" :class="{ disabled: currentPage === 1 }">
                            <a class="page-link" href="#" aria-label="Previous" @click.prevent="prevPage">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <div class="main-btn">
                            <li v-for="page in pages" :key="page" class="page-item"
                                :class="{ active: page === currentPage }">
                                <a class="page-link" href="#" @click.prevent="changePage(page)">{{
                                    page
                                }}</a>
                            </li>
                        </div>
                        <li class="page-item next" :class="{ disabled: currentPage === totalPages }">
                            <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    </div>
    </div>
    </main>
</template>
<script setup>
definePageMeta({
    middleware: ["auth"],
})
</script>
<script>

import { mapState } from "vuex";

export default {
  
    props: {
        blog: {
            type: Array,
            required: true
        },
        perPage: {
            type: Number,
            default: 3
        }
    },
    data() {
        return {
            editblogmoadal: false,
            addblogmoadal: false,
            deleteblogmoadal: false,
            blogId: null,
            currentPage: 1,
        };
    },
    computed: {
        ...mapState(["blogs"]),
        blogs() {
            if (this.$store.state.blogs) {
                const start = (this.currentPage - 1) * this.perPage;
                const end = start + this.perPage;
                return this.$store.state.blogs.slice(start, end);
            }
        },
        totalPages() {
            if (this.$store.state.blogs) {
                return Math.ceil(this.$store.state.blogs.length / this.perPage);
            }

        },
        pages() {
            const pages = [];
            for (let i = 1; i <= this.totalPages; i++) {
                pages.push(i);
            }
            return pages;
        }
    },
    mounted() {
        this.$store.dispatch("fetchBlogs");
    },
    methods: {
        changePage(page) {
            this.currentPage = page;
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        deleteModal() {
            this.deleteblogmoadal = true
            this.addblogmoadal = false
            this.editblogmoadal = false
        },
        blogclose() {
            this.addblogmoadal = false
            this.editblogmoadal = false
            this.deleteblogmoadal = false

        },
        openblogModal() {
            this.addblogmoadal = true
        },
        editopenModal() {
            this.addblogmoadal = false
            this.editblogmoadal = true
        },

    },
};
</script>
<style>
.icon {
    cursor: pointer;
}

.icon:hover {
    color: blue;
    font-weight: 600;
}

.tabelimage {
    height: 100px;
    width: 100px;
}

.tabelimage img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>