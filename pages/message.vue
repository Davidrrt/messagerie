<template>
  <div class="row rounded-lg overflow-hidden">
    <!-- Users box-->
    <div class="col-3 px-0">
      <div class="bg-white">
        <div class="row mt-2 mb-2">
          <div class="col-12">
            <button type="button" class="btn btn-primary btn-send">
              <img src="assets/Icon.png" width="12" height="12" /> Send a new
              Message
            </button>
            <img src="assets/Search.png" width="18" height="18" />
          </div>
        </div>
        <div class="row mt-2 mb-2">
          <div class="col-9">
            <select
              class="form-select form-select-lg select-custom"
              aria-label=".form-select-lg example"
            >
              <option selected>Tous les messages</option>
              <option value="1">messages archivés</option>
              <option value="2">messages envoyés</option>
            </select>
          </div>
          <div class="col-3 pt-2">
            <img class="mr-2" src="assets/mail.png" width="20" height="18" />
            <img src="assets/Trash.png" width="18" height="18" />
          </div>
        </div>
        <div class="messages-box">
          <div class="list-group">
            <a class="list-group-item list-group-item-action active">
              <div class="media">
                <div class="media-body ml-4">
                  <div
                    class="d-flex align-items-center justify-content-between mb-1"
                  >
                    <h6 class="mb-0">
                      <img
                        src="assets/facebook.png"
                        alt="user"
                        width="12"
                        class="rounded-circle"
                      />
                      555 - 555 5555
                      <img src="assets/new-arrival.png" width="16" />
                    </h6>
                    <small class="small blue font-weight-bold">19:32</small>
                  </div>
                  <p class="font-italic mb-0 text-small">
                    Bonjour, j’ai acheter un produit et...
                  </p>
                </div>
              </div>
            </a>

            <a class="list-group-item list-group-item-action">
              <div class="media">
                <div class="media-body ml-4">
                  <div
                    class="d-flex align-items-center justify-content-between mb-1"
                  >
                    <h6 class="mb-0">
                      <img
                        src="assets/google.png"
                        alt="user"
                        width="12"
                        class="rounded-circle"
                      />
                      Jack Pott
                      <img src="assets/new-arrival.png" width="16" />
                    </h6>
                    <small class="small blue font-weight-bold">19:32</small>
                  </div>
                  <p class="font-italic mb-0 text-small">
                    Bonjour, j’ai acheter un produit et...
                  </p>
                </div>
              </div>
            </a>
            <a class="list-group-item list-group-item-action">
              <div class="media">
                <div class="media-body ml-4">
                  <div
                    class="d-flex align-items-center justify-content-between mb-1"
                  >
                    <h6 class="mb-0">
                      <img
                        src="assets/google.png"
                        alt="user"
                        width="12"
                        class="rounded-circle"
                      />
                      Jack Pott
                    </h6>
                    <small class="small blue font-weight-bold">19:32</small>
                  </div>
                  <p class="font-italic mb-0 text-small">
                    Bonjour, j’ai acheter un produit et...
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Chat Box-->
    <div class="col-9 px-0">
      <div class="row ml-4 mb-4">
        <h4 class="text-chat">Jack Pott</h4>
        <img class="ml-4 mr-4" src="assets/File.png" width="16" height="20" />
        <img class="mr-4" src="assets/mail.png" width="20" height="18" />
        <img src="assets/Trash.png" width="18" height="18" />
      </div>
      <div class="px-4 py-5 chat-box mail-content">
        <!-- Sender Message-->
        <div class="media w-50 mb-3">
          <div class="media-body ml-3">
            <div class="white-bg rounded py-2 px-3 mb-2">
              <p class="text-small mb-0 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur arcu ante, fringilla at tristique quis, aliquet quis
              </p>
            </div>
            <p class="small text-muted ml-2">
              <img
                src="assets/google.png"
                alt="user"
                width="12"
                class="rounded-circle"
              />
              12:00 PM
            </p>
          </div>
        </div>

        <!-- Reciever Message-->
        <div class="media w-50 ml-auto mb-3">
          <div class="media-body">
            <div class="bg-primary rounded py-2 px-3 mb-2">
              <p class="text-small mb-0 text-white">
                Test which is a new approach to have all solutions
              </p>
            </div>
            <p class="small text-muted">12:00 PM</p>
          </div>
        </div>

        <!-- Sender Message-->
        <div class="media w-50 mb-3">
          <div class="media-body ml-3">
            <div class="white-bg rounded py-2 px-3 mb-2">
              <p class="text-small mb-0 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur arcu ante, fringilla at tristique quis, aliquet quis
              </p>
            </div>
            <p class="small text-muted ml-2">
              <img
                src="assets/google.png"
                alt="user"
                width="12"
                class="rounded-circle"
              />
              12:00 PM
            </p>
          </div>
        </div>

        <!-- Reciever Message-->
        <div class="media w-50 ml-auto mb-3">
          <div class="media-body">
            <div class="bg-primary rounded py-2 px-3 mb-2">
              <p class="text-small mb-0 text-white">
                Apollo University, Delhi, India Test
              </p>
            </div>
            <p class="small text-muted">12:00 PM</p>
          </div>
        </div>

        <div class="media w-50 mb-3">
          <div class="media-body ml-3">
            <div class="white-bg rounded py-2 px-3 mb-2">
              <p class="text-small mb-0 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur arcu ante, fringilla at tristique quis, aliquet quis
              </p>
            </div>
            <p class="small text-muted ml-2">
              <img
                src="assets/google.png"
                alt="user"
                width="12"
                class="rounded-circle"
              />
              12:00 PM
            </p>
          </div>
        </div>

        <!-- Reciever Message-->
        <div class="media w-50 ml-auto mb-3">
          <div class="media-body">
            <div class="bg-primary rounded py-2 px-3 mb-2">
              <p class="text-small mb-0 text-white">
                Apollo University, Delhi, India Test
              </p>
            </div>
            <p class="small text-muted">12:00 PM</p>
          </div>
        </div>
      </div>
      <div class="row ml-4 mt-3 mb-2">
        <button type="button" class="btn btn-primary btn-send-two">
          1- Message client
        </button>
      </div>
      <div class="row ml-4 mb-4">
        <button type="button" class="btn btn-primary btn-send-two">
          2- Réponse de l'utilisateur
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
::-webkit-scrollbar {
  width: 5px;
}

.blue {
  color: #0047ff;
}

::-webkit-scrollbar-track {
  width: 5px;
  background: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  width: 1em;
  background-color: #ddd;
  outline: 1px solid slategrey;
  border-radius: 1rem;
}

.text-small {
  font-size: 0.9rem;
}

.messages-box,
.chat-box {
  height: 410px;
  overflow-y: scroll;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.text-chat {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #00307b;
}

.btn-send {
  background: #0047ff;
  border-radius: 10px;
  padding: 8px 50px;
  margin-right: 9px;
}

.btn-send-two {
  background: #0047ff;
  border-radius: 10px;
}

.bg-primary {
  background-color: #0047ff !important;
}

input::placeholder {
  font-size: 0.9rem;
  color: #999;
}

.select-custom {
  width: inherit;
  background: #f4f8ff;
  border-color: #f4f8ff;
  border-radius: 8px;
  padding: 10px 16px;
}

.mail-content {
  background-color: #f4f8ff !important;
  border-radius: 10px;
  margin-left: 20px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #0047ff;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.white-bg {
  background: #ffffff;
}

.text-muted {
  color: #00307b !important;
}

.list-group-item {
  background-color: #fff;
  border: none;
}

.list-group-item.active {
  z-index: 2;
  color: #5978a9 !important;
  background-color: #f4f8ff;
  border-color: #f4f8ff;
  border-radius: 10px !important;
}
.list-group {
  padding-right: 9px;
}
</style>
