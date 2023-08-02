<template>
      <!-- <Sidebar />
      <Navbars /> -->

    <main class="main-page">
       
        <div class="index-page">
            <Navbar />
            <div class="container">
                <div class="head-lines">
                    <h3 class="text-center">A blog is a website or page that is a part of a larger website. <br />
                        Typically, it features articles written in a conversational style with accompanying pictures or
                        videos.
                    </h3>
                </div>
                <section class="  section-new ">
                    <div class="row ">
                        <div class=" blogs-content pg col-lg-6">
                            
                            <h2 class=" ">

                                <span class="title" style="color: #e4b322"> A blog, short for weblog, is a frequently
                                    updated web page used for personal commentary or business content. </span><br>
                                <span class="title">Blogs are often interactive and include sections at the bottom of
                                    individual blog posts where readers can leave comments.</span>

                            </h2>
                          <br />
                            <NuxtLink to="/blogs">
                                <Buttons Btntext="Blogs " BlackBtn class="w-auto"> </Buttons>
                            </NuxtLink>
                        </div>
                        <div class=" blogs-content col-lg-6">
                            <div class=" b-img1">
                                <NuxtLink to="/blogs"> <img decoding="async" src="/assets/bb.png" alt="" loading="lazy"
                                        data-ll-status="loaded"></NuxtLink>
                            </div>
                        </div>



                    </div>
                </section>
                <footer>
        <div class="container">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
    </footer>
            </div>
        </div>
    </main>
</template>
<script>


export default {
    
    name: "index",
    components: {

    }
}
</script>
<style scoped>
footer {
 
    color: #3223de;

    padding: 20px 0;
}




footer p {
    font-size: 14px;
 
}

/* Add some spacing between the footer text and the bottom of the container */


/* Style the link color */
footer a {
    color: #fff;
    text-decoration: none;
}

/* Change link color on hover */
footer a:hover {
    color: #f00;
}

/* Add a bottom border to the footer */
footer {
    border-top: 1px solid #444;
}
</style>



  