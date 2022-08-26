<template>
    <div class="main-content">
        <!-- Announcement Section -->
        <div class="d-flex justify-content-between">
            <div class="row justify-content-start">
                <h2>Announcements</h2><br>
                <p>View, create, or edit announcements for all employees of your company</p>
            </div>
            <div>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-success post-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa fa-plus"></i> Post an Announcement
            </button>

                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel"></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="was-validated">
                                <div class="mb-3">
                                    <label for="validationTextarea" class="form-label">Title</label>
                                    <input type="text" class="form-control" aria-label="title example" placeholder="Please specify the title" required>
                                    <div class="invalid-feedback">Please specify the title</div>
                                </div>

                                <div class="mb-3">
                                    <label for="validationTextarea" class="form-label">Message</label>
                                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Please specify the announcement" required></textarea>
                                </div>

                                <div class="mb-3">
                                    <label for="validationTextarea" class="form-label">Sent By</label>
                                    <select class="form-select" required aria-label="select example">
                                    <option value="">--Please Select--</option>
                                    <option value="1">Roe, Ken</option>
                                    <option value="2">Doe, Jane</option>
                                    <option value="3">Chow, King</option>
                                    </select>
                                    <div class="invalid-feedback">Example invalid select feedback</div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Submit</button>
                        </div>
                        </div>
                    </div>
                </div>
                <!--End of Modal Form-->
            </div>
        </div>
        <!-- End of Section -->

        <!--Filter/Search Section-->
        <div class="d-flex justify-content-between second-section">
            <div>
                <span class="all-green"><span>10</span> All</span>
                <span class="all-orange"><span>10</span> Drafts</span> 
            </div>
            <div class="d-flex">
                 <div>
                    <form class="form-inline" method="GET">
                       <div class="filter">
                            <select class="form-select form-control filter-drpdown" required aria-label="select example">
                                <option>Filter by</option>
                                <option value="title">Title</option>
                                <option value="message">Message</option>
                                <option value="sentby">Sent by</option>
                                <option value="sent">Sent Through</option>
                                <option value="date_created">Date Created</option>
                                <option value="start_date">Start Date</option>
                                <option value="end_date">End Date</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div>
                    <form class="form-inline" method="GET">
                        <div class="input-group">
                            <input type="text" class="form-control " placeholder="Search..." aria-label="Search..." id="sprout-search-data" aria-describedby="basic-addon2">
                            <span class="input-group-text search-bgnone" id="basic-addon2"><button class="search-btn"><i class="fa fa-search"></i></button> </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Message</th>
                    <th scope="col">Sent By</th>
                    <th scope="col">Sent Through <i class="fa fa-info-circle info"></i></th>
                    <th scope="col">Date Created</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                </tr>
            </thead>
            <tbody id="sprout-data">
                <!-- 1st Row  -->
                <tr>
                    <td>[FOR YOUR ACTIO...</td>
                    <td>In line with the inc...</td>
                    <td>Roe, Ken</td>
                    <td><i class="fa-solid fa-mobile-screen"></i></td>
                    <td>02/17/2022</td>
                    <td>02/18/2022<br>
                        <span>09:30 AM</span>
                    </td>
                    <td>02/22/2022<br>
                        <span>7:30 PM</span>
                    </td>
                </tr>
                <!-- 2nd Row  -->
                <tr>
                    <td>Annual Physical E...</td>
                    <td>In compliance with...</td>
                    <td>Roe, Ken</td>
                    <td><i class="fa fa-solid fa-bookmark"></i></td>
                    <td>08/30/2020</td>
                    <td>09/01/2020<br>
                        <span>09:00 AM</span>
                    </td>
                    <td>09/30/2020<br>
                        <span>6:00 PM</span>
                    </td>
                </tr>
                <!-- 3rd Row  -->
                <tr>
                    <td>Mid-Autumn Festi...</td>
                    <td>We wish everone a...</td>
                    <td>Doe, Jane</td>
                    <td></td>
                    <td>08/22/2020</td>
                    <td>08/23/2020<br>
                        <span>12:00 PM</span>
                    </td>
                    <td>09/30/2020<br>
                        <span>9:00 AM</span>
                    </td>
                </tr>
                <!-- 4th Row  -->
                <tr>
                    <td scope="row">50th General Asse...</td>
                    <td>Expelliarmus! Chec...</td>
                    <td>Doe, John</td>
                    <td></td>
                    <td>08/15/2020</td>
                    <td>08/15/2020<br>
                        <span>9:00 AM</span>
                    </td>
                    <td>08/25/2020<br>
                        <span>6:00 PM</span>
                    </td>
                </tr>
                <!-- 5th Row  -->
                <tr>
                    <td>New Employees</td>
                    <td>Let us all welcom...</td>
                    <td>King, Chow</td>
                    <td></td>
                    <td>08/10/2020</td>
                    <td>08/15/2020<br>
                        <span>8:30 AM</span>
                    </td>
                    <td>08/18/2020<br>
                        <span>6:00 PM</span>
                    </td>
                </tr>
                <!-- 6th Row  -->
                <tr>
                    <td>Stocks as of Aug...</td>
                    <td>Our investors have...</td>
                    <td>Kin, Chow</td>
                    <td></td>
                    <td>07/30/2020</td>
                    <td>08/01/2020<br>
                        <span>8:30 AM</span>
                    </td>
                    <td>08/04/2020<br>
                        <span>6:00 PM</span>
                    </td>
                </tr>
                <!-- 7th Row  -->
                <tr>
                    <td>Tip of the Week</td>
                    <td>To stay hydrated, d...</td>
                    <td>Roe, Ken</td>
                    <td></td>
                    <td>02/26/2020</td>
                    <td>02/27/2020<br>
                        <span>9:00 AM</span>
                    </td>
                    <td>03/15/2020<br>
                        <span>6:00 PM</span>
                    </td>
                </tr>
                <!-- 8th Row  -->
                <tr>
                    <td>Employees of the M...</td>
                    <td>Congratulations to...</td>
                    <td>King, Chow</td>
                    <td></td>
                    <td>01/12/2020</td>
                    <td>01/13/2020<br>
                        <span>9:00 AM</span>
                    </td>
                    <td>01/14/2020<br>
                        <span>6:00 PM</span>
                    </td>
                </tr>
                <!-- 9th Row  -->
                <tr>
                    <td>Breakfast Menu</td>
                    <td>We will be introduci...</td>
                    <td>Gus, Amon</td>
                    <td></td>
                    <td>12/15/2019</td>
                    <td>12/20/2019<br>
                        <span>9:00 AM</span>
                    </td>
                    <td>12/20/2019<br>
                        <span>6:00 PM</span>
                    </td>
                </tr>
                <!-- 10th Row  -->
                <tr>
                    <td>Cafe Relocation</td>
                    <td>With the ongoing re...</td>
                    <td>Lavjsta, Asta</td>
                    <td></td>
                    <td>12/14/2019</td>
                    <td>12/15/2019<br>
                        <span>9:00 AM</span>
                    </td>
                    <td>12/19/2020<br>
                        <span>6:00 PM</span>
                    </td>
                </tr>
                <tr>
                    <td colspan="7" >
                        <div class="d-flex justify-content-between">
                            <div class="dropdown">Items per page 
                                <button class="btn dropdown-toggle item-page" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    10
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button class="dropdown-item" type="button">Action</button>
                                    <button class="dropdown-item" type="button">Another action</button>
                                    <button class="dropdown-item" type="button">Something else here</button>
                                </div>
                            </div>
                            <div class="pagination-center">
                                <button class="btn btn-arrow disabled" type="button" aria-expanded="false">
                                    <i class="fa fa-step-backward"></i>
                                </button>
                                <button class="btn btn-arrow disabled" type="button" aria-expanded="false">
                                    <i class="fa fa-caret-left"></i>
                                </button>
                                Page
                                <button class="btn item-page" type="button" aria-expanded="false">
                                    1
                                </button>
                                of 1
                                <button class="btn btn-arrow disabled" type="button" aria-expanded="false">
                                    <i class="fa fa-caret-right"></i>
                                </button>
                                <button class="btn btn-arrow disabled" type="button" aria-expanded="false">
                                    <i class="fa fa-step-forward"></i>
                                </button>
                            </div>
                            <div>
                                <p>Showing 1 - 10 of 1</p>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Back to top-->
    <div id="toTop">
      <i class="fa fa-arrow-up"></i>
    </div>
    </div>
    
</template>



<style>
    
    .main-content{
        padding: 50px;
    }
    .info{
        color: #1471EB;
        font-size: 18px;
    }
    .all-green{
        background: hsl(139, 100%, 95%);
        padding: 5px 10px;
        font-weight: 700;
        color: hsl(140, 77%, 38%);
        margin-right: 10px;
    }
    .all-green > span{
        background: hsl(140, 77%, 38%);
        padding: 0 5px;
        color: var(--ss-c-white);
        border-radius: 10px;
    }
    .all-orange > span{
        background: hsl(30, 100%, 50%);
        padding: 0 5px;
        color: var(--ss-c-white);
        border-radius: 10px;
        font-weight: 700;   
    }
    .post-btn{
        background: hsl(140, 77%, 38%);
    }
    .second-section{
        margin: 20px 0;
    }
    .search-bgnone{
        background: var(--ss-c-white);
    }
    .filter{
        margin-right: 20px;
    }
    .filter-drpdown{
        max-width: 500px;
        min-width: 280px;
    }
    .pagination-center > .btn-arrow{
        border: none;
    }
    .item-page{
        border: 1px solid var(--ss-c-gray);
        font-size: 14px;
    }
    td > span{
        color: var(--ss-c-gray);
        font-size: 14px;
    }
    td {
        font-weight: 400;
    }
    #toTop {
        padding: 3px 8px;
        background: rgba(0, 0, 0, 0.8);
        color: hsl(91, 41%, 44%);
        position: fixed;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        bottom: 0;
        right: 5px;
        font-size: 25px;
        display: none;
        transition: 0.9s;
    }
    #toTop:hover{
        cursor: pointer;
        color: hsl(91, 47%, 59%);
    }
    

</style>