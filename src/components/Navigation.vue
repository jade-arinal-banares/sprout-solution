

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div>
            <a class="navbar-brand" href="#">
                <img src="../icon/sJUdkghHsd.png" class="sprout-logo" alt=""> <span class="gray">|</span> HR
            </a>
        </div>
        <!--Burger Menu-->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <!--End of Burger Menu-->

        <!--Navigation Bar-->
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    My Requests 
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    My Team
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Company
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Administration Tools
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Maintenance
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                
                
                <li class="nav-item">
                    <!--Navigation Search Bar-->
                    <form class="form-inline" action="" method="GET">
                        <div class="input-group">
                            <input type="text" class="form-control customize-search" placeholder="employee search" aria-label="employee search" aria-describedby="basic-addon2" name="search">
                            <div class="input-group-append">
                                <span class="input-group-text bg-none" id="basic-addon2"><button class="search-btn" name="submit"><i class="fa fa-search"></i></button> </span>
                            </div>
                        </div>
                    </form>
                </li>

                <li class="nav-item dropdown row justify-content-end">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Admin
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">My Profile</a>
                        <a class="dropdown-item" href="#">Settings</a>
                        <a class="dropdown-item" href="#">Logout</a>
                    </div>
                </li>
            </ul>
            <!--End Navigation Bar-->
        </div>
    </nav>
    
</template>

<style>
    .sprout-logo{
        width: auto;
        height: 40px;
        margin-left: 20px;
    }
    .gray{
        color: var(--ss-c-gray);
    }
    .customize-search{
        background: none;
        border: none;
        color: var(--ss-c-white);
        text-align: center;
        border-radius: none;
        border-bottom: 5px solid var(--ss-c-gray);
  
    }
    .search-btn{
        background: none;
        padding: 2px;
        border: none;
        color: var(--ss-c-gray);
        transition: linear;
    }
    .search-btn:hover{
        color: var(--ss-c-white)
    }
    .bg-none{
        background: none;
        border: none;
        font-size: large;
    }

</style>

