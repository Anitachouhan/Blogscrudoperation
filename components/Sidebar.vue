<template>
    <div class="sidebar">
      <div class="sidebar-header d-flex justify-content-between align-items-center">
        <div class="logo-here  d-flex justify-content-between align-items-center">
          <img src="/assets/blogs.png" alt="handmerch" />
        </div>
        <div class="logo-img mb-1">
          <img src="/assets/bar-icon.png" alt="menu-icon" />
        </div>
      </div>
      <div class="sidebar-content">
        <ul class="list-unstyled">
          <li class="mb-2">
            <NuxtLink to="/" exact-active-class="active">
              <img src="/assets/dashboard.svg" alt="home" class="img-fluid" />
              <span>Dashboard</span>
            </NuxtLink>
          </li>
          <li class="mb-2">
            <NuxtLink to="/blogs" exact-active-class="active">
              <img src="/assets/product.svg" alt="Products" class="img-fluid" />
              <span class="position-relative">Blogs</span>
            </NuxtLink>
          </li>
  
        
        </ul>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "Sidebar",
    data() {
      return {
        showDropdown: false,
      }
    },
    methods: {
  
  
    },
  };
  </script>
  <style scoped>
  .sidebar {
    background-color: #ffffff;
    width: calc(100% - 82%);
    position: fixed;
    box-shadow: 3px 3px 10px #00000014;
    margin: 14px;
    height: calc(100vh - 5vh);
    border-radius: 12px;
  }
  
  .sidebar-header {
    height: 65px;
    padding: 20px;
    background: #1D1F1F;
    color: #ffffff;
    border-radius: 12px 12px 0 0;
  }
  
  .logo-here img {
    width: 100px;
  }
  
  .sidebar-content {
    padding: 20px;
    overflow-y: scroll;
    height: 80vh;
  }
  
  ::-webkit-scrollbar {
    display: none !important;
  }
  
  .sidebar-content ul li a {
    cursor: pointer;
    padding: 9px 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
  }
  
  .sidebar-content ul li a.active,
  .sidebar-content ul li a:active,
  .sidebar-content ul li a:hover {
    background: #F2F6FA;
    color: #1D1F1F;
    box-shadow: 0px 3px 5px rgba(124, 124, 124, 0.15);
  }
  
  .sidebar-content ul li a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  
  .sidebar-content ul li span {
    color: #1D1F1F;
    font-size: .87rem;
  }
  
  .sidebar-content ul li img {
    margin-right: 15px;
    width: 15px;
  }
  
  .cat-dropdown {
    cursor: pointer;
    padding: 9px 15px;
  }
  
  .cat-dropdown.active,
  .cat-dropdown:active,
  .cat-dropdown:hover {
    background: #F2F6FA;
    color: #1D1F1F;
    box-shadow: 0px 3px 5px rgba(124, 124, 124, 0.15);
  }
  
  .cat-icon {
    color: #bf9062;
  }
  
  @media only screen and (max-width:1024px) {
    .sidebar-content ul li span {
      font-size: 0.80rem;
    }
  
    .sidebar-content {
      padding: 20px 12px;
      height: 76vh;
    }
  }
  
  @media only screen and (max-width:768px) {
    .sidebar {
      width: calc(100% - 76%) !important;
    }
  
    .sidebar-content ul li span {
      font-size: 0.74rem;
    }
  
    .sidebar-content {
      padding: 20px 6px;
    }
  
    .sidebar-content ul li img {
      margin-right: 13px;
      width: 13px;
    }
  
    .cat-drop-item img {
      width: 11px !important;
    }
    .cat-icon{
      position: relative;
      top: 3px;
      font-size: 13px;
  }
  }</style>
  