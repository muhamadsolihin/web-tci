<template>
  <section id="contact-form">
    <div class="container-custom d-flex flex-column">
      <h1 class="title mx-auto">Get in touch with us</h1>
      <p class="subtitle">
        We look forward to collaborate with you in your amazing journey. You can tell us
        what you need using this form.
      </p>
      <div class="card-form mx-auto">
        <div class="row g-3">
          <div class="col-12">
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                placeholder="Tell us what you need"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Tell us what you need</label>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6 col-xl-6">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="First Name"
              />
              <label for="floatingInput">First Name</label>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6 col-xl-6">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Last Name"
              />
              <label for="floatingInput">Last Name</label>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6 col-xl-6">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="Email"
              />
              <label for="floatingInput">Email</label>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6 col-xl-6">
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="Phone Number"
              />
              <label for="floatingInput">Phone Number</label>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6 col-xl-6">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Company Name"
              />
              <label for="floatingInput">Company Name</label>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6 col-xl-6">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Job Title"
              />
              <label for="floatingInput">Job Title</label>
            </div>
          </div>
          <div class="col-12 col-md-9 col-lg-9 col-xl-9">
            <!-- <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                I agree to receive other communications from TCI
              </label>
            </div> -->
            <div class="d-flex flex-row align-items-center">
              <img src="@/assets/images/icons/agree.svg" alt="icon" />
              <p class="mb-0 ms-2 fw-500">
                I agree to receive other communications from TCI
              </p>
            </div>
            <div class="d-flex flex-row align-items-center mt-3">
              <img src="@/assets/images/icons/agree.svg" alt="icon" />
              <p class="mb-0 ms-2 fw-500">
                I agree to allow TCI to store and process my personal data
              </p>
            </div>
          </div>
          <div
            class="col-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-row justify-content-end"
          >
            <div class="submit-button">
              <p class="mb-0">Submit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#contact-form {
  width: 100%;
  padding: 50px 140px;
  .container-custom {
    margin: -550px 0;
    width: 100%;
    z-index: 1;
    .title {
      color: white;
      font-family: "Montserrat", sans-serif;
      font-size: 50px;
      line-height: 60px;
      font-weight: 600;
    }
    .subtitle {
      color: white;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
    }
    .card-form {
      background-color: white;
      padding: 40px;
      width: 90%;
    }
    .submit-button {
      color: white;
      padding: 20px 25px;
      margin-top: 40px;
      width: 100%;
      background: linear-gradient(119.27deg, #e58146 0%, #e09b3d 100%);
      p {
        font-family: "Albert Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #contact-form {
    padding: 0 30px;
    .container-custom {
      margin: -550px 0;
      .card-form {
        width: 100%;
      }
    }
  }
}
</style>
