<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Contact</title>
    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossorigin="anonymous" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
            href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Nanum+Gothic&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
            rel="stylesheet" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
            href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Nanum+Gothic&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
            rel="stylesheet" />

    <link rel="stylesheet" href="css/base.css" />
    <link rel="stylesheet" href="css/nav.css" />
    <!--* shining css  -->
    <!-- Tony css -->
    <link rel="stylesheet" href="css/response.css" />
    <!-- Footer CSS -->
    <link rel="stylesheet" href="css/footer.css" />
    <link rel="stylesheet" href="css/keyframe.css" />

    <script src="https://kit.fontawesome.com/ebeebdc57d.js"
            crossorigin="anonymous"></script>

    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">

</head>
<body id="pg-transparent-nav">
<!-- Navigation Bar section -->
<section id="navigation-bar" class="transparent animation-fadein">
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand mx-auto scroll" href="responsePage.jsp"><b>Mahathir
                <br /> &emsp; &emsp; &emsp; <span>Insights</span>
            </b> </a>
            <button class="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>

        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav mx-auto">
                    <li><a class="nav-link" href="responsePage.jsp">Home</a></li>
                    <li><a class="nav-link" href="posts.html">Posts</a></li>
                    <li><a class="nav-link" href="about.html">About</a></li>
                    <li class="contact-container"><a href="contact.html">
                        <button class="btn-contact">
                            <span></span> <span></span> <span></span> <span></span> Contact
                        </button>
                    </a></li>
                </ul>
            </div>
        </div>
    </nav>
</section>

<section class="contact-bg">
    <div class="filter"></div>
    <img src="img/mahathir_response_bg.png" alt="mahathir response page" />
</section>

<!--* TONY CAN START HERE  -->
<section id="contact-form-body">
    <div class="contact-form-top">
        <!-- container -->
        <div class="cont-container" id="cardContainer">
            <!-- Left Part -->
            <div class="left">
                <div id="left-bg"></div>
                <div class="left-wrap">
                    <div>
                        <!-- Subtitle -->
                        <h2 class="subtitle">Your form has been submitted!</h2>
                    </div>
                    <div>
                        <!-- Image -->
                        <div class="image">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                    </div>

                    <div>
                        <!-- Contact Info -->
                        <div class="info">
                            <div class="info-result">
                                <div class="name-result">
                                    <div class="result-set">
                                        <div class="label">Name&nbsp;
                                            <i class="fa-solid fa-user"></i>
                                        </div>
                                        <div class="result">
                                            <%= request.getParameter("name") %>
                                        </div>
                                    </div>
                                    <div class="check-icon">
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </div>
                                <div class="email-result">
                                    <div class="result-set">
                                        <div class="label">Email&nbsp;
                                            <i class="fa-solid fa-envelope"></i>
                                        </div>
                                        <div class="result">
                                            <%= request.getParameter("email") %>
                                        </div>
                                    </div>

                                    <div class="check-icon">
                                        <i class="fa-solid fa-check"></i>
                                    </div>

                                </div>
                                <div class="phone-result">
                                    <div class="result-set">
                                        <div class="label">Phone(+60)&nbsp;
                                            <i class="fa-solid fa-phone"></i>
                                        </div>
                                        <div class="result">
                                            <%= request.getParameter("phone") %>
                                        </div>
                                    </div>

                                    <div class="check-icon">
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </div>
                                <div class="message-result">

                                    <div class="result-set">
                                        <div class="label">Message &nbsp;
                                            <i class="fa-solid fa-message"></i>
                                        </div>
                                        <div class="result">
                                            <%= request.getParameter("message") %>
                                        </div>
                                    </div>

                                    <div class="check-icon">
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn-confirm">
                        <a href="contact.html">CONFIRM</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
     data-bs-keyboard="false" tabindex="-1"
     aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Form
                    Submited!</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer">
                <button type="button" id="confirmSubmit" class="btn btn-secondary"
                        data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!--* FOOTER -->
<section class="footer footer-transparent">
    <div class="footer-container">
        <div class="footer-logo">
            <h3>
                <b>Mahathir <br /> &emsp; &emsp; &emsp; <span>Insights</span></b>
            </h3>
            <p>© Mahathir Insights. 2024. All Rights Reserved.</p>
        </div>
        <div class="footer-body">
            <div class="footer-links">
                <a href="posts.html">Blogs & Posts</a>
                <a href="about.html">About Mahathir</a>
                <a href="contact.html">Contact & Inquiry</a>
            </div>

            <div class="footer-socials">
                <a href="https://www.facebook.com/TunDrMahathir"
                   target="_blank">
                    <i class="m-x-sm f-sm-1 fab fa-facebook"
                       aria-hidden="true"></i>
                </a>

                <a href="https://www.instagram.com/chedetofficial/"
                   target="_blank">
                    <i class="m-x-sm f-sm-1 fab fa-instagram"
                       aria-hidden="true"></i>
                </a>

                <a href="https://x.com/chedetofficial" target="_blank">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>

                <a href="https://www.youtube.com/@ChedetOfficial"
                   target="_blank">
                    <i class="fa-brands fa-youtube"></i>
                </a>
            </div>
        </div>
    </div>
</section>

<script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
<script src="https://kit.fontawesome.com/ca25892691.js"
        crossorigin="anonymous"></script>
<script src="js/nav.js"></script>

<!-- Contact Form Javascript -->
<script src="js/contact.js"></script>
</body>
</html>
