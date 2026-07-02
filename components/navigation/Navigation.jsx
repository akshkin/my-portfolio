"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";

function Navigation() {
	useSelectedLayoutSegment();
	const pathname = usePathname();
	const [activeHash, setActiveHash] = useState("");

	useEffect(() => {
		setActiveHash(window.location.hash);
	});

	function activeLink(hash) {
		return activeHash === hash;
	}
	// const [basePath, anchor] = href.split("#");
	// const isSamePath = pathname === basePath;
	// const isSameAnchor = anchor ? hash === `#${anchor}` : hash === "";
	// const isActive = isSamePath && isSameAnchor;

	return (
		<header className="p-2 pr-4 max-w-screen overflow-hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
			<div className="flex justify-between gap-3 items-center">
				<Link href="/" className="link max-sm:pb-3">
					<Image
						src="/assets/images/logo.png"
						alt="logo"
						width={70}
						height={40}
					/>
				</Link>

				<div className="flex w-full items-center justify-end gap-4 px-4 pb-4 sm:py-3 max-md:hidden">
					<Link
						href={{
							pathname: "/",
							hash: "about",
						}}
						className={`link text-2xl [&.active]:text-indigo-200 ${activeLink("#about") ? "active" : ""}`}
					>
						About
					</Link>
					<Link
						href={{
							pathname: "/",
							hash: "testimonials",
						}}
						className={`link text-2xl [&.active]:text-indigo-200 ${activeLink("#testimonials") ? "active" : ""}`}
					>
						Testimonials
					</Link>
					<Link
						href={{
							pathname: "/",
							hash: "skills",
						}}
						className={`link text-2xl [&.active]:text-indigo-200 ${activeLink("#skills") ? "active" : ""}`}
					>
						Skills
					</Link>
					<Link
						href={{
							pathname: "/",
							hash: "projects",
						}}
						className={`link text-2xl [&.active]:text-indigo-200 ${activeLink("#projects") ? "active" : ""}`}
					>
						Projects
					</Link>
					<Link
						href="/blog"
						className={`link text-2xl [&.active]:text-indigo-200 ${activeLink("/blog") ? "active" : ""}`}
					>
						Tech Notes
					</Link>
					<Link
						href={{
							pathname: "/",
							hash: "contact",
						}}
						className={`link text-2xl [&.active]:text-indigo-200 ${activeLink("#contact") ? "active" : ""}`}
					>
						Contact
					</Link>
				</div>
				<MobileNav />
			</div>
		</header>
	);
}

export default Navigation;
