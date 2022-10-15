<template>
  <div class="container " style="margin-top:100px">
    <div class="card-body pt-1">
      <!--begin::Tabs-->
      <div class="row">
        <div class="col-md-6 ">
          <ul
            class="nav flex-center bg-transparent overflow-auto flex-nowrap p-2 mb-8"
          >
            <div class="row" style="margin-left: 28%">
              <div class="col-md-6" style="border: none">
                <!--begin::Tab nav-->
                <li class="nav-item flex-equal">
                  <a
                    class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold active"
                    data-bs-toggle="tab"
                    href="#kt_lists_widget_3_tab_pane_1"
                    ><img src="@/assets/images/animate/consutant.svg"
                  /></a>
                </li>

                <!--end::Tab nav-->
                <!--begin::Tab nav-->

                <li class="nav-item flex-equal"  style="margin-top:55px">
                  <a
                    class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                    data-bs-toggle="tab"
                    href="#kt_lists"
                    ><img src="@/assets/images/animate/dataanimate.svg"
                  /></a>
                </li>
              </div>
              <!--end::Tab nav-->
              <!--begin::Tab nav-->
              <div class="col-md-6" >
                <li class="nav-item flex-equal mx-1">
                  <a
                    class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                    data-bs-toggle="tab"
                    href="#kt_lists_widget_3_tab_pane_2"
                    ><img src="@/assets/images/animate/digital.svg"
                  /></a>
                </li>
                <li class="nav-item flex-equal" style="margin-top:55px">
                  <a
                    class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                    data-bs-toggle="tab"
                    href="#kt_lists_widget_3_tab_pane_4"
                    ><img src="@/assets/images/cyberanimate.svg"
                  /></a>
                </li>
              </div>
              <!--end::Tab nav-->
            </div>
          </ul>
        </div>
        <!--end::Tabs-->
        <!--begin:Tab content-->
        <div class="col-md-6">
          <div class="tab-content">
            <!--begin::Tab pane-->
            <div
              class="tab-pane fade active show"
              id="kt_lists_widget_3_tab_pane_1"
            >
              <!--begin::Section-->
              <el-col id="consultant" style="margin-top: 10%" :span="12"
                ><div class="grid-content">
                  <div>
                    <div class="head1" style="text-align: justify">
                      IT Consultant
                    </div>

                    <div
                      class="subhead1"
                      style="text-align: justify; width: 34em; margin-top: 2%"
                    >
                      With our IT Consultant services, we could help you revamp
                      your IT Environment and synchronize it with your business
                      needs, leveraging the experiences inside it. We also offer
                      consultancy on holistic, fast, and cost-effective
                      optimization of IT Systems and Processes to ensure
                      tangible business outcomes for you.
                    </div>
                  </div>
                </div>
              </el-col>
              <!--end::Section-->
              <!--begin::Section-->

              <!--end::Section-->
            </div>
            <!--end::Tab pane-->
            <!--begin::Tab pane-->
            <div class="tab-pane fade" id="kt_lists_widget_3_tab_pane_2">
              <!--begin::Chart-->
              <el-col id="consultant" style="margin-top: 10%" :span="12"
                ><div class="grid-content">
                  <div>
                    <div class="head1" style="text-align: justify">
                      Digital Transformation
                    </div>

                    <div
                      class="subhead1"
                      style="text-align: justify; width: 34em; margin-top: 2%"
                    >
                      We are here to empower every enterprise across multiple
                      industries with the most suitable IT Solutions to build up
                      new technology-based business models that meet the
                      requirements of modern business environment.
                    </div>
                  </div>
                </div>
              </el-col>
              <!--end::Chart-->
            </div>
            <!--end::Tab pane-->
            <!--begin::Tab pane-->
            <div class="tab-pane fade" id="kt_lists">
              <!--begin::Items-->
              <el-col id="consultant" style="margin-top: 10%" :span="12"
                ><div class="grid-content">
                  <div>
                    <div class="head1" style="text-align: justify">
                      Data Center  & Infrastructures
                    </div>

                    <div
                      class="subhead1"
                      style="text-align: justify; width: 34em; margin-top: 2%"
                    >
                      We will assist you in planning, designing, developing, and
                      implementing the infrastructure of your data center. We
                      deliver detailed documentation to facilitate the upgrade,
                      migration, and diagnostic processes.
                    </div>
                  </div>
                </div>
              </el-col>
            </div>
            <div class="tab-pane fade" id="kt_lists_widget_3_tab_pane_4">
              <el-col style="margin-top: 10%" :span="12"
                ><div class="grid-content">
                  <div>
                    <div class="head1" style="text-align: justify">
                      Cyber Security
                    </div>

                    <div
                      class="subhead1"
                      style="text-align: justify; width: 34em; margin-top: 2%"
                    >
                      Our security experts develop a personal approach to each
                      customer based on best practices and enriched that with
                      our own experience. We offer a variety of services from
                      information security consulting to assessing, testing, and
                      improving the protection of applications and networks for
                      companies.
                    </div>
                  </div>
                </div>
              </el-col>
            </div>
            <!--end::Items-->
          </div>
          <!--end::Tab pane-->
        </div>
      </div>
    </div>
    <!--end:Tab content-->
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.head1 {
  font-family: "montserrat";
  font-size: 2em;
  color: #000000;
  font-weight: 600;
  width: 533px;
}
.subhead1 {
  font-family: "montserrat";
  font-size: 1em;
  font-weight: 400;
  color: #000000;
}
</style>
