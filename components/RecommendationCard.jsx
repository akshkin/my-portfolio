import Image from "next/image";

const variants = {
	recommendation: {
		badge: "Recommendation",
		accent: "border-violet-500",
		badgeStyle: "bg-violet-500/10 text-violet-300 border-violet-500/30",
	},

	evaluation: {
		badge: "Evaluation",
		accent: "border-emerald-500",
		badgeStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
	},

	testimonial: {
		badge: "Testimonial",
		accent: "border-amber-500",
		badgeStyle: "bg-amber-500/10 text-amber-300 border-amber-500/30",
	},
};

export default function RecommendationCard({
	type = "testimonial",
	name,
	role,
	organization,
	avatar,
	date,
	text,
	source,
}) {
	const style = variants[type];

	return (
		<article
			className={`
        rounded-3xl
        border
        ${style.accent}
        bg-zinc-950/70
        p-6
        backdrop-blur
        transition
        hover:-translate-y-1
        hover:shadow-xl
      `}
		>
			<div className="flex items-start gap-4">
				<div className="h-14 w-14 overflow-hidden rounded-full shrink-0 grid items-center justify-center bg-pink-800">
					<span>
						{name?.[0]}
						{name?.split(" ")[1]?.[0]}
					</span>
				</div>

				<div className="min-w-0 flex-1">
					<h3 className="text-lg font-semibold mt-0">
						{name}{" "}
						{source === "LinkedIn" && (
							<Image
								src="/assets/svgs/linkedin.svg"
								alt="LinkedIn"
								width={56}
								height={56}
							/>
						)}
					</h3>

					<p className="text-sm text-zinc-400">{role}</p>

					{organization && (
						<p className="text-sm text-zinc-500">{organization}</p>
					)}

					{date && (
						<time className="mt-1 block text-xs text-zinc-500">{date}</time>
					)}
				</div>
			</div>

			<blockquote
				className="
                    mt-6
                    border-l-2
                    border-zinc-700
                    pl-4
                    italic
                    leading-8
                    text-zinc-300
                    "
			>
				“{text}”
			</blockquote>

			{source && (
				<div className="mt-5 text-xs text-zinc-500">Source: {source}</div>
			)}
			<span
				className={`
                            inline-flex
                            rounded-full
                            border
                            px-3
                            py-1
                            text-xs
                            font-medium
                            mt-3
                            ${style.badgeStyle}
                            `}
			>
				{style.badge}
			</span>
		</article>
	);
}
