html {
    direction: ltr;
    overflow-x: hidden;
    box-shadow: none !important;
    -webkit-font-smoothing: antialiased
}

body {
    background-color: #fff;
    color: #777;
    font-family: poppins, Arial, sans-serif;
    font-size: 14px;
    line-height: 26px;
    margin: 0
}

body a {
    outline: none !important
}

.body {
    background-color: #fff
}

html.safari:not(.no-safari-overflow-x-fix) .body {
    overflow-x: hidden
}

html[dir=rtl] .body {
    overflow-x: hidden
}

li {
    line-height: 24px
}

@media(max-width:575px) {
    body {
        font-size: 13px
    }
}

pre {
    background: #f7f7f7;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    padding: 15px
}

.remove-envato-frame {
    background: #404040;
    border-radius: 0 0 4px 4px;
    top: 0;
    color: #fff;
    display: block;
    height: 9px;
    padding: 10px 20px 35px;
    position: fixed;
    right: 5px;
    text-align: center;
    text-decoration: none;
    min-width: 50px;
    z-index: 10000;
    font-size: .8em;
    opacity: .7
}

.remove-envato-frame:hover {
    opacity: .9;
    text-decoration: none;
    color: #fff
}

.remove-envato-frame:before {
    font-family: 'font awesome 5 free';
    content: "\f00d" !important;
    font-weight: 900;
    display: inline-block;
    padding-right: 5px
}

@media(max-width:991px) {
    .remove-envato-frame {
        display: none !important
    }
}

#header {
    position: relative;
    z-index: 1030
}

#header .header-body {
    display: flex;
    flex-direction: column;
    background: #fff;
    transition: min-height .3s ease;
    width: 100%;
    border-top: 3px solid #ededed;
    border-bottom: 1px solid transparent;
    z-index: 1001
}

#header .header-body.header-body-bottom-border-fixed {
    border-bottom: 1px solid rgba(234, 234, 234, .5) !important
}

#header .header-body[class*=border-color-] {
    border-bottom: 0 !important
}

#header .header-container {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    transition: ease height 300ms
}

@media(max-width:991px) {
    #header .header-container:not(.container):not(.container-fluid) .header-nav-main {
        padding: 0 .75rem
    }
}

#header .header-container.header-container-height-xs {
    height: 80px
}

#header .header-container.header-container-height-sm {
    height: 100px
}

#header .header-container.header-container-height-md {
    height: 125px
}

#header .header-container.header-container-height-lg {
    height: 145px
}

#header .container {
    position: relative
}

@media(max-width:767px) {
    #header .container {
        width: 100%
    }
}

#header .header-row {
    display: flex;
    flex-grow: 1;
    align-items: center;
    align-self: stretch;
    max-height: 100%
}

#header .header-column {
    display: flex;
    align-self: stretch;
    align-items: center;
    flex-grow: 1;
    flex-direction: column
}

#header .header-column.header-column-border-right {
    border-right: 1px solid rgba(0, 0, 0, .06)
}

#header .header-column.header-column-border-left {
    border-left: 1px solid rgba(0, 0, 0, .06)
}

#header .header-column .header-row {
    justify-content: inherit
}

#header .header-column .header-extra-info {
    list-style: outside none none;
    margin: 0;
    padding: 0
}

#header .header-column .header-extra-info li {
    display: inline-flex;
    margin-left: 25px
}

#header .header-column .header-extra-info li .header-extra-info-icon {
    font-size: 32px;
    font-size: 2rem;
    margin-right: 10px
}

#header .header-column .header-extra-info li .header-extra-info-text label {
    display: block;
    margin: 0;
    color: #999;
    font-size: 12px;
    font-size: .75rem;
    line-height: 1.2
}

#header .header-column .header-extra-info li .header-extra-info-text strong {
    display: block;
    margin: 0;
    color: #333;
    font-size: 14.4px;
    font-size: .9rem;
    line-height: 1.3
}

#header .header-column .header-extra-info li .header-extra-info-text a {
    color: #333
}

#header .header-column .header-extra-info li .feature-box p {
    margin: 0
}

#header .header-column .header-extra-info li .feature-box small {
    position: relative;
    top: -4px;
    font-size: 80%
}

#header.header-no-min-height .header-body {
    min-height: 0 !important
}

#header .header-top {
    display: flex;
    align-items: center;
    border-bottom: 2px solid rgba(0, 0, 0, .06);
    min-height: 47px
}

#header .header-top.header-top-light-border-bottom {
    border-bottom-color: rgba(255, 255, 255, .1)
}

#header .header-top.header-top-simple-border-bottom {
    border-bottom-width: 1px
}

#header .header-top.header-top-default {
    background: #f7f7f7
}

#header .header-top.header-top-borders {
    border-bottom-width: 1px
}

#header .header-top.header-top-borders .nav-item-borders {
    border-right: 1px solid rgba(0, 0, 0, .06);
    padding-left: 12px;
    padding-right: 12px
}

#header .header-top.header-top-borders .nav-item-borders:first-child {
    padding-left: 0
}

#header .header-top.header-top-borders .nav-item-borders:last-child {
    border-right: 0
}

#header .header-top.header-top-light-borders {
    border-bottom-color: rgba(255, 255, 255, .2)
}

#header .header-top.header-top-light-borders.header-top-borders .nav-item-borders {
    border-right-color: rgba(255, 255, 255, .2)
}

#header .header-top.header-top-light-2-borders {
    border-bottom-color: rgba(255, 255, 255, .06)
}

#header .header-top.header-top-light-2-borders.header-top-borders .nav-item-borders {
    border-right-color: rgba(255, 255, 255, .06)
}

#header .header-top.header-top-bottom-containered-border {
    border-bottom: 0
}

#header .header-top.header-top-bottom-containered-border>.container>.header-row {
    border-bottom: 1px solid rgba(0, 0, 0, .06)
}

#header .header-top.header-top-small-minheight {
    min-height: 38px
}

#header .header-logo {
    margin: 16px 0;
    margin: 1rem 0;
    position: relative;
    z-index: 1
}

#header .header-logo img {
    transition: all .3s ease;
    position: relative;
    top: 0;
    image-rendering: -webkit-optimize-contrast;
    transform: translateZ(0)
}

#header .header-nav {
    padding: 16px 0;
    padding: 1rem 0;
    min-height: 70px
}

#header .header-nav-top {
    display: flex;
    align-self: stretch;
    align-items: center
}

#header .header-nav-top .nav>li>a,
#header .header-nav-top .nav>li>span {
    color: #999;
    font-size: .9em;
    padding: 6px 10px;
    display: inline-block;
    letter-spacing: -.5px
}

#header .header-nav-top .nav>li>a [class*=fa-],
#header .header-nav-top .nav>li>a .icons,
#header .header-nav-top .nav>li>span [class*=fa-],
#header .header-nav-top .nav>li>span .icons {
    margin-right: 3px;
    font-size: .8em;
    position: relative
}

#header .header-nav-top .nav>li>a {
    text-decoration: none
}

#header .header-nav-top .nav>li>a:hover,
#header .header-nav-top .nav>li>a a:focus {
    background: 0 0
}

#header .header-nav-top .nav>li.open>.dropdown-menu-toggle,
#header .header-nav-top .nav>li.accessibility-open>.dropdown-menu-toggle {
    border-radius: 4px 4px 0 0
}

#header .header-nav-top .nav>li+.nav-item-left-border {
    margin-left: 10px;
    padding-left: 10px;
    position: relative
}

#header .header-nav-top .nav>li+.nav-item-left-border:after {
    background: rgba(0, 0, 0, .08);
    content: "";
    width: 1px;
    height: 16px;
    position: absolute;
    display: block;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    left: 0
}

#header .header-nav-top .nav>li+.nav-item-right-border {
    margin-right: 10px;
    padding-right: 10px;
    position: relative
}

#header .header-nav-top .nav>li+.nav-item-right-border:before {
    background: rgba(0, 0, 0, .08);
    content: "";
    width: 1px;
    height: 16px;
    position: absolute;
    display: block;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    right: 0
}

#header .header-nav-top .nav>li.nav-item-left-border.nav-item-left-border-remove:after {
    content: none
}

#header .header-nav-top .nav>li.nav-item-left-border.nav-item-right-border-remove:before {
    content: none
}

@media(max-width:575px) {
    #header .header-nav-top .nav>li:not(.d-none) {
        margin-left: 0;
        padding-left: 0
    }
}

@media(max-width:767px) {
    #header .header-nav-top .nav>li.nav-item-left-border-remove.d-none {
        margin-left: 0;
        padding-left: 0
    }

    #header .header-nav-top .nav>li.nav-item-right-border-remove.d-none {
        margin-left: 0;
        padding-left: 0
    }
}

#header .header-nav-top .nav>li.nav-item-left-border.nav-item-left-border-show:after {
    content: ''
}

#header .header-nav-top .nav>li.nav-item-right-border.nav-item-right-border-show:after {
    content: ''
}

@media(min-width:576px) {
    #header .header-nav-top .nav>li.nav-item-left-border.nav-item-left-border-sm-show:after {
        content: ''
    }

    #header .header-nav-top .nav>li.nav-item-right-border.nav-item-right-border-sm-show:after {
        content: ''
    }
}

@media(min-width:768px) {
    #header .header-nav-top .nav>li.nav-item-left-border.nav-item-left-border-md-show:after {
        content: ''
    }

    #header .header-nav-top .nav>li.nav-item-right-border.nav-item-right-border-md-show:after {
        content: ''
    }
}

@media(min-width:992px) {
    #header .header-nav-top .nav>li.nav-item-left-border.nav-item-left-border-lg-show:after {
        content: ''
    }

    #header .header-nav-top .nav>li.nav-item-right-border.nav-item-right-border-lg-show:after {
        content: ''
    }
}

@media(min-width:1200px) {
    #header .header-nav-top .nav>li.nav-item-left-border.nav-item-left-border-xl-show:after {
        content: ''
    }

    #header .header-nav-top .nav>li.nav-item-right-border.nav-item-right-border-xl-show:after {
        content: ''
    }
}

#header .header-nav-top .nav>li.nav-item.dropdown.show .nav-link {
    background: 0 0
}

#header .header-nav-top .nav>li.nav-item:not(.dropdown)>a [class*=fa-],
#header .header-nav-top .nav>li.nav-item:not(.dropdown)>a .icons {
    left: -1px;
    top: -1px
}

#header .header-nav-top .nav>li.nav-item-anim-icon>a:hover [class*=fa-],
#header .header-nav-top .nav>li.nav-item-anim-icon>a:hover .icons {
    -webkit-animation: navItemArrow 600ms ease;
    animation: navItemArrow 600ms ease;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite
}

#header .header-nav-top .dropdown .dropdown-item {
    font-size: .75em
}

#header .header-nav-top .dropdown-menu {
    border: 0;
    margin-top: -2px;
    margin-left: -2px;
    padding: 0;
    box-shadow: 0 10px 30px 10px rgba(0, 0, 0, .05);
    background: #fff;
    padding: 3px;
    min-width: 180px;
    z-index: 10000;
    margin-right: 0;
    margin-top: 1px;
    transition: opacity .2s ease-out;
    border-radius: 0
}

#header .header-nav-top .dropdown-menu:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 5px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #fff;
    transform: translate3d(-7px, -6px, 0)
}

#header .header-nav-top .dropdown-menu.dropdow-menu-arrow-right:before {
    right: auto;
    left: 20px
}

#header .header-nav-top .dropdown-menu a {
    color: #999;
    padding: 5px 12px;
    font-size: .9em
}

#header .header-nav-top .dropdown-menu a:active {
    color: #fff
}

#header .header-nav-top .flag {
    margin-right: 2px;
    position: relative;
    top: -1px
}

#header .header-nav-features {
    position: relative;
    padding-left: 20px;
    margin-left: 10px
}

#header .header-nav-features:before,
#header .header-nav-features:after {
    background: rgba(0, 0, 0, .03);
    content: none;
    width: 1px;
    height: 16px;
    position: absolute;
    display: block;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    left: 0
}

#header .header-nav-features.header-nav-features-divisor-lg:before,
#header .header-nav-features.header-nav-features-divisor-lg:after {
    height: 72px
}

#header .header-nav-features.header-nav-features-light:before,
#header .header-nav-features.header-nav-features-light:after {
    background: rgba(255, 255, 255, .1)
}

#header .header-nav-features:not(.header-nav-features-no-border):before,
#header .header-nav-features:not(.header-nav-features-no-border):after {
    content: ''
}

#header .header-nav-features:not(.header-nav-features-no-border):after {
    display: none
}

#header .header-nav-features.header-nav-features-show-border:before,
#header .header-nav-features.header-nav-features-show-border:after {
    content: ''
}

@media(min-width:576px) {

    #header .header-nav-features.header-nav-features-sm-show-border:before,
    #header .header-nav-features.header-nav-features-sm-show-border:after {
        content: ''
    }
}

@media(min-width:768px) {

    #header .header-nav-features.header-nav-features-md-show-border:before,
    #header .header-nav-features.header-nav-features-md-show-border:after {
        content: ''
    }
}

@media(min-width:992px) {

    #header .header-nav-features.header-nav-features-lg-show-border:before,
    #header .header-nav-features.header-nav-features-lg-show-border:after {
        content: ''
    }
}

@media(min-width:1200px) {

    #header .header-nav-features.header-nav-features-xl-show-border:before,
    #header .header-nav-features.header-nav-features-xl-show-border:after {
        content: ''
    }
}

#header .header-nav-features.header-nav-features-start {
    padding-left: 0;
    margin-left: 0;
    padding-right: 20px;
    margin-right: 10px
}

#header .header-nav-features.header-nav-features-start:not(.header-nav-features-no-border):before {
    left: auto;
    right: 0
}

#header .header-nav-features.header-nav-features-center {
    padding-left: 20px;
    margin-left: 10px;
    padding-right: 20px;
    margin-right: 10px
}

#header .header-nav-features.header-nav-features-center:after {
    display: block;
    left: auto;
    right: 0
}

#header .header-nav-features .header-nav-top-icon,
#header .header-nav-features .header-nav-top-icon-img {
    font-size: 12.8px;
    font-size: .8rem;
    position: relative;
    top: -1px;
    color: #444
}

#header .header-nav-features.header-nav-features-light .header-nav-top-icon,
#header .header-nav-features.header-nav-features-light .header-nav-top-icon-img {
    color: #fff
}

#header .header-nav-features .header-nav-top-icon-img {
    top: -2px
}

#header .header-nav-features .header-nav-feature {
    position: relative
}

#header .header-nav-features .header-nav-features-dropdown {
    opacity: 0;
    top: -10000px;
    position: absolute;
    box-shadow: 0 10px 30px 10px rgba(0, 0, 0, .05);
    background: #fff;
    padding: 17px;
    min-width: 300px;
    z-index: 10000;
    right: 100%;
    margin-right: -25px;
    margin-top: 30px;
    transition: opacity .2s ease-out;
    pointer-events: none
}

#header .header-nav-features .header-nav-features-dropdown:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 5px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #fff;
    transform: translate3d(-7px, -6px, 0)
}

#header .header-nav-features .header-nav-features-dropdown.show {
    opacity: 1;
    top: auto;
    pointer-events: all
}

@media(min-width:992px) {
    #header .header-nav-features .header-nav-features-dropdown.header-nav-features-dropdown-reverse {
        right: auto;
        margin-right: 0;
        left: 100%;
        margin-left: -25px
    }

    #header .header-nav-features .header-nav-features-dropdown.header-nav-features-dropdown-reverse:before {
        right: auto;
        left: 5px;
        transform: translate3d(7px, -6px, 0)
    }
}

@media(max-width:440px) {
    #header .header-nav-features .header-nav-features-dropdown.header-nav-features-dropdown-mobile-fixed {
        position: fixed;
        right: auto;
        left: 50%;
        transform: translate3d(-50%, 0, 0)
    }

    #header .header-nav-features .header-nav-features-dropdown.header-nav-features-dropdown-mobile-fixed:before {
        content: none
    }
}

#header .header-nav-features .header-nav-features-dropdown.header-nav-features-dropdown-force-right {
    margin-right: 6px !important;
    right: 0
}

#header .header-nav-features .header-nav-features-dropdown.header-nav-features-dropdown-dark {
    background: #212529
}

#header .header-nav-features .header-nav-features-dropdown.header-nav-features-dropdown-dark:before {
    border-bottom-color: #212529
}

#header .header-nav-features .header-nav-features-cart {
    z-index: 2
}

#header .header-nav-features .header-nav-features-cart .header-nav-features-dropdown {
    padding: 20px
}

#header .header-nav-features .header-nav-features-cart .cart-info {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    margin-top: -4px;
    left: 0;
    padding: 0;
    display: block;
    line-height: 1
}

#header .header-nav-features .header-nav-features-cart .cart-info .cart-qty {
    position: absolute;
    top: -12px;
    right: -10px;
    width: 15px;
    height: 15px;
    display: block;
    font-size: 9px;
    font-weight: 600;
    color: #fff;
    background-color: #ed5348;
    text-align: center;
    line-height: 15px;
    border-radius: 20px;
    box-shadow: -1px 1px 2px 0 rgba(0, 0, 0, .3)
}

#header .header-nav-features .header-nav-features-cart .mini-products-list {
    list-style: none;
    margin: 0;
    padding: 0
}

#header .header-nav-features .header-nav-features-cart .mini-products-list li {
    position: relative;
    padding: 15px 0;
    border-bottom: 1px solid #eee
}

#header .header-nav-features .header-nav-features-cart .mini-products-list li:first-child {
    margin-top: -15px
}

#header .header-nav-features .header-nav-features-cart .mini-products-list li .product-image {
    float: right;
    border-color: #ededed;
    border-width: 1px;
    padding: 0;
    border: 1px solid #ddd;
    background-color: #fff;
    display: block;
    position: relative
}

#header .header-nav-features .header-nav-features-cart .mini-products-list li .product-image img {
    max-width: 80px
}

#header .header-nav-features .header-nav-features-cart .mini-products-list li .product-details {
    margin-left: 0;
    line-height: 1.4
}

#header .header-nav-features .header-nav-features-cart .mini-products-list li .product-details a {
    letter-spacing: .005em;
    font-weight: 600;
    color: #696969
}

#header .header-nav-features .header-nav-features-cart .mini-products-list li .product-details .product-name {
    margin: 15px 0 0;
    font-size: .9em;
    font-weight: 400
}

#header .header-nav-features .header-nav-features-cart .mini-products-list li .product-details .qty-price {
    font-size: .8em
}

#header .header-nav-features .header-nav-features-cart .mini-products-list li .product-details .qty-price .price {
    display: inline-block
}

#header .header-nav-features .header-nav-features-cart .mini-products-list li .product-details .btn-remove {
    z-index: 3;
    top: 5px;
    right: -5px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    color: #474747;
    border-radius: 100%;
    position: absolute;
    text-align: center;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .2);
    line-height: 20px;
    font-size: 10px
}

#header .header-nav-features .header-nav-features-cart .totals {
    padding: 15px 0 25px;
    overflow: hidden
}

#header .header-nav-features .header-nav-features-cart .totals .label {
    float: left;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    color: #474747
}

#header .header-nav-features .header-nav-features-cart .totals .price-total {
    float: right;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    color: #474747
}

#header .header-nav-features .header-nav-features-cart .actions {
    padding: 0;
    margin: 0
}

#header .header-nav-features .header-nav-features-cart .actions .btn {
    display: inline-block;
    min-width: 125px;
    text-align: center;
    margin: 5px 0;
    float: right;
    font-size: 11.2px;
    font-size: .7rem;
    padding: 11.2px 16px;
    padding: .7rem 1rem;
    text-transform: uppercase;
    font-weight: 600
}

#header .header-nav-features .header-nav-features-cart .actions .btn:first-child {
    float: left
}

#header .header-nav-features .header-nav-features-cart.header-nav-features-cart-big .cart-info {
    margin-top: -9px;
    left: -4px
}

#header .header-nav-features .header-nav-features-cart.header-nav-features-cart-big .header-nav-features-dropdown {
    margin-right: -31px;
    top: 10px
}

#header .header-nav-features .header-nav-features-user .header-nav-features-toggle {
    color: #444;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase
}

#header .header-nav-features .header-nav-features-user .header-nav-features-toggle .far {
    font-size: 15.2px;
    font-size: .95rem;
    margin: 0 2px 0 0;
    position: relative;
    top: 1px
}

#header .header-nav-features .header-nav-features-user .header-nav-features-toggle:hover {
    text-decoration: none
}

#header .header-nav-features .header-nav-features-user .header-nav-features-dropdown {
    margin-right: -27px;
    min-width: 420px;
    padding: 35px
}

@media(max-width:767px) {
    #header .header-nav-features .header-nav-features-user .header-nav-features-dropdown {
        min-width: 320px
    }
}

#header .header-nav-features .header-nav-features-user .actions {
    padding: 0;
    margin: 0
}

#header .header-nav-features .header-nav-features-user .actions .btn {
    display: inline-block;
    min-width: 125px;
    margin: 5px 0;
    font-size: 11.2px;
    font-size: .7rem;
    padding: 11.2px 16px;
    padding: .7rem 1rem;
    text-transform: uppercase;
    font-weight: 600
}

#header .header-nav-features .header-nav-features-user .extra-actions {
    clear: both;
    border-top: 1px solid rgba(0, 0, 0, .08);
    padding-top: 20px;
    margin-top: 20px;
    text-align: center
}

#header .header-nav-features .header-nav-features-user .extra-actions p {
    font-size: 12px;
    font-size: .75rem;
    margin: 0;
    padding: 0
}

#header .header-nav-features .header-nav-features-user.signin .signin-form {
    display: block
}

#header .header-nav-features .header-nav-features-user.signin .signup-form,
#header .header-nav-features .header-nav-features-user.signin .recover-form {
    display: none
}

#header .header-nav-features .header-nav-features-user.signup .signin-form {
    display: none
}

#header .header-nav-features .header-nav-features-user.signup .signup-form {
    display: block
}

#header .header-nav-features .header-nav-features-user.signup .recover-form {
    display: none
}

#header .header-nav-features .header-nav-features-user.recover .signin-form,
#header .header-nav-features .header-nav-features-user.recover .signup-form {
    display: none
}

#header .header-nav-features .header-nav-features-user.header-nav-features-user-logged .header-nav-features-dropdown {
    min-width: 320px
}

#header .header-nav-features .header-nav-features-search-reveal-container {
    display: flex;
    align-items: center;
    min-height: 42px
}

#header .header-nav-features .header-nav-features-search-reveal .simple-search {
    display: none
}

#header .header-nav-features .header-nav-features-search-reveal .header-nav-features-search-hide-icon {
    display: none;
    text-decoration: none
}

#header .header-nav-features .header-nav-features-search-reveal .header-nav-features-search-show-icon {
    display: inline-flex;
    text-decoration: none
}

#header .header-nav-features .header-nav-features-search-reveal.show .header-nav-features-search-hide-icon {
    display: inline-flex;
    margin-left: 10px;
    align-items: center
}

#header .header-nav-features .header-nav-features-search-reveal.show .header-nav-features-search-show-icon {
    display: none
}

#header .header-nav-features .header-nav-features-search-reveal.show .simple-search {
    display: inline-flex
}

#header .header-nav-features .header-nav-features-search-reveal-big-search {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    z-index: 1
}

#header .header-nav-features .header-nav-features-search-reveal-big-search .big-search-header {
    align-items: center
}

#header .header-nav-features .header-nav-features-search-reveal-big-search .big-search-header input[type=search]::-webkit-search-decoration,
#header .header-nav-features .header-nav-features-search-reveal-big-search .big-search-header input[type=search]::-webkit-search-cancel-button,
#header .header-nav-features .header-nav-features-search-reveal-big-search .big-search-header input[type=search]::-webkit-search-results-button,
#header .header-nav-features .header-nav-features-search-reveal-big-search .big-search-header input[type=search]::-webkit-search-results-decoration {
    -webkit-appearance: none
}

#header .header-nav-features .header-nav-features-search-reveal-big-search .form-control {
    border: 0;
    background: 0 0;
    font-size: 22px !important;
    line-height: 1;
    border-bottom: 2px solid #ccc;
    border-radius: 0;
    box-shadow: none;
    position: relative;
    z-index: 1
}

#header .header-nav-features .header-nav-features-search-reveal-big-search .header-nav-features-search-hide-icon {
    position: absolute;
    right: 0;
    top: 50%;
    z-index: 2;
    display: block;
    margin-right: 10px;
    margin-top: -10px
}

#header .header-nav-features .header-nav-features-search-reveal-big-search .header-nav-features-search-hide-icon i {
    font-size: 20px
}

#header .header-nav-features .header-nav-features-search-reveal-big-search.header-nav-features-search-reveal-big-search-full {
    position: fixed;
    z-index: 100000;
    background: 0 0
}

#header .header-nav-features .header-nav-features-search-reveal-big-search.header-nav-features-search-reveal-big-search-full:before {
    content: "";
    display: block;
    background: rgba(23, 23, 23, .95);
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%
}

#header .header-nav-features .header-nav-features-search-reveal-big-search.header-nav-features-search-reveal-big-search-full .form-control {
    color: #fff
}

#header .header-nav-features .header-nav-features-search-reveal-big-search.header-nav-features-search-reveal-big-search-full .header-nav-features-search-hide-icon {
    position: fixed;
    top: 25px;
    right: 20px;
    margin-top: 0
}

#header .header-nav-features .header-nav-features-search-reveal-big-search.header-nav-features-search-reveal-big-search-full .header-nav-features-search-hide-icon i {
    color: #fff
}

#header.search-show .header-nav-features .header-nav-features-search-reveal-big-search {
    display: flex
}

#header .header-search {
    margin-left: 16px;
    margin-left: 1rem
}

#header .header-search .form-control {
    border-radius: 20px;
    font-size: .9em;
    height: 34px;
    margin: 0;
    padding: 6px 12px;
    transition: width .3s ease;
    perspective: 1000px;
    width: 170px
}

#header .header-search .btn-light {
    background: 0 0;
    border: 0;
    color: #ccc;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 3
}

#header .header-search .btn-light:hover {
    color: #000
}

#header .header-social-icons {
    margin-left: 16px;
    margin-left: 1rem
}

#header .header-border-left {
    border-left: 1px solid rgba(0, 0, 0, .08)
}

#header .header-border-right {
    border-right: 1px solid rgba(0, 0, 0, .08)
}

#header .header-border-top {
    border-top: 1px solid rgba(0, 0, 0, .08)
}

#header .header-border-bottom {
    border-bottom: 1px solid rgba(0, 0, 0, .08)
}

@media(max-width:991px) {
    #header .header-mobile-border-top:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, .08)
    }
}

#header .header-btn-collapse-nav {
    background: #ccc;
    color: #fff;
    display: none;
    float: right;
    margin: 0 0 0 16px;
    margin: 0 0 0 1rem
}

#header.header-narrow .header-body {
    min-height: 0
}

#header.header-narrow .header-logo {
    margin-top: 0;
    margin-bottom: 0
}

#header.header-narrow .header-nav {
    padding-top: 0;
    padding-bottom: 0
}

#header.header-no-border-bottom .header-body {
    padding-bottom: 0 !important;
    border-bottom: 0 !important
}

#header.header-no-border-bottom .header-nav.header-nav-links nav>ul>li>a,
#header.header-no-border-bottom .header-nav.header-nav-links nav>ul>li:hover>a,
#header.header-no-border-bottom .header-nav.header-nav-line nav>ul>li>a,
#header.header-no-border-bottom .header-nav.header-nav-line nav>ul>li:hover>a {
    margin: 0
}

#header.header-effect-shrink {
    transition: ease height 300ms
}

#header.header-effect-shrink .header-top {
    transition: ease height 300ms
}

#header.header-effect-shrink .header-container {
    min-height: 100px
}

#header.header-effect-shrink .header-logo {
    display: flex;
    align-items: center
}

#header.header-dark .header-body {
    background: #212529
}

#header.header-dark .header-body .header-nav.header-nav-links-side-header nav>ul>li>a {
    border-bottom-color: #2a2a2a
}

@media(max-width:991px) {
    html.mobile-menu-opened #header .header-body[class*=border-color-] {
        border-bottom: 1px solid rgba(234, 234, 234, .5) !important
    }
}

html:not(.boxed) #header.header-floating-bar {
    position: absolute;
    top: 45px;
    width: 100%
}

html:not(.boxed) #header.header-floating-bar .header-body {
    border: medium;
    margin: 0 auto;
    padding: 0;
    position: relative;
    width: auto
}

html:not(.boxed) #header.header-floating-bar .header-nav-main nav>ul>li.dropdown-mega>.dropdown-menu {
    left: 0;
    right: 0
}

@media(max-width:991px) {
    html:not(.boxed) #header.header-floating-bar {
        top: 0
    }
}

@media(max-width:991px) {
    html:not(.boxed):not(.sticky-header-active) #header.header-floating-bar .header-body {
        margin: 10px
    }

    html:not(.boxed):not(.sticky-header-active) #header.header-floating-bar .header-nav-main:before {
        display: none
    }
}

@media(min-width:1200px) {
    html:not(.sticky-header-active) #header.header-floating-bar .header-body {
        max-width: 1140px;
        right: 15px
    }

    html:not(.sticky-header-active) #header.header-floating-bar .header-container {
        padding-right: 0;
        padding-left: 30px
    }
}

html:not(.boxed) #header.header-full-width .header-container {
    width: 100%;
    max-width: none
}

html #header.header-bottom-slider {
    position: absolute;
    bottom: 0
}

html #header.header-bottom-slider .header-body {
    border-top: 1px solid rgba(255, 255, 255, .4)
}

html #header.header-bottom-slider.header-transparent-light-top-border .header-body {
    border-top: 1px solid rgba(68, 68, 68, .4)
}

html #header.header-bottom-slider.header-transparent-light-top-border-1 .header-body {
    border-top: 1px solid rgba(68, 68, 68, .1)
}

html #header.header-bottom-slider.header-transparent-dark-top-border .header-body {
    border-top: 1px solid rgba(255, 255, 255, .4)
}

html #header.header-bottom-slider.header-transparent-dark-top-border-1 .header-body {
    border-top: 1px solid rgba(255, 255, 255, .1)
}

html.sticky-header-active #header.header-bottom-slider .header-body {
    border-top-color: transparent
}

@media(max-width:991px) {
    html #header.header-bottom-slider .header-nav-main {
        top: calc(100% + 15px)
    }

    html.sticky-header-active #header.header-bottom-slider .header-nav-main {
        top: 100%
    }
}

html #header.header-transparent {
    min-height: 0 !important;
    width: 100%;
    position: absolute
}

html #header.header-transparent .header-body:not(.header-border-bottom) {
    border-bottom: 0
}

html:not(.sticky-header-active) #header.header-transparent:not(.header-semi-transparent) .header-body {
    background-color: transparent !important
}

html:not(.sticky-header-active) #header.header-semi-transparent-light .header-body {
    background-color: rgba(255, 255, 255, .8) !important
}

html:not(.sticky-header-active) #header.header-semi-transparent-dark .header-body {
    background-color: rgba(68, 68, 68, .4) !important
}

html:not(.sticky-header-active) #header.header-transparent-light-bottom-border .header-body {
    border-bottom: 1px solid rgba(68, 68, 68, .4)
}

html:not(.sticky-header-active) #header.header-transparent-light-bottom-border-1 .header-body {
    border-bottom: 1px solid rgba(68, 68, 68, .1)
}

html:not(.sticky-header-active) #header.header-transparent-dark-bottom-border .header-body {
    border-bottom: 1px solid rgba(255, 255, 255, .4)
}

html:not(.sticky-header-active) #header.header-transparent-dark-bottom-border-1 .header-body {
    border-bottom: 1px solid rgba(255, 255, 255, .1)
}

@media(max-width:991px) {
    html #header.header-transparent .header-body {
        overflow: hidden
    }

    html #header.header-transparent .header-body.bg-dark .header-nav-main:before,
    html #header.header-transparent .header-body.bg-color-dark .header-nav-main:before {
        background-color: #212529
    }

    html #header.header-transparent .header-nav-main:before {
        width: calc(100% - 30px)
    }

    html #header.header-transparent .header-nav-main nav {
        padding: 0 30px
    }

    html.sticky-header-active #header.header-transparent .header-nav-main nav {
        padding: 0 15px
    }
}

html.sticky-header-active #header .header-body {
    position: fixed;
    border-bottom-color: rgba(234, 234, 234, .5);
    box-shadow: 0 0 3px rgba(234, 234, 234, .5)
}

html.sticky-header-active #header .header-body.header-body-bottom-border {
    border-bottom: 1px solid rgba(234, 234, 234, .5) !important
}

html.sticky-header-active #header.header-effect-shrink .header-body {
    position: relative
}

html.sticky-header-reveal.sticky-header-active #header .header-body {
    position: fixed;
    border-bottom: none;
    width: 100%;
    max-width: 100%
}

html.sticky-header-enabled #header .header-logo-sticky-change {
    position: relative
}

html.sticky-header-enabled #header .header-logo-sticky-change img {
    position: absolute;
    top: 0;
    left: 0
}

html.sticky-header-enabled #header .header-logo-sticky-change .header-logo-non-sticky {
    opacity: 1 !important
}

html.sticky-header-enabled #header .header-logo-sticky-change .header-logo-sticky {
    opacity: 0 !important
}

html.sticky-header-enabled.sticky-header-active #header .header-logo-sticky-change .header-logo-non-sticky {
    opacity: 0 !important
}

html.sticky-header-enabled.sticky-header-active #header .header-logo-sticky-change .header-logo-sticky {
    opacity: 1 !important
}

@media(min-width:992px) {
    #header .header-nav-main {
        display: flex !important;
        height: auto !important
    }

    #header .header-nav-main nav {
        display: flex !important
    }

    #header .header-nav-main nav>ul>li {
        height: 100%;
        align-self: stretch;
        margin-left: 2px
    }

    #header .header-nav-main nav>ul>li>a {
        display: inline-flex;
        align-items: center;
        white-space: normal;
        border-radius: 4px;
        color: #ccc;
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        padding: .5rem 1rem;
        letter-spacing: -.5px;
        text-transform: uppercase
    }

    #header .header-nav-main nav>ul>li>a:after {
        display: none
    }

    #header .header-nav-main nav>ul>li>a:active {
        background-color: transparent;
        text-decoration: none;
        color: #ccc
    }

    #header .header-nav-main nav>ul>li>a.dropdown-toggle .fa-chevron-down {
        display: none
    }

    #header .header-nav-main nav>ul>li>a.active {
        background-color: transparent
    }

    #header .header-nav-main nav>ul>li.open>a,
    #header .header-nav-main nav>ul>li.accessibility-open>a,
    #header .header-nav-main nav>ul>li:hover>a {
        background: #ccc;
        color: #fff
    }

    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu {
        top: -10000px;
        display: block;
        opacity: 0;
        left: auto;
        border-radius: 0 4px 4px;
        border: 0;
        border-top: 3px solid #ccc;
        box-shadow: 0 15px 30px -5px rgba(0, 0, 0, .07);
        margin: 0;
        min-width: 200px;
        padding: 5px 0;
        text-align: left
    }

    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li a {
        border-bottom: 1px solid #f7f7f7;
        color: #777;
        font-size: .8em;
        font-weight: 400;
        padding: 6px 18px;
        position: relative;
        text-transform: none;
        letter-spacing: -.5px
    }

    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li a:hover,
    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li a:focus,
    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li a.active,
    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li a:active {
        background-color: transparent
    }

    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li:hover>a,
    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li:focus>a,
    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.active>a,
    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li:active>a,
    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.open>a,
    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.accessibility-open>a {
        background-color: #f8f9fa
    }

    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu {
        position: relative
    }

    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu>a .fa-chevron-down {
        display: none
    }

    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu>a:after {
        font-family: 'font awesome 5 free';
        content: "\f054";
        font-weight: 900;
        position: absolute;
        top: 50%;
        font-size: .5rem;
        opacity: .7;
        right: 20px;
        transform: translateY(-50%);
        transition: all .2s ease-out
    }

    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu>.dropdown-menu {
        left: 100%;
        display: block;
        margin-top: -8px;
        margin-left: -1px;
        border-radius: 4px;
        opacity: 0;
        transform: translate3d(0, 0, 0)
    }

    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.open>a:after,
    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.accessibility-open>a:after,
    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu:hover>a:after {
        opacity: 1;
        right: 15px
    }

    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.open>.dropdown-menu,
    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.accessibility-open>.dropdown-menu,
    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu:hover>.dropdown-menu {
        top: 0;
        opacity: 1
    }

    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.dropdown-reverse:hover>a:after {
        right: 30px;
        transform: translateY(-50%) rotateY(180deg)
    }

    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.dropdown-reverse>.dropdown-menu {
        left: auto;
        right: 100%;
        transform: translate3d(0, 0, 0)
    }

    #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li:last-child a {
        border-bottom: 0
    }

    #header .header-nav-main nav>ul>li.dropdown.open>a,
    #header .header-nav-main nav>ul>li.dropdown.accessibility-open>a,
    #header .header-nav-main nav>ul>li.dropdown:hover>a {
        border-radius: 4px 4px 0 0;
        position: relative
    }

    #header .header-nav-main nav>ul>li.dropdown.open>a:before,
    #header .header-nav-main nav>ul>li.dropdown.accessibility-open>a:before,
    #header .header-nav-main nav>ul>li.dropdown:hover>a:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -3px;
        border-bottom: 5px solid #ccc
    }

    #header .header-nav-main nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav-main nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    #header .header-nav-main nav>ul>li.dropdown:hover>.dropdown-menu {
        top: auto;
        display: block;
        opacity: 1
    }

    #header .header-nav-main nav>ul>li.dropdown.dropdown-reverse>.dropdown-menu {
        left: auto;
        right: 0
    }

    #header .header-nav-main nav>ul>li.dropdown-mega {
        position: static
    }

    #header .header-nav-main nav>ul>li.dropdown-mega>.dropdown-menu {
        border-radius: 4px;
        left: 15px;
        right: 15px;
        width: auto
    }

    #header .header-nav-main nav>ul>li.dropdown-mega .dropdown-mega-content {
        padding: 1.6rem
    }

    #header .header-nav-main nav>ul>li.dropdown-mega .dropdown-mega-sub-title {
        color: #333;
        display: block;
        font-size: .9em;
        font-weight: 600;
        margin-top: 20px;
        padding-bottom: 10px;
        text-transform: none;
        letter-spacing: -.5px
    }

    #header .header-nav-main nav>ul>li.dropdown-mega .dropdown-mega-sub-title:first-child {
        margin-top: 0
    }

    #header .header-nav-main nav>ul>li.dropdown-mega .dropdown-mega-sub-nav {
        list-style: none;
        padding: 0;
        margin: 0
    }

    #header .header-nav-main nav>ul>li.dropdown-mega .dropdown-mega-sub-nav>li>a {
        border: 0;
        border-radius: 4px;
        color: #777;
        display: block;
        font-size: .8em;
        font-weight: 400;
        margin: 0 0 3px -8px;
        padding: 3px 8px;
        text-shadow: none;
        text-transform: none;
        text-decoration: none
    }

    #header .header-nav-main nav>ul>li.dropdown-mega .dropdown-mega-sub-nav>li:hover>a,
    #header .header-nav-main nav>ul>li.dropdown-mega .dropdown-mega-sub-nav>li:active>a,
    #header .header-nav-main nav>ul>li.dropdown-mega .dropdown-mega-sub-nav>li:focus>a {
        background: #f7f7f7
    }

    #header .header-nav-main nav>ul>li.dropdown-mega.dropdown-mega-shop>.dropdown-item {
        padding: .5rem .8rem
    }

    #header .header-nav-main nav>ul>li .wrapper-items-cloned i {
        display: none
    }

    #header .header-nav-main.header-nav-main-square nav>ul>li>a {
        border-radius: 0 !important
    }

    #header .header-nav-main.header-nav-main-square nav>ul>li.dropdown .dropdown-menu {
        border-radius: 0 !important
    }

    #header .header-nav-main.header-nav-main-square nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu>.dropdown-menu {
        border-radius: 0 !important
    }

    #header .header-nav-main.header-nav-main-square nav>ul>li.dropdown .thumb-info,
    #header .header-nav-main.header-nav-main-square nav>ul>li.dropdown .thumb-info-wrapper {
        border-radius: 0 !important
    }

    #header .header-nav-main.header-nav-main-square nav>ul>li.dropdown-mega>.dropdown-menu {
        border-radius: 0 !important
    }

    #header .header-nav-main.header-nav-main-square nav>ul>li.dropdown-mega .dropdown-mega-sub-nav>li>a {
        border-radius: 0 !important
    }

    #header .header-nav-main.header-nav-main-dropdown-no-borders nav>ul>li.dropdown .dropdown-menu {
        border: 0 !important;
        border-radius: 4px
    }

    #header .header-nav-main.header-nav-main-dropdown-no-borders nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu>.dropdown-menu {
        margin-top: -5px
    }

    #header .header-nav-main.header-nav-main-font-sm nav>ul>li>a {
        font-size: .7rem
    }

    #header .header-nav-main.header-nav-main-font-md nav>ul>li>a {
        font-size: 1rem;
        font-weight: 600;
        text-transform: none;
        letter-spacing: -1px
    }

    #header .header-nav-main.header-nav-main-font-lg nav>ul>li>a {
        font-size: 1.1rem;
        font-weight: 400;
        text-transform: none;
        letter-spacing: -1px
    }

    #header .header-nav-main.header-nav-main-font-lg-upper nav>ul>li>a {
        font-size: .95rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: -1px
    }

    #header .header-nav-main.header-nav-main-font-lg-upper-2 nav>ul>li>a {
        font-size: .82rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0
    }

    #header .header-nav-main.header-nav-main-font-alternative nav>ul>li>a {
        font-family: open sans, sans-serif;
        font-size: .85rem;
        font-weight: 600
    }

    #header .header-nav-main.header-nav-main-dropdown-modern nav>ul>li.dropdown .dropdown-menu {
        border: 0 !important;
        padding: 15px 8px;
        margin-left: -10px
    }

    #header .header-nav-main.header-nav-main-dropdown-modern nav>ul>li.dropdown .dropdown-menu li a {
        border-bottom: 0;
        background: 0 0 !important;
        font-size: .85em;
        transition: all .2s ease-out;
        left: 0
    }

    #header .header-nav-main.header-nav-main-dropdown-modern nav>ul>li.dropdown .dropdown-menu li a:hover,
    #header .header-nav-main.header-nav-main-dropdown-modern nav>ul>li.dropdown .dropdown-menu li a:active {
        left: 5px
    }

    #header .header-nav-main.header-nav-main-dropdown-modern nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu>.dropdown-menu {
        margin-top: -15px
    }

    #header .header-nav-main.header-nav-main-dropdown-center nav>ul>li.dropdown:not(.dropdown-mega)>.dropdown-menu {
        transform: translate3d(-50%, 10px, 0) !important
    }

    #header .header-nav-main.header-nav-main-dropdown-center nav>ul>li.dropdown:not(.dropdown-mega):hover>.dropdown-menu {
        top: 100%;
        left: 50%;
        transform: translate3d(-50%, 0, 0) !important
    }

    #header .header-nav-main.header-nav-main-dropdown-center.header-nav-main-dropdown-center-bottom nav>ul>li.dropdown:hover>.dropdown-menu {
        margin-top: -14px !important
    }

    #header .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown>.dropdown-item {
        position: relative
    }

    #header .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown>.dropdown-item:before {
        content: '';
        display: block;
        position: absolute;
        top: auto;
        left: 50%;
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #fff;
        transform: translate3d(-7px, 10px, 0);
        bottom: 14px;
        margin-top: auto;
        z-index: 1001;
        opacity: 0;
        transition: ease transform 300ms
    }

    #header .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    #header .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown:hover>.dropdown-menu {
        margin-top: -14px !important;
        box-shadow: 0 10px 30px 10px rgba(0, 0, 0, .1)
    }

    #header .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown.open>.dropdown-item:before,
    #header .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown.accessibility-open>.dropdown-item:before,
    #header .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown:hover>.dropdown-item:before {
        opacity: 1 !important;
        transform: translate3d(-7px, 0, 0)
    }

    #header .header-nav-main.header-nav-main-dark nav>ul>li>a {
        color: #444
    }

    #header .header-nav-main.header-nav-main-slide nav>ul>li>a {
        background-color: transparent;
        color: #fff;
        text-transform: none;
        font-size: 14px;
        font-weight: 500;
        padding: 18px 18px 22px !important;
        margin: 0 !important;
        transition: ease transform 300ms
    }
}

@media(min-width:992px) and (min-width:992px) {
    #header .header-nav-main.header-nav-main-slide nav>ul>li>a.dropdown-toggle:after {
        visibility: hidden
    }
}

@media(min-width:992px) {
    #header .header-nav-main.header-nav-main-slide nav>ul>li>a.item-original {
        display: none
    }

    #header .header-nav-main.header-nav-main-slide nav>ul>li>span {
        display: flex;
        position: relative;
        height: 100%;
        overflow: hidden
    }

    #header .header-nav-main.header-nav-main-slide nav>ul>li>span>a {
        display: flex;
        align-items: center;
        white-space: normal;
        border-radius: 4px;
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: -.5px;
        text-transform: uppercase;
        position: relative;
        background: 0 0 !important;
        color: #444;
        padding: 0 .9rem;
        margin: 1px 0 0;
        min-height: 60px;
        height: 100%;
        transition: ease all 300ms;
        transform: translateY(0%)
    }

    #header .header-nav-main.header-nav-main-slide nav>ul>li>span>a.dropdown-toggle:after {
        display: none
    }

    #header .header-nav-main.header-nav-main-slide nav>ul>li>span>a .fa-caret-down {
        display: none
    }

    #header .header-nav-main.header-nav-main-slide nav>ul>li>span>a.active:first-child {
        transform: translateY(-40%);
        opacity: 0
    }

    #header .header-nav-main.header-nav-main-slide nav>ul>li>span>a.active.item-two {
        transform: translateY(0);
        opacity: 1
    }

    #header .header-nav-main.header-nav-main-slide nav>ul>li>span .item-two {
        position: absolute;
        transform: translateY(40%);
        opacity: 0;
        width: auto;
        left: 0
    }

    #header .header-nav-main.header-nav-main-slide nav>ul>li:hover>span>a:first-child {
        transform: translateY(-40%);
        opacity: 0
    }

    #header .header-nav-main.header-nav-main-slide nav>ul>li:hover>span .item-two {
        transform: translateY(0%);
        opacity: 1
    }

    #header .header-nav-main.header-nav-main-transition nav>ul>li>a {
        transition: ease all 300ms
    }

    #header .header-nav-main.header-nav-main-text-capitalize nav>ul>li>a {
        text-transform: capitalize
    }

    #header .header-nav-main.header-nav-main-text-size-2 nav>ul>li>a {
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0
    }

    #header .header-nav-main.header-nav-main-text-size-3 nav>ul>li>a {
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0
    }

    #header .header-nav-main.header-nav-main-text-weight-600 nav>ul>li>a {
        font-weight: 600
    }

    #header .header-nav-main a>.thumb-info-preview {
        position: absolute;
        display: block;
        left: 100%;
        opacity: 0;
        border: 0;
        padding-left: 10px;
        background: 0 0;
        overflow: visible;
        margin-top: 15px;
        top: -10000px;
        transition: transform .2s ease-out, opacity .2s ease-out;
        transform: translate3d(-20px, 0, 0)
    }

    #header .header-nav-main a>.thumb-info-preview .thumb-info-wrapper {
        background: #fff;
        display: block;
        border-radius: 4px;
        border: 0;
        box-shadow: 0 20px 45px rgba(0, 0, 0, .08);
        margin: 0;
        padding: 4px;
        text-align: left;
        width: 190px
    }

    #header .header-nav-main a>.thumb-info-preview .thumb-info-image {
        transition: all 6s linear 0s;
        width: 182px;
        height: 136px;
        min-height: 0
    }

    #header .header-nav-main a:hover>.thumb-info-preview {
        transform: translate3d(0, 0, 0);
        top: 0;
        opacity: 1;
        margin-top: -5px
    }

    #header .header-nav-main .dropdown-reverse a>.thumb-info-preview {
        transform: translate3d(20px, 0, 0);
        right: 100%;
        left: auto;
        padding-left: 0;
        margin-right: 10px
    }

    #header .header-nav-main .dropdown-reverse a:hover>.thumb-info-preview {
        transform: translate3d(0, 0, 0)
    }

    #header .header-nav-bar {
        z-index: 1
    }

    #header .header-nav-bar.header-nav-bar-top-border {
        border-top: 1px solid #ededed
    }

    #header .header-nav-bar .header-container {
        min-height: 0;
        height: auto !important
    }

    #header .header-nav-bar .header-container .header-container-md {
        height: 120px
    }

    #header .header-nav-bar .header-nav {
        min-height: 60px
    }

    #header .header-nav-bar .header-nav .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown>.dropdown-item:before {
        bottom: 1px !important;
        margin-left: 0
    }

    #header .header-nav-bar .header-nav .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav-bar .header-nav .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    #header .header-nav-bar .header-nav .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown:hover>.dropdown-menu {
        margin-top: -1px !important
    }

    #header .header-nav-bar .header-nav-links:not(.justify-content-lg-center) .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li {
        margin-left: 0;
        margin-right: 0
    }

    #header .header-nav-bar .header-nav-links:not(.justify-content-lg-center) .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown>.dropdown-item {
        padding: 0 0 0 2rem !important
    }

    #header .header-nav-bar .header-nav-links:not(.justify-content-lg-center) .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown>.dropdown-item:before {
        bottom: 1px !important;
        margin-left: 17px
    }

    #header .header-nav-bar .header-nav-links:not(.justify-content-lg-center) .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav-bar .header-nav-links:not(.justify-content-lg-center) .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    #header .header-nav-bar .header-nav-links:not(.justify-content-lg-center) .header-nav-main.header-nav-main-dropdown-arrow nav>ul>li.dropdown:hover>.dropdown-menu {
        margin-top: -1px !important
    }

    #header .header-nav {
        display: flex;
        align-items: center;
        flex-grow: 1;
        justify-content: flex-end;
        align-self: stretch
    }

    #header .header-nav.header-nav-stripe {
        padding: 0
    }

    #header .header-nav.header-nav-stripe .header-nav-main {
        align-self: stretch;
        margin-top: -1px;
        min-height: 0
    }

    #header .header-nav.header-nav-stripe nav {
        display: flex
    }

    #header .header-nav.header-nav-stripe nav>ul>li {
        display: inline-flex;
        align-self: stretch
    }

    #header .header-nav.header-nav-stripe nav>ul>li>a {
        background: 0 0;
        padding: 0 .9rem;
        margin: 1px 0 0;
        height: 100%
    }

    #header .header-nav.header-nav-stripe nav>ul>li>a.active {
        color: #333;
        background: 0 0
    }

    #header .header-nav.header-nav-stripe nav>ul>li:hover>a,
    #header .header-nav.header-nav-stripe nav>ul>li:hover>a.active,
    #header .header-nav.header-nav-stripe nav>ul>li.open>a,
    #header .header-nav.header-nav-stripe nav>ul>li.open>a.active,
    #header .header-nav.header-nav-stripe nav>ul>li.accessibility-open>a,
    #header .header-nav.header-nav-stripe nav>ul>li.accessibility-open>a.active {
        color: #fff;
        padding-bottom: 0
    }

    #header .header-nav.header-nav-stripe nav>ul>li.dropdown.open>a:before,
    #header .header-nav.header-nav-stripe nav>ul>li.dropdown.accessibility-open>a:before,
    #header .header-nav.header-nav-stripe nav>ul>li.dropdown:hover>a:before {
        content: none
    }

    #header .header-nav.header-nav-stripe nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav.header-nav-stripe nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    #header .header-nav.header-nav-stripe nav>ul>li.dropdown:hover>.dropdown-menu {
        top: 100%;
        left: 0;
        margin-top: 1px
    }

    #header .header-nav.header-nav-stripe nav>ul>li.dropdown.dropdown-reverse>.dropdown-menu {
        left: auto
    }

    #header .header-nav.header-nav-stripe.header-nav-main-dark nav>ul>li:hover>a {
        color: #fff !important
    }

    #header .header-nav.header-nav-stripe nav>ul:not(:hover)>li>a.active {
        color: #fff !important
    }

    #header .header-nav.header-nav-stripe nav>ul>li:hover>a.active {
        color: #fff !important
    }

    #header .header-nav.header-nav-links,
    #header .header-nav.header-nav-line {
        padding: 0
    }

    #header .header-nav.header-nav-links .header-nav-main,
    #header .header-nav.header-nav-line .header-nav-main {
        align-self: stretch;
        min-height: 0;
        margin-top: 0
    }

    #header .header-nav.header-nav-links nav>ul>li>a,
    #header .header-nav.header-nav-links nav>ul>li:hover>a,
    #header .header-nav.header-nav-line nav>ul>li>a,
    #header .header-nav.header-nav-line nav>ul>li:hover>a {
        position: relative;
        background: 0 0 !important;
        padding: 0 .9rem;
        margin: 1px 0 0;
        min-height: 60px;
        height: 100%
    }

    #header .header-nav.header-nav-links nav>ul>li:hover>a:before,
    #header .header-nav.header-nav-links nav>ul>li.open>a:before,
    #header .header-nav.header-nav-links nav>ul>li.accessibility-open>a:before,
    #header .header-nav.header-nav-line nav>ul>li:hover>a:before,
    #header .header-nav.header-nav-line nav>ul>li.open>a:before,
    #header .header-nav.header-nav-line nav>ul>li.accessibility-open>a:before {
        opacity: 1
    }

    #header .header-nav.header-nav-links nav>ul>li>a.active,
    #header .header-nav.header-nav-line nav>ul>li>a.active {
        background: 0 0
    }

    #header .header-nav.header-nav-links nav>ul>li>a.active:before,
    #header .header-nav.header-nav-line nav>ul>li>a.active:before {
        opacity: 1
    }

    #header .header-nav.header-nav-links nav>ul>li.dropdown>a:before,
    #header .header-nav.header-nav-line nav>ul>li.dropdown>a:before {
        border-bottom: 0
    }

    #header .header-nav.header-nav-links nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav.header-nav-links nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    #header .header-nav.header-nav-links nav>ul>li.dropdown:hover>.dropdown-menu,
    #header .header-nav.header-nav-line nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav.header-nav-line nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    #header .header-nav.header-nav-line nav>ul>li.dropdown:hover>.dropdown-menu {
        margin-top: 0
    }

    #header .header-nav.header-nav-links:not(.header-nav-light-text) nav>ul>li>a,
    #header .header-nav.header-nav-line:not(.header-nav-light-text) nav>ul>li>a {
        color: #444
    }

    #header .header-nav.header-nav-links.header-nav-light-text nav>ul>li>a,
    #header .header-nav.header-nav-line.header-nav-light-text nav>ul>li>a {
        color: #fff
    }

    #header .header-nav.header-nav-links.header-nav-force-light-text nav>ul>li>a,
    #header .header-nav.header-nav-line.header-nav-force-light-text nav>ul>li>a {
        color: #fff !important
    }

    #header .header-nav.header-nav-links.header-nav-force-light-text nav>ul>li>a.active,
    #header .header-nav.header-nav-line.header-nav-force-light-text nav>ul>li>a.active {
        color: #fff !important
    }

    #header .header-nav.header-nav-links.header-nav-force-light-text nav>ul>li:hover>a,
    #header .header-nav.header-nav-links.header-nav-force-light-text nav>ul>li:focus>a,
    #header .header-nav.header-nav-links.header-nav-force-light-text nav>ul>li:active>a,
    #header .header-nav.header-nav-line.header-nav-force-light-text nav>ul>li:hover>a,
    #header .header-nav.header-nav-line.header-nav-force-light-text nav>ul>li:focus>a,
    #header .header-nav.header-nav-line.header-nav-force-light-text nav>ul>li:active>a {
        color: #fff !important
    }

    #header .header-nav.header-nav-line nav>ul>li>a:before,
    #header .header-nav.header-nav-line nav>ul>li:hover>a:before {
        content: "";
        position: absolute;
        background: 0 0;
        width: auto;
        height: 3px;
        top: -2px;
        left: -1px;
        right: -1px;
        opacity: 0
    }

    #header .header-nav.header-nav-line nav>ul>li:hover>a:before {
        opacity: 1 !important
    }

    #header .header-nav.header-nav-line.header-nav-top-line nav>ul>li>a:before,
    #header .header-nav.header-nav-line.header-nav-top-line nav>ul>li:hover>a:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        top: -2px;
        left: 0
    }

    #header .header-nav.header-nav-line.header-nav-top-line.header-nav-top-line-with-border nav>ul>li>a:before,
    #header .header-nav.header-nav-line.header-nav-top-line.header-nav-top-line-with-border nav>ul>li:hover>a:before {
        top: -4px
    }

    #header .header-nav.header-nav-line.header-nav-top-line-animated nav>ul>li>a:before {
        transition: all .3s ease;
        width: 0%;
        left: 50%
    }

    #header .header-nav.header-nav-line.header-nav-top-line-animated nav>ul>li:hover>a:before {
        left: 0;
        width: 100%
    }

    #header .header-nav.header-nav-line.header-nav-bottom-line nav>ul>li>a:before,
    #header .header-nav.header-nav-line.header-nav-bottom-line nav>ul>li:hover>a:before {
        content: "";
        position: absolute;
        width: auto;
        height: 3px;
        top: 50%;
        left: 15px;
        right: 15px;
        margin-top: 15px;
        transform: translateY(-3px)
    }

    #header .header-nav.header-nav-line.header-nav-bottom-line.header-nav-bottom-line-no-transform nav>ul>li>a:before,
    #header .header-nav.header-nav-line.header-nav-bottom-line.header-nav-bottom-line-no-transform nav>ul>li:hover>a:before {
        margin-top: 12px;
        transform: none
    }

    #header .header-nav.header-nav-line.header-nav-bottom-line.header-nav-line-under-text nav>ul>li>a:before,
    #header .header-nav.header-nav-line.header-nav-bottom-line.header-nav-line-under-text nav>ul>li:hover>a:before {
        left: 0;
        right: 0;
        height: 7px;
        margin: 6px 10px 15px;
        opacity: .3 !important
    }

    #header .header-nav.header-nav-line.header-nav-bottom-line.header-nav-bottom-line-effect-1 nav>ul>li>a:before {
        transition: cubic-bezier(.55, 0, .1, 1) right 300ms;
        right: 100%
    }

    #header .header-nav.header-nav-line.header-nav-bottom-line.header-nav-bottom-line-effect-1 nav>ul>li>a.active:before {
        right: 15px
    }

    #header .header-nav.header-nav-line.header-nav-bottom-line.header-nav-bottom-line-effect-1 nav>ul>li:hover>a:before {
        right: 15px
    }

    #header .header-nav.header-nav-line.header-nav-bottom-line.header-nav-bottom-line-effect-1.header-nav-line-under-text nav>ul>li>a.active:before {
        right: 0
    }

    #header .header-nav.header-nav-line.header-nav-bottom-line.header-nav-bottom-line-effect-1.header-nav-line-under-text nav>ul>li:hover>a:before {
        right: 0
    }

    #header .header-nav.header-nav-line.header-nav-bottom-line.header-nav-bottom-line-active-text-light nav>ul>li:hover>a {
        color: #fff !important
    }

    #header .header-nav.header-nav-line.header-nav-bottom-line.header-nav-bottom-line-active-text-light nav>ul:not(:hover) li>a.active {
        color: #fff !important
    }

    #header .header-nav.header-nav-line.header-nav-bottom-line.header-nav-bottom-line-active-text-dark nav>ul>li:hover>a {
        color: #444 !important
    }

    #header .header-nav.header-nav-line.header-nav-bottom-line.header-nav-bottom-line-active-text-dark nav>ul:not(:hover) li>a.active {
        color: #444 !important
    }

    #header .header-nav.header-nav-no-space-dropdown nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav.header-nav-no-space-dropdown nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    #header .header-nav.header-nav-no-space-dropdown nav>ul>li.dropdown:hover>.dropdown-menu {
        margin-top: -1px
    }

    #header .header-nav.header-nav-force-light-text .header-nav-main nav>ul>li>a,
    #header .header-nav.header-nav-force-light-text .header-nav-main nav>ul>li .wrapper-items-cloned>a {
        color: #fff !important
    }

    #header .header-nav.header-nav-force-light-text:not(.header-nav-force-light-text-active-skin-color) .header-nav-main nav>ul>li:hover>a,
    #header .header-nav.header-nav-force-light-text:not(.header-nav-force-light-text-active-skin-color) .header-nav-main nav>ul>li .wrapper-items-cloned:hover>a {
        color: #333 !important
    }

    #header .header-nav.header-nav-force-light-text:not(.header-nav-force-light-text-active-skin-color) .header-nav-main nav>ul:not(:hover)>li>a.active,
    #header .header-nav.header-nav-force-light-text:not(.header-nav-force-light-text-active-skin-color) .header-nav-main nav>ul:not(:hover)>li .wrapper-items-cloned>a.active {
        color: #333 !important
    }

    #header .header-nav.header-nav-icons nav>ul>li>a [class*=fa-],
    #header .header-nav.header-nav-icons nav>ul>li>a .icons {
        font-size: 1.1rem;
        margin-right: .28rem;
        margin-top: .1rem
    }

    #header .header-nav.header-nav-divisor nav>ul>li {
        margin: 0
    }

    #header .header-nav.header-nav-divisor nav>ul>li>a {
        border-right: 1px solid rgba(0, 0, 0, .07)
    }

    #header .header-nav.header-nav-divisor nav>ul>li:last-child>a {
        border-right: 0
    }

    #header .header-nav.header-nav-spaced nav>ul>li>a {
        margin: 0 !important;
        padding-right: 1.5rem !important;
        padding-left: 1.5rem !important
    }

    #header .header-nav.header-nav-first-item-no-padding nav>ul>li:first-child>a {
        padding-left: 0 !important
    }

    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown>a:before {
        border-bottom: 0
    }

    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown li a {
        border-bottom-color: #2a2a2a
    }

    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown .dropdown-menu {
        background: #1e1e1e;
        margin-top: 0
    }

    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown .dropdown-menu>li>a {
        color: #adadad
    }

    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown .dropdown-menu>li:hover>a,
    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown .dropdown-menu>li:focus>a,
    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown .dropdown-menu>li:active>a,
    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown .dropdown-menu>li.active>a,
    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown .dropdown-menu>li.open>a,
    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown .dropdown-menu>li.accessibility-open>a {
        background: #282828;
        color: #fff
    }

    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown.dropdown-mega .dropdown-mega-sub-title {
        color: #fff
    }

    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown.dropdown-mega .dropdown-mega-sub-nav>li>a {
        color: #adadad
    }

    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown.dropdown-mega .dropdown-mega-sub-nav>li:hover>a,
    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown.dropdown-mega .dropdown-mega-sub-nav>li:focus>a,
    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown.dropdown-mega .dropdown-mega-sub-nav>li:active>a,
    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown.dropdown-mega .dropdown-mega-sub-nav>li.active>a,
    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown.dropdown-mega .dropdown-mega-sub-nav>li.open>a,
    #header .header-nav.header-nav-dropdowns-dark nav>ul>li.dropdown.dropdown-mega .dropdown-mega-sub-nav>li.accessibility-open>a {
        color: #fff;
        background: #282828
    }

    #header .header-nav.header-nav-sub-title .header-nav-main nav>ul>li>a,
    #header .header-nav.header-nav-sub-title-animated .header-nav-main nav>ul>li>a {
        position: relative;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-right: 0;
        padding-left: 0;
        margin-left: .7rem;
        margin-right: .7rem
    }

    #header .header-nav.header-nav-sub-title .header-nav-main nav>ul>li>a>span,
    #header .header-nav.header-nav-sub-title-animated .header-nav-main nav>ul>li>a>span {
        font-size: .9em;
        text-transform: none;
        font-weight: 400;
        margin-top: .3rem
    }

    #header .header-nav.header-nav-sub-title .header-nav-main nav>ul>li>a>span {
        margin-top: -.5rem
    }

    #header .header-nav.header-nav-sub-title-animated .header-nav-main nav>ul>li>a {
        transition: ease padding-bottom 300ms
    }

    #header .header-nav.header-nav-sub-title-animated .header-nav-main nav>ul>li>a.active {
        padding-bottom: 15px
    }

    #header .header-nav.header-nav-sub-title-animated .header-nav-main nav>ul>li>a.active>span {
        top: 60%;
        left: 0;
        opacity: 1
    }

    #header .header-nav.header-nav-sub-title-animated .header-nav-main nav>ul>li>a>span {
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: 0;
        opacity: 0;
        transform: translate3d(0, -50%, 0);
        transition: ease opacity 200ms, ease top 300ms
    }

    #header .header-nav.header-nav-sub-title-animated .header-nav-main nav>ul>li:hover>a,
    #header .header-nav.header-nav-sub-title-animated .header-nav-main nav>ul>li:focus>a {
        padding-bottom: 15px
    }

    #header .header-nav.header-nav-sub-title-animated .header-nav-main nav>ul>li:hover>a>span,
    #header .header-nav.header-nav-sub-title-animated .header-nav-main nav>ul>li:focus>a>span {
        top: 60%;
        left: 0;
        opacity: 1
    }

    #header .header-nav.header-nav-links-side-header nav>ul>li>a {
        padding: 10px 15px !important;
        min-height: 0 !important;
        border-bottom: 1px solid rgba(0, 0, 0, .05);
        border-radius: 0
    }

    #header .header-nav.header-nav-links-side-header nav>ul>li:last-child>a {
        border-bottom: 0
    }

    #header .header-nav.header-nav-links-side-header nav>ul>li.dropdown {
        position: static
    }

    #header .header-nav.header-nav-links-side-header nav>ul>li.dropdown>.dropdown-item {
        position: relative
    }

    #header .header-nav.header-nav-links-side-header nav>ul>li.dropdown>.dropdown-item:before {
        font-family: 'font awesome 5 free';
        content: "\f054" !important;
        font-weight: 900;
        position: absolute;
        top: 50%;
        font-size: .5rem;
        opacity: .7 !important;
        left: auto;
        right: 20px;
        transform: translateY(-50%);
        transition: all .2s ease-out;
        display: block !important
    }

    #header .header-nav.header-nav-links-side-header nav>ul>li.dropdown:hover>.dropdown-item:before {
        right: 15px;
        opacity: 1 !important
    }

    #header .header-nav.header-nav-click-to-open nav>ul>li.dropdown .dropdown-menu,
    #header .header-nav.header-nav-click-to-open nav>ul>li.dropdown li.dropdown-submenu>.dropdown-menu {
        transition: opacity .2s ease-out
    }

    #header .header-nav.header-nav-click-to-open nav>ul>li.dropdown:hover:not(.open) .dropdown-menu {
        top: -10000px;
        opacity: 0
    }

    #header .header-nav.header-nav-click-to-open nav>ul>li.dropdown>.dropdown-toggle>.fa-chevron-down {
        display: block;
        opacity: 0;
        position: absolute;
        right: 12px
    }

    #header .header-nav.header-nav-click-to-open nav>ul>li.dropdown.open .dropdown-menu>li.dropdown-submenu:hover:not(.open) .dropdown-menu {
        top: -10000px;
        opacity: 0
    }
}

@media(min-width:992px) {
    #header .header-nav-main-arrows nav>ul>li>a.dropdown-toggle:after {
        display: inline-block;
        font-family: 'font awesome 5 free';
        content: "\f078";
        font-weight: 900;
        border: 0;
        width: auto;
        height: auto;
        margin: 0;
        padding: 0 0 0 4px;
        font-size: .6rem
    }
}

@media(min-width:992px) {
    #header .header-nav-main-dark-text nav>.nav-pills>li>a {
        color: #333
    }
}

@media(min-width:992px) {
    html #header .header-nav-main nav>ul>li.dropdown-full-color .dropdown-menu {
        border-top: 0
    }

    html #header .header-nav-main nav>ul>li.dropdown-full-color .dropdown-menu li.dropdown-submenu>.dropdown-menu {
        margin-top: -5px
    }
}

@media(min-width:992px) {
    #header .header-nav-main-rounded nav>.nav-pills>li>a {
        justify-content: center;
        align-self: center;
        border-radius: 1.5rem
    }

    #header .header-nav-main-rounded nav>.nav-pills>li>a:before {
        display: none !important
    }

    #header .header-nav-main-rounded nav>ul>li.dropdown.open>a,
    #header .header-nav-main-rounded nav>ul>li.dropdown.accessibility-open>a,
    #header .header-nav-main-rounded nav>ul>li.dropdown:hover>a {
        border-radius: 1.5rem
    }

    #header .header-nav-main-rounded nav>ul>li.dropdown .dropdown-menu {
        border-radius: 4px
    }
}

@media(min-width:992px) {
    #header .header-nav-stretch {
        padding-top: 0;
        padding-bottom: 0
    }

    #header .header-nav-stretch .header-nav-main {
        align-self: stretch
    }

    #header .header-nav-stretch nav>ul>li {
        display: inline-flex;
        align-self: stretch
    }

    #header .header-nav-stretch nav>ul>li.dropdown.open>a:before,
    #header .header-nav-stretch nav>ul>li.dropdown.accessibility-open>a:before,
    #header .header-nav-stretch nav>ul>li.dropdown:hover>a:before {
        content: none
    }

    #header .header-nav-stretch nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav-stretch nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    #header .header-nav-stretch nav>ul>li.dropdown:hover>.dropdown-menu {
        top: 100%;
        left: 0;
        margin-top: -1px
    }
}

@media(min-width:992px) {

    #header.header-narrow .header-nav.header-nav-stripe nav>ul>li>a,
    #header.header-narrow .header-nav.header-nav-dropdowns-dark nav>ul>li>a,
    #header.header-narrow .header-nav.header-nav-links nav>ul>li>a,
    #header.header-narrow .header-nav.header-nav-line nav>ul>li>a {
        min-height: 60px
    }
}

@media(min-width:992px) {

    html.side-header #header.side-header .side-header-scrollable,
    html.side-header-hamburguer-sidebar #header.side-header .side-header-scrollable {
        height: 100%;
        margin-right: -13px
    }

    html.side-header #header.side-header .side-header-scrollable .scrollable-content,
    html.side-header-hamburguer-sidebar #header.side-header .side-header-scrollable .scrollable-content {
        padding-right: 10px;
        padding-left: 0
    }

    html.side-header #header.side-header .header-nav-main nav>ul>li>a.dropdown-toggle .fa-chevron-down,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav-main nav>ul>li>a.dropdown-toggle .fa-chevron-down {
        display: block;
        position: absolute;
        right: 7px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotate(-90deg);
        font-size: .5rem
    }

    html.side-header #header.side-header .header-nav-main nav>ul>li>a.dropdown-toggle .fa-chevron-down:before,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav-main nav>ul>li>a.dropdown-toggle .fa-chevron-down:before {
        content: none
    }

    html.side-header #header.side-header .header-nav nav,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav nav {
        display: block !important
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-dropdown nav>ul>li.dropdown,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-dropdown nav>ul>li.dropdown {
        position: relative
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown:before,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown:before {
        top: 23px;
        right: 20px
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown>.dropdown-menu li a,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown>.dropdown-menu li a {
        border: 0
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown:not(.open) .dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown:not(.open) .dropdown-menu {
        overflow: hidden;
        opacity: 0;
        width: 0;
        height: 0;
        top: -10000px
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.open>.dropdown-menu,
    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.open>.dropdown-menu li.dropdown-submenu.open>.dropdown-menu,
    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.accessibility-open>.dropdown-menu li.dropdown-submenu.open>.dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.open>.dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.open>.dropdown-menu li.dropdown-submenu.open>.dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.accessibility-open>.dropdown-menu li.dropdown-submenu.open>.dropdown-menu {
        position: relative;
        box-shadow: none;
        margin: 0;
        padding: 5px 0 5px 15px;
        left: auto;
        right: auto;
        transform: none;
        min-width: auto;
        width: 100%;
        opacity: 1 !important
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.open>.dropdown-menu li.dropdown-submenu.open>a:after,
    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.accessibility-open>.dropdown-menu li.dropdown-submenu.open>a:after,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.open>.dropdown-menu li.dropdown-submenu.open>a:after,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.accessibility-open>.dropdown-menu li.dropdown-submenu.open>a:after {
        right: 20px
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-menu {
        min-width: 0
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content {
        padding: 5px 0 5px 15px
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content [class*=col],
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content [class*=col] {
        max-width: 100%;
        display: block;
        padding: 5px 0;
        flex: none
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content .dropdown-mega-sub-title,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content .dropdown-mega-sub-title {
        padding-left: 15px;
        font-size: .75em
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content .dropdown-mega-sub-nav,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content .dropdown-mega-sub-nav {
        padding-left: 30px
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand .thumb-info-preview,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand .thumb-info-preview {
        display: none
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-columns,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-columns {
        position: relative
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-columns nav,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-columns nav {
        margin-top: -10px
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown {
        position: static
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu {
        box-shadow: none;
        top: 50% !important;
        transform: translateY(-50%);
        left: 10000px;
        margin-left: -15px;
        margin-top: 10px;
        opacity: 0;
        transition: margin-left .2s ease-out, opacity .2s ease-out
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu:before,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu:before {
        content: '';
        display: block;
        position: absolute;
        top: -100vh;
        width: 100%;
        height: 100%;
        background: #fcfcfc;
        border-right: 1px solid #f7f7f7;
        border-left: 1px solid #f7f7f7;
        height: 200vh
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu {
        position: static
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu>.dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu>.dropdown-menu {
        margin-left: 0;
        left: 100%;
        right: auto;
        margin-left: -15px;
        opacity: 0;
        transition: margin-left .2s ease-out, opacity .2s ease-out;
        transform: translate3d(10000px, 0, 0)
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu>.dropdown-menu:before,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu>.dropdown-menu:before {
        border-left: 0
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu:hover>.dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu:hover>.dropdown-menu {
        right: auto;
        opacity: 1;
        margin-left: 0;
        transform: translateY(-50%)
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.dropdown-reverse>.dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.dropdown-reverse>.dropdown-menu {
        left: auto
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.dropdown-reverse:hover>.dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.dropdown-reverse:hover>.dropdown-menu {
        right: 100%
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown:hover>.dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown:hover>.dropdown-menu {
        margin-left: 0;
        margin-top: 0;
        padding-top: 0;
        opacity: 1
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown-mega,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-columns nav>ul>li.dropdown-mega {
        position: static !important
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-columns .thumb-info-preview,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-columns .thumb-info-preview {
        display: none
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide {
        height: 100%;
        justify-content: center
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide .header-nav-main,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide .header-nav-main {
        height: 100% !important
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav>ul,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav>ul {
        height: 100%;
        justify-content: center
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav>ul>li,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav>ul>li {
        height: auto
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul {
        transform: translate3d(0, 0, 0);
        transition: ease all 300ms
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul.next-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul.next-menu {
        transform: translate3d(-100%, 0, 0)
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown>a.dropdown-toggle,
    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown .dropdown-menu li.dropdown-submenu>a.dropdown-item,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown>a.dropdown-toggle,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown .dropdown-menu li.dropdown-submenu>a.dropdown-item {
        display: inline-block
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown>a.dropdown-toggle:before,
    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown .dropdown-menu li.dropdown-submenu>a.dropdown-item:before,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown>a.dropdown-toggle:before,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown .dropdown-menu li.dropdown-submenu>a.dropdown-item:before {
        display: none !important
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown>a.dropdown-toggle:after,
    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown .dropdown-menu li.dropdown-submenu>a.dropdown-item:after,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown>a.dropdown-toggle:after,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown .dropdown-menu li.dropdown-submenu>a.dropdown-item:after {
        font-family: 'font awesome 5 free';
        content: "\f054";
        font-weight: 900;
        position: relative;
        font-size: .5rem;
        opacity: .7;
        display: inline-block;
        border: 0;
        top: 1px;
        left: 5px;
        transform: none
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown>a.dropdown-toggle:hover:after,
    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown .dropdown-menu li.dropdown-submenu>a.dropdown-item:hover:after,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown>a.dropdown-toggle:hover:after,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown .dropdown-menu li.dropdown-submenu>a.dropdown-item:hover:after {
        -webkit-animation: sideMenuArrow 600ms ease;
        animation: sideMenuArrow 600ms ease;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown .dropdown-menu li.dropdown-submenu>a.dropdown-item,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown .dropdown-menu li.dropdown-submenu>a.dropdown-item {
        background: 0 0
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown .dropdown-menu li.dropdown-submenu>a.dropdown-item:after,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown .dropdown-menu li.dropdown-submenu>a.dropdown-item:after {
        top: -1px;
        margin-left: 5px;
        transform: none
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown .dropdown-menu li a,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul>li.dropdown .dropdown-menu li a {
        background: 0 0
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li {
        position: static;
        text-align: center
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li a,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li a {
        display: inline-block;
        width: 100%
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li ul,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li ul {
        visibility: hidden
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li ul.visible,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li ul.visible {
        visibility: visible
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.back-button>a,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.back-button>a {
        cursor: pointer;
        background: 0 0
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.back-button>a:before,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.back-button>a:before {
        font-family: 'font awesome 5 free';
        content: "\f053";
        font-weight: 900;
        position: relative;
        font-size: .5rem;
        opacity: .7;
        display: inline-block;
        border: 0;
        top: -1px;
        right: 5px
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.back-button>a:hover:before,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.back-button>a:hover:before {
        -webkit-animation: sideMenuArrowBack 600ms ease;
        animation: sideMenuArrowBack 600ms ease;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.dropdown .dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.dropdown .dropdown-menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        top: 50% !important;
        left: 100%;
        padding: 0;
        margin: 0 !important;
        opacity: 1;
        border-top: none;
        box-shadow: none;
        transform: translate3d(0, -50%, 0) !important
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.dropdown .dropdown-menu::-webkit-scrollbar,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.dropdown .dropdown-menu::-webkit-scrollbar {
        width: 5px
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.dropdown .dropdown-menu::-webkit-scrollbar-thumb,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.dropdown .dropdown-menu::-webkit-scrollbar-thumb {
        border-radius: 0;
        background: rgba(204, 204, 204, .5)
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.dropdown .dropdown-menu.next-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.dropdown .dropdown-menu.next-menu {
        transform: translate3d(-100%, -50%, 0) !important
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.dropdown .dropdown-menu li.dropdown-submenu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.dropdown .dropdown-menu li.dropdown-submenu {
        position: static
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.dropdown-submenu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-slide nav ul li.dropdown-submenu {
        position: static
    }
}

#header.header-floating-icons .nav {
    flex-direction: column
}

#header.header-floating-icons .header-nav-main nav>ul>li {
    flex: 0 0 auto;
    margin-left: 0
}

#header.header-floating-icons .header-nav-main nav>ul>li>a>i {
    pointer-events: none
}

#header.header-floating-icons .header-nav-main nav>ul>li>a.active {
    background: #fff !important
}

#header.header-floating-icons .header-nav-main nav>ul>li>a.active:after {
    background: #fff
}

#header.header-floating-icons .header-nav-main nav>ul>li.open>a:after,
#header.header-floating-icons .header-nav-main nav>ul>li.accessibility-open>a:after,
#header.header-floating-icons .header-nav-main nav>ul>li.active>a:after,
#header.header-floating-icons .header-nav-main nav>ul>li:hover>a:after,
#header.header-floating-icons .header-nav-main nav>ul>li:active>a:after,
#header.header-floating-icons .header-nav-main nav>ul>li:focus>a:after {
    background: #fff
}

@media(min-width:992px) {
    #header.header-floating-icons {
        background: 0 0;
        height: 0;
        min-height: 0 !important
    }

    #header.header-floating-icons .header-nav-main nav>ul>li {
        height: auto
    }

    #header.header-floating-icons .header-row {
        display: block;
        position: absolute;
        top: 12px;
        left: -60px
    }

    #header.header-floating-icons .header-body {
        position: fixed;
        top: 0;
        left: 0;
        background: 0 0;
        min-height: 0;
        padding: 0;
        border: none
    }

    #header.header-floating-icons .header-nav {
        padding: 0 !important
    }

    #header.header-floating-icons .header-nav-main {
        margin: 0;
        box-shadow: 0 0 80px 0 rgba(62, 62, 62, .3)
    }

    #header.header-floating-icons .header-nav-main nav>ul>li {
        border-bottom: 1px solid #ccc
    }

    #header.header-floating-icons .header-nav-main nav>ul>li:hover>a {
        background: #fff
    }

    #header.header-floating-icons .header-nav-main nav>ul>li:hover>a>span {
        opacity: 1;
        transform: rotateY(0deg)
    }

    #header.header-floating-icons .header-nav-main nav>ul>li>a {
        font-size: 25px;
        padding: 18px;
        perspective: 770px;
        background: #f7f7f7;
        border-radius: 0;
        transform: translateZ(0)
    }

    #header.header-floating-icons .header-nav-main nav>ul>li>a:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 102%;
        z-index: -1
    }

    #header.header-floating-icons .header-nav-main nav>ul>li>a>span {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 125.5%;
        background: #fff;
        padding: 0 25px;
        height: 100%;
        line-height: 4.1;
        white-space: nowrap;
        font-size: 14px;
        z-index: -2;
        transition: ease transform 300ms;
        box-shadow: 0 0 80px 0 rgba(62, 62, 62, .15);
        transform-origin: -19% 0%;
        transform: rotateY(88deg)
    }

    #header.header-floating-icons .header-nav-main nav>ul>li>a>span:before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: -4px;
        padding: 10px;
        background: #fff;
        z-index: -1;
        transform: translate(0, -50%) rotate(45deg)
    }
}

@media(min-width:992px) and (max-width:1281px) {
    #header.header-floating-icons .header-row {
        left: -19px
    }

    #header.header-floating-icons .header-nav-main nav>ul>li>a {
        padding: 9.8px;
        perspective: 450px
    }

    #header.header-floating-icons .header-nav-main nav>ul>li>a>span {
        line-height: 3
    }
}

@media(max-width:991px) {
    #header.header-floating-icons {
        position: fixed;
        top: 23px;
        right: 10px
    }

    #header.header-floating-icons .header-body {
        background: 0 0;
        border: none;
        min-height: 0
    }

    #header.header-floating-icons .header-btn-collapse-nav {
        padding: 15px 20px;
        margin: 0
    }

    #header.header-floating-icons .header-nav-main {
        position: absolute;
        right: 0;
        top: 77px;
        max-width: 53px;
        overflow: hidden;
        box-shadow: 0 0 15px 0 rgba(62, 62, 62, .2)
    }

    #header.header-floating-icons .header-nav-main:before {
        content: none
    }

    #header.header-floating-icons .header-nav-main nav {
        padding: 0;
        margin: 0 !important;
        max-height: none
    }

    #header.header-floating-icons .header-nav-main nav>ul {
        display: block;
        padding: 0
    }

    #header.header-floating-icons .header-nav-main nav>ul>li {
        display: inline-block;
        border: none
    }

    #header.header-floating-icons .header-nav-main nav>ul>li>a {
        font-size: 1.7em;
        margin: 0;
        padding: 15px;
        background: #f7f7f7;
        border-radius: 0;
        border-bottom: 1px solid #e2e2e2
    }

    #header.header-floating-icons .header-nav-main nav>ul>li>a>span {
        display: none
    }

    #header.header-floating-icons .header-nav-main nav>ul>li:last-child>a {
        border-bottom: 0
    }
}

@media(min-width:992px) {
    #header .header-nav-main.header-nav-main-light nav>ul>li>a {
        color: #fff
    }

    #header .header-nav-main.header-nav-main-light nav>ul>li>a.active {
        color: #ccc;
        background: #fff
    }

    #header .header-nav-main.header-nav-main-light nav>ul>li.open>a,
    #header .header-nav-main.header-nav-main-light nav>ul>li.accessibility-open>a,
    #header .header-nav-main.header-nav-main-light nav>ul>li.active>a,
    #header .header-nav-main.header-nav-main-light nav>ul>li:hover>a {
        background: #fff
    }

    #header .header-nav-main.header-nav-main-light nav>ul>li.open>.dropdown-menu,
    #header .header-nav-main.header-nav-main-light nav>ul>li.accessibility-open>.dropdown-menu,
    #header .header-nav-main.header-nav-main-light nav>ul>li.active>.dropdown-menu,
    #header .header-nav-main.header-nav-main-light nav>ul>li:hover>.dropdown-menu {
        border-top-color: #fff;
        box-shadow: 0 20px 25px rgba(0, 0, 0, .05)
    }

    #header .header-nav-main.header-nav-main-light nav>ul>li.open>.dropdown-menu .dropdown-submenu:hover>.dropdown-menu,
    #header .header-nav-main.header-nav-main-light nav>ul>li.accessibility-open>.dropdown-menu .dropdown-submenu:hover>.dropdown-menu,
    #header .header-nav-main.header-nav-main-light nav>ul>li.active>.dropdown-menu .dropdown-submenu:hover>.dropdown-menu,
    #header .header-nav-main.header-nav-main-light nav>ul>li:hover>.dropdown-menu .dropdown-submenu:hover>.dropdown-menu {
        border-top-color: #fff
    }

    #header .header-nav-main.header-nav-main-light nav>ul>li.active>a {
        background: #fff
    }

    #header .header-nav-main.header-nav-main-light nav>ul>li.dropdown.open>a:before,
    #header .header-nav-main.header-nav-main-light nav>ul>li.dropdown.accessibility-open>a:before,
    #header .header-nav-main.header-nav-main-light nav>ul>li.dropdown:hover>a:before {
        border-bottom-color: #fff
    }

    #header .header-nav-main.header-nav-main-light .dropdown-menu>li>a:hover,
    #header .header-nav-main.header-nav-main-light .dropdown-menu>li>a:focus {
        background: #f5f5f5
    }
}

@media(min-width:992px) {

    #header .header-nav-main-effect-1 nav>ul>li.dropdown .dropdown-menu li a,
    #header .header-nav-main-effect-1 nav>ul>li.dropdown .dropdown-mega-sub-nav li a {
        transition: transform .2s ease-out;
        transform: translate3d(0, -5px, 0)
    }

    #header .header-nav-main-effect-1 nav>ul>li.dropdown:hover>.dropdown-menu li a,
    #header .header-nav-main-effect-1 nav>ul>li.dropdown:hover .dropdown-mega-sub-nav li a,
    #header .header-nav-main-effect-1 nav>ul>li.dropdown.open>.dropdown-menu li a,
    #header .header-nav-main-effect-1 nav>ul>li.dropdown.open .dropdown-mega-sub-nav li a,
    #header .header-nav-main-effect-1 nav>ul>li.dropdown.accessibility-open>.dropdown-menu li a,
    #header .header-nav-main-effect-1 nav>ul>li.dropdown.accessibility-open .dropdown-mega-sub-nav li a {
        transform: translate3d(0, 0, 0)
    }

    #header .header-nav-main-effect-1 nav>ul>li.dropdown .dropdown-menu {
        transition: transform .2s ease-out;
        transform: translate3d(0, -5px, 0)
    }

    #header .header-nav-main-effect-1 nav>ul>li.dropdown:hover>.dropdown-menu,
    #header .header-nav-main-effect-1 nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav-main-effect-1 nav>ul>li.dropdown.accessibility-open>.dropdown-menu {
        transform: translate3d(0, 2px, 0)
    }

    #header .header-nav.header-nav-stripe .header-nav-main-effect-1 nav>ul>li.dropdown:hover>.dropdown-menu,
    #header .header-nav.header-nav-stripe .header-nav-main-effect-1 nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav.header-nav-stripe .header-nav-main-effect-1 nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    #header .header-nav.header-nav-links .header-nav-main-effect-1 nav>ul>li.dropdown:hover>.dropdown-menu,
    #header .header-nav.header-nav-links .header-nav-main-effect-1 nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav.header-nav-links .header-nav-main-effect-1 nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    #header .header-nav.header-nav-line .header-nav-main-effect-1 nav>ul>li.dropdown:hover>.dropdown-menu,
    #header .header-nav.header-nav-line .header-nav-main-effect-1 nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav.header-nav-line .header-nav-main-effect-1 nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    #header .header-nav.header-nav-dropdowns-dark .header-nav-main-effect-1 nav>ul>li.dropdown:hover>.dropdown-menu,
    #header .header-nav.header-nav-dropdowns-dark .header-nav-main-effect-1 nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav.header-nav-dropdowns-dark .header-nav-main-effect-1 nav>ul>li.dropdown.accessibility-open>.dropdown-menu {
        transform: translate3d(0, 0, 0)
    }
}

@media(min-width:992px) {
    #header .header-nav-main-effect-2 nav>ul>li.dropdown .dropdown-menu {
        transition: opacity .2s ease-out;
        opacity: 0
    }

    #header .header-nav-main-effect-2 nav>ul>li.dropdown:hover>.dropdown-menu,
    #header .header-nav-main-effect-2 nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav-main-effect-2 nav>ul>li.dropdown.accessibility-open>.dropdown-menu {
        opacity: 1
    }
}

@media(min-width:992px) {
    #header .header-nav-main-effect-3 nav>ul>li.dropdown .dropdown-menu {
        transition: transform .2s ease-out;
        transform: translate3d(0, 10px, 0)
    }

    #header .header-nav-main-effect-3 nav>ul>li.dropdown:hover>.dropdown-menu,
    #header .header-nav-main-effect-3 nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav-main-effect-3 nav>ul>li.dropdown.accessibility-open>.dropdown-menu {
        transform: translate3d(0, 0, 0)
    }
}

@media(min-width:992px) {
    #header .header-nav-main-effect-4 nav>ul>li.dropdown .dropdown-menu {
        transition: transform .2s ease-out;
        transform: translate3d(-10px, 0, 0)
    }

    #header .header-nav-main-effect-4 nav>ul>li.dropdown:hover>.dropdown-menu,
    #header .header-nav-main-effect-4 nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav-main-effect-4 nav>ul>li.dropdown.accessibility-open>.dropdown-menu {
        transform: translate3d(0, 0, 0)
    }
}

@media(min-width:992px) {
    #header .header-nav-main-effect-5 nav>ul>li.dropdown .dropdown-menu {
        transition: transform .2s ease-out;
        transform: translate3d(0, -10px, 0)
    }

    #header .header-nav-main-effect-5 nav>ul>li.dropdown:hover>.dropdown-menu,
    #header .header-nav-main-effect-5 nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav-main-effect-5 nav>ul>li.dropdown.accessibility-open>.dropdown-menu {
        transform: translate3d(0, 0, 0)
    }
}

@media(min-width:992px) {
    #header .header-nav-main-effect-6 nav>ul>li.dropdown .dropdown-menu {
        transition: transform .2s ease-out;
        transform: translate3d(10px, 0, 0)
    }

    #header .header-nav-main-effect-6 nav>ul>li.dropdown:hover>.dropdown-menu,
    #header .header-nav-main-effect-6 nav>ul>li.dropdown.open>.dropdown-menu,
    #header .header-nav-main-effect-6 nav>ul>li.dropdown.accessibility-open>.dropdown-menu {
        transform: translate3d(0, 0, 0)
    }
}

@media(min-width:992px) {
    #header .header-nav-main-sub-effect-1 nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu>.dropdown-menu {
        transition: transform .2s ease-out, opacity .2s ease-out;
        transform: translate3d(-10px, 0, 0);
        opacity: 0
    }

    #header .header-nav-main-sub-effect-1 nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu:hover>.dropdown-menu,
    #header .header-nav-main-sub-effect-1 nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.open>.dropdown-menu,
    #header .header-nav-main-sub-effect-1 nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.accessibility-open>.dropdown-menu {
        transform: translate3d(0, 0, 0);
        opacity: 1
    }

    #header .header-nav-main-sub-effect-1 nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.dropdown-reverse>.dropdown-menu {
        transition: transform .2s ease-out, opacity .2s ease-out;
        transform: translate3d(10px, 0, 0);
        left: auto;
        right: 100%;
        opacity: 0
    }

    #header .header-nav-main-sub-effect-1 nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.dropdown-reverse:hover>.dropdown-menu,
    #header .header-nav-main-sub-effect-1 nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.dropdown-reverse.open>.dropdown-menu,
    #header .header-nav-main-sub-effect-1 nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu.dropdown-reverse.accessibility-open>.dropdown-menu {
        transform: translate3d(0, 0, 0);
        opacity: 1
    }
}

@media(max-width:991px) {
    #header .header-nav-main {
        position: absolute;
        background: 0 0;
        width: 100%;
        top: 100%;
        left: 50%;
        transform: translate3d(-50%, 0, 0)
    }

    #header .header-nav-main:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        width: 100vw;
        height: 100%;
        background: #fff;
        z-index: -1;
        transform: translateX(-50%)
    }

    #header .header-nav-main nav {
        max-height: 50vh;
        overflow: hidden;
        overflow-y: auto;
        padding: 0 15px;
        transition: ease all 500ms
    }

    #header .header-nav-main nav.collapsing {
        overflow-y: hidden
    }

    #header .header-nav-main nav::-webkit-scrollbar {
        width: 5px
    }

    #header .header-nav-main nav::-webkit-scrollbar-thumb {
        border-radius: 0;
        background: rgba(204, 204, 204, .5)
    }

    #header .header-nav-main nav>ul {
        padding-top: 15px;
        padding-bottom: 15px;
        flex-direction: column
    }

    #header .header-nav-main nav>ul li {
        border-bottom: 1px solid #e8e8e8;
        clear: both;
        display: block;
        float: none;
        margin: 0;
        padding: 0;
        position: relative
    }

    #header .header-nav-main nav>ul li a {
        font-size: 13px;
        font-style: normal;
        line-height: 20px;
        padding: 7px 8px;
        margin: 1px 0;
        border-radius: 4px;
        text-align: left
    }

    #header .header-nav-main nav>ul li a .fa-caret-down {
        line-height: 35px;
        min-height: 38px;
        min-width: 30px;
        position: absolute;
        right: 5px;
        text-align: center;
        top: 0
    }

    #header .header-nav-main nav>ul li a.dropdown-toggle {
        position: relative
    }

    #header .header-nav-main nav>ul li a.dropdown-toggle:after {
        content: none
    }

    #header .header-nav-main nav>ul li a.dropdown-toggle .fa-chevron-down {
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .6rem
    }

    #header .header-nav-main nav>ul li a:active {
        background-color: #f8f9fa;
        color: inherit
    }

    #header .header-nav-main nav>ul li.dropdown .dropdown-menu {
        background: 0 0;
        padding: 0;
        margin: 0;
        font-size: 13px;
        box-shadow: none;
        border-radius: 0;
        border: 0;
        clear: both;
        display: none;
        float: none;
        position: static
    }

    #header .header-nav-main nav>ul li.dropdown .dropdown-menu li.dropdown-submenu>a {
        position: relative
    }

    #header .header-nav-main nav>ul li.dropdown .dropdown-menu li.dropdown-submenu>a:after {
        content: none
    }

    #header .header-nav-main nav>ul li.dropdown .dropdown-menu li.dropdown-submenu>a .fa-chevron-down {
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .6rem
    }

    #header .header-nav-main nav>ul li.dropdown .dropdown-menu li.dropdown-submenu.open>.dropdown-menu {
        display: block;
        margin-left: 20px
    }

    #header .header-nav-main nav>ul li.dropdown.open>.dropdown-menu {
        display: block;
        margin-left: 20px
    }

    #header .header-nav-main nav>ul li.dropdown-mega .dropdown-mega-sub-title {
        margin-top: 10px;
        display: block;
        text-align: left
    }

    #header .header-nav-main nav>ul li.dropdown-mega .dropdown-mega-sub-nav {
        margin: 0 0 0 20px;
        padding: 0;
        list-style: none
    }

    #header .header-nav-main nav>ul li.dropdown-mega .dropdown-mega-sub-nav>li>a {
        display: block;
        text-decoration: none
    }

    #header .header-nav-main nav>ul li:last-child {
        border-bottom: 0
    }

    #header .header-nav-main nav>ul>li>a {
        text-transform: uppercase;
        font-weight: 700;
        margin-top: 1px;
        margin-bottom: 1px;
        color: #ccc
    }

    #header .header-nav-main nav>ul>li>a:active {
        color: #ccc
    }

    #header .header-nav-main nav>ul>li>a.active {
        color: #fff !important;
        background: #ccc
    }

    #header .header-nav-main nav>ul>li>a.active:focus,
    #header .header-nav-main nav>ul>li>a.active:hover {
        color: #fff;
        background: #ccc
    }

    #header .header-nav-main nav .not-included {
        margin: 0
    }

    #header .header-nav-main a>.thumb-info-preview {
        display: none !important
    }

    #header .header-nav-main.header-nav-main-square nav>ul>li a {
        border-radius: 0 !important
    }

    #header .header-nav-main.header-nav-main-slide .wrapper-items-cloned {
        display: none
    }

    #header .header-nav-bar .header-container {
        min-height: 0;
        height: auto !important
    }

    #header .header-nav-bar .header-nav {
        min-height: 60px !important;
        padding: 0
    }

    #header .header-btn-collapse-nav {
        outline: 0;
        display: block;
        position: relative;
        z-index: 1
    }

    #header .header-nav.header-nav-stripe {
        min-height: 90px
    }

    #header .header-nav.header-nav-links,
    #header .header-nav.header-nav-line {
        min-height: 70px
    }

    #header .header-nav.header-nav-dropdowns-dark {
        min-height: 70px
    }

    #header .header-nav.header-nav-sub-title .header-nav-main nav>ul>li>a>span,
    #header .header-nav.header-nav-sub-title-animated .header-nav-main nav>ul>li>a>span {
        display: block;
        text-transform: none;
        font-weight: 400
    }
}

@media(max-width:991px) {
    #header .header-nav-main.header-nav-main-mobile-dark:before {
        background-color: #212529
    }

    #header .header-nav-main.header-nav-main-mobile-dark nav>ul>li>a {
        color: #dedede
    }

    #header .header-nav-main.header-nav-main-mobile-dark nav>ul>li>a.active {
        color: #fff
    }

    #header .header-nav-main.header-nav-main-mobile-dark nav>ul>li .dropdown-menu>li a {
        color: #969696
    }

    #header .header-nav-main.header-nav-main-mobile-dark nav>ul>li .dropdown-menu>li a.active {
        color: #fff
    }

    #header .header-nav-main.header-nav-main-mobile-dark nav>ul li {
        border-bottom: 1px solid #3e3e3e
    }

    #header .header-nav-main.header-nav-main-mobile-dark nav>ul li:last-child {
        border-bottom: 0
    }

    #header .header-nav-main.header-nav-main-mobile-dark nav>ul li a:hover,
    #header .header-nav-main.header-nav-main-mobile-dark nav>ul li a:focus,
    #header .header-nav-main.header-nav-main-mobile-dark nav>ul li a:active {
        background-color: #2b2b2b
    }

    #header .header-nav-main.header-nav-main-mobile-dark nav>ul li.dropdown-mega .dropdown-mega-sub-title {
        color: #eaeaea
    }
}

@media(max-width:991px) {
    #header .header-nav-main.header-nav-main-dark-text nav>ul>li>a {
        color: #333
    }

    #header .header-nav-main.header-nav-main-dark-text nav>ul>li>a.active {
        color: #fff
    }
}

@media(max-width:991px) {
    html.side-header #header.side-header .side-header-scrollable {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: visible
    }

    html.side-header #header.side-header .side-header-scrollable .scrollable-content {
        right: 0 !important;
        overflow: visible
    }

    html.side-header #header.side-header .side-header-scrollable .scrollable-pane {
        display: none !important
    }
}

@media(max-width:991px) {
    html.side-header-hamburguer-sidebar #header.side-header .header-row-side-header {
        width: 100%
    }

    html.side-header-hamburguer-sidebar #header.side-header .side-header-scrollable {
        height: 100%
    }

    html.side-header-hamburguer-sidebar #header.side-header .side-header-scrollable .scrollable-content {
        right: 0 !important;
        padding-right: 10px;
        padding-left: 10px;
        overflow-y: hidden
    }

    html.side-header-hamburguer-sidebar #header.side-header .side-header-scrollable .scrollable-pane {
        display: none !important
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav {
        height: 100%
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav .header-nav-main {
        position: relative;
        top: 0;
        left: 0;
        transform: none
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav nav {
        display: block !important;
        max-height: 69vh;
        padding: 0 8px 0 0
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links {
        width: 100%;
        padding: 0;
        overflow: hidden
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links .header-nav-main {
        align-self: stretch;
        min-height: 0;
        margin-top: 0
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links .header-nav-main.header-nav-main-mobile-dark nav>ul>li>a {
        color: #dedede !important;
        border-bottom-color: #3e3e3e
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links .header-nav-main.header-nav-main-mobile-dark nav>ul>li>a.active {
        color: #fff !important
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links .header-nav-main.header-nav-main-mobile-dark nav>ul>li .dropdown-menu>li a {
        color: #969696
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links .header-nav-main.header-nav-main-mobile-dark nav>ul>li .dropdown-menu>li a.active {
        color: #fff
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links .header-nav-main.header-nav-main-mobile-dark nav>ul li {
        border-bottom-color: #3e3e3e
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links .header-nav-main.header-nav-main-mobile-dark nav>ul li a:hover,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links .header-nav-main.header-nav-main-mobile-dark nav>ul li a:focus,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links .header-nav-main.header-nav-main-mobile-dark nav>ul li a:active {
        background-color: #2b2b2b
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links nav>ul>li>a,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links nav>ul>li:hover>a {
        position: relative;
        background: 0 0 !important;
        color: #444 !important;
        padding: 0 .9rem;
        margin: 1px 0 0;
        min-height: 70px;
        height: 100%
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links nav>ul>li>a.dropdown-toggle:after {
        content: none
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links nav>ul>li>a.active {
        color: #ccc;
        background: 0 0
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links nav>ul>li.dropdown.open>.dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links nav>ul>li.dropdown:hover>.dropdown-menu {
        margin-top: 0
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links nav>ul li {
        border-bottom: 0
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links nav>ul li a {
        color: #444;
        font-size: 12px
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-side-header nav>ul>li>a {
        padding: 10px 15px !important;
        min-height: 0 !important;
        border-bottom: 1px solid #f7f7f7;
        border-radius: 0
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-side-header nav>ul>li:last-child>a {
        border-bottom: 0
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-side-header nav>ul>li.dropdown {
        position: static
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown>.dropdown-menu li a {
        border: 0
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown:not(.open) .dropdown-menu {
        overflow: hidden;
        opacity: 0;
        width: 0;
        height: 0;
        top: -10000px
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.open>.dropdown-menu,
    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.open>.dropdown-menu li.dropdown-submenu.open>.dropdown-menu {
        position: relative;
        box-shadow: none;
        margin: 0;
        padding: 5px 0 5px 15px;
        top: auto;
        left: auto;
        right: auto;
        transform: none;
        min-width: auto;
        width: 100%;
        opacity: 1 !important
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-menu {
        min-width: 0
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content {
        padding: 5px 0 5px 15px
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content [class*=col] {
        max-width: 100%;
        display: block;
        padding: 5px 0;
        flex: none
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content .dropdown-mega-sub-title {
        margin-top: 0;
        padding-left: 15px;
        color: #333;
        font-size: .85em;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: -.5px
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content .dropdown-mega-sub-nav {
        padding-left: 10px
    }

    html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links-vertical-expand .thumb-info-preview {
        display: none
    }
}

@media(min-width:992px) {
    #header .header-body:not(.h-100) {
        height: auto !important
    }
}

@media(max-width:991px) {
    #header .header-logo img {
        z-index: 1
    }

    #header .header-nav {
        display: flex;
        align-items: center
    }

    #header.header-narrow .header-nav.header-nav-stripe {
        min-height: 70px
    }
}

#header .header-nav-main nav>ul>li.dropdown-mega.dropdown-mega-shop .dropdown-menu {
    width: 40%;
    right: 15px;
    left: auto;
    border-radius: 6px 0 6px 6px
}

#header .header-nav-main nav>ul>li.dropdown-mega.dropdown-mega-shop .dropdown-menu li table {
    width: 100%;
    margin-top: 0
}

#header .header-nav-main nav>ul>li.dropdown-mega.dropdown-mega-shop .dropdown-menu li table tr td a {
    background-color: transparent !important;
    color: #333;
    padding: 0;
    margin: 0;
    display: block
}

#header .header-nav-main nav>ul>li.dropdown-mega.dropdown-mega-shop .dropdown-menu li table tr td a.remove {
    float: right
}

#header .header-nav-main nav>ul>li.dropdown-mega.dropdown-mega-shop .dropdown-menu li table tr td a:hover {
    text-decoration: none
}

#header .header-nav-main nav>ul>li.dropdown-mega.dropdown-mega-shop .fa-shopping-cart {
    margin-right: 5px
}

#header .header-nav-main nav>ul>li.dropdown-mega.dropdown-mega-shop .product-thumbnail {
    width: 120px
}

#header .header-nav-main nav>ul>li.dropdown-mega.dropdown-mega-shop .product-actions {
    text-align: right;
    width: 80px
}

#header .header-nav-main nav>ul>li.dropdown-mega.dropdown-mega-shop .actions-continue {
    margin-top: 10px;
    padding-top: 20px;
    border-top: 1px solid #ddd;
    clear: both
}

#header .header-nav-main nav>ul>li.dropdown-mega.dropdown-mega-shop .actions-continue .btn {
    margin-bottom: 10px
}

@media(max-width:991px) {
    #header .header-nav-main nav>ul>li.dropdown-mega.dropdown-mega-shop .dropdown-menu {
        margin: 15px 0;
        padding: 0 15px;
        width: 100%
    }
}

@media(min-width:992px) {

    html.side-header .main .container,
    html.side-header #footer .container {
        padding: 0 35px;
        width: auto !important;
        max-width: 1210px
    }

    html.side-header:not(.side-header-above) body>.body {
        margin: 0 0 0 255px;
        width: auto;
        overflow-x: hidden;
        overflow-y: visible
    }

    html.side-header:not(.side-header-above) body>.body .forcefullwidth_wrapper_tp_banner .rev_slider_wrapper {
        width: 100% !important;
        left: auto !important
    }

    html.side-header.side-header-above #header.side-header {
        transition: cubic-bezier(.55, 0, .1, 1) transform 300ms
    }
}

@media(min-width:992px) and (min-width:1200px) {

    html.side-header.side-header-change-container .main .container,
    html.side-header.side-header-change-container #footer .container {
        transform: translateX(125px)
    }
}

@media(min-width:992px) and (max-width:1440px) {

    html.side-header.side-header-change-container .main .container,
    html.side-header.side-header-change-container #footer .container {
        max-width: 960px
    }
}

@media(min-width:992px) and (min-width:1200px) {
    html.side-header.side-header-change-container .home-concept {
        transform: translateX(125px)
    }

    html.side-header.side-header-change-container .home-concept .container {
        transform: translateX(0)
    }
}

@media(min-width:992px) and (min-width:1200px) and (max-width:1440px) {
    html.side-header.side-header-change-container .home-concept .container>.row {
        margin-left: -6rem
    }
}

@media(min-width:992px) and (min-width:1200px) {

    html.side-header.side-header-change-container.side-header-right .main .container,
    html.side-header.side-header-change-container.side-header-right #footer .container {
        transform: translateX(-125px)
    }
}

@media(min-width:992px) and (min-width:1200px) {
    html.side-header.side-header-change-container.side-header-right .home-concept {
        transform: translateX(-125px)
    }
}

@media(min-width:992px) and (min-width:1200px) and (max-width:1440px) {
    html.side-header.side-header-change-container.side-header-right .home-concept .container>.row {
        margin-left: -6rem
    }
}

@media(min-width:992px) {
    html.side-header #header.side-header {
        position: fixed;
        box-shadow: 0 0 30px rgba(0, 0, 0, .05);
        top: 0;
        left: 0;
        max-width: 255px;
        width: 100%;
        height: 100%;
        transform: translateX(0);
        transition: cubic-bezier(.55, 0, .1, 1) transform 300ms
    }

    html.side-header #header.side-header:not(.header-transparent) {
        background: #fff
    }

    html.side-header #header.side-header.side-header-lg {
        max-width: 355px
    }

    html.side-header #header.side-header.side-header-hide {
        transform: translateX(100%)
    }

    html.side-header #header.side-header .header-body {
        border-top: 0
    }

    html.side-header #header.side-header .header-container {
        width: 100%
    }

    html.side-header #header.side-header .header-row {
        flex-direction: column
    }

    html.side-header #header.side-header .header-search {
        width: 100%;
        margin: .7rem 0
    }

    html.side-header #header.side-header .header-nav-top .nav>li>a,
    html.side-header #header.side-header .header-nav-top .nav>li>span {
        display: block
    }

    html.side-header #header.side-header .header-logo {
        margin: 2rem 0
    }

    html.side-header #header.side-header .header-nav {
        flex-direction: column
    }

    html.side-header #header.side-header .header-nav.header-nav-links nav>ul>li>a {
        height: auto
    }

    html.side-header #header.side-header .header-nav.header-nav-links-vertical-expand .header-nav-main {
        overflow: hidden
    }

    html.side-header #header.side-header .header-nav-main,
    html.side-header #header.side-header .header-nav-main nav,
    html.side-header #header.side-header .header-nav-main .nav {
        width: 100%
    }

    html.side-header #header.side-header .nav {
        flex-direction: column;
        width: 100%
    }

    html.side-header #header.side-header .header-nav-main nav>ul>li.dropdown>a.dropdown-toggle:after {
        content: "";
        border-color: transparent transparent transparent #ccc;
        position: absolute;
        right: 15px;
        top: 50%;
        border-top: .3em solid;
        border-bottom: .3em solid transparent;
        border-left: .3em solid transparent;
        border-right: 0;
        transform: translate3d(0, -50%, 0)
    }

    html.side-header #header.side-header .header-nav-main nav>ul>li.dropdown.open>.dropdown-menu,
    html.side-header #header.side-header .header-nav-main nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    html.side-header #header.side-header .header-nav-main nav>ul>li.dropdown:hover>.dropdown-menu {
        top: 3px;
        left: 100%;
        border-top: 0;
        border-left: 5px solid #ccc;
        margin-left: -5px
    }

    html.side-header #header.side-header .header-nav-main nav>ul>li.dropdown li.dropdown-submenu:hover>.dropdown-menu {
        margin-top: -5px;
        border-top: 0
    }

    html.side-header #header.side-header .header-nav-main nav>ul>li.dropdown.open>a,
    html.side-header #header.side-header .header-nav-main nav>ul>li.dropdown.accessibility-open>a,
    html.side-header #header.side-header .header-nav-main nav>ul>li.dropdown:hover>a {
        padding-bottom: .5rem
    }

    html.side-header #header.side-header .header-nav-main nav>ul>li.dropdown.open>a:before,
    html.side-header #header.side-header .header-nav-main nav>ul>li.dropdown.accessibility-open>a:before,
    html.side-header #header.side-header .header-nav-main nav>ul>li.dropdown:hover>a:before {
        content: none
    }

    html.side-header #header.side-header .header-nav-main nav>ul>li.dropdown-mega {
        position: relative !important
    }

    html.side-header #header.side-header .header-nav-main nav>ul>li.dropdown-mega .dropdown-menu {
        min-width: 720px
    }

    html.side-header #header.side-header .header-nav-main nav>ul>li {
        margin-top: 1px
    }

    html.side-header #header.side-header .header-nav-main nav>ul>li>a {
        display: flex
    }

    html.side-header #header.side-header .header-nav-main nav>ul>li .dropdown-menu.dropdown-reverse li a {
        padding-right: 8px;
        padding-left: 20px
    }

    html.side-header #header.side-header .header-nav-main nav>ul>li .dropdown-menu.dropdown-reverse li.dropdown-submenu>a:after {
        border-width: 4px 4px 4px 0
    }

    html.side-header-right:not(.side-header-above) body>.body {
        margin: 0 255px 0 0
    }

    html.side-header-right #header.side-header {
        left: auto;
        right: 0
    }

    html.side-header-right #header.side-header .header-nav:not(.header-nav-links-vertical-slide):not(.header-nav-links-vertical-expand) .header-nav-main nav>ul>li.dropdown>a.dropdown-toggle {
        padding-right: 0;
        padding-left: 30px
    }

    html.side-header-right #header.side-header .header-nav:not(.header-nav-links-vertical-slide):not(.header-nav-links-vertical-expand) .header-nav-main nav>ul>li.dropdown>a.dropdown-toggle:after {
        left: 15px;
        right: auto;
        border-right: .3em solid transparent;
        border-left: 0
    }

    html.side-header-right #header.side-header .header-nav:not(.header-nav-links-vertical-slide):not(.header-nav-links-vertical-expand) .header-nav-main nav>ul>li.dropdown.open>.dropdown-menu,
    html.side-header-right #header.side-header .header-nav:not(.header-nav-links-vertical-slide):not(.header-nav-links-vertical-expand) .header-nav-main nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    html.side-header-right #header.side-header .header-nav:not(.header-nav-links-vertical-slide):not(.header-nav-links-vertical-expand) .header-nav-main nav>ul>li.dropdown:hover>.dropdown-menu {
        display: flex;
        justify-content: center;
        flex-direction: column;
        right: 100%;
        left: auto;
        border-right: 5px solid #ccc;
        border-left: 0;
        margin-left: 0;
        margin-right: -5px;
        border-radius: 4px 0 0 4px;
        opacity: 1
    }

    html.side-header-right #header.side-header .header-nav:not(.header-nav-links-vertical-slide):not(.header-nav-links-vertical-expand).header-nav-links-vertical-columns .header-nav-main nav>ul>li.dropdown.open>.dropdown-menu,
    html.side-header-right #header.side-header .header-nav:not(.header-nav-links-vertical-slide):not(.header-nav-links-vertical-expand).header-nav-links-vertical-columns .header-nav-main nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    html.side-header-right #header.side-header .header-nav:not(.header-nav-links-vertical-slide):not(.header-nav-links-vertical-expand).header-nav-links-vertical-columns .header-nav-main nav>ul>li.dropdown:hover>.dropdown-menu {
        height: 100vh
    }

    html.side-header-right #header.side-header.side-header-hide {
        transform: translateX(-100%)
    }

    html.side-header-right.side-header-right-no-reverse #header.side-header .header-nav:not(.header-nav-links-vertical-slide) .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu>a {
        padding-left: 25px
    }

    html.side-header-right.side-header-right-no-reverse #header.side-header .header-nav:not(.header-nav-links-vertical-slide) .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu>a:after {
        left: initial;
        right: 20px
    }

    html.ie.side-header-right #header.side-header .header-nav:not(.header-nav-links-vertical-slide) .header-nav-main nav>ul>li.dropdown .dropdown-menu li.dropdown-submenu>a:after {
        left: 10px;
        right: initial;
        width: 0
    }

    html.side-header-semi-transparent body>.body {
        margin: 0
    }

    html.side-header-semi-transparent #header.side-header {
        background: rgba(0, 0, 0, .3)
    }

    html.side-header-semi-transparent #header.side-header .header-body {
        background: 0 0 !important
    }
}

@media(min-width:992px) and (max-width:1199px) {
    html:not(.side-header-disable-offcanvas).side-header:not(.side-header-above) body>.body {
        margin: 0
    }

    html:not(.side-header-disable-offcanvas).side-header #header.side-header {
        left: -255px;
        z-index: 20 !important
    }

    html:not(.side-header-disable-offcanvas).side-header.side-header-right #header.side-header {
        left: auto;
        right: -255px
    }
}

@media(min-width:1200px) {
    html.side-header.side-header-hide #header.side-header {
        left: 0;
        transform: translateX(0)
    }

    html.side-header.side-header-right.side-header-hide #header.side-header {
        left: auto;
        right: 0;
        transform: translateX(0)
    }
}

@media(max-width:991px) {
    html.side-header #header.side-header .header-container {
        height: auto !important
    }
}

@media(max-height:768px) {

    html.side-header #header .header-nav-main nav>ul>li.dropdown.open>.dropdown-menu,
    html.side-header #header .header-nav-main nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
    html.side-header #header .header-nav-main nav>ul>li.dropdown:hover>.dropdown-menu {
        top: auto
    }
}

html.side-header-hamburguer-sidebar .main .container,
html.side-header-hamburguer-sidebar #footer .container {
    padding: 0 35px;
    width: auto !important;
    max-width: 1210px
}

html.side-header-hamburguer-sidebar:not(.side-header-above) body>.body {
    margin: 0 0 0 255px;
    width: auto;
    overflow-x: hidden;
    overflow-y: visible
}

html.side-header-hamburguer-sidebar:not(.side-header-above) body>.body .forcefullwidth_wrapper_tp_banner .rev_slider_wrapper {
    width: 100% !important;
    left: auto !important
}

html.side-header-hamburguer-sidebar.side-header-above #header.side-header {
    transition: cubic-bezier(.55, 0, .1, 1) transform 300ms
}

html.side-header-hamburguer-sidebar #header.side-header {
    background: #fff;
    position: fixed;
    box-shadow: 0 0 30px rgba(0, 0, 0, .05);
    top: 0;
    left: 0;
    max-width: 255px;
    width: 100%;
    height: 100%;
    transform: translateX(0);
    z-index: 9991
}

html.side-header-hamburguer-sidebar #header.side-header.side-header-lg {
    max-width: 355px
}

html.side-header-hamburguer-sidebar #header.side-header.side-header-hide {
    transform: translateX(-100%)
}

html.side-header-hamburguer-sidebar #header.side-header.header-transparent {
    background: 0 0
}

html.side-header-hamburguer-sidebar #header.side-header .side-header-scrollable {
    height: 100%
}

html.side-header-hamburguer-sidebar #header.side-header .header-body {
    border-top: 0;
    height: 100% !important
}

html.side-header-hamburguer-sidebar #header.side-header .header-container {
    width: 100%;
    height: 100% !important
}

html.side-header-hamburguer-sidebar #header.side-header .header-row {
    flex-direction: column
}

html.side-header-hamburguer-sidebar #header.side-header .header-search {
    width: 100%;
    margin: 11.2px 0;
    margin: .7rem 0
}

html.side-header-hamburguer-sidebar #header.side-header .header-nav-top .nav>li>a,
html.side-header-hamburguer-sidebar #header.side-header .header-nav-top .nav>li>span {
    display: block
}

html.side-header-hamburguer-sidebar #header.side-header .header-logo {
    margin: 32px 0;
    margin: 2rem 0
}

html.side-header-hamburguer-sidebar #header.side-header .header-nav {
    flex-direction: column
}

html.side-header-hamburguer-sidebar #header.side-header .header-nav.header-nav-links nav>ul>li>a {
    height: auto
}

html.side-header-hamburguer-sidebar #header.side-header .header-nav-main,
html.side-header-hamburguer-sidebar #header.side-header .header-nav-main nav,
html.side-header-hamburguer-sidebar #header.side-header .header-nav-main .nav {
    width: 100%
}

html.side-header-hamburguer-sidebar #header.side-header .nav {
    flex-direction: column;
    width: 100%
}

html.side-header-hamburguer-sidebar.side-header-hamburguer-sidebar-right #header.side-header {
    left: auto;
    right: 0
}

html.side-header-hamburguer-sidebar.side-header-hamburguer-sidebar-right #header.side-header.side-header-hide {
    transform: translateX(100%)
}

html.side-header-hamburguer-sidebar.side-header-hamburguer-sidebar-push body>.body {
    margin: 0;
    overflow: visible;
    transition: ease right 300ms;
    right: 0
}

html.side-header-hamburguer-sidebar.side-header-hamburguer-sidebar-push .body-overlay {
    content: "";
    width: 100%;
    height: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .8);
    position: absolute;
    z-index: 10;
    opacity: 0
}

html.side-header-hamburguer-sidebar.side-header-hamburguer-sidebar-push #header.side-header {
    transform: none;
    transition: ease left 300ms;
    left: -355px
}

html.side-header-hamburguer-sidebar.side-header-hamburguer-sidebar-right.side-header-hamburguer-sidebar-push body>.body {
    position: relative;
    transition: ease left 300ms;
    left: 0;
    right: auto
}

html.side-header-hamburguer-sidebar.side-header-hamburguer-sidebar-right.side-header-hamburguer-sidebar-push #header.side-header {
    transition: ease right 300ms, ease transform 300ms;
    right: -355px;
    left: auto
}

html.side-header-hamburguer-sidebar:not(.side-header-hide).side-header-hamburguer-sidebar-push .hamburguer-btn:not(.hamburguer-btn-side-header-mobile-show),
html.side-header-hamburguer-sidebar:not(.side-header-hide).side-header-hamburguer-sidebar-push .sticky-wrapper {
    display: none
}

html.side-header-hamburguer-sidebar:not(.side-header-hide).side-header-hamburguer-sidebar-push body>.body {
    position: relative;
    right: -355px
}

html.side-header-hamburguer-sidebar:not(.side-header-hide).side-header-hamburguer-sidebar-push .body-overlay {
    opacity: 1;
    height: 100%
}

html.side-header-hamburguer-sidebar:not(.side-header-hide).side-header-hamburguer-sidebar-push #header.side-header {
    z-index: 11;
    left: 0
}

html.side-header-hamburguer-sidebar:not(.side-header-hide).side-header-hamburguer-sidebar-right.side-header-hamburguer-sidebar-push body>.body {
    left: -355px;
    right: auto
}

html.side-header-hamburguer-sidebar:not(.side-header-hide).side-header-hamburguer-sidebar-right.side-header-hamburguer-sidebar-push #header.side-header {
    right: 0;
    left: auto
}

html.side-header-overlay-full-screen body>.body {
    margin: 0;
    width: auto;
    overflow-x: hidden;
    overflow-y: visible
}

html.side-header-overlay-full-screen body>.body .forcefullwidth_wrapper_tp_banner .rev_slider_wrapper {
    width: 100% !important;
    left: auto !important
}

html.side-header-overlay-full-screen #header {
    display: flex;
    align-items: center;
    background-color: rgba(51, 51, 51, .99);
    position: fixed;
    box-shadow: 0 0 18px rgba(68, 68, 68, .07);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding-top: 48px;
    padding-top: 3rem;
    opacity: 0;
    visibility: hidden;
    transition: ease opacity 300ms, ease visibility 300ms
}

html.side-header-overlay-full-screen #header:not(.side-header-hide) {
    opacity: 1;
    visibility: visible;
    transition: ease opacity 300ms, ease visibility 300ms
}

html.side-header-overlay-full-screen #header .header-container:after {
    content: none
}

html.side-header-overlay-full-screen #header .header-body {
    background-color: transparent;
    border: 0
}

html.side-header-overlay-full-screen #header .header-row-side-header {
    flex: 0 0 50%;
    margin: 0 auto
}

html.side-header-overlay-full-screen #header .header-nav {
    flex-direction: column
}

html.side-header-overlay-full-screen #header .header-nav.header-nav-links nav>ul>li>a {
    height: auto
}

html.side-header-overlay-full-screen #header .header-nav-main,
html.side-header-overlay-full-screen #header .header-nav-main nav,
html.side-header-overlay-full-screen #header .header-nav-main .nav {
    width: 100%
}

html.side-header-overlay-full-screen #header .nav {
    flex-direction: column;
    width: 100%
}

html.side-header-overlay-full-screen #header .header-nav-main {
    position: relative
}

html.side-header-overlay-full-screen #header .header-nav-main:before {
    content: none
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li {
    text-align: center;
    position: static;
    margin-top: 1px;
    height: auto
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li>a {
    display: inline-block;
    border: 0;
    font-size: 28.8px;
    font-size: 1.8rem;
    text-transform: none;
    color: #fff;
    padding: 15px 0 !important;
    font-weight: 600
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li>a:after {
    top: -2px !important
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li>a.open,
html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li>a.accessibility-open,
html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li>a:focus,
html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li>a:active,
html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li>a.active {
    background: 0 0
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li a .fa-chevron-down {
    display: none !important
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown .dropdown-item {
    transition: ease left 300ms;
    position: relative;
    left: 0
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown .dropdown-item:after {
    display: none
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown .dropdown-item:before {
    display: none !important
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown .dropdown-item:hover {
    left: 5px
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown .dropdown-menu {
    position: static;
    background: 0 0 !important;
    box-shadow: none;
    display: none !important
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li a {
    border: 0;
    font-size: 17.6px;
    font-size: 1.1rem;
    color: #fff
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown .dropdown-menu li a:after {
    display: none
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown .dropdown-submenu {
    position: static
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown .dropdown-submenu .dropdown-menu a {
    font-size: 12px;
    font-size: .75rem;
    opacity: .7
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown.open>.dropdown-menu,
html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown.accessibility-open>.dropdown-menu,
html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown .dropdown-submenu.open>.dropdown-menu {
    display: block !important;
    opacity: 1;
    width: 100%;
    text-align: center;
    padding: 15px 0;
    margin: 0;
    transform: none;
    position: static
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown.open>.dropdown-menu li a,
html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown.accessibility-open>.dropdown-menu li a,
html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown .dropdown-submenu.open>.dropdown-menu li a {
    background: 0 0
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content {
    padding: 25.6px 0 0;
    padding: 1.6rem 0 0
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content>.row {
    flex-direction: column;
    align-items: center
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content>.row>[class*=col-] {
    max-width: none
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content>.row>[class*=col-]+[class*=col-] {
    margin-top: 25px
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown.dropdown-mega .dropdown-mega-sub-title {
    color: #fff;
    font-size: 1.2em
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown.dropdown-mega .dropdown-mega-sub-nav {
    opacity: .7
}

html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown.dropdown-mega .dropdown-mega-sub-nav>li>a {
    margin: 0 0 8px;
    padding: 3px 8px
}

html.side-header-overlay-full-screen.ie #header .header-nav-main nav>ul>li.dropdown.dropdown-mega .dropdown-mega-content>.row>[class*=col-] {
    flex: 0 0 auto
}

@media(max-width:991px) {
    html.side-header-overlay-full-screen #header .header-row-side-header {
        flex: 0 0 100%
    }

    html.side-header-overlay-full-screen #header .side-header-scrollable {
        height: 100% !important
    }

    html.side-header-overlay-full-screen #header .side-header-scrollable .scrollable-content {
        right: 0 !important;
        padding-right: 10px;
        padding-left: 10px;
        overflow-y: hidden
    }

    html.side-header-overlay-full-screen #header .side-header-scrollable .scrollable-pane {
        display: none !important
    }

    html.side-header-overlay-full-screen #header .header-nav {
        height: 100%
    }

    html.side-header-overlay-full-screen #header .header-nav-main {
        position: absolute;
        top: 50%;
        transform: translate3d(-50%, -50%, 0)
    }

    html.side-header-overlay-full-screen #header .header-nav-main nav {
        max-height: 80vh
    }

    html.side-header-overlay-full-screen #header .header-nav-main nav>ul>li.dropdown .dropdown-item:hover {
        left: 0
    }

    html.side-header-overlay-full-screen #header .header-nav-main nav>ul li {
        border-bottom: 0
    }

    html.side-header-overlay-full-screen #header .header-nav-main nav>ul li a {
        text-align: center
    }

    html.side-header-overlay-full-screen #header .header-nav-main nav>ul li.dropdown.dropdown-mega .dropdown-mega-content {
        padding: 0
    }

    html.side-header-overlay-full-screen #header .header-nav-main nav>ul li.dropdown.dropdown-mega .dropdown-mega-sub-title {
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: 7px
    }

    html.side-header-overlay-full-screen #header .header-nav-main nav>ul li.dropdown.dropdown-mega .dropdown-mega-sub-nav {
        margin: 0
    }
}

html.side-header-hamburguer-sidebar-narrow-bar .body {
    margin-left: 90px
}

html.side-header-hamburguer-sidebar-narrow-bar #header.side-header {
    transform: translateX(90px)
}

html.side-header-hamburguer-sidebar-narrow-bar .slider-container {
    left: -45px !important;
    width: calc(100% + 90px) !important
}

.side-header-narrow-bar {
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 90px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 9992
}

.side-header-narrow-bar:after {
    content: "";
    width: 1px;
    height: 100%;
    top: 0;
    bottom: 0;
    left: auto;
    right: 0;
    background: rgba(0, 0, 0, .06);
    position: absolute
}

.side-header-narrow-bar .side-header-narrow-bar-content .side-header-narrow-bar-content-vertical {
    transform: rotate(-90deg);
    white-space: nowrap;
    text-transform: uppercase;
    margin-left: -18%
}

@media(max-width:991px) {
    html.side-header-hamburguer-sidebar-narrow-bar .body {
        padding-left: 90px;
        margin-left: 0
    }

    html.side-header-hamburguer-sidebar-narrow-bar #header {
        padding-left: 90px;
        left: -90px !important
    }
}

body[data-plugin-section-scroll] #header .header-body {
    background: 0 0
}

html[dir=rtl] #header .header-search .btn-light {
    right: -35px
}

html.ie #header .header-column .header-extra-info .feature-box .feature-box-info {
    flex: none
}

@media(max-width:991px) {
    html.safari #header .header-body {
        overflow: visible !important
    }
}

.page-header {
    background-color: #212529;
    margin: 0 0 35px;
    padding: 30px 0;
    position: relative;
    text-align: left
}

.page-header h1 {
    color: #fff;
    display: inline-block;
    font-size: 30px;
    line-height: 1;
    margin: 0;
    padding: 0;
    font-weight: 400;
    position: relative;
    top: 1px
}

.page-header .sub-title {
    display: block;
    font-size: 1.2em;
    font-weight: 300;
    margin: 0;
    opacity: .8;
    color: #fff
}

.page-header .page-header-extra-button {
    position: absolute;
    width: 100%;
    bottom: 50px;
    left: 0;
    right: 0;
    z-index: 5
}

.page-header.page-header-sm {
    padding: 30px 0
}

.page-header.page-header-sm h1 {
    font-size: 22px
}

.page-header.page-header-lg {
    padding: 50px 0
}

.page-header.page-header-lg h1 {
    font-size: 40px
}

.page-header.page-header-classic:after {
    content: '';
    width: 100%;
    height: 5px;
    background: rgba(255, 255, 255, .8);
    position: absolute;
    bottom: 0;
    left: 0
}

.page-header.page-header-classic .page-header-title-border {
    width: 0;
    height: 5px;
    position: absolute;
    bottom: 0;
    background: 0 0;
    z-index: 1
}

.page-header.page-header-modern h1 {
    font-size: 28px
}

.page-header.page-header-modern.page-header-sm h1 {
    font-size: 22px
}

.page-header.page-header-modern.page-header-md {
    padding: 50px 0
}

.page-header.page-header-modern.page-header-lg {
    padding: 65px 0
}

.page-header.page-header-modern.page-header-lg h1 {
    font-size: 32px
}

.page-header.page-header-modern.page-header-background {
    padding: 130px 0;
    background-size: cover
}

.page-header.page-header-modern.page-header-background.page-header-background-pattern {
    background-size: auto;
    background-repeat: repeat;
    background-attachment: fixed
}

.page-header.page-header-modern.page-header-background.page-header-background-sm {
    padding: 50px 0
}

.page-header.page-header-modern.page-header-background.page-header-background-md {
    padding: 150px 0
}

.page-header.page-header-modern.page-header-background.page-header-background-lg {
    padding: 250px 0
}

.p-relative {
    position: relative !important
}

.p-absolute {
    position: absolute !important
}

.p-fixed {
    position: fixed !important
}

.p-static {
    position: static !important
}

.box-shadow-none {
    box-shadow: none !important
}

.bclip-border-box {
    background-clip: border-box !important
}

.inverted {
    color: #fff;
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px
}

h1 .inverted {
    padding-left: 10px;
    padding-right: 10px
}

h2 .inverted {
    padding-left: 7px;
    padding-right: 7px
}

h3 .inverted {
    padding-left: 2px;
    padding-right: 2px
}

h4 .inverted {
    padding-left: 4px;
    padding-right: 4px
}

h5 .inverted {
    padding-left: 2px;
    padding-right: 2px
}

h6 .inverted {
    padding-left: 2px;
    padding-right: 2px
}

.ls-0 {
    letter-spacing: 0 !important
}

.negative-ls-05 {
    letter-spacing: -.05em
}

.negative-ls-1 {
    letter-spacing: -1px
}

.negative-ls-2 {
    letter-spacing: -2px
}

.negative-ls-3 {
    letter-spacing: -2.5px
}

.positive-ls-1 {
    letter-spacing: 1px
}

.positive-ls-2 {
    letter-spacing: 2px
}

.positive-ls-3 {
    letter-spacing: 2.5px
}

.cur-pointer {
    cursor: pointer
}

.p-events-none {
    pointer-events: none
}

.text-0 {
    font-size: .7em !important
}

.text-1 {
    font-size: .8em !important
}

.text-2 {
    font-size: .9em !important
}

.text-2-3,
.text-2-5 {
    font-size: .95em !important
}

.text-3 {
    font-size: 1em !important
}

.text-3-4,
.text-3-5 {
    font-size: 1.1em !important
}

.text-4 {
    font-size: 1.2em !important
}

.text-4-5 {
    font-size: 1.35em !important
}

.text-5 {
    font-size: 1.5em !important
}

.text-5-6,
.text-5-5 {
    font-size: 1.65em !important
}

.text-6 {
    font-size: 1.8em !important
}

.text-6-7,
.text-6-5 {
    font-size: 1.9em !important
}

.text-7 {
    font-size: 2em !important
}

.text-8 {
    font-size: 2.3em !important
}

.text-9 {
    font-size: 2.5em !important
}

.text-10 {
    font-size: 2.75em !important
}

.text-11 {
    font-size: 3em !important
}

.text-12 {
    font-size: 3.5em !important
}

.text-12-13,
.text-12-5 {
    font-size: 3.75em !important
}

.text-13 {
    font-size: 4em !important
}

.text-14 {
    font-size: 4.5em !important
}

.text-15 {
    font-size: 5em !important
}

@media(min-width:576px) {
    .text-sm-0 {
        font-size: .7em !important
    }

    .text-sm-1 {
        font-size: .8em !important
    }

    .text-sm-2 {
        font-size: .9em !important
    }

    .text-sm-2-3,
    .text-sm-2-5 {
        font-size: .95em !important
    }

    .text-sm-3 {
        font-size: 1em !important
    }

    .text-sm-3-4,
    .text-sm-3-5 {
        font-size: 1.1em !important
    }

    .text-sm-4 {
        font-size: 1.2em !important
    }

    .text-sm-4-5 {
        font-size: 1.35em !important
    }

    .text-sm-5 {
        font-size: 1.5em !important
    }

    .text-sm-5-6,
    .text-sm-5-5 {
        font-size: 1.65em !important
    }

    .text-sm-6 {
        font-size: 1.8em !important
    }

    .text-sm-6-7,
    .text-sm-6-5 {
        font-size: 1.9em !important
    }

    .text-sm-7 {
        font-size: 2em !important
    }

    .text-sm-8 {
        font-size: 2.3em !important
    }

    .text-sm-9 {
        font-size: 2.5em !important
    }

    .text-sm-10 {
        font-size: 2.75em !important
    }

    .text-sm-11 {
        font-size: 3em !important
    }

    .text-sm-12 {
        font-size: 3.5em !important
    }

    .text-sm-12-13,
    .text-sm-12-5 {
        font-size: 3.75em !important
    }

    .text-sm-13 {
        font-size: 4em !important
    }

    .text-sm-14 {
        font-size: 4.5em !important
    }

    .text-sm-15 {
        font-size: 5em !important
    }
}

@media(min-width:768px) {
    .text-md-0 {
        font-size: .7em !important
    }

    .text-md-1 {
        font-size: .8em !important
    }

    .text-md-2 {
        font-size: .9em !important
    }

    .text-md-2-3,
    .text-md-2-5 {
        font-size: .95em !important
    }

    .text-md-3 {
        font-size: 1em !important
    }

    .text-md-3-4,
    .text-md-3-5 {
        font-size: 1.1em !important
    }

    .text-md-4 {
        font-size: 1.2em !important
    }

    .text-md-4-5 {
        font-size: 1.35em !important
    }

    .text-md-5 {
        font-size: 1.5em !important
    }

    .text-md-5-6,
    .text-md-5-5 {
        font-size: 1.65em !important
    }

    .text-md-6 {
        font-size: 1.8em !important
    }

    .text-md-6-7,
    .text-md-6-5 {
        font-size: 1.9em !important
    }

    .text-md-7 {
        font-size: 2em !important
    }

    .text-md-8 {
        font-size: 2.3em !important
    }

    .text-md-9 {
        font-size: 2.5em !important
    }

    .text-md-10 {
        font-size: 2.75em !important
    }

    .text-md-11 {
        font-size: 3em !important
    }

    .text-md-12 {
        font-size: 3.5em !important
    }

    .text-md-12-13,
    .text-md-12-5 {
        font-size: 3.75em !important
    }

    .text-md-13 {
        font-size: 4em !important
    }

    .text-md-14 {
        font-size: 4.5em !important
    }

    .text-md-15 {
        font-size: 5em !important
    }
}

@media(min-width:992px) {
    .text-lg-0 {
        font-size: .7em !important
    }

    .text-lg-1 {
        font-size: .8em !important
    }

    .text-lg-2 {
        font-size: .9em !important
    }

    .text-lg-2-3,
    .text-lg-2-5 {
        font-size: .95em !important
    }

    .text-lg-3 {
        font-size: 1em !important
    }

    .text-lg-3-4,
    .text-lg-3-5 {
        font-size: 1.1em !important
    }

    .text-lg-4 {
        font-size: 1.2em !important
    }

    .text-lg-4-5 {
        font-size: 1.35em !important
    }

    .text-lg-5 {
        font-size: 1.5em !important
    }

    .text-lg-5-6,
    .text-lg-5-5 {
        font-size: 1.65em !important
    }

    .text-lg-6 {
        font-size: 1.8em !important
    }

    .text-lg-6-7,
    .text-lg-6-5 {
        font-size: 1.9em !important
    }

    .text-lg-7 {
        font-size: 2em !important
    }

    .text-lg-8 {
        font-size: 2.3em !important
    }

    .text-lg-9 {
        font-size: 2.5em !important
    }

    .text-lg-10 {
        font-size: 2.75em !important
    }

    .text-lg-11 {
        font-size: 3em !important
    }

    .text-lg-12 {
        font-size: 3.5em !important
    }

    .text-lg-12-13,
    .text-lg-12-5 {
        font-size: 3.75em !important
    }

    .text-lg-13 {
        font-size: 4em !important
    }

    .text-lg-14 {
        font-size: 4.5em !important
    }

    .text-lg-15 {
        font-size: 5em !important
    }
}

@media(min-width:1200px) {
    .text-xl-0 {
        font-size: .7em !important
    }

    .text-xl-1 {
        font-size: .8em !important
    }

    .text-xl-2 {
        font-size: .9em !important
    }

    .text-xl-2-3,
    .text-xl-2-5 {
        font-size: .95em !important
    }

    .text-xl-3 {
        font-size: 1em !important
    }

    .text-xl-3-4,
    .text-xl-3-5 {
        font-size: 1.1em !important
    }

    .text-xl-4 {
        font-size: 1.2em !important
    }

    .text-xl-4-5 {
        font-size: 1.35em !important
    }

    .text-xl-5 {
        font-size: 1.5em !important
    }

    .text-xl-5-6,
    .text-xl-5-5 {
        font-size: 1.65em !important
    }

    .text-xl-6 {
        font-size: 1.8em !important
    }

    .text-xl-6-7,
    .text-xl-6-5 {
        font-size: 1.9em !important
    }

    .text-xl-7 {
        font-size: 2em !important
    }

    .text-xl-8 {
        font-size: 2.3em !important
    }

    .text-xl-9 {
        font-size: 2.5em !important
    }

    .text-xl-10 {
        font-size: 2.75em !important
    }

    .text-xl-11 {
        font-size: 3em !important
    }

    .text-xl-12 {
        font-size: 3.5em !important
    }

    .text-xl-12-13,
    .text-xl-12-5 {
        font-size: 3.75em !important
    }

    .text-xl-13 {
        font-size: 4em !important
    }

    .text-xl-14 {
        font-size: 4.5em !important
    }

    .text-xl-15 {
        font-size: 5em !important
    }
}

.text-1rem {
    font-size: 16px !important;
    font-size: 1rem !important
}

.line-height-initial {
    line-height: initial !important
}

.line-height-1 {
    line-height: 1 !important
}

.line-height-1-1 {
    line-height: 1.1 !important
}

.line-height-2 {
    line-height: 1.2 !important
}

.line-height-3 {
    line-height: 1.3 !important
}

.line-height-4 {
    line-height: 1.4 !important
}

.line-height-5 {
    line-height: 1.5 !important
}

.line-height-6 {
    line-height: 1.6 !important
}

.line-height-7 {
    line-height: 1.7 !important
}

.line-height-8 {
    line-height: 1.8 !important
}

.line-height-9 {
    line-height: 1.9 !important
}

@media(min-width:576px) {
    .line-height-sm-initial {
        line-height: initial !important
    }

    .line-height-sm-1 {
        line-height: 1 !important
    }

    .line-height-sm-1-1 {
        line-height: 1.1 !important
    }

    .line-height-sm-2 {
        line-height: 1.2 !important
    }

    .line-height-sm-3 {
        line-height: 1.3 !important
    }

    .line-height-sm-4 {
        line-height: 1.4 !important
    }

    .line-height-sm-5 {
        line-height: 1.5 !important
    }

    .line-height-sm-6 {
        line-height: 1.6 !important
    }

    .line-height-sm-7 {
        line-height: 1.7 !important
    }

    .line-height-sm-8 {
        line-height: 1.8 !important
    }

    .line-height-sm-9 {
        line-height: 1.9 !important
    }
}

@media(min-width:768px) {
    .line-height-md-initial {
        line-height: initial !important
    }

    .line-height-md-1 {
        line-height: 1 !important
    }

    .line-height-md-1-1 {
        line-height: 1.1 !important
    }

    .line-height-md-2 {
        line-height: 1.2 !important
    }

    .line-height-md-3 {
        line-height: 1.3 !important
    }

    .line-height-md-4 {
        line-height: 1.4 !important
    }

    .line-height-md-5 {
        line-height: 1.5 !important
    }

    .line-height-md-6 {
        line-height: 1.6 !important
    }

    .line-height-md-7 {
        line-height: 1.7 !important
    }

    .line-height-md-8 {
        line-height: 1.8 !important
    }

    .line-height-md-9 {
        line-height: 1.9 !important
    }
}

@media(min-width:992px) {
    .line-height-lg-initial {
        line-height: initial !important
    }

    .line-height-lg-1 {
        line-height: 1 !important
    }

    .line-height-lg-1-1 {
        line-height: 1.1 !important
    }

    .line-height-lg-2 {
        line-height: 1.2 !important
    }

    .line-height-lg-3 {
        line-height: 1.3 !important
    }

    .line-height-lg-4 {
        line-height: 1.4 !important
    }

    .line-height-lg-5 {
        line-height: 1.5 !important
    }

    .line-height-lg-6 {
        line-height: 1.6 !important
    }

    .line-height-lg-7 {
        line-height: 1.7 !important
    }

    .line-height-lg-8 {
        line-height: 1.8 !important
    }

    .line-height-lg-9 {
        line-height: 1.9 !important
    }
}

@media(min-width:1200px) {
    .line-height-xl-initial {
        line-height: initial !important
    }

    .line-height-xl-1 {
        line-height: 1 !important
    }

    .line-height-xl-1-1 {
        line-height: 1.1 !important
    }

    .line-height-xl-2 {
        line-height: 1.2 !important
    }

    .line-height-xl-3 {
        line-height: 1.3 !important
    }

    .line-height-xl-4 {
        line-height: 1.4 !important
    }

    .line-height-xl-5 {
        line-height: 1.5 !important
    }

    .line-height-xl-6 {
        line-height: 1.6 !important
    }

    .line-height-xl-7 {
        line-height: 1.7 !important
    }

    .line-height-xl-8 {
        line-height: 1.8 !important
    }

    .line-height-xl-9 {
        line-height: 1.9 !important
    }
}

.opacity-0 {
    opacity: 0 !important
}

.opacity-1 {
    opacity: .1 !important
}

.opacity-2 {
    opacity: .2 !important
}

.opacity-3 {
    opacity: .3 !important
}

.opacity-4 {
    opacity: .4 !important
}

.opacity-5 {
    opacity: .5 !important
}

.opacity-6 {
    opacity: .6 !important
}

.opacity-7 {
    opacity: .7 !important
}

.opacity-8 {
    opacity: .8 !important
}

.opacity-9 {
    opacity: .9 !important
}

.opacity-10 {
    opacity: 1 !important
}

.scale-1 {
    transform: scale(1.1) !important
}

.scale-2 {
    transform: scale(1.2) !important
}

.scale-3 {
    transform: scale(1.3) !important
}

.scale-4 {
    transform: scale(1.4) !important
}

.scale-5 {
    transform: scale(1.5) !important
}

.scale-6 {
    transform: scale(1.6) !important
}

.top-auto {
    top: auto !important
}

.top-50pct {
    top: 50%
}

.bottom-auto {
    top: auto !important
}

.left-50pct {
    left: 50%
}

.left-100pct {
    left: 100%
}

.right-100pct {
    right: 100%
}

.top-0 {
    top: 0 !important
}

.bottom-0 {
    bottom: 0 !important
}

.left-0 {
    left: 0 !important
}

.right-0 {
    right: 0 !important
}

.top-1 {
    top: 1px !important
}

.bottom-1 {
    bottom: 1px !important
}

.left-1 {
    left: 1px !important
}

.right-1 {
    right: 1px !important
}

.top-2 {
    top: 2px !important
}

.bottom-2 {
    bottom: 2px !important
}

.left-2 {
    left: 2px !important
}

.right-2 {
    right: 2px !important
}

.top-3 {
    top: 3px !important
}

.bottom-3 {
    bottom: 3px !important
}

.left-3 {
    left: 3px !important
}

.right-3 {
    right: 3px !important
}

.top-4 {
    top: 4px !important
}

.bottom-4 {
    bottom: 4px !important
}

.left-4 {
    left: 4px !important
}

.right-4 {
    right: 4px !important
}

.top-5 {
    top: 5px !important
}

.bottom-5 {
    bottom: 5px !important
}

.left-5 {
    left: 5px !important
}

.right-5 {
    right: 5px !important
}

.top-6 {
    top: 6px !important
}

.bottom-6 {
    bottom: 6px !important
}

.left-6 {
    left: 6px !important
}

.right-6 {
    right: 6px !important
}

.top-7 {
    top: 7px !important
}

.bottom-7 {
    bottom: 7px !important
}

.left-7 {
    left: 7px !important
}

.right-7 {
    right: 7px !important
}

.top-8 {
    top: 8px !important
}

.bottom-8 {
    bottom: 8px !important
}

.left-8 {
    left: 8px !important
}

.right-8 {
    right: 8px !important
}

.top-9 {
    top: 9px !important
}

.bottom-9 {
    bottom: 9px !important
}

.left-9 {
    left: 9px !important
}

.right-9 {
    right: 9px !important
}

.top-10 {
    top: 10px !important
}

.bottom-10 {
    bottom: 10px !important
}

.left-10 {
    left: 10px !important
}

.right-10 {
    right: 10px !important
}

.top-11 {
    top: 11px !important
}

.bottom-11 {
    bottom: 11px !important
}

.left-11 {
    left: 11px !important
}

.right-11 {
    right: 11px !important
}

.top-12 {
    top: 12px !important
}

.bottom-12 {
    bottom: 12px !important
}

.left-12 {
    left: 12px !important
}

.right-12 {
    right: 12px !important
}

.top-13 {
    top: 13px !important
}

.bottom-13 {
    bottom: 13px !important
}

.left-13 {
    left: 13px !important
}

.right-13 {
    right: 13px !important
}

.top-14 {
    top: 14px !important
}

.bottom-14 {
    bottom: 14px !important
}

.left-14 {
    left: 14px !important
}

.right-14 {
    right: 14px !important
}

.top-15 {
    top: 15px !important
}

.bottom-15 {
    bottom: 15px !important
}

.left-15 {
    left: 15px !important
}

.right-15 {
    right: 15px !important
}

.transform3dx-n50 {
    transform: translate3d(-50%, 0, 0)
}

.transform3dy-n50 {
    transform: translate3d(0, -50%, 0)
}

.transform3dxy-n50 {
    transform: translate3d(-50%, -50%, 0)
}

.outline-none {
    outline: 0 !important
}

.text-decoration-none {
    text-decoration: none !important
}

.text-decoration-underline {
    text-decoration: underline !important
}

.text-uppercase {
    text-transform: uppercase !important
}

.text-lowercase {
    text-transform: lowercase !important
}

.text-capitalize {
    text-transform: capitalize !important
}

.text-transform-none {
    text-transform: none !important
}

.text-muted {
    color: #999 !important
}

html.dark .text-muted {
    color: #505461 !important
}

.overflow-visible {
    overflow: visible !important
}

.overflow-hidden {
    overflow: hidden !important
}

.z-index-0 {
    z-index: 0 !important
}

.z-index-1 {
    z-index: 1 !important
}

.z-index-2 {
    z-index: 2 !important
}

.z-index-3 {
    z-index: 3 !important
}

@media(max-width:991px) {
    .z-index-mobile-0 {
        z-index: 0 !important
    }
}

.text-dark {
    color: #212529 !important
}

.text-light {
    color: #fff !important
}

.font-weight-thin {
    font-weight: 100 !important
}

.font-weight-extralight,
.font-weight-extra-light {
    font-weight: 200 !important
}

.font-weight-light {
    font-weight: 300 !important
}

.font-weight-regular,
.font-weight-normal {
    font-weight: 400 !important
}

.font-weight-medium {
    font-weight: 500 !important
}

.font-weight-semibold,
.font-weight-semi-bold {
    font-weight: 600 !important
}

.font-weight-bold {
    font-weight: 700 !important
}

.font-weight-extrabold,
.font-weight-extra-bold {
    font-weight: 800 !important
}

.font-weight-black {
    font-weight: 900 !important
}

.letter-spacing-minus-1 {
    letter-spacing: -1px
}

.no-borders {
    border: none !important
}

.rounded {
    border-radius: 5px !important
}

.b-thin {
    border-width: 3px !important
}

.b-normal {
    border-width: 5px !important
}

.b-thick {
    border-width: 7px !important
}

.ws-nowrap {
    white-space: nowrap !important
}

.ws-normal {
    white-space: normal !important
}

.wb-all {
    word-break: break-all !important
}

.w-auto {
    width: auto !important
}

.w-25pct {
    width: 25% !important
}

.w-50pct {
    width: 50% !important
}

.w-75pct {
    width: 75% !important
}

.w-100pct {
    width: 100% !important
}

@media(min-width:576px) {
    .w-sm-auto {
        width: auto !important
    }

    .w-sm-25pct {
        width: 25% !important
    }

    .w-sm-50pct {
        width: 50% !important
    }

    .w-sm-75pct {
        width: 75% !important
    }

    .w-sm-100pct {
        width: 100% !important
    }
}

@media(min-width:768px) {
    .w-md-auto {
        width: auto !important
    }

    .w-md-25pct {
        width: 25% !important
    }

    .w-md-50pct {
        width: 50% !important
    }

    .w-md-75pct {
        width: 75% !important
    }

    .w-md-100pct {
        width: 100% !important
    }
}

@media(min-width:992px) {
    .w-lg-auto {
        width: auto !important
    }

    .w-lg-25pct {
        width: 25% !important
    }

    .w-lg-50pct {
        width: 50% !important
    }

    .w-lg-75pct {
        width: 75% !important
    }

    .w-lg-100pct {
        width: 100% !important
    }
}

@media(min-width:1200px) {
    .w-xl-auto {
        width: auto !important
    }

    .w-xl-25pct {
        width: 25% !important
    }

    .w-xl-50pct {
        width: 50% !important
    }

    .w-xl-75pct {
        width: 75% !important
    }

    .w-xl-100pct {
        width: 100% !important
    }
}

@media(max-width:991px) {
    .w-auto-mobile {
        width: auto !important
    }

    .w-100-mobile {
        width: 100% !important
    }
}

.min-width-0 {
    min-width: 0 !important
}

.col-1-5,
.col-sm-1-5,
.col-md-1-5,
.col-lg-1-5,
.col-xl-1-5,
.col-2-5,
.col-sm-2-5,
.col-md-2-5,
.col-lg-2-5,
.col-xl-2-5,
.col-3-5,
.col-sm-3-5,
.col-md-3-5,
.col-lg-3-5,
.col-xl-3-5,
.col-4-5,
.col-sm-4-5,
.col-md-4-5,
.col-lg-4-5,
.col-xl-4-5 {
    position: relative;
    min-height: 1px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px
}

.col-1-5 {
    flex: 0 0 20%;
    max-width: 20%
}

.col-2-5 {
    flex: 0 0 40%;
    max-width: 40%
}

.col-3-5 {
    flex: 0 0 60%;
    max-width: 60%
}

.col-4-5 {
    flex: 0 0 80%;
    max-width: 80%
}

@media(min-width:576px) {
    .col-sm-1-5 {
        flex: 0 0 20%;
        max-width: 20%
    }

    .col-sm-2-5 {
        flex: 0 0 40%;
        max-width: 40%
    }

    .col-sm-3-5 {
        flex: 0 0 60%;
        max-width: 60%
    }

    .col-sm-4-5 {
        flex: 0 0 80%;
        max-width: 80%
    }
}

@media(min-width:768px) {
    .col-md-1-5 {
        flex: 0 0 20%;
        max-width: 20%
    }

    .col-md-2-5 {
        flex: 0 0 40%;
        max-width: 40%
    }

    .col-md-3-5 {
        flex: 0 0 60%;
        max-width: 60%
    }

    .col-md-4-5 {
        flex: 0 0 80%;
        max-width: 80%
    }
}

@media(min-width:992px) {
    .col-lg-1-5 {
        flex: 0 0 20%;
        max-width: 20%
    }

    .col-lg-2-5 {
        flex: 0 0 40%;
        max-width: 40%
    }

    .col-lg-3-5 {
        flex: 0 0 60%;
        max-width: 60%
    }

    .col-lg-4-5 {
        flex: 0 0 80%;
        max-width: 80%
    }
}

@media(min-width:1200px) {
    .col-xl-1-5 {
        flex: 0 0 20%;
        max-width: 20%
    }

    .col-xl-2-5 {
        flex: 0 0 40%;
        max-width: 40%
    }

    .col-xl-3-5 {
        flex: 0 0 60%;
        max-width: 60%
    }

    .col-xl-4-5 {
        flex: 0 0 80%;
        max-width: 80%
    }
}

#footer {
    background: #212529;
    border-top: 4px solid #212529;
    font-size: .9em;
    margin-top: 50px;
    padding: 0;
    position: relative;
    clear: both
}

#footer .footer-ribbon {
    background: #999;
    position: absolute;
    margin: -44px 0 0;
    padding: 10px 20px 6px
}

#footer .footer-ribbon:before {
    border-right: 10px solid #646464;
    border-top: 16px solid transparent;
    content: "";
    display: block;
    height: 0;
    right: 100%;
    position: absolute;
    top: 0;
    width: 7px
}

#footer .footer-ribbon span {
    color: #fff;
    font-size: 1.6em;
    font-family: shadows into light, cursive
}

#footer h1,
#footer h2,
#footer h3,
#footer h4,
#footer h5,
#footer h6 {
    color: #fff
}

#footer a:not(.btn):not(.no-footer-css) {
    color: #777;
    transition: all .1s ease-in-out
}

#footer a:not(.btn):not(.no-footer-css):hover {
    text-decoration: none;
    color: #fff
}

#footer a:not(.btn):not(.no-footer-css):focus,
#footer a:not(.btn):not(.no-footer-css):active {
    color: #ccc
}

#footer a:not(.btn):not(.no-footer-css).text-color-light {
    color: #fff !important
}

#footer a:not(.btn):not(.no-footer-css).text-color-light:hover {
    color: #e6e5e5 !important
}

#footer a:not(.btn):not(.no-footer-css).text-color-light:focus,
#footer a:not(.btn):not(.no-footer-css).text-color-light:active {
    color: #ccc !important
}

#footer a:not(.btn):not(.no-footer-css).text-color-default {
    color: #777 !important
}

#footer a:not(.btn):not(.no-footer-css).text-color-default:hover {
    color: #919090 !important
}

#footer a:not(.btn):not(.no-footer-css).text-color-default:focus,
#footer a:not(.btn):not(.no-footer-css).text-color-default:active {
    color: #5e5d5d !important
}

#footer a:not(.btn):not(.no-footer-css).link-hover-style-1 {
    position: relative;
    left: 0;
    transition: all .1s ease-in-out
}

#footer a:not(.btn):not(.no-footer-css).link-hover-style-1:hover {
    left: 3px
}

#footer ul.nav-list>li a {
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    line-height: 20px;
    padding-bottom: 11px
}

#footer ul.nav-list>li:last-child a {
    border-bottom: 0
}

#footer ul.nav-list>li a:hover {
    background-color: rgba(255, 255, 255, .05)
}

#footer ul.list.icons li {
    margin-bottom: 5px
}

#footer.footer-texts-more-lighten p,
#footer.footer-texts-more-lighten span,
#footer.footer-texts-more-lighten a:not(.btn):not(.no-footer-css),
#footer.footer-texts-more-lighten li {
    color: #a8a8a8
}

#footer.footer-texts-more-lighten a:not(.btn):not(.no-footer-css):hover {
    text-decoration: none;
    color: #fff
}

#footer .footer-nav nav {
    display: flex
}

#footer .footer-nav nav>ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}

#footer .footer-nav nav>ul>li {
    position: relative;
    height: 100%;
    align-self: stretch
}

#footer .footer-nav nav>ul>li>a {
    position: relative;
    background: 0 0;
    padding: 0 14.4px;
    padding: 0 .9rem;
    margin: 0;
    height: 100%;
    display: inline-flex;
    align-items: center;
    white-space: normal;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -.5px;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none
}

#footer .footer-nav.footer-nav-links nav>ul>li:first-child>a {
    padding-left: 0
}

#footer .footer-nav.footer-nav-links nav>ul>li:first-child>a:before {
    left: 0
}

@media(min-width:768px) {
    #footer .footer-nav.footer-nav-bottom-line nav>ul>li>a:before {
        content: "";
        position: absolute;
        width: auto;
        height: 3px;
        top: 50%;
        left: .85rem;
        right: .85rem;
        margin-top: 15px;
        transform: translate3d(0, -50%, 0)
    }
}

@media(max-width:991px) {
    #footer .footer-nav {
        width: 100%
    }

    #footer .footer-nav nav {
        text-align: center
    }

    #footer .footer-nav nav>ul {
        width: 100%
    }

    #footer .footer-nav nav>ul>li>a {
        text-align: center;
        padding: 5px 12px
    }
}

@media(max-width:767px) {
    #footer .footer-nav {
        width: 100%
    }

    #footer .footer-nav nav {
        text-align: center
    }

    #footer .footer-nav nav>ul {
        width: 100%
    }

    #footer .footer-nav nav>ul>li {
        height: auto;
        width: 100%
    }

    #footer .footer-nav nav>ul>li>a {
        text-align: center;
        padding: 1em 0
    }
}

#footer form {
    opacity: .85
}

#footer form label.error {
    line-height: 16px;
    margin: 5px 0 -5px;
    display: block;
    clear: both
}

#footer form .alert {
    padding: 6px;
    text-align: center
}

#footer .logo img {
    position: relative;
    top: 2px;
    image-rendering: -webkit-optimize-contrast;
    transform: translateZ(0)
}

#footer .twitter [class*=fa-],
#footer .twitter .icons {
    clear: both;
    font-size: 1.5em;
    position: relative;
    top: 3px;
    margin-right: -22px;
    left: -30px;
    color: #fff
}

#footer .twitter .meta {
    color: #999;
    display: block;
    font-size: .9em;
    padding-top: 3px;
    opacity: .5
}

#footer .twitter ul {
    list-style: none;
    margin: 0;
    padding: 0
}

#footer .twitter ul li {
    padding-bottom: 20px;
    padding-left: 30px
}

#footer .twitter ul li:last-child {
    padding-bottom: 0
}

#footer .twitter.twitter-dark [class*=fa-],
#footer .twitter.twitter-dark .icons {
    color: #333
}

#footer .twitter.twitter-dark .meta a {
    color: #333
}

#footer .twitter.twitter-light {
    color: #fff
}

#footer .twitter.twitter-light [class*=fa-],
#footer .twitter.twitter-light .icons {
    color: #fff
}

#footer .twitter.twitter-light .meta a {
    color: #fff;
    opacity: .7
}

#footer .twitter-account {
    color: #fff;
    display: block;
    font-size: .9em;
    margin: -15px 0 5px;
    opacity: .55
}

#footer .twitter-account:hover {
    opacity: 1
}

#footer .footer-bg-color-2 {
    background: #1c2023
}

#footer .footer-copyright {
    background: #1c2023
}

#footer .footer-copyright nav {
    font-size: .9em
}

#footer .footer-copyright nav ul {
    list-style: none;
    margin: 0;
    padding: 0
}

#footer .footer-copyright nav ul li {
    display: inline-block;
    line-height: 12px;
    margin: 0;
    padding: 0 8px
}

#footer .footer-copyright nav ul li:first-child {
    border: medium;
    padding-left: 0
}

#footer .footer-copyright nav ul li:last-child {
    padding-right: 0
}

#footer .footer-copyright p {
    color: #555;
    margin: 0;
    padding: 0;
    font-size: .9em
}

#footer .footer-copyright.footer-copyright-style-2 {
    background: #212529;
    border-top: 1px solid rgba(255, 255, 255, .05)
}

#footer .footer-copyright.footer-copyright-border-grey {
    border-top: 1px solid #e5e5e5
}

#footer .footer-copyright.footer-copyright-full-width-border-top {
    position: relative;
    border-top: 0
}

#footer .footer-copyright.footer-copyright-full-width-border-top:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    border-top: 1px solid rgba(255, 255, 255, .05);
    transform: translate3d(-50%, 0, 0)
}

#footer.footer-reveal {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -10
}

.footer-top-border {
    border-top: 1px solid rgba(0, 0, 0, .05) !important
}

.footer-bottom-border {
    border-bottom: 1px solid rgba(0, 0, 0, .05) !important
}

.footer-left-border {
    border-left: 1px solid rgba(0, 0, 0, .05) !important
}

.footer-right-border {
    border-right: 1px solid rgba(0, 0, 0, .05) !important
}

.footer-top-light-border {
    border-top: 1px solid rgba(255, 255, 255, .05) !important
}

.footer-bottom-light-border {
    border-bottom: 1px solid rgba(255, 255, 255, .05) !important
}

.footer-left-light-border {
    border-left: 1px solid rgba(255, 255, 255, .05) !important
}

.footer-right-light-border {
    border-right: 1px solid rgba(255, 255, 255, .05) !important
}

.map-above {
    min-height: 630px;
    position: relative
}

.map-above .map-above-map {
    position: absolute;
    top: 0;
    min-height: 630px;
    height: 100%;
    width: 100%
}

@media(max-width:767px) {
    .map-above .map-above-map {
        position: relative
    }
}

.map-above .map-above-content {
    background: 0 0
}

html.dark body,
html.dark .body {
    background-color: #212529
}

html.dark.boxed .body {
    background-color: #212529
}

html.dark #header .header-top {
    background: #2c3237;
    border-bottom-color: #333940
}

html.dark #header .header-search .form-control {
    background: #262a2f
}

html.dark #header .header-body {
    background: #212529;
    border-top-color: #333940
}

html.dark #header .header-nav-bar {
    background-color: #262a2f
}

html.dark #header .header-nav-top .nav>li>a:hover,
html.dark #header .header-nav-top .nav>li>a a:focus {
    background-color: #262a2f
}

html.dark #header .header-nav-top .dropdown-menu {
    background: #262a2f;
    border-color: #262a2f
}

html.dark #header .header-nav-top .dropdown-menu a:hover,
html.dark #header .header-nav-top .dropdown-menu a:focus {
    background: #2c3237 !important
}

html.dark #header .header-nav-features .header-nav-top-icon,
html.dark #header .header-nav-features .header-nav-top-icon-img {
    color: #fff
}

html.dark #header .header-nav-features .header-nav-features-dropdown {
    background: #262a2f
}

html.dark #header .header-nav-features .header-nav-features-dropdown:before {
    border-bottom-color: #262a2f
}

html.dark.sticky-header-active #header .header-body {
    border-bottom-color: #333940;
    box-shadow: none
}

html.dark h1,
html.dark h2,
html.dark h3,
html.dark h4,
html.dark h5,
html.dark h6 {
    color: #fff
}

html.dark h1.card-title,
html.dark h2.card-title,
html.dark h3.card-title,
html.dark h4.card-title,
html.dark h5.card-title,
html.dark h6.card-title {
    color: #fff
}

html.dark .alert h1,
html.dark .alert h2,
html.dark .alert h3,
html.dark .alert h4,
html.dark .alert h5,
html.dark .alert h6 {
    color: #111
}

html.dark blockquote {
    border-color: #2c3237
}

html.dark section.featured {
    background-color: #1c2023;
    border-top-color: #333940
}

html.dark section.section {
    background-color: #262a2f;
    border-top-color: #2c3237
}

html.dark .dropdown-menu>li a {
    color: #fff
}

html.dark .dropdown-menu>li a:hover,
html.dark .dropdown-menu>li a:focus {
    background-color: #333940
}

html.dark .simple-search .input-group-append {
    border-color: #2c3237
}

html.dark .home-intro {
    background-color: #262a2f
}

html.dark .tabs .nav-tabs li a,
html.dark .tabs .nav-tabs li a:focus {
    border-top-color: #2c3237;
    border-left-color: #2c3237;
    border-right-color: #2c3237;
    background: #2c3237
}

html.dark .tabs .nav-tabs li a:hover {
    border-top-color: #808697
}

html.dark .tabs .nav-tabs li.active a,
html.dark .tabs .nav-tabs li.active a:hover,
html.dark .tabs .nav-tabs li.active a:focus {
    border-top-color: #808697
}

html.dark .tabs .nav-tabs.nav-justified {
    border-left-width: 0;
    border-right-width: 0;
    border-left-color: transparent;
    border-right-color: transparent
}

html.dark .tabs .nav-tabs.nav-justified li a,
html.dark .tabs .nav-tabs.nav-justified li a:hover,
html.dark .tabs .nav-tabs.nav-justified li a:focus {
    border-bottom-color: #2c3237
}

html.dark .tabs.tabs-left .nav-tabs>li a,
html.dark .tabs.tabs-right .nav-tabs>li a {
    background: #2c3237;
    border-left-color: #2c3237;
    border-right-color: #2c3237
}

html.dark .tabs.tabs-left .nav-tabs>li:last-child a,
html.dark .tabs.tabs-right .nav-tabs>li:last-child a {
    border-bottom-color: #2c3237
}

html.dark .tabs .nav-tabs {
    border-color: #2c3237
}

html.dark .tabs .nav-tabs li.active a,
html.dark .tabs .nav-tabs li.active a:hover,
html.dark .tabs .nav-tabs li.active a:focus,
html.dark .tabs .nav-tabs.nav-justified li.active a,
html.dark .tabs .nav-tabs.nav-justified li.active a:hover,
html.dark .tabs .nav-tabs.nav-justified li.active a:focus {
    background: #333940;
    border-left-color: #333940;
    border-right-color: #333940
}

html.dark .tabs .nav-tabs.nav-justified li.active a {
    border-bottom-color: #333940
}

html.dark .tabs.tabs-vertical {
    border-top-color: #333940
}

html.dark .tabs.tabs-bottom .nav-tabs li a,
html.dark .tabs.tabs-bottom .nav-tabs li a:focus {
    border-bottom-color: #2c3237;
    border-top-color: #333940
}

html.dark .tabs.tabs-bottom .nav-tabs li a:hover {
    border-bottom-color: #808697;
    border-top-color: #333940
}

html.dark .tabs.tabs-bottom .nav-tabs li.active a,
html.dark .tabs.tabs-bottom .nav-tabs li.active a:hover,
html.dark .tabs.tabs-bottom .nav-tabs li.active a:focus {
    border-bottom-color: #808697;
    border-top-color: #333940
}

html.dark .tabs .tab-content {
    background: #333940;
    border-color: #333940
}

html.dark .tabs-primary.tabs-bottom .nav-tabs li a,
html.dark .tabs-primary.tabs-bottom .nav-tabs li a:hover,
html.dark .tabs-primary.tabs-bottom .nav-tabs li a:focus,
html.dark .tabs-primary.tabs-bottom .nav-tabs.nav-justified li a,
html.dark .tabs-primary.tabs-bottom .nav-tabs.nav-justified li a:hover,
html.dark .tabs-primary.tabs-bottom .nav-tabs.nav-justified li a:focus {
    border-top-color: #333940 !important
}

html.dark .nav-tabs li.active a,
html.dark .nav-tabs li.active a:hover,
html.dark .nav-tabs li.active a:focus,
html.dark .nav-tabs li a {
    color: #808697
}

html.dark .tab-content {
    background: #333940;
    border-color: #212529
}

html.dark .tabs-simple .tab-content,
html.dark .tabs-simple .nav-tabs li a,
html.dark .tabs-simple .nav-tabs li.active a {
    background: 0 0 !important
}

html.dark .nav>li>a:hover,
html.dark .nav>li>a:focus {
    background-color: #333940
}

html.dark .call-to-action.call-to-action-default {
    background: #2c3237
}

html.dark .call-to-action.call-to-action-dark {
    background: #333940
}

html.dark .call-to-action.with-borders {
    border-top-color: #333940;
    border-bottom-color: #333940;
    border-left-color: #2c3237;
    border-right-color: #2c3237
}

html.dark .call-to-action.with-full-borders {
    border-color: #333940
}

html.dark .call-to-action.featured {
    background: linear-gradient(to bottom, #2c3237 1%, #333940 98%) repeat scroll 0 0 transparent;
    border-bottom-color: #333940;
    border-left-color: #2c3237;
    border-right-color: #2c3237
}

html.dark .call-to-action.call-to-action-in-footer:before {
    border-top-color: #212529
}

html.dark .counters.with-borders .counter {
    border-top: 1px solid #333940;
    border-bottom: 1px solid #333940;
    border-left: 1px solid #2c3237;
    border-right: 1px solid #2c3237
}

html.dark .counters.counters-text-dark .counter {
    color: #fff !important
}

html.dark .counters.counters-text-dark .counter [class*=fa-],
html.dark .counters.counters-text-dark .counter .icons,
html.dark .counters.counters-text-dark .counter strong,
html.dark .counters.counters-text-dark .counter label {
    color: #fff !important
}

html.dark section.timeline:after {
    background: #505050;
    background: linear-gradient(to bottom, rgba(80, 80, 80, 0) 0%, #505050 8%, #505050 92%, rgba(80, 80, 80, 0) 100%)
}

html.dark section.timeline .timeline-date {
    background-color: #2c3237;
    border-color: #2c3237;
    text-shadow: none
}

html.dark section.timeline .timeline-title {
    background: #2c3237
}

html.dark section.timeline .timeline-box {
    border-color: #2c3237;
    background: #2c3237
}

html.dark section.timeline .timeline-box.left:before {
    box-shadow: 0 0 0 3px #2c3237, 0 0 0 6px #2c3237
}

html.dark section.timeline .timeline-box.left:after {
    background: #2c3237;
    border-right-color: #2c3237;
    border-top-color: #2c3237
}

html.dark section.timeline .timeline-box.right:before {
    box-shadow: 0 0 0 3px #2c3237, 0 0 0 6px #2c3237
}

html.dark section.timeline .timeline-box.right:after {
    background: #2c3237;
    border-left-color: #2c3237;
    border-bottom-color: #2c3237
}

html.dark form:not(.form-style-4) .form-control {
    background-color: #2c3237;
    border-color: #2c3237
}

html.dark form.form-style-4 .form-control {
    border-bottom-color: #3c3c3c
}

html.dark .btn-light {
    background-color: #2c3237;
    border-color: #2c3237;
    color: #fff
}

html.dark .btn.disabled,
html.dark .btn.disabled:hover,
html.dark .btn.disabled:active,
html.dark .btn.disabled:focus,
html.dark .btn[disabled],
html.dark .btn[disabled]:hover,
html.dark .btn[disabled]:active,
html.dark .btn[disabled]:focus {
    border-color: #2c3237 !important
}

html.dark .pagination>li>a,
html.dark .pagination>li>span {
    background-color: #2c3237;
    border-color: #282d31
}

html.dark section.section-custom-map {
    background-color: #212529
}

html.dark section.section-custom-map section.section {
    background: rgba(38, 42, 47, .8)
}

html.dark .home-concept {
    background-image: url(../img/home/home-concept-dark.png)
}

html.dark .home-concept .process-image {
    background-image: url(../img/home/home-concept-item-dark.png)
}

html.dark .home-concept .project-image {
    background-image: url(../img/home/home-concept-item-dark.png)
}

html.dark .home-concept .sun {
    background-image: url(../img/home/home-concept-icons-dark.png)
}

html.dark .home-concept .cloud {
    background-image: url(../img/home/home-concept-icons-dark.png)
}

html.dark .page-header {
    border-bottom-color: #1c2023
}

html.dark .page-header-light {
    background-color: #333940
}

html.dark .card {
    background-color: #1c2023
}

html.dark .accordion .card {
    background-color: #2c3237
}

html.dark .accordion .card-default {
    border-color: #2c3237
}

html.dark .accordion .card-header {
    background-color: #333940
}

html.dark .accordion .form-control {
    background-color: #262a2f;
    border-color: #262a2f
}

html.dark .accordion.accordion-modern .card .card-header {
    background-color: #262a2f
}

html.dark .accordion.accordion-modern .card:first-of-type,
html.dark .accordion.accordion-modern .card:not(:first-of-type):not(:last-of-type),
html.dark .accordion.accordion-modern .card:last-of-type {
    border-color: #262a2f
}

html.dark .toggle>label,
html.dark .toggle>.toggle-title {
    background-color: #333940
}

html.dark .toggle.toggle-simple .toggle>label,
html.dark .toggle.toggle-simple .toggle>.toggle-title {
    color: #fff
}

html.dark .featured-box {
    background: #333940;
    border-left-color: #333940;
    border-right-color: #333940;
    border-bottom-color: #333940
}

html.dark .featured-box.secondary h4 {
    color: #fff
}

html.dark .featured-boxes-flat .featured-box .box-content {
    background: #333940
}

html.dark .featured-boxes-style-5 .featured-box .box-content h4,
html.dark .featured-boxes-style-6 .featured-box .box-content h4,
html.dark .featured-boxes-style-7 .featured-box .box-content h4 {
    color: #fff
}

html.dark .featured-boxes-style-2 .featured-box {
    background: 0 0
}

html.dark .featured-boxes-style-3 .featured-box .icon-featured {
    background: #212529
}

html.dark .featured-boxes-style-4 .featured-box {
    background: 0 0
}

html.dark .featured-boxes-style-5 .featured-box {
    background: 0 0
}

html.dark .featured-boxes-style-5 .featured-box .icon-featured {
    background: #2c3237;
    border-color: #333940
}

html.dark .featured-boxes-style-6 .featured-box {
    background: 0 0
}

html.dark .featured-boxes-style-6 .featured-box .icon-featured {
    background: #2c3237;
    border-color: #333940
}

html.dark .featured-boxes-style-6 .featured-box .icon-featured:after {
    border-color: #333940
}

html.dark .featured-boxes-style-7 .featured-box {
    background: 0 0
}

html.dark .featured-boxes-style-7 .featured-box .icon-featured {
    background: #2c3237;
    border-color: #333940
}

html.dark .featured-boxes-style-7 .featured-box .icon-featured:after {
    box-shadow: 3px 3px #1a1d21
}

html.dark .featured-boxes-style-8 .featured-box .icon-featured {
    background: #333940
}

html.dark .featured-box-effect-1 .icon-featured:after {
    box-shadow: 0 0 0 3px #333940
}

html.dark .feature-box.feature-box-style-2 h4,
html.dark .feature-box.feature-box-style-3 h4,
html.dark .feature-box.feature-box-style-4 h4 {
    color: #fff
}

html.dark .feature-box.feature-box-style-6 .feature-box-icon {
    border-color: #333940
}

html.dark .feature-box.feature-box-style-6 .feature-box-icon:after {
    border-color: #333940
}

html.dark .owl-dots button.owl-dot span {
    background: #333940
}

html.dark .owl-carousel.top-border {
    border-top-color: #3f4247
}

html.dark .progress {
    background: #333940
}

html.dark .arrow {
    background-image: url(../img/arrows-dark.png)
}

html.dark .thumbnail,
html.dark .img-thumbnail,
html.dark .thumb-info {
    background-color: #2c3237;
    border-color: #2c3237
}

html.dark .thumb-info .thumb-info-wrapper:after {
    background-color: rgba(33, 37, 41, .9)
}

html.dark .thumb-info-social-icons {
    border-top-color: #3c444b
}

html.dark ul.nav-list>li a {
    border-bottom-color: #2c3237
}

html.dark ul.nav-list>li a:hover {
    background-color: #2c3237
}

html.dark .content-grid .content-grid-item:before {
    border-left-color: #333940
}

html.dark .content-grid .content-grid-item:after {
    border-bottom-color: #333940
}

html.dark .content-grid.content-grid-dashed .content-grid-item:before {
    border-left-color: #333940
}

html.dark .content-grid.content-grid-dashed .content-grid-item:after {
    border-bottom-color: #333940
}

html.dark .testimonial .testimonial-author strong {
    color: #fff
}

html.dark .testimonial.testimonial-style-3 blockquote {
    background: #333940 !important
}

html.dark .testimonial.testimonial-style-3 .testimonial-arrow-down {
    border-top-color: #333940 !important
}

html.dark .testimonial.testimonial-style-4 {
    border-color: #333940 !important
}

html.dark .testimonial.testimonial-style-5 .testimonial-author {
    border-top-color: #333940 !important
}

html.dark .popover {
    background-color: #333940;
    border: 1px solid #2c3237
}

html.dark .popover.top>.arrow {
    border-top-color: #2c3237
}

html.dark .popover.top>.arrow:after {
    border-top-color: #333940
}

html.dark .popover.right>.arrow {
    border-right-color: #2c3237
}

html.dark .popover.right>.arrow:after {
    border-right-color: #333940
}

html.dark .popover.bottom>.arrow {
    border-bottom-color: #2c3237
}

html.dark .popover.bottom>.arrow:after {
    border-bottom-color: #333940
}

html.dark .popover.left>.arrow {
    border-left-color: #2c3237
}

html.dark .popover.left>.arrow:after {
    border-left-color: #333940
}

html.dark .popover-title {
    background-color: #2c3237;
    border-bottom: #333940
}

html.dark .page-header {
    border-bottom-color: #2c3237
}

html.dark .table>thead>tr>th,
html.dark .table>tbody>tr>th,
html.dark .table>tfoot>tr>th,
html.dark .table>thead>tr>td,
html.dark .table>tbody>tr>td,
html.dark .table>tfoot>tr>td,
html.dark .table-bordered {
    border-color: #2c3237
}

html.dark .table-striped>tbody>tr:nth-child(2n+1)>td,
html.dark .table-striped>tbody>tr:nth-child(2n+1)>th {
    background-color: #333940
}

html.dark pre {
    background-color: #2c3237;
    border-color: #2c3237;
    color: #777
}

html.dark .show-grid [class*=col-lg-] .show-grid-block {
    background-color: #2c3237;
    border-color: #2c3237
}

html.dark .google-map-borders,
html.dark .embed-responsive-borders {
    border-color: #333940
}

html.dark .alert.alert-default {
    border-color: #333940;
    background-color: #2c3237
}

html.dark hr {
    background-image: linear-gradient(to left, #212529, #3F4247, #212529)
}

html.dark hr.light {
    background-image: linear-gradient(to left, #212529, #3F4247, #212529)
}

html.dark hr.solid {
    background: #3f4247
}

html.dark .divider {
    background-image: linear-gradient(to left, transparent, #3F4247, transparent)
}

html.dark .divider [class*=fa-],
html.dark .divider .icons {
    background: #212529
}

html.dark .divider.divider-solid {
    background: #3f4247
}

html.dark .divider.divider-style-2 [class*=fa-],
html.dark .divider.divider-style-2 .icons {
    background: #262a2f
}

html.dark .divider.divider-style-3 [class*=fa-],
html.dark .divider.divider-style-3 .icons {
    border-color: #3f4247
}

html.dark .divider.divider-style-4 [class*=fa-],
html.dark .divider.divider-style-4 .icons {
    border-color: #3f4247
}

html.dark .divider.divider-style-4 [class*=fa-]:after,
html.dark .divider.divider-style-4 .icons:after {
    border-color: #262a2f
}

html.dark .divider.divider-small {
    background: 0 0
}

html.dark .divider.divider-small hr {
    background: #3f4247
}

html.dark .divider.divider-small.divider-light hr {
    background: #3f4247
}

html.dark hr.dashed:after,
html.dark .divider.dashed:after {
    border-color: #3f4247
}

html.dark .heading.heading-bottom-border h1 {
    border-bottom-color: #3f4247
}

html.dark .heading.heading-bottom-border h2,
html.dark .heading.heading-bottom-border h3 {
    border-bottom-color: #3f4247
}

html.dark .heading.heading-bottom-border h4,
html.dark .heading.heading-bottom-border h5,
html.dark .heading.heading-bottom-border h6 {
    border-bottom-color: #3f4247
}

html.dark .heading.heading-bottom-double-border h1,
html.dark .heading.heading-bottom-double-border h2,
html.dark .heading.heading-bottom-double-border h3 {
    border-bottom-color: #3f4247
}

html.dark .heading.heading-bottom-double-border h4,
html.dark .heading.heading-bottom-double-border h5,
html.dark .heading.heading-bottom-double-border h6 {
    border-bottom-color: #3f4247
}

html.dark .heading.heading-middle-border:before {
    border-top-color: #3f4247
}

html.dark .heading.heading-middle-border h1,
html.dark .heading.heading-middle-border h2,
html.dark .heading.heading-middle-border h3,
html.dark .heading.heading-middle-border h4,
html.dark .heading.heading-middle-border h5,
html.dark .heading.heading-middle-border h6 {
    background: #212529
}

html.dark .recent-posts .date .day,
html.dark section.section .recent-posts .date .day {
    background-color: #333940
}

html.dark .blog-posts article {
    border-color: #2c3237
}

html.dark section.featured .recent-posts .date .day,
html.dark article.post .post-date .day {
    background-color: #2c3237
}

html.dark article .post-video,
html.dark article .post-video iframe,
html.dark article .post-audio,
html.dark article .post-audio iframe {
    background-color: #2c3237;
    border-color: #2c3237
}

html.dark ul.simple-post-list li {
    border-bottom-color: #262a2f
}

html.dark .post-block {
    border-top-color: #1c2023
}

html.dark ul.comments .comment-block {
    background-color: #2c3237
}

html.dark ul.comments .comment-arrow {
    border-right-color: #2c3237
}

html.dark .pricing-table li {
    border-top-color: #262a2f
}

html.dark .pricing-table h3 {
    background-color: #262a2f;
    text-shadow: none
}

html.dark .pricing-table h3 span {
    background: #2c3237;
    border-color: #282d31;
    box-shadow: 0 5px 20px #282d31 inset, 0 3px 0 #2c3237 inset;
    color: #777
}

html.dark .pricing-table .most-popular {
    border-color: #2c3237
}

html.dark .pricing-table .most-popular h3 {
    background-color: #2c3237;
    color: #fff;
    text-shadow: none
}

html.dark .pricing-table .plan-ribbon {
    background-color: #2c3237
}

html.dark .pricing-table .plan {
    background: #2c3237;
    border: 1px solid #2c3237;
    color: #777;
    text-shadow: none
}

html.dark .product-thumb-info {
    background-color: #2c3237;
    border-color: transparent
}

html.dark .shop .quantity .qty {
    background-color: #2c3237;
    border-color: transparent
}

html.dark .shop .quantity .minus,
html.dark .shop .quantity .plus {
    background-color: #262a2f;
    border-color: transparent
}

html.dark .shop table.cart td,
html.dark .shop .cart-totals th,
html.dark .shop .cart-totals td {
    border-color: #2c3237
}

html.dark .dialog {
    background-color: #212529
}

html.dark .modal-content {
    background-color: #212529
}

html.dark .modal-header {
    border-bottom-color: #2c3237
}

html.dark .modal-header h1,
html.dark .modal-header h2,
html.dark .modal-header h3,
html.dark .modal-header h4,
html.dark .modal-header h5,
html.dark .modal-header h6 {
    color: #777
}

html.dark .modal-header .close {
    text-shadow: none;
    color: #fff
}

html.dark .modal-footer {
    border-top-color: #2c3237
}

html.dark .popup-inline-content,
html.dark .mfp-content .ajax-container {
    background: #212529 !important
}

html.dark .loading-overlay {
    background: #212529
}

html.dark .sort-destination-loader:after {
    background-color: #212529
}

html.dark #footer .newsletter form .btn-light {
    background-color: #262a2f;
    border-color: #262a2f;
    color: #777
}

html.dark #footer .newsletter form .form-control {
    border: 0
}

@media(min-width:992px) {
    html.dark #header .header-nav-main:not(.header-nav-main-light) nav>ul>li.dropdown:not(.dropdown-full-color) .dropdown-menu {
        background: #262a2f
    }

    html.dark #header .header-nav-main:not(.header-nav-main-light) nav>ul>li.dropdown:not(.dropdown-full-color) .dropdown-menu li:hover>a,
    html.dark #header .header-nav-main:not(.header-nav-main-light) nav>ul>li.dropdown:not(.dropdown-full-color) .dropdown-menu li:focus>a,
    html.dark #header .header-nav-main:not(.header-nav-main-light) nav>ul>li.dropdown:not(.dropdown-full-color) .dropdown-menu li.active>a,
    html.dark #header .header-nav-main:not(.header-nav-main-light) nav>ul>li.dropdown:not(.dropdown-full-color) .dropdown-menu li:active>a {
        background: #333940
    }

    html.dark #header .header-nav-main:not(.header-nav-main-light) nav>ul>li.dropdown:not(.dropdown-full-color) .dropdown-menu li a {
        border-bottom-color: #333940
    }

    html.dark #header .header-nav-main:not(.header-nav-main-light) nav>ul>li.dropdown:not(.dropdown-full-color) .dropdown-menu li a:hover,
    html.dark #header .header-nav-main:not(.header-nav-main-light) nav>ul>li.dropdown:not(.dropdown-full-color) .dropdown-menu li a:focus,
    html.dark #header .header-nav-main:not(.header-nav-main-light) nav>ul>li.dropdown:not(.dropdown-full-color) .dropdown-menu li a.active,
    html.dark #header .header-nav-main:not(.header-nav-main-light) nav>ul>li.dropdown:not(.dropdown-full-color) .dropdown-menu li a:active {
        background: #333940
    }

    html.dark #header .header-nav-main:not(.header-nav-main-light) nav>ul>li.dropdown-mega:not(.dropdown-full-color) .dropdown-mega-sub-title {
        color: #999
    }

    html.dark #header .header-nav-main:not(.header-nav-main-light) nav>ul>li.dropdown-mega:not(.dropdown-full-color) .dropdown-mega-sub-nav>li:hover>a {
        background: #333940
    }

    html.dark #header .header-nav-main:not(.header-nav-main-light) a>.thumb-info-preview .thumb-info-wrapper {
        background: #333940
    }

    html.dark #header .header-nav.header-nav-stripe nav>ul>li>a {
        color: #ccc
    }

    html.dark #header .header-nav.header-nav-stripe nav>ul>li:hover>a {
        color: #fff
    }

    html.dark #header .header-nav.header-nav-links nav>ul>li>a,
    html.dark #header .header-nav.header-nav-links nav>ul>li:hover>a,
    html.dark #header .header-nav.header-nav-line nav>ul>li>a,
    html.dark #header .header-nav.header-nav-line nav>ul>li:hover>a {
        color: #ccc
    }

    html.dark #header .header-nav.header-nav-dropdowns-dark nav>ul>li>a,
    html.dark #header .header-nav.header-nav-dropdowns-dark nav>ul>li:hover>a {
        color: #ccc
    }

    html.dark .header-nav-main nav>ul>li.dropdown-mega-signin .dropdown-menu {
        background-color: #212529
    }
}

@media(max-width:991px) {
    html.dark #header .header-nav-main:before {
        background-color: #212529
    }

    html.dark #header .header-nav-main nav::-webkit-scrollbar-thumb {
        border-color: transparent;
        background: #39404c
    }

    html.dark #header .header-nav-main nav>ul li {
        border-bottom-color: #333940
    }

    html.dark #header .header-nav-main nav>ul>li.dropdown-mega:not(.dropdown-full-color) .dropdown-mega-sub-title {
        color: #fff
    }

    html.dark #header .header-nav-main nav ul li a:active {
        background-color: #1e1e1e;
        color: #fff
    }

    html.dark .home-concept {
        background-image: none
    }
}

html.boxed body {
    background-color: transparent;
    background-position: 0 0;
    background-repeat: repeat
}

html.boxed .body {
    position: relative;
    background-color: transparent;
    border-radius: 5px;
    border-top: 5px solid #ccc;
    box-shadow: 0 0 4px rgba(0, 0, 0, .15);
    margin: 25px auto;
    max-width: 1200px;
    height: auto
}

html.boxed #header .header-body {
    border-top-color: transparent;
    border-top: 0
}

html.boxed #header.header-effect-shrink .header-body {
    max-width: 1200px
}

html.boxed .main {
    background-color: #fff;
    overflow: hidden
}

html.boxed section.section.section-footer {
    padding-bottom: 100px
}

html.boxed #footer {
    margin-top: 0;
    border-bottom: 4px solid #1a1c1e;
    border-radius: 0 0 5px 5px
}

html.boxed .footer-reveal {
    max-width: 1200px;
    left: auto !important
}

@media(min-width:1200px) {
    html.boxed.sticky-header-active #header .header-body {
        width: 100%;
        max-width: 1200px
    }

    html.boxed .footer-reveal {
        bottom: 25px !important
    }
}

@media(max-width:1199px) {
    html.boxed .footer-reveal {
        border-bottom: none !important
    }
}

@media(min-width:992px) {
    html.boxed #header .header-top.header-top-colored {
        margin-top: -18px;
        border-radius: 4px 4px 0 0
    }

    html.boxed.sticky-header-active #header:not(.header-effect-shrink) .header-body {
        position: fixed !important;
        padding-left: 15px;
        padding-right: 15px
    }

    html.boxed.sticky-header-active #header:not(.header-effect-shrink) .header-nav-bar {
        margin: 0 -15px -9px
    }
}

@media(max-width:991px) {
    html.boxed .body {
        margin: 0 auto;
        border-radius: 0
    }
}

@media(max-width:767px) {
    html.boxed {
        background: 0 0 !important
    }
}

html.gap-outside .body {
    margin-top: 25px;
    margin-bottom: 25px
}

html.gap-outside .main,
html.gap-outside #footer {
    margin-right: 25px;
    margin-left: 25px
}

html.gap-outside .slider-container {
    width: 100% !important;
    left: auto !important
}

html.gap-outside #header:not(.side-header) {
    margin-top: -25px
}

html.gap-outside #header:not(.side-header) .header-body {
    left: 0;
    padding-right: 25px;
    padding-left: 25px
}

html.gap-outside #header:not(.side-header) .header-container:after {
    content: none
}

@media(max-width:991px) {
    html.gap-outside #header:not(.side-header) .header-nav-main:before {
        width: calc(100vw - 50px)
    }
}

html.gap-outside .sticky-wrapper {
    left: 25px !important;
    width: calc(100vw - 67px) !important
}

html.gap-outside .pin-wrapper .sticky-wrapper {
    left: 25px !important;
    width: calc(100vw - 67px) !important
}

html.gap-outside .pin-wrapper .sticky-wrapper .sticky-body {
    width: calc(100vw - 67px) !important
}

html.gap-outside .pin-wrapper .sticky-wrapper.sticky-effect-active {
    top: -25px !important;
    left: 0 !important;
    width: 100% !important
}

html.gap-outside .pin-wrapper .sticky-wrapper.sticky-effect-active .sticky-body {
    width: 100% !important
}

html.gap-outside .pin-wrapper .sticky-wrapper.sticky-effect-active .sticky-body .container-fluid {
    padding-left: 25px;
    padding-right: 25px
}