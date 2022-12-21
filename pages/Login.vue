<script setup lang="ts">
import { Modal } from "ant-design-vue";

const authStore = useAuthStore();
const router = useRouter();

const error = () => {
  Modal.error({
    title: () => "Une erreur est survenue",
    content: () => "Utilisateur inconnu ou mot de passe incorrect !",
  });
};

interface loginForm {
  email: string;
  password: string;
}

let loginForm: loginForm = {
  email: "",
  password: "",
};

function login() {
  authStore
    .login(loginForm)
    .then((_response: any) => router.push("/"))
    .catch(() => {
      error();
    });
}
</script>

<template>
  <div class="login-bg">
    <div class="container mt-4 pt-4">
      <div class="row justify-content-md-center mt-4">
        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-2">
                  <img
                    alt="logo"
                    src="assets/logo.png"
                    width="78"
                    height="80.11"
                  />
                </div>
                <div class="col">
                  <p class="text-banner">Formulaire d'information pour</p>
                  <p class="text-company">[Company]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-md-center mt-4">
        <div class="col-6 mb-4">
          <div class="card pb-4">
            <div class="card-body mb-4 pb-4">
              <div class="d-grid gap-2 col-6 mx-auto">
                <form @submit.prevent="login">
                  <div class="row">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label label-form"
                        >*Email</label
                      >
                      <input
                        v-model="loginForm.email"
                        required
                        type="email"
                        class="form-control"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label label-form"
                        >Mot de passe</label
                      >
                      <input
                        v-model="loginForm.password"
                        required
                        type="password"
                        class="form-control"
                        placeholder="********"
                      />
                    </div>
                  </div>
                  <div class="d-grid gap-2 col-6 ml-3">
                    <button
                      type="submit"
                      class="btn btn-primary mb-3 btn-submit"
                    >
                      Continuer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--       <div class="row justify-content-md-center mt-4">
        <div class="alert alert-danger col-4 align-self-center" role="alert">
          <p class="text-center">
            Utilisateur inconnu ou mot de passe incorrect
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style lang="scss">
.login-bg {
  background: url("assets/banner.png");
  background-color: #f4f8ff;
  top: -24px;
  height: 242px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.text-banner {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #5978a9;
}
.text-company {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #0047ff;
}

.btn-submit {
  background: #0047ff;
  border-radius: 17px;
  width: 117px;
}

.label-form {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #5978a9;
}
</style>
