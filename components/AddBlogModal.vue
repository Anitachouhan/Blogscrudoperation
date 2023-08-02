<template >
  <div class="modal show fade" id="profileModal" tabindex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body p-4">

          <h4 v-if="this.blogId" class=" mt-2">Edit Blog</h4>
          <h4 v-else class="  mt-2">Add Blog</h4>
          <div>

            <form class="  mt-4">
              <div class="row">


                <div class="mb-2 col-lg-12">
                  <label for="title" class="mb-2 mt-2">Blog Title</label>
                  <input type="text" name="title" placeholder="blog title" class="form-control" v-model="title" />
                  <span v-if="errors.title" class="error">{{ errors.title }}</span>
                </div>


                <div class="col-lg-12 mb-2">
                  <label for="description" class="mb-2 mt-2">Blog Description</label>
                  <input type="text" name="description" placeholder="blog description" class="form-control"
                    v-model="description" />
                  <span v-if="errors.description" class="error">{{ errors.description }}</span>
                </div>


                <div class="col-lg-12 mb-2 ">
                  <label for="image" class="mb-2 mt-2 file-input-label">Choose an Image</label>
                  <input type="file" id="image" class="file-input" @change="handleImageUpload" placeholder="blog image" />
                  <div v-if="imagePreview" class="file-preview tabelimage">
                    <img :src="imagePreview" alt="Preview" />
                  </div>
                  <span v-if="errors.imagePreview" class="error">{{ errors.imagePreview }}</span>
                </div>
              </div>
            </form>

          </div>

          <div class="modal-footer-btn d-flex justify-content-center align-items-center mt-2 mb-2 gap-3">
            <Buttons Btntext="Cancel" OutlineBtn @click="closeModel" />
            <Buttons v-if="this.blogId" @click="addBlog" Btntext="Update" BlackBtn class="mx-3"></Buttons>
            <Buttons v-else Btntext="Submit" BlackBtn class="mx-3" @click="addBlog" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'formdata-polyfill';
export default {
  name: "AddBlogModal",
  props: {
    blogId: {
      type: Number,
      required: true,

    }
  },
  data() {
    return {
      title: "",
      description: "",
      image: null,
      imagePreview: null,
      errors: {},
  
    }
  },
  async mounted() {

    if (this.blogId) {
      const response = await this.$store.dispatch("retrieveBlog", this.blogId);
      const blogdata = response.data.data;
      this.title = blogdata.title;
      this.description = blogdata.description;
      this.image = blogdata.image;
      this.imagePreview = blogdata.image;
    }
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.image = file;
      this.imagePreview = URL.createObjectURL(file);
    },

    async addBlog() {
      
      this.errors = {};

      if (!this.title) {
        this.errors.title = 'Please enter Blog Title .';
      }
      if (!this.description) {
        this.errors.description = 'Please enter descripion.';
      }

      if (!this.imagePreview) {
        this.errors.imagePreview = 'Please select file.';
      }
      if (Object.keys(this.errors).length === 0) {


        try {
          const blogData = new FormData();
          blogData.append("title", this.title);
          blogData.append("description", this.description);
          if (this.image) {
            blogData.append("image", this.image);
          }


          if (this.blogId) {
          blogData["id"] = this.blogId;
            const response = await this.$store.dispatch("updateBlog", blogData);
            if (response.status === 200) {
              this.$store.dispatch("fetchBlogs");
              this.closeModel()
            }
          } 
          
          else {
            const response = await this.$store.dispatch("createBlog", blogData);
            if (response.status === 201) {
              this.$store.dispatch("fetchBlogs");
              this.closeModel()
            }
          }
        }
        
        catch (error) {
          console.log("Something went wrong.");
        }
      }
    },
    closeModel() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.modal.show {
  display: block;
  background: #0000008f;
}
.error {
    color: red;
    font-size: 12px !important;
    text-transform: capitalize;
    font-family: "Inter-Regular";
}

.error+input {
    border-color: red;
}

.modal-content {
  max-width: 350px;
  margin: 0 auto;
  border-radius: 12px !important;
}

.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}

.modal.show .modal-dialog {
  transform: none;
}

.modal.show {
  background: #0000008f;
  transition: background 0.15s linear;
}

.modal-title {
  font-family: "Inter-SemiBold" !important;
  color: #1d1f1f;
}

.file-input {
  display: none;

}

.file-input-label {
  display: inline-block;
  padding: 10px 15px;
  background-color: #e5e5e5;
  color: #333;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
}

.file-input-label:hover {
  background-color: #ccc;
}

.file-preview {
  margin-top: 10px;
}

.file-preview img {
  max-width: 100%;
  height: auto;
}
</style>
  