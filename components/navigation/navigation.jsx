import Link from "next/link";
import MobileNav from "./MobileNav";
import Image from "next/image";

function Navigation() {
	return (
		<header className="px-8 py-4 bg-transparent max-w-screen overflow-hidden">
			<div className="flex justify-between gap-3 items-center">
				<Link href="/" className="link max-sm:pb-3">
					<Image
						src="/assets/images/logo.png"
						alt="logo"
						width={100}
						height={70}
					/>
				</Link>

				<div className="flex w-full  items-center justify-end gap-4 px-4 pb-4 sm:py-3 max-md:hidden">
					<Link href="/#about" className="flex link text-2xl">
						<span>About</span>
					</Link>
					<Link href="/#skills" className="flex link text-2xl">
						<span>Skills</span>
					</Link>
					<Link href="/#projects" className="flex link text-2xl">
						<span>Projects</span>
					</Link>
					<Link href="/#contact" className="flex link text-2xl">
						<span>Contact</span>
					</Link>
				</div>
				<MobileNav />
			</div>
		</header>
	);
}

export default Navigation;
