import Link from "next/link";
import MobileNav from "./MobileNav";

function Navigation() {
	return (
		<header className="px-2 bg-transparent">
			<div className="flex justify-between gap-3 items-center ml-3 ">
				<Link href="/" className="link max-sm:pb-3">
					<img src="/assets/logo.svg" alt="logo" width={100} height={70} />
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
