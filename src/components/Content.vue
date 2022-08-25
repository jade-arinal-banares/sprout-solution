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
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa fa-plus"></i> Post an Announcement
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
            <div>
                <!-- <div class="dropdown">
                    <button class="btn dropdown-toggle filter-drpdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter by
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div> -->
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
                    <th scope="col">Sent Through</th>
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
                    <td colspan="7">
                        <div class="dropdown justify-content">Items per page 
                            <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                10
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">Action</button>
                                <button class="dropdown-item" type="button">Another action</button>
                                <button class="dropdown-item" type="button">Something else here</button>
                            </div>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination ">
                                <li class="page-item disabled">
                                <a class="page-link page" href="#" tabindex="-1"><font-awesome-icon icon="fa-solid fa-backward-fast" /></a>
                                </li>
                                <li class="page-item disabled">
                                <a class="page-link page" href="#" tabindex="-1"><font-awesome-icon icon="fa-solid fa-backward-fast" /></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>


                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



<style>
    
    .main-content{
        padding: 50px;
    }
    .all-green{
        background: hsl(139, 100%, 95%);
        padding: 5px 10px;
        font-weight: 700;
        color: hsl(140, 77%, 38%);
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

    .second-section{
        margin: 20px 0;
    }
    .search-bgnone{
        background: var(--ss-c-white);
    }
    .filter-drpdown{
        border: 1px solid var(--ss-c-gray);
    }

    td > span{
        color: var(--ss-c-gray);
        font-size: 14px;
    }
    td {
        font-weight: 400;
    }
</style>