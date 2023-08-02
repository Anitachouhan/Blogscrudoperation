<template>
    <div class="modal fade show" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modl-content">
                <div class="modal-body">
                    <div class="mt-3 mb-2 del-des">
                        <h1 class="h6 mx-3 pt-1">Are you sure you want to delete </h1>
                    </div>
                    <div class="modal-footer-btn d-flex justify-content-center align-items-center mt-4 mb-3">
                        <Buttons Btntext="Cancel" @click="closeModel" />
                        <Buttons Btntext="Delete" BlackBtn class="ms-3" @click="deleteBlog()" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Delete BLog",
    props: {
        blogId: {
            type: Number,
            required: true
        },
    },
    methods: {
        closeModel() {
            this.$emit('close');
        },
        
        async deleteBlog() {
            try {
                const response = await this.$store.dispatch("deleteBlog", this.blogId);
                if (response.status === 200) {
                    this.$store.dispatch("fetchBlogs");
                    this.closeModel()
                }
            } catch (error) {
                console.log("An error occurred while deleting the blog.");
            }
        },
    }
};
</script>
<style scoped>
.modal.show {
    display: block;
    background: #0000008f;
}

.f-11 {
    font-size: 11px;
    font-family: 'Inter-Medium' !important;
}

.modl-content {
    max-width: 300px;
    margin: 0 auto;
}

label {
    display: flex;
}

.modal-title {
    text-align: left !important;
}

.delete-img {
    width: 70px;
    height: 70px;
    margin: 0 auto;
}

.delete-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>