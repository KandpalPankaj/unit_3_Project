function goodkartHeader() {
    return ` <div id="navbar">
    <div id="logo"><a href="goodkart.html"><img src="https://www.lybrate.com/img/Lybrate-Goodkart-Logo.png" alt=""></a></div>
    <div id="searchbar">
        <input type="text" name="searchbar" id="search" placeholder="Search for health products">
        <button><i class="material-icons">
                search
            </i></button>
    </div>
    <div id="signInDrop">
        <span id="loginUser">Hello, Sign in</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24">
            <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
        </svg>
        <div class="dropdown-content">
            <a href="#">Orders</a>
            <a href="#">Buy Again</a>
            <a href="#">Download App</a>
            <a href="#">Browse Health Categories</a>
            <a href="#">My Orders</a>
            <a href="#">My Offers</a>
            <a href="#">Health Feed</a>
            <a  href="login.html">Login/Signup</a>
            <a href="#">For Doctors</a>
            <a id="logout" href="#">Log Out </a>
        </div>

    </div>
    <div id="LybrateCash">
        <img src="https://nu.lybcdn.com/img/push-crew/logo_192_by_192.png" alt="Image"
            style="width: 20px; height: 20px;">
        <span>LybrateCash</span>
    </div>
    <div id="homebtn"><button>Home</button></div>
    <div id="cartdiv">
   
    <a id="cart" href="viewcart.html"><i class="material-icons">
            shopping_cart
        </i></a>
        </div>


</div>

<div id="category">

    <div id="shopbyCat"><span>Shop By Catagory</span> <svg xmlns="http://www.w3.org/2000/svg" height="16"
            width="16" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <g fill="white">
                <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
            </g>
        </svg>
        <div id="shop-dropdown">


            <a  href="sexualWellness.html"><svg xmlns="http://www.w3.org/2000/svg" height="18" width="18"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                        d="M21.108,0.967 C21.108,0.856 21.070,0.749 21.001,0.664 C20.852,0.480 20.851,0.480 16.504,0.536 C16.242,0.539 16.033,0.754 16.034,1.018 L16.036,2.451 C16.037,2.580 16.088,2.703 16.179,2.794 C16.269,2.883 16.391,2.927 16.520,2.931 L16.771,2.927 L15.933,3.773 C13.821,2.510 11.112,2.837 9.353,4.615 C8.634,5.340 8.167,6.222 7.937,7.152 C5.115,7.338 2.873,9.709 2.873,12.605 C2.873,15.119 4.560,17.285 6.937,17.900 L6.937,18.669 L5.848,18.669 C5.585,18.669 5.372,18.884 5.372,19.150 L5.372,20.896 C5.372,21.162 5.585,21.377 5.848,21.377 L6.937,21.377 L6.937,22.560 C6.937,22.825 7.150,23.041 7.413,23.041 L9.169,23.041 C9.432,23.041 9.645,22.825 9.645,22.560 L9.645,21.377 L10.735,21.377 C10.998,21.377 11.211,21.162 11.211,20.896 L11.211,19.150 C11.211,18.884 10.998,18.669 10.735,18.669 L9.645,18.669 L9.645,17.900 C11.589,17.397 13.070,15.856 13.546,13.937 C14.856,13.850 16.080,13.297 17.014,12.353 C18.774,10.576 19.098,7.841 17.848,5.707 L18.689,4.858 L18.686,5.121 C18.684,5.251 18.735,5.377 18.827,5.469 C18.919,5.560 19.037,5.615 19.173,5.607 L20.658,5.572 C20.917,5.566 21.124,5.352 21.123,5.090 L21.108,0.967 ZM9.348,12.349 C9.819,12.825 10.364,13.196 10.963,13.467 C10.601,14.609 9.540,15.438 8.291,15.438 C6.745,15.438 5.486,14.168 5.486,12.605 C5.486,11.167 6.555,9.977 7.932,9.798 C8.160,10.733 8.628,11.619 9.348,12.349 ZM9.085,17.040 C8.858,17.081 8.693,17.281 8.693,17.513 L8.693,19.150 C8.693,19.415 8.907,19.631 9.169,19.631 L10.259,19.631 L10.259,20.415 L9.169,20.415 C8.907,20.415 8.693,20.631 8.693,20.896 L8.693,22.079 L7.889,22.079 L7.889,20.896 C7.889,20.631 7.676,20.415 7.413,20.415 L6.324,20.415 L6.324,19.631 L7.413,19.631 C7.676,19.631 7.889,19.415 7.889,19.150 L7.889,17.513 C7.889,17.281 7.724,17.081 7.497,17.040 C5.370,16.654 3.825,14.789 3.825,12.605 C3.825,10.291 5.561,8.381 7.786,8.126 C7.770,8.367 7.770,8.609 7.786,8.850 C5.953,9.100 4.534,10.687 4.534,12.605 C4.534,14.698 6.220,16.400 8.291,16.400 C10.363,16.400 12.048,14.698 12.048,12.605 C12.048,11.449 11.516,10.356 10.624,9.639 C10.483,9.321 10.402,8.977 10.385,8.621 C11.829,9.392 12.757,10.912 12.757,12.605 C12.757,14.789 11.213,16.654 9.085,17.040 ZM10.514,7.617 C10.648,7.194 10.880,6.805 11.200,6.481 C11.730,5.946 12.434,5.651 13.184,5.651 C13.933,5.651 14.637,5.946 15.167,6.481 C15.697,7.016 15.988,7.728 15.988,8.484 C15.988,9.241 15.697,9.952 15.167,10.487 C14.725,10.934 14.161,11.210 13.551,11.290 C13.156,9.671 12.045,8.311 10.514,7.617 ZM19.644,4.635 L19.655,3.689 C19.658,3.493 19.543,3.316 19.364,3.240 C19.185,3.164 18.980,3.205 18.843,3.343 L16.904,5.301 C16.741,5.466 16.718,5.724 16.850,5.915 C18.084,7.708 17.870,10.129 16.341,11.673 C15.622,12.400 14.694,12.850 13.694,12.964 C13.702,12.845 13.709,12.726 13.709,12.605 C13.709,12.482 13.703,12.361 13.695,12.240 C14.504,12.129 15.253,11.760 15.840,11.167 C16.550,10.451 16.940,9.498 16.940,8.484 C16.940,7.471 16.550,6.518 15.840,5.801 C15.131,5.085 14.187,4.690 13.184,4.690 C12.180,4.690 11.237,5.085 10.527,5.801 C9.817,6.518 9.427,7.471 9.427,8.484 C9.427,9.498 9.817,10.451 10.527,11.167 C10.628,11.269 10.736,11.363 10.847,11.452 C10.987,11.769 11.070,12.110 11.088,12.462 C10.698,12.253 10.340,11.990 10.022,11.669 C8.285,9.911 8.287,7.051 10.026,5.295 C11.554,3.751 13.952,3.535 15.727,4.781 C15.916,4.915 16.173,4.891 16.335,4.727 L18.274,2.769 C18.411,2.630 18.451,2.422 18.376,2.241 C18.300,2.061 18.122,1.944 17.930,1.948 L16.987,1.963 L16.986,1.491 C18.110,1.477 19.461,1.460 20.158,1.453 L20.169,4.622 L19.644,4.635 Z">
                    </path>
                </svg>&nbsp;&nbsp; Sexual Wellness</a>


            <a href="foodAndDrink.html"><svg xmlns="http://www.w3.org/2000/svg" height="18" width="18"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                        d="M22.071,14.332 C21.639,12.883 20.873,11.913 19.795,11.451 C18.600,10.938 17.323,11.190 16.546,11.443 L16.546,10.607 C17.455,10.513 18.154,10.182 18.623,9.618 C19.424,8.655 19.235,7.386 19.226,7.333 C19.205,7.202 19.116,7.093 18.992,7.049 C18.101,6.728 17.181,7.196 16.546,7.665 L16.546,7.518 C16.546,7.252 16.331,7.036 16.066,7.036 C15.801,7.036 15.587,7.252 15.587,7.518 L15.587,11.496 C15.320,11.412 15.061,11.345 14.808,11.296 L14.808,7.603 L13.023,4.175 L13.023,0.960 L3.172,0.960 L3.172,4.178 L1.438,7.607 L1.438,23.520 L14.808,23.520 L14.808,21.861 C14.973,21.817 15.142,21.765 15.317,21.696 C16.142,21.369 16.840,21.711 16.885,21.733 C18.618,22.542 20.030,21.009 20.536,20.083 C22.563,16.316 22.128,14.526 22.071,14.332 ZM18.533,7.677 C18.540,8.013 18.490,8.651 18.072,9.154 C17.740,9.552 17.222,9.786 16.546,9.870 L16.546,8.600 C17.019,8.167 17.833,7.589 18.533,7.677 ZM13.570,7.304 L5.914,7.304 L4.684,4.807 L12.270,4.807 L13.570,7.304 ZM12.064,1.924 L12.064,3.844 L4.131,3.844 L4.131,1.924 L12.064,1.924 ZM3.770,5.123 L4.844,7.304 L2.667,7.304 L3.770,5.123 ZM2.397,8.268 L5.165,8.268 L5.165,22.556 L2.397,22.556 L2.397,8.268 ZM6.124,22.556 L6.124,8.268 L13.849,8.268 L13.849,11.189 C13.248,11.178 12.695,11.278 12.196,11.496 C10.940,12.045 10.506,13.128 10.506,13.134 C9.372,15.414 10.927,18.604 11.779,20.354 C12.274,21.369 12.969,21.902 13.849,21.963 L13.849,22.556 L6.124,22.556 ZM19.695,19.621 C19.653,19.697 18.636,21.490 17.307,20.868 C17.262,20.845 16.206,20.309 14.966,20.799 C13.832,21.248 13.159,20.996 12.623,19.894 C11.915,18.442 10.442,15.418 11.380,13.528 C11.410,13.456 11.966,12.153 13.775,12.153 C14.339,12.153 15.026,12.280 15.858,12.612 C15.986,12.663 16.130,12.656 16.253,12.593 C16.269,12.584 17.981,11.720 19.419,12.337 C20.222,12.682 20.806,13.446 21.150,14.599 C21.154,14.615 21.533,16.206 19.695,19.621 Z">
                    </path>
                </svg>&nbsp;&nbsp; Food & Drink</a>


            <a href="vitaminAndSuppliment.html"><svg xmlns="http://www.w3.org/2000/svg" height="18" width="18"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                        d="M23.519,8.094 L23.519,21.842 C23.519,22.767 22.765,23.520 21.838,23.520 L14.390,23.520 C13.463,23.520 12.709,22.767 12.709,21.842 L12.709,8.094 C12.709,7.024 13.462,6.127 14.466,5.902 L14.466,5.559 C13.651,5.541 12.993,4.876 12.993,4.058 L12.993,2.464 C12.993,1.635 13.669,0.960 14.500,0.960 L21.757,0.960 C22.588,0.960 23.265,1.635 23.265,2.464 L23.265,4.058 C23.265,4.886 22.591,5.559 21.762,5.562 L21.762,5.902 C22.767,6.127 23.519,7.024 23.519,8.094 ZM13.695,21.842 C13.695,22.224 14.007,22.535 14.390,22.535 L21.838,22.535 C22.221,22.535 22.533,22.224 22.533,21.842 L22.533,20.478 L13.695,20.478 L13.695,21.842 ZM13.695,19.494 L22.533,19.494 L22.533,9.993 L13.695,9.993 L13.695,19.494 ZM22.278,4.058 L22.278,2.464 C22.278,2.178 22.044,1.945 21.757,1.945 L14.500,1.945 C14.213,1.945 13.979,2.178 13.979,2.464 L13.979,4.058 C13.979,4.345 14.213,4.578 14.500,4.578 L21.757,4.578 C22.044,4.578 22.278,4.345 22.278,4.058 ZM21.269,6.832 L20.776,6.832 L20.776,5.563 L15.453,5.563 L15.453,6.832 L14.959,6.832 C14.262,6.832 13.695,7.398 13.695,8.094 L13.695,9.009 L22.533,9.009 L22.533,8.094 C22.533,7.398 21.966,6.832 21.269,6.832 ZM21.063,4.123 C20.927,4.123 20.817,4.013 20.817,3.877 L20.817,2.646 C20.817,2.510 20.927,2.400 21.063,2.400 C21.200,2.400 21.310,2.510 21.310,2.646 L21.310,3.877 C21.310,4.013 21.200,4.123 21.063,4.123 ZM19.584,4.123 C19.447,4.123 19.337,4.013 19.337,3.877 L19.337,2.646 C19.337,2.510 19.447,2.400 19.584,2.400 C19.720,2.400 19.830,2.510 19.830,2.646 L19.830,3.877 C19.830,4.013 19.720,4.123 19.584,4.123 ZM18.104,4.123 C17.968,4.123 17.857,4.013 17.857,3.877 L17.857,2.646 C17.857,2.510 17.968,2.400 18.104,2.400 C18.240,2.400 18.350,2.510 18.350,2.646 L18.350,3.877 C18.350,4.013 18.240,4.123 18.104,4.123 ZM16.624,4.123 C16.488,4.123 16.377,4.013 16.377,3.877 L16.377,2.646 C16.377,2.510 16.488,2.400 16.624,2.400 C16.760,2.400 16.871,2.510 16.871,2.646 L16.871,3.877 C16.871,4.013 16.760,4.123 16.624,4.123 ZM15.194,4.123 C15.057,4.123 14.947,4.013 14.947,3.877 L14.947,2.646 C14.947,2.510 15.057,2.400 15.194,2.400 C15.330,2.400 15.440,2.510 15.440,2.646 L15.440,3.877 C15.440,4.013 15.330,4.123 15.194,4.123 ZM18.468,18.296 L18.176,18.512 L17.883,18.296 C16.298,17.132 14.479,15.562 14.479,13.747 C14.479,12.692 15.368,11.562 16.692,11.562 C17.298,11.562 17.796,11.894 18.176,12.256 C18.556,11.894 19.053,11.562 19.660,11.562 C20.983,11.562 21.872,12.692 21.872,13.747 C21.872,15.562 20.053,17.132 18.468,18.296 ZM19.660,12.547 C19.342,12.547 18.980,12.792 18.552,13.295 L18.176,13.740 L17.799,13.295 C17.372,12.792 17.010,12.547 16.692,12.547 C15.902,12.547 15.466,13.256 15.466,13.747 C15.466,15.033 16.935,16.346 18.176,17.286 C19.417,16.346 20.886,15.033 20.886,13.747 C20.886,13.256 20.449,12.547 19.660,12.547 ZM10.091,23.520 L2.643,23.520 C1.715,23.520 0.961,22.767 0.961,21.842 L0.961,8.094 C0.961,7.024 1.714,6.127 2.719,5.902 L2.719,5.559 C1.903,5.541 1.245,4.876 1.245,4.058 L1.245,2.464 C1.245,1.635 1.921,0.960 2.753,0.960 L10.009,0.960 C10.841,0.960 11.517,1.635 11.517,2.464 L11.517,4.058 C11.517,4.886 10.843,5.559 10.015,5.562 L10.015,5.902 C11.019,6.127 11.772,7.024 11.772,8.094 L11.772,21.842 C11.772,22.767 11.018,23.520 10.091,23.520 ZM10.530,4.058 L10.530,2.464 C10.530,2.178 10.297,1.945 10.009,1.945 L2.753,1.945 C2.465,1.945 2.231,2.178 2.231,2.464 L2.231,4.058 C2.231,4.345 2.465,4.578 2.753,4.578 L10.009,4.578 C10.297,4.578 10.530,4.345 10.530,4.058 ZM10.785,8.094 C10.785,7.398 10.218,6.832 9.521,6.832 L9.028,6.832 L9.028,5.563 L3.705,5.563 L3.705,6.832 L3.212,6.832 C2.515,6.832 1.948,7.398 1.948,8.094 L1.948,9.009 L10.785,9.009 L10.785,8.094 ZM10.785,9.993 L1.948,9.993 L1.948,19.494 L10.785,19.494 L10.785,9.993 ZM10.785,20.478 L1.948,20.478 L1.948,21.842 C1.948,22.224 2.260,22.535 2.643,22.535 L10.091,22.535 C10.474,22.535 10.785,22.224 10.785,21.842 L10.785,20.478 ZM4.241,12.116 L8.465,12.116 C8.737,12.116 8.958,12.336 8.958,12.608 C8.958,12.880 8.737,13.100 8.465,13.100 L4.241,13.100 C3.969,13.100 3.748,12.880 3.748,12.608 C3.748,12.336 3.969,12.116 4.241,12.116 ZM4.241,14.233 L8.465,14.233 C8.737,14.233 8.958,14.453 8.958,14.725 C8.958,14.997 8.737,15.217 8.465,15.217 L4.241,15.217 C3.969,15.217 3.748,14.997 3.748,14.725 C3.748,14.453 3.969,14.233 4.241,14.233 ZM4.241,16.399 L8.465,16.399 C8.737,16.399 8.958,16.619 8.958,16.891 C8.958,17.163 8.737,17.383 8.465,17.383 L4.241,17.383 C3.969,17.383 3.748,17.163 3.748,16.891 C3.748,16.619 3.969,16.399 4.241,16.399 ZM9.330,4.123 C9.194,4.123 9.084,4.013 9.084,3.877 L9.084,2.646 C9.084,2.510 9.194,2.400 9.330,2.400 C9.467,2.400 9.577,2.510 9.577,2.646 L9.577,3.877 C9.577,4.013 9.467,4.123 9.330,4.123 ZM7.851,4.123 C7.714,4.123 7.604,4.013 7.604,3.877 L7.604,2.646 C7.604,2.510 7.714,2.400 7.851,2.400 C7.987,2.400 8.097,2.510 8.097,2.646 L8.097,3.877 C8.097,4.013 7.987,4.123 7.851,4.123 ZM6.371,4.123 C6.234,4.123 6.124,4.013 6.124,3.877 L6.124,2.646 C6.124,2.510 6.234,2.400 6.371,2.400 C6.507,2.400 6.617,2.510 6.617,2.646 L6.617,3.877 C6.617,4.013 6.507,4.123 6.371,4.123 ZM4.891,4.123 C4.755,4.123 4.644,4.013 4.644,3.877 L4.644,2.646 C4.644,2.510 4.755,2.400 4.891,2.400 C5.027,2.400 5.138,2.510 5.138,2.646 L5.138,3.877 C5.138,4.013 5.027,4.123 4.891,4.123 ZM3.460,4.123 C3.324,4.123 3.214,4.013 3.214,3.877 L3.214,2.646 C3.214,2.510 3.324,2.400 3.460,2.400 C3.597,2.400 3.707,2.510 3.707,2.646 L3.707,3.877 C3.707,4.013 3.597,4.123 3.460,4.123 Z">
                    </path>
                </svg>&nbsp;&nbsp; Vitamin & supplement</a>

            <a href="weightManagement.html"><svg xmlns="http://www.w3.org/2000/svg" height="18" width="18"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                        d="M19.846,23.520 L3.676,23.520 C2.177,23.520 0.958,22.294 0.958,20.786 L0.958,3.694 C0.958,2.186 2.177,0.960 3.676,0.960 L19.846,0.960 C21.345,0.960 22.564,2.186 22.564,3.694 L22.564,20.786 C22.564,22.294 21.345,23.520 19.846,23.520 ZM21.609,3.694 C21.609,2.716 20.818,1.920 19.846,1.920 L3.676,1.920 C2.704,1.920 1.913,2.716 1.913,3.694 L1.913,20.786 C1.913,21.764 2.704,22.560 3.676,22.560 L19.846,22.560 C20.818,22.560 21.609,21.764 21.609,20.786 L21.609,3.694 ZM18.660,7.981 L15.900,10.669 C15.753,10.813 15.564,10.884 15.375,10.884 C15.194,10.884 15.013,10.818 14.872,10.683 C14.057,9.909 12.880,9.447 11.725,9.447 C10.580,9.447 9.453,9.896 8.634,10.677 C8.345,10.952 7.880,10.943 7.596,10.658 L4.979,8.037 C4.686,7.744 4.681,7.267 4.968,6.974 C5.515,6.416 6.129,5.939 6.782,5.531 C6.802,5.508 6.820,5.483 6.846,5.465 C6.888,5.436 6.934,5.418 6.980,5.409 C7.641,5.018 8.339,4.699 9.067,4.474 C9.078,4.469 9.086,4.460 9.097,4.456 C9.120,4.449 9.143,4.451 9.166,4.448 C10.036,4.189 10.938,4.048 11.848,4.048 C14.344,4.048 16.832,5.112 18.674,6.968 C18.806,7.102 18.879,7.281 18.877,7.472 C18.875,7.663 18.796,7.848 18.661,7.981 L18.660,7.981 ZM16.584,6.202 L15.622,7.627 C15.553,7.730 15.440,7.785 15.326,7.785 C15.257,7.785 15.187,7.765 15.125,7.723 C14.962,7.611 14.919,7.387 15.030,7.223 L15.968,5.833 C15.504,5.583 15.020,5.377 14.525,5.213 L14.237,6.082 C14.187,6.232 14.048,6.328 13.898,6.328 C13.860,6.328 13.822,6.322 13.784,6.309 C13.597,6.246 13.495,6.042 13.558,5.854 L13.835,5.019 C13.270,4.881 12.696,4.802 12.119,4.782 L12.119,5.660 C12.119,5.859 11.959,6.020 11.761,6.020 C11.564,6.020 11.403,5.859 11.403,5.660 L11.403,4.791 C10.818,4.822 10.240,4.912 9.674,5.058 L9.938,5.854 C10.000,6.042 9.899,6.246 9.711,6.309 C9.674,6.322 9.636,6.328 9.598,6.328 C9.448,6.328 9.308,6.232 9.259,6.082 L8.988,5.264 C8.499,5.434 8.022,5.640 7.567,5.892 L8.466,7.223 C8.577,7.387 8.534,7.611 8.371,7.723 C8.309,7.765 8.239,7.785 8.170,7.785 C8.055,7.785 7.943,7.730 7.873,7.627 L6.955,6.266 C6.426,6.617 5.928,7.020 5.478,7.479 C5.469,7.489 5.470,7.513 5.484,7.527 L8.101,10.148 C8.898,9.424 9.899,8.952 10.951,8.792 L11.761,6.982 L12.571,8.800 C13.619,8.969 14.606,9.441 15.363,10.160 L18.161,7.465 C17.680,6.982 17.147,6.564 16.584,6.202 ZM5.109,15.439 L18.291,15.439 C18.489,15.439 18.649,15.600 18.649,15.799 C18.649,15.998 18.489,16.159 18.291,16.159 L5.109,16.159 C4.911,16.159 4.751,15.998 4.751,15.799 C4.751,15.600 4.911,15.439 5.109,15.439 ZM5.109,17.532 L18.291,17.532 C18.489,17.532 18.649,17.694 18.649,17.892 C18.649,18.091 18.489,18.252 18.291,18.252 L5.109,18.252 C4.911,18.252 4.751,18.091 4.751,17.892 C4.751,17.694 4.911,17.532 5.109,17.532 ZM7.068,19.700 L16.332,19.700 C16.530,19.700 16.690,19.861 16.690,20.060 C16.690,20.259 16.530,20.420 16.332,20.420 L7.068,20.420 C6.870,20.420 6.710,20.259 6.710,20.060 C6.710,19.861 6.870,19.700 7.068,19.700 Z">
                    </path>
                </svg>&nbsp;&nbsp; Weight Management</a>

            <a href="childCare.html"><svg xmlns="http://www.w3.org/2000/svg" height="18" width="18"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                        d="M20.045,12.436 L16.661,8.886 C15.972,8.168 15.007,7.756 14.013,7.756 L13.330,7.756 C14.514,7.172 15.333,5.953 15.333,4.542 C15.333,2.567 13.732,0.960 11.764,0.960 C9.796,0.960 8.195,2.567 8.195,4.542 C8.195,5.953 9.014,7.172 10.198,7.756 L9.528,7.756 C8.556,7.756 7.640,8.133 6.947,8.818 L5.569,10.179 L3.518,12.258 C2.879,12.903 2.880,13.952 3.522,14.595 C4.145,15.221 5.231,15.220 5.854,14.595 L7.862,12.580 L7.862,15.556 L5.920,17.505 C5.085,18.343 5.085,19.706 5.920,20.543 L8.391,23.023 C8.710,23.344 9.135,23.520 9.586,23.520 C10.038,23.520 10.463,23.344 10.782,23.023 C11.102,22.702 11.278,22.276 11.278,21.823 C11.278,21.370 11.102,20.943 10.788,20.629 L9.571,19.361 L11.049,17.943 C11.275,17.988 11.503,18.018 11.734,18.018 C11.989,18.018 12.240,17.980 12.488,17.926 L13.983,19.361 L12.772,20.623 C12.452,20.943 12.276,21.370 12.276,21.823 C12.276,22.276 12.452,22.702 12.772,23.023 C13.091,23.344 13.516,23.520 13.968,23.520 C14.419,23.520 14.844,23.344 15.163,23.023 L17.634,20.543 C18.039,20.138 18.261,19.598 18.261,19.024 C18.261,18.450 18.039,17.911 17.634,17.505 L15.753,15.617 L15.753,12.663 L17.810,14.688 C18.435,15.289 19.435,15.271 20.038,14.649 C20.642,14.028 20.642,13.054 20.045,12.436 ZM9.152,4.542 C9.152,3.096 10.324,1.920 11.764,1.920 C13.205,1.920 14.377,3.096 14.377,4.542 C14.377,5.988 13.205,7.164 11.764,7.164 C10.324,7.164 9.152,5.988 9.152,4.542 ZM8.877,18.698 C8.701,18.867 8.601,19.095 8.595,19.340 C8.590,19.585 8.680,19.817 8.849,19.993 L10.106,21.302 C10.245,21.441 10.321,21.626 10.321,21.823 C10.321,22.020 10.245,22.205 10.106,22.344 C9.828,22.623 9.345,22.623 9.067,22.344 L6.596,19.864 C6.134,19.401 6.134,18.647 6.596,18.184 L8.385,16.389 L9.602,17.305 C9.741,17.410 9.889,17.500 10.041,17.582 L8.877,18.698 ZM10.176,16.537 L8.818,15.515 L8.818,15.071 L14.796,15.071 L14.796,15.371 L13.319,16.515 C12.426,17.207 11.080,17.217 10.176,16.537 ZM17.305,19.024 C17.305,19.342 17.181,19.640 16.958,19.864 L14.487,22.344 C14.210,22.623 13.726,22.623 13.448,22.344 C13.309,22.205 13.233,22.020 13.233,21.823 C13.233,21.626 13.309,21.441 13.455,21.295 L14.704,19.993 C14.874,19.817 14.964,19.585 14.959,19.340 C14.954,19.095 14.854,18.867 14.677,18.699 L13.481,17.550 C13.627,17.467 13.771,17.379 13.904,17.275 L15.116,16.336 L16.958,18.184 C17.181,18.409 17.305,18.707 17.305,19.024 ZM14.015,19.327 L14.015,19.326 L14.015,19.327 L14.015,19.327 ZM19.354,13.979 C19.115,14.225 18.719,14.232 18.475,13.998 L14.796,10.377 L14.796,14.111 L8.818,14.111 L8.818,10.262 L5.177,13.916 C4.908,14.187 4.469,14.188 4.198,13.916 C3.929,13.646 3.928,13.206 4.197,12.934 L6.245,10.859 L7.618,9.502 C8.131,8.995 8.809,8.716 9.528,8.716 L14.013,8.716 C14.748,8.716 15.463,9.021 15.973,9.552 L19.354,13.101 C19.593,13.348 19.592,13.733 19.354,13.979 Z">
                    </path>
                </svg>&nbsp;&nbsp;Child Care</a>

            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="18" width="18"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                        d="M22.202,21.410 L21.280,21.410 L21.280,21.660 C21.280,22.422 20.659,23.041 19.894,23.041 L18.628,23.041 C18.133,23.041 17.730,22.639 17.730,22.145 L17.730,20.498 L11.600,20.498 L11.600,22.145 C11.600,22.639 11.197,23.041 10.701,23.041 L9.435,23.041 C8.671,23.041 8.050,22.422 8.050,21.660 L8.050,21.410 L7.127,21.410 C6.401,21.410 5.810,20.821 5.810,20.097 L5.810,19.508 L2.886,19.508 C1.824,19.508 0.960,18.646 0.960,17.587 L0.960,8.010 C0.960,7.943 0.974,6.399 2.209,5.747 C2.550,5.486 2.766,4.794 2.874,4.242 C2.508,4.108 2.245,3.760 2.245,3.350 L2.245,1.913 C2.245,1.386 2.675,0.958 3.203,0.958 L11.811,0.958 C12.339,0.958 12.769,1.386 12.769,1.913 L12.769,3.350 C12.769,3.814 12.433,4.201 11.992,4.286 C12.104,4.851 12.322,5.497 12.649,5.747 C13.884,6.399 13.898,7.943 13.898,8.010 L13.898,17.929 L17.730,17.929 L17.730,16.359 C17.730,15.865 18.133,15.463 18.628,15.463 L19.894,15.463 C20.659,15.463 21.280,16.083 21.280,16.845 L21.280,17.114 L22.202,17.114 C22.929,17.114 23.520,17.703 23.520,18.427 L23.520,20.097 C23.520,20.821 22.929,21.410 22.202,21.410 ZM9.010,21.660 C9.010,21.894 9.201,22.084 9.435,22.084 L10.640,22.084 L10.640,16.420 L9.435,16.420 C9.201,16.420 9.010,16.611 9.010,16.845 L9.010,21.660 ZM6.770,20.097 C6.770,20.293 6.930,20.453 7.127,20.453 L8.050,20.453 L8.050,18.071 L7.127,18.071 C6.930,18.071 6.770,18.230 6.770,18.427 L6.770,20.097 ZM11.809,1.913 L3.203,1.915 L3.205,3.350 L11.809,3.347 L11.809,1.913 ZM11.811,3.347 L11.811,3.736 L11.811,3.736 L11.812,3.347 L11.811,3.347 ZM12.179,6.582 L12.120,6.547 C11.417,6.055 11.131,4.957 11.019,4.304 L3.839,4.304 C3.728,4.957 3.441,6.055 2.738,6.547 L2.679,6.582 C2.194,6.826 2.021,7.355 1.958,7.696 L12.901,7.696 C12.837,7.355 12.664,6.827 12.179,6.582 ZM12.938,8.653 L1.920,8.653 L1.920,14.376 L12.938,14.376 L12.938,8.653 ZM12.938,15.333 L1.920,15.333 L1.920,17.587 C1.920,18.118 2.353,18.551 2.886,18.551 L5.810,18.551 L5.810,18.427 C5.810,17.703 6.401,17.114 7.127,17.114 L8.050,17.114 L8.050,16.845 C8.050,16.083 8.671,15.463 9.435,15.463 L10.701,15.463 C11.197,15.463 11.600,15.865 11.600,16.359 L11.600,17.929 L12.938,17.929 L12.938,15.333 ZM17.730,18.886 L11.600,18.886 L11.600,19.541 L17.730,19.541 L17.730,18.886 ZM20.320,16.845 C20.320,16.611 20.129,16.420 19.894,16.420 L18.690,16.420 L18.690,22.084 L19.894,22.084 C20.129,22.084 20.320,21.894 20.320,21.660 L20.320,16.845 ZM22.560,18.427 C22.560,18.230 22.399,18.071 22.202,18.071 L21.280,18.071 L21.280,20.453 L22.202,20.453 C22.399,20.453 22.560,20.293 22.560,20.097 L22.560,18.427 ZM7.362,9.335 C7.530,9.130 7.832,9.098 8.038,9.264 C8.244,9.430 8.276,9.731 8.109,9.937 L7.357,10.864 L8.612,11.263 C8.756,11.308 8.870,11.419 8.920,11.562 C8.969,11.704 8.949,11.861 8.864,11.986 L7.768,13.603 C7.676,13.740 7.524,13.813 7.370,13.813 C7.278,13.813 7.184,13.787 7.102,13.731 C6.882,13.583 6.825,13.286 6.973,13.067 L7.710,11.980 L6.397,11.563 C6.246,11.515 6.128,11.395 6.083,11.244 C6.037,11.093 6.070,10.929 6.169,10.806 L7.362,9.335 Z">
                    </path>
                </svg> &nbsp;&nbsp;Protein & Fitness</a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="18" width="18"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                        d="M19.444,15.087 C18.178,20.211 15.332,23.520 12.182,23.520 C9.058,23.520 6.219,20.247 4.943,15.179 C4.611,14.447 2.402,9.098 6.757,5.406 C6.894,2.970 8.858,0.960 11.175,0.960 L13.219,0.960 C15.558,0.960 17.537,3.003 17.627,5.459 C22.079,9.072 19.816,14.310 19.444,15.087 ZM5.891,14.998 C7.061,19.594 9.524,22.560 12.182,22.560 C14.856,22.560 17.319,19.577 18.485,14.949 L18.433,14.423 C18.127,11.237 17.862,8.486 12.163,8.339 C10.042,8.286 8.432,8.844 7.366,10.001 C5.573,11.949 5.888,14.965 5.891,14.995 C5.891,14.996 5.890,14.997 5.891,14.998 ZM9.567,2.382 C8.671,2.918 7.986,3.870 7.775,4.963 C8.222,4.820 8.854,4.648 9.634,4.514 C9.422,3.705 9.472,2.932 9.567,2.382 ZM14.239,2.096 C13.914,1.984 13.572,1.920 13.219,1.920 L11.175,1.920 C10.809,1.920 10.453,1.992 10.115,2.118 C9.998,2.602 9.859,3.508 10.114,4.440 C11.260,4.282 12.670,4.225 14.245,4.439 C14.505,3.491 14.357,2.573 14.239,2.096 ZM14.784,2.341 C14.884,2.893 14.942,3.684 14.725,4.513 C15.334,4.615 15.963,4.755 16.612,4.950 C16.408,3.825 15.711,2.864 14.784,2.341 ZM16.795,6.022 C11.648,4.287 7.463,6.095 7.421,6.114 L7.395,6.126 C5.044,8.109 4.840,10.611 5.119,12.426 C5.344,11.420 5.791,10.293 6.657,9.352 C7.919,7.981 9.778,7.313 12.188,7.380 C17.707,7.521 18.822,10.101 19.220,12.811 C19.631,10.964 19.621,8.154 16.795,6.022 ZM10.980,11.453 C11.103,11.501 11.165,11.640 11.116,11.764 C11.068,11.887 10.928,11.948 10.805,11.900 C9.122,11.244 7.604,12.836 7.589,12.852 C7.542,12.903 7.477,12.928 7.413,12.928 C7.354,12.928 7.295,12.907 7.249,12.864 C7.152,12.773 7.147,12.621 7.237,12.524 C7.308,12.449 8.995,10.680 10.980,11.453 ZM8.376,13.584 C8.386,13.588 9.497,13.883 10.639,13.639 C10.768,13.610 10.896,13.694 10.924,13.823 C10.952,13.953 10.870,14.081 10.740,14.108 C10.366,14.188 9.999,14.217 9.667,14.217 C8.878,14.217 8.283,14.057 8.248,14.047 C8.120,14.012 8.045,13.880 8.080,13.753 C8.115,13.625 8.247,13.550 8.376,13.584 ZM12.158,18.492 C12.477,18.396 13.566,18.145 14.346,18.923 L14.416,18.994 L14.416,19.093 C14.416,19.110 14.393,20.733 12.382,20.829 C12.325,20.832 12.270,20.833 12.215,20.833 C10.379,20.833 9.988,19.317 9.984,19.301 L9.956,19.185 L10.032,19.093 C10.333,18.726 11.154,18.143 12.158,18.492 ZM12.238,18.971 L12.151,19.003 L12.065,18.969 C11.464,18.732 10.981,18.944 10.693,19.145 C11.367,19.336 12.778,19.628 13.761,19.081 C13.091,18.669 12.248,18.968 12.238,18.971 ZM12.359,20.350 C13.226,20.308 13.611,19.933 13.786,19.603 C13.331,19.804 12.829,19.879 12.344,19.879 C11.699,19.879 11.094,19.752 10.678,19.640 C10.923,19.986 11.412,20.396 12.359,20.350 ZM13.357,13.753 C13.392,13.625 13.524,13.550 13.652,13.584 C13.663,13.588 14.774,13.883 15.915,13.639 C16.046,13.610 16.173,13.694 16.201,13.823 C16.229,13.953 16.146,14.081 16.016,14.108 C15.643,14.188 15.276,14.217 14.944,14.217 C14.155,14.217 13.560,14.057 13.525,14.047 C13.397,14.012 13.322,13.880 13.357,13.753 ZM13.502,11.900 C13.378,11.947 13.239,11.887 13.190,11.764 C13.142,11.640 13.203,11.501 13.327,11.453 C15.312,10.680 16.999,12.449 17.070,12.524 C17.160,12.621 17.155,12.773 17.058,12.863 C17.011,12.907 16.952,12.928 16.894,12.928 C16.829,12.928 16.765,12.903 16.718,12.852 C16.703,12.836 15.180,11.246 13.502,11.900 ZM13.471,15.949 C13.603,15.964 13.698,16.083 13.683,16.214 C13.667,16.346 13.547,16.440 13.417,16.425 C13.343,16.417 13.105,16.419 12.984,16.522 C12.951,16.550 12.907,16.601 12.901,16.719 C12.895,16.847 12.789,16.947 12.661,16.947 C12.657,16.947 12.653,16.947 12.649,16.947 C12.517,16.941 12.414,16.828 12.420,16.696 C12.431,16.474 12.519,16.286 12.674,16.155 C12.975,15.900 13.421,15.942 13.471,15.949 ZM11.890,16.947 C11.886,16.947 11.882,16.947 11.878,16.947 C11.750,16.947 11.644,16.847 11.638,16.719 C11.632,16.601 11.587,16.550 11.554,16.522 C11.434,16.419 11.197,16.419 11.122,16.425 C10.989,16.441 10.871,16.344 10.857,16.213 C10.842,16.082 10.936,15.964 11.068,15.949 C11.118,15.943 11.564,15.900 11.865,16.155 C12.020,16.286 12.108,16.474 12.118,16.696 C12.125,16.828 12.022,16.941 11.890,16.947 Z">
                    </path>
                </svg>&nbsp;&nbsp; Skin & Hair Care</a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="18" width="18"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                        d="M18.771,5.626 C19.452,5.626 20.006,6.179 20.006,6.859 L20.006,7.968 C20.992,8.626 21.599,9.730 21.599,10.924 L21.599,22.245 C21.599,22.944 21.029,23.513 20.328,23.513 L13.357,23.513 C12.657,23.513 12.087,22.944 12.087,22.245 L12.087,10.924 C12.087,9.721 12.696,8.619 13.693,7.961 L13.693,6.859 C13.693,6.179 14.247,5.626 14.928,5.626 L15.988,5.626 L15.988,3.946 L15.964,3.946 C15.720,3.946 15.522,3.748 15.522,3.505 L15.522,1.666 C15.522,1.423 15.720,1.225 15.964,1.225 L17.682,1.225 C17.926,1.225 18.125,1.423 18.125,1.666 L18.125,1.766 L20.566,1.766 C20.810,1.766 21.008,1.964 21.008,2.207 L21.008,2.964 C21.008,3.207 20.810,3.405 20.566,3.405 L18.125,3.405 L18.125,3.505 C18.125,3.748 17.926,3.946 17.682,3.946 L17.640,3.946 L17.640,5.626 L18.771,5.626 ZM18.125,2.923 L20.525,2.923 L20.525,2.248 L18.125,2.248 L18.125,2.923 ZM13.054,22.245 C13.054,22.412 13.190,22.548 13.357,22.548 L20.328,22.548 C20.496,22.548 20.632,22.412 20.632,22.245 L20.632,19.657 L13.054,19.657 L13.054,22.245 ZM13.054,18.934 L20.632,18.934 L20.632,12.132 L13.054,12.132 L13.054,18.934 ZM13.054,10.924 L13.054,11.408 L20.632,11.408 L20.632,10.924 C20.632,10.020 20.155,9.184 19.385,8.713 L14.309,8.713 C13.533,9.186 13.054,10.015 13.054,10.924 ZM17.642,3.464 L17.642,1.707 L16.005,1.707 L16.005,3.464 L17.642,3.464 ZM16.472,3.946 L16.472,5.626 L17.157,5.626 L17.157,3.946 L16.472,3.946 ZM14.928,6.591 C14.780,6.591 14.660,6.711 14.660,6.859 L14.660,7.749 L19.039,7.749 L19.039,6.859 C19.039,6.711 18.919,6.591 18.771,6.591 L14.928,6.591 ZM10.669,20.518 C10.694,20.829 10.696,21.451 10.699,22.797 C10.699,23.196 10.373,23.520 9.973,23.520 L4.986,23.520 C4.586,23.520 4.260,23.195 4.260,22.797 L4.260,20.482 L2.882,3.157 L2.884,1.719 C2.885,1.300 3.227,0.960 3.646,0.960 L11.251,0.960 C11.670,0.960 12.012,1.300 12.013,1.719 L12.016,3.172 L10.676,20.519 L10.669,20.518 ZM8.316,22.555 C8.169,22.222 7.836,21.989 7.448,21.989 C7.061,21.989 6.728,22.222 6.581,22.555 L8.316,22.555 ZM5.227,22.555 L6.074,22.555 C6.242,21.952 6.791,21.506 7.448,21.506 C8.105,21.506 8.655,21.952 8.823,22.555 L9.731,22.555 C9.729,21.781 9.726,21.228 9.722,20.896 L5.226,20.896 L5.227,22.555 ZM11.047,1.925 L3.850,1.925 L3.848,2.762 L11.050,2.762 L11.047,1.925 ZM3.876,3.486 L5.204,20.172 L9.733,20.172 L11.024,3.486 L3.876,3.486 Z">
                    </path>
                </svg>&nbsp;&nbsp;Personal Care</a>
        </div>
    </div>

    <div>Redeem LybrateCash</div>

    <div id="sexualWell"><span>Sexual Wellness</span> <svg xmlns="http://www.w3.org/2000/svg" height="16"
            width="16" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <g fill="white">
                <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
            </g>
        </svg>
        <!-- dropDown Menu -->



        <!-- <div id="wellness-drop">
            <a href="#">Women Sexual Wellness</a>
            <a href="#">Men Performance Enhancers</a>
        </div> -->
    </div>

    <div id="food"><a>Food & Drink</a> <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <g fill="white">
                <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
            </g>
        </svg>
        <!-- DropDown Menu -->


        <!-- <div id="food-drop">
            <a href="#">Healthy Breakfast</a>
            <a href="#">Jams, Honey & Spreads</a>
            <a href="#">Ready to Eat</a>
            <a href="#">Healthy Drinks</a>
            <a href="#">Oil & Ghees</a>
            <a href="#">Snack Foods</a>
            <a href="#">Tea & Coffee</a>
        </div> -->
    </div>

    <div id="vitamin"><span>Vitamin & Supplement</span> <svg xmlns="http://www.w3.org/2000/svg" height="16"
            width="16" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <g fill="white">
                <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
            </g>
        </svg>
        <!-- dropDown Menu -->



    </div>

    <div id="weight"><span>Weight Management</span> <svg xmlns="http://www.w3.org/2000/svg" height="16"
            width="16" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <g fill="white">
                <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
            </g>
        </svg>
        <!-- DropDown Menu -->



    </div>

    <div id="childcare">Child Care <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <g fill="white">
                <path ng-attr-d="{{$root.icons[ctrl.p]}}"
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
            </g>
        </svg>

        <!-- dropdown Menu -->




    </div>

</div>`
};




function slide(parent, imArr) {
    let ul = document.createElement("ul");
    ul.setAttribute("id", "slideWrap");
    imArr.map((el) => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = el.img;
        li.append(img);
        ul.append(li)
    })
    let pre = document.createElement("a");
    pre.setAttribute("id", "prev");
    pre.href = "#";
    pre.innerText = "≪";

    let next = document.createElement("a");
    next.setAttribute("id", "next");
    next.href = "#";
    next.innerText = `≫`;
    parent.append(ul, pre, next)

}



let responsiveSlider = function () {

    let slider = document.getElementById("slider");
    let sliderWidth = slider.offsetWidth;
    console.log(sliderWidth)
    let slideList = document.getElementById("slideWrap");
    let count = 1;
    let items = slideList.querySelectorAll("li").length;
    // console.log(items)
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    window.addEventListener('resize', function () {
        sliderWidth = slider.offsetWidth;
    });

    let prevSlide = function () {
        if (count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        } else if (count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    let nextSlide = function () {
        if (count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        } else if (count = items) {
            slideList.style.left = "0px";
            count = 1;
        }
    };

    next.addEventListener("click", function () {
        nextSlide();
    });

    prev.addEventListener("click", function () {
        prevSlide();
    });

    setInterval(function () {
        nextSlide()
    }, 5000);

};

window.onload = function () {
    responsiveSlider();
}












export {goodkartHeader,slide,responsiveSlider}