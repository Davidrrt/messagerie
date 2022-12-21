<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <ul
      class="navbar-nav bg-custom sidebar sidebar-dark accordion toggled pt-4"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon">
          <img src="assets/DylipseLogo.png" alt="logo" width="45" height="53" />
        </div>
      </a>

      <li class="nav-item mt-4">
        <a class="nav-link" href="tables.html">
          <i class="font-ico bi bi-layout-text-window-reverse"></i
        ></a>
      </li>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item mt-1">
        <a class="nav-link">
          <i class="font-ico bi-shop"></i>
        </a>

        <!-- Nav Item - Utilities Collapse Menu -->
      </li>

      <li class="nav-item mt-1">
        <a class="nav-link">
          <img src="assets/policies.png" width="30" height="35" />
        </a>
      </li>
      <!-- Nav Item - Charts -->
      <li class="nav-item mt-1">
        <a class="nav-link"> <i class="font-ico bi bi-graph-up"></i></a>
      </li>

      <!-- Nav Item - Tables -->
      <li class="nav-item mt-1">
        <a class="nav-link"> <i class="font-ico bi bi-bar-chart-fill"></i></a>
      </li>
    </ul>
    <div class="sidebar mt-4 pt-4">
      <h4 class="ml-4 mt-4 pt-4 text-msg">Messagerie</h4>
      <div class="row ml-4">
        <a-tabs :tab-position="'right'" :style="{ height: '200px' }">
          <a-tab-pane :key="1">
            <template #tab>
              <span>
                Boîte de <br />
                réception
              </span>
            </template>
          </a-tab-pane>
          <a-tab-pane :key="2">
            <template #tab>
              <span>
                Modèles de <br />
                réponses
              </span>
            </template></a-tab-pane
          >
          <a-tab-pane :key="3">
            <template #tab>
              <span>
                Suivi des <br />
                demandes
              </span>
            </template></a-tab-pane
          >
        </a-tabs>
      </div>
    </div>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Topbar -->
        <nav
          class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top"
        >
          <ul class="navbar-nav me-auto mb-3 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link text-ico">
                <img src="assets/house.png" width="18" height="16.87" />
                <span class="ml-1">Dilypse</span>
                <i class="ml-1 bi bi-chevron-down"></i>
              </a>
            </li>
          </ul>
          <!-- Sidebar Toggle (Topbar) -->
          <button
            id="sidebarToggleTop"
            class="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i class="fa fa-bars"></i>
          </button>
          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Nav Item - User Information -->
            <li class="nav-item">
              <a class="nav-link ico-bell">
                <i class="d-none d-lg-inline bi bi-bell"></i
              ></a>
            </li>
            <li class="nav-item dropdown no-arrow">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  class="img-profile rounded-circle"
                  src="assets/undraw_profile.svg"
                />
                <span class="ml-2 mr-2 d-none d-lg-inline user-name"
                  >Douglas McGee</span
                >
                <i class="ml-1 bi bi-chevron-down user-name"></i>
              </a>
              <!-- Dropdown - User Information -->
              <div
                class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a
                  class="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i
                    class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                  ></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">
          <Message />
        </div>
        <!-- /.container-fluid -->
      </div>
    </div>
    <!-- End of Content Wrapper -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const callback = (val: string) => {};
    return {
      callback,
    };
  },
});
</script>
<style lang="scss">
#content {
  background-color: white;
}
.text-ico {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #002051 !important;
}
.text-msg {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 20px;
  color: #002051;
}
.font-ico {
  font-size: 22px !important;
}
.sidebar-dark .nav-item .nav-link i {
  color: #f0f2f5 !important;
}
.bg-custom {
  background: #002051;
}
.ico-bell {
  color: #0050ff !important;
  font-size: 23px !important;
}
.user-name {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #002051;
}

.ant-tabs-ink-bar {
  position: absolute;
  background: #ff547d;
  pointer-events: none;
}

.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #00307b !important;
}

.ant-tabs-tab {
  text-align: left !important;
  padding-left: 10px !important;
}

.ant-tabs-tab-btn {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #5978a9;
}
</style>
