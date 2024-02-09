
const Footer = () => {
    return (
        <footer>
            <div className="footer-wrappr section-bg3" data-background="assets/img/gallery/footer-bg.png">
                <div className="footer-area footer-padding ">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-logo mb-25">
                                        <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
                                    </div>
                                    <div className="header-area">
                                        <div className="main-header main-header2">
                                            <div className="menu-main d-flex align-items-center justify-content-start">
                                                <div className="main-menu main-menu2">
                                                    <nav>
                                                        <ul>
                                                            <li><a href="index.html">Home</a></li>
                                                            <li><a href="about.html">About</a></li>
                                                            <li><a href="services.html">Services</a></li>
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="contact.html">Contact</a></li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-social mt-50">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="single-footer-caption">
                                    <div className="footer-tittle mb-50">
                                        <h4>Subscribe newsletter</h4>
                                    </div>
                                    <div className="footer-form">
                                        <div id="mc_embed_signup">
                                            <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative mail_part" noValidate>
                                                <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " className="placeholder hide-on-focus" onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Enter your email'} />
                                                <div className="form-icon">
                                                    <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
                                                        Subscribe
                                                    </button>
                                                </div>
                                                <div className="mt-10 info"></div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="footer-tittle">
                                        <div className="footer-pera">
                                            <p>Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium misem ut ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row">
                                <div className="col-xl-10">
                                    <div className="footer-copy-right">
                                        <p>
                                            Copyright &copy;
                                            <script>document.write(new Date().getFullYear());</script>
                                            All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
