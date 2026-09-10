"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";

function AppNavLink({ hash, text, ...props }) {
	const t = useTranslations("nav");
	const locale = useLocale();
	const [activeHash, setActiveHash] = useState("");
	useSelectedLayoutSegment();

	useEffect(() => {
		setActiveHash(window.location.hash);
	});

	function activeLink(hash) {
		return activeHash === hash;
	}

	return (
		<Link
			href={{ pathname: `/${locale}`, hash: `${hash}` }}
			{...props}
			className={`link text-2xl [&.active]:text-indigo-200 ${activeLink(hash) ? "active" : ""}`}
		>
			{t(`${text}`)}
		</Link>
	);
}

export default AppNavLink;
