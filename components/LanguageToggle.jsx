"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { EnglishFlag, SwedishFlag } from "./Icons";

function LanguageToggle() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const toggleLanguage = () => {
		const next = locale === "en" ? "sv" : "en";
		const hash = window.location.hash;
		const newPath = pathname.replace(`/${locale}`, `/${next}`);
		router.push(`${newPath}${hash}`);
	};
	// "🇸🇪" "🇬🇧"

	const iscurrentLangEng = locale === "en";

	return (
		<button
			onClick={toggleLanguage}
			className="cursor-pointer"
			title={`${iscurrentLangEng ? "Switch to swedish" : "Ändra till engelska"}`}
		>
			<span>{iscurrentLangEng ? <SwedishFlag /> : <EnglishFlag />}</span>
		</button>
	);
}

export default LanguageToggle;
