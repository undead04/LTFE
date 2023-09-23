import * as React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import NavItem from "../../components/NavItem";
import styles from "./Header.module.css";
import { clsx } from "clsx";
import SearchInput from "./../../components/SearchInput/index";
import SearchResult from "../../components/SearchResult";
import SearchItem from "../../components/SearchItem";
import { Dropdown } from "react-bootstrap";
const Header = () => {
	const CurrentUser = true;
	return (
		<>
			<header className="fixed-top sticky-top">
				<div className="container-fluid bg-dark text-white d-none d-md-block">
					<nav
						className={clsx(
							"d-flex align-items-center",
							styles.subnav,
						)}
					>
						<div className="container-fluid d-flex justify-content-between align-items-center">
							<div
								className={clsx(
									"d-none d-md-flex flex-grow-1  overflow-hidden",
									styles.web_options,
								)}
							>
								<NavItem to="/" src="/hlogo.svg" />

								<NavItem labelText="store" to="/" />
								<NavItem labelText="game" to="/games" />
								<NavItem labelText="distribution" to="/" />
							</div>
							<div
								className={clsx(
									styles.nav_controls,
									"d-none d-md-flex",
								)}
							>
								{CurrentUser ? (
									<Dropdown>
										<Dropdown.Toggle
											variant="transparent"
											id="dropdown-basic"
											className="h-100 fs-primary text-light d-flex align-items-center"
										>
											Username
										</Dropdown.Toggle>

										<Dropdown.Menu className="bg-secondary">
											<NavItem
												to="/cart"
												labelText="cart"
												className=""
												icons="fa-solid fa-cart-shopping"
												capitalize
											/>
											<NavItem
												to="/order"
												labelText="Order"
												className=""
												icons="fa-solid fa-wallet"
												capitalize
											/>
											<NavItem
												to="/"
												labelText="Logout"
												className=""
												icons="fa-solid fa-right-from-bracket"
												capitalize
											/>
										</Dropdown.Menu>
									</Dropdown>
								) : (
									<>
										<NavItem
											to="/login"
											labelText="login"
											className="me-2"
											icons="fa-solid fa-right-to-bracket me-2"
											capitalize
										/>
										<NavItem
											to="/register"
											labelText="register"
											className="me-2"
											capitalize
										/>
									</>
								)}
							</div>
							<div
								className="d-block d-md-none"
								style={{ width: 40 }}
							/>
							<div className="d-block d-md-none">
								<a
									href="{{ route('clients.home') }}"
									className={clsx("brand_img")}
								>
									<img
										className="img-fluid"
										src="{{ asset('/logo.svg') }}"
										alt="logo-img"
									/>
								</a>
							</div>
						</div>
					</nav>
				</div>
				<div
					className="offcanvas offcanvas-start text-bg-dark"
					tabIndex={-1}
					id="navOffCanvas"
					aria-labelledby="navOffCanvasLabel"
				>
					<div className="offcanvas-header" style={{ height: 50 }}>
						{/* @guest */}
						<div />
						{/* @else */}
						{/* <div>
        <span className="fs-big">{'{'}{'{'} auth()-&gt;user()-&gt;getName() {'}'}{'}'}</span>
      </div> */}
						{/* @endguest */}
						<button
							type="button"
							className="btn-close bg-light"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						/>
					</div>
					<div className="offcanvas-body">
						<div className={clsx(styles.offcanvas_item)}>
							<a
								href="{{ route('clients.home') }}"
								className={clsx(
									"text-capitalize text-light",
									styles.offcanvas_link,
								)}
							>
								store
							</a>
						</div>
						<div className={clsx(styles.offcanvas_item)}>
							<a
								href="{{ route('clients.distribution') }}"
								className={clsx(
									"text-capitalize text-light",
									styles.offcanvas_link,
								)}
							>
								distribution
							</a>
						</div>
						<div className={clsx(styles.offcanvas_item)}>
							<a
								href="{{ route('clients.games') }}"
								className={clsx(
									"text-capitalize text-light",
									styles.offcanvas_link,
								)}
							>
								game
							</a>
						</div>
						{/* @guest chưa login */}
						{!CurrentUser ? (
							<>
								<div className={clsx(styles.offcanvas_item)}>
									<a
										href="{{ route('login') }}"
										className="btn btn-secondary text-capitalize text-light d-flex w-100 h-75 fs-2 align-items-center justify-content-center mt-5"
									>
										Login
									</a>
								</div>
								<div className={clsx(styles.offcanvas_item)}>
									<a
										href="{{ route('register') }}"
										className="btn btn-danger text-capitalize text-light d-flex w-100 h-75 fs-2 align-items-center justify-content-center mt-5"
									>
										Register
									</a>
								</div>
							</>
						) : (
							<>
								<div className={clsx(styles.offcanvas_item)}>
									<Link
										to="/cart"
										className={clsx(
											"text-capitalize text-light",
											styles.offcanvas_link,
										)}
									>
										Cart
									</Link>
								</div>
								<div className={clsx(styles.offcanvas_item)}>
									<Link
										to="/order"
										className={clsx(
											"text-capitalize text-light",
											styles.offcanvas_link,
										)}
									>
										Order
									</Link>
								</div>
								<div className={clsx(styles.offcanvas_item)}>
									<Link
										to="/"
										className={clsx(
											"text-capitalize text-light",
											styles.offcanvas_link,
										)}
									>
										Logout
									</Link>
								</div>
							</>
						)}
					</div>
				</div>
				<div className="container-fluid bg-black text-white d-block d-md-none">
					<div className="headnav">
						<div className="container-md">
							<div
								className={clsx(
									styles.wrapper_headnav,
									"d-flex d-inline-flex justify-content-between my-4 my-md-5",
								)}
							>
								<div className="d-flex align-items-center justify-content-between w-100">
									<button
										className="btn btn-outline-secondary text-light display-2 fs-4 d-block d-md-none"
										type="button"
										data-bs-toggle="offcanvas"
										data-bs-target="#navOffCanvas"
										aria-controls="navOffCanvas"
									>
										<i className="fa-solid fa-bars" />
									</button>

									<SearchInput
										placeholder="Search for games"
										id="searchInput"
										name="searchInput"
										autoComplete="off"
										type="search"
										range="d-flex d-md-none"
									>
										<SearchResult>
											<SearchItem
												value="EA ESPORT VNVN"
												id="1"
												imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
											/>
										</SearchResult>
									</SearchInput>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* @else */}
				{/* đã login */}
				{/* <div className={clsx(styles.offcanvas_item)}>
        <a href="{{ route('cart.index') }}" className="text{clsx(-capitalize text-light", styles.offcanvas_link)}>
          <span><i className="fa-solid fa-cart-shopping" />
            Cart</span></a>
      </div>
      <div className={clsx(styles.offcanvas_item)}>
        <a href="{{ route('cart.orders') }}" className="text{clsx(-capitalize text-light", styles.offcanvas_link)}>
          <span><i className="fa-solid fa-wallet" />
            Orders</span></a>
      </div>
      <div className={clsx(styles.offcanvas_item)}>
        <form className="flex-grow-1" action="{{ route('logout') }}" id="logout" method="POST">
          <a role="button" className={clsx("text-capitalize text-light", styles.offcanvas_link)} onclick="document.getElementById('logout').submit()">
            <span className="d-flex justify-content-between"><span>Logout
                <i className="fa-solid fa-right-from-bracket" /></span></span>
          </a>
          @csrf
        </form>
      </div> */}
				{/* @endguest */}

				{/* <div
									className={clsx(
										styles.search_area,
										styles.headnav_item,
									)}
								>
									<div
										className={clsx(
											styles.headnav_search,
											"form-group",
										)}
									>
										<span>
											<i className="fa-solid fa-magnifying-glass" />
										</span>
										<input
											autoComplete="off"
											type="search"
											id="searchGame"
											name="gameName"
											placeholder="Search store"
										/>
									</div>
									<div className={clsx(styles.search_results, "row")}>
										<div id="ListGames" className="col-12" />
									</div>
								</div> */}

				<section className="bg-black py-5">
					<div className="container-md">
						<SearchInput
							placeholder="Search for games"
							id="searchInput"
							name="searchInput"
							autoComplete="off"
							type="search"
						>
							<SearchResult>
								<SearchItem
									value="EA ESPORT VNVN"
									id="1"
									imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
								/>
							</SearchResult>
						</SearchInput>
					</div>
				</section>
			</header>

			{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js">
</script> */}
			{/* <script>
    // Query search result
    $(document).ready(function() {
        $('#searchGame').keyup(function() {
            var query = $(this).val();
            console.log(query);
            if (query != '') {
                $.ajax({
                    url: `{{ route('search') }}?key=` +
                        query,

                    method: "GET",
                    success: function(data) {

                        $('#ListGames').html(data);

                    }

                });
            } else {
                $('#ListGames').html('');
            }

        });
    });

    // Active, not active search result
    const searchInput = document.getElementById('searchGame');
    const searchResult = document.querySelector('.search_results')
    searchInput.addEventListener('focus', () => {
        searchResult.classList.add('active')
    });

    searchInput.addEventListener('blur', () => {
        let timeOutID = setTimeout(() => {
            searchResult.classList.remove('active')
            clearTimeout(timeOutID);
        }, 1000);
    });

    const navLinks = document.querySelectorAll(".nav_options");
    const originLinks = (location.href).split('?')[0];
    navLinks.forEach(navLink => {
        //Kiểm tra nếu url = navLink href
        if (originLinks === navLink.href) {
            // Thêm class active cho navLink đó
            navLink.classList.add('active');
        };

    });
</script> */}

			{/* <a
									href="{{ route('login') }}"
									className="text-light nav_options me-2"
								>
									<i className="fa-solid fa-right-to-bracket me-2" />
									Login
								</a>
								<a
									href="{{ route('register') }}"
									className="text-light nav_options"
								>
									Register
								</a> */}
			{/* <div
									id="dropdown"
									className="dropdown d-flex align-items-center"
								>
									<button
										type="button"
										className="dropdown-toggle btn btn-dark h-100 fs-4"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<i className="fa-solid fa-user" />
										<span className="ms-1">User</span>
									</button>
									<ul
										className={clsx(
											styles.user_options,
											"dropdown-menu dropdown-menu-dark position-absolute left-0 right-0",
										)}
									>
										<li>
											<a href="/" className="text-light">
												<span>
													<i className="fa-solid fa-cart-shopping" />
													Cart
												</span>
												<div className="badge bg-light py-2 px-3 rounded-2 text-dark ms-2">
													1
												</div>
											</a>
										</li>
										<li>
											<a href="/order" className="text-light">
												<span>
													<i className="fa-solid fa-wallet" />
													Orders
												</span>
											</a>
										</li>
										<li>
											<form
												action="{{ route('logout') }}"
												id="logout"
												method="POST"
											>
												<a
													href="/"
													role="button"
													className="text-light"
												>
													<span>
														<i className="fa-solid fa-right-from-bracket" />
														<span>Logout</span>
													</span>
												</a>
											</form>
										</li>
									</ul>
								</div> */}
			{/* @endguest */}
		</>
	);
};

export default Header;
