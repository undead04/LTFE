import * as React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { clsx } from "clsx";
import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import NavItem from "../../components/NavItem";
import SearchInput from "./../../components/SearchInput/index";
import SearchResult from "../../components/SearchResult";
import SearchItem from "../../components/SearchItem";
import { RootState } from "../../store";
import { logout } from "../../store/reducers/auth";
import { deleteCart } from "../../store/reducers/cart";
import searchService, {
	ISearchItem,
} from "../../services/searchService";

const Header = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(
		(state: RootState) => state.auth.isLoggedIn,
	);
	const userInfo = useSelector(
		(state: RootState) => state.auth.userInfo,
	);

	// Search
	const searchRef = React.createRef<any>();
	const searchMobileRef = React.createRef<any>();
	const [search, setSearch] = useState("");
	const [gameSearch, setGameSearch] = useState<Array<ISearchItem>>(
		[],
	);
	const searchChangeHandler = () => {
		setSearch(
			searchRef.current.value || searchMobileRef.current.value,
		);
		if (search) {
			searchService.search(search).then((res) => {
				setGameSearch(res.data.hintSearch);
			});
		} else {
			setGameSearch([]);
			setSearch("");
		}
	};

	const logoutHandler = () => {
		dispatch(logout());
		dispatch(deleteCart());
	};
	useEffect(() => {
		const timeOutId = setTimeout(() => {
			searchChangeHandler();
		}, 500);

		return () => {
			clearTimeout(timeOutId);
		};
	}, [search]);
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
								{isLoggedIn ? (
									<Dropdown>
										<Dropdown.Toggle
											variant="transparent"
											id="dropdown-basic"
											className="h-100 fs-primary text-light d-flex align-items-center"
										>
											{userInfo && userInfo?.name}
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
												onClick={logoutHandler}
												to="/home"
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
						<div />

						<button
							type="button"
							className="btn-close bg-light"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						/>
					</div>
					<div className="offcanvas-body">
						<div className={clsx(styles.offcanvas_item)}>
							<Link
								to="/home"
								className={clsx(
									"text-capitalize text-light",
									styles.offcanvas_link,
								)}
							>
								store
							</Link>
						</div>
						<div className={clsx(styles.offcanvas_item)}>
							<Link
								to="/distribution"
								className={clsx(
									"text-capitalize text-light",
									styles.offcanvas_link,
								)}
							>
								distribution
							</Link>
						</div>
						<div className={clsx(styles.offcanvas_item)}>
							<Link
								to="/games"
								className={clsx(
									"text-capitalize text-light",
									styles.offcanvas_link,
								)}
							>
								game
							</Link>
						</div>
						{/* @guest chưa login */}
						{!isLoggedIn ? (
							<>
								<div className={clsx(styles.offcanvas_item)}>
									<Link
										to="/login"
										className="btn btn-secondary text-capitalize text-light d-flex w-100 h-75 fs-2 align-items-center justify-content-center mt-5"
									>
										Login
									</Link>
								</div>
								<div className={clsx(styles.offcanvas_item)}>
									<Link
										to="/register"
										className="btn btn-danger text-capitalize text-light d-flex w-100 h-75 fs-2 align-items-center justify-content-center mt-5"
									>
										Register
									</Link>
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
										onClick={logoutHandler}
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
									{/* Mobile search */}
									<SearchInput
										placeholder="Search for games"
										id="searchInput"
										name="searchInput"
										autoComplete="off"
										type="search"
										range="d-flex d-md-none"
										searchRef={searchMobileRef}
										value={search}
										onChange={() =>
											setSearch(searchMobileRef.current.value)
										}
									>
										<SearchResult counter={gameSearch.length}>
											{/* Demo */}
											{/* <SearchItem
												value="EA ESPORT VNVN"
												id="1"
												imgsrc="http://localhost:8000/storage/650922e5c436b.webp"
											/> */}
											{gameSearch.length > 0
												? gameSearch.map((item) => (
														<SearchItem
															value={item.name_Game}
															id={item.id}
															key={item.id}
															imgsrc={item.image}
														/>
												  ))
												: ""}
										</SearchResult>
									</SearchInput>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* PC, tablet search */}
				<section className="bg-black py-5">
					<div className="container-md">
						<SearchInput
							placeholder="Search for games"
							id="searchInput"
							name="searchInput"
							autoComplete="off"
							type="search"
							searchRef={searchRef}
							value={search}
							onChange={() => setSearch(searchRef.current.value)}
							// onFocus={searchChangeHandler}
						>
							<SearchResult counter={gameSearch.length}>
								{gameSearch.length > 0
									? gameSearch.map((item) => (
											<SearchItem
												value={item.name_Game}
												id={item.id}
												key={item.id}
												imgsrc={item.image}
											/>
									  ))
									: ""}
							</SearchResult>
						</SearchInput>
					</div>
				</section>
			</header>
		</>
	);
};

export default Header;
