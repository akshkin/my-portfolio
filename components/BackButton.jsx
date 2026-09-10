"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function BackButton() {
	const router = useRouter();
	return (
		<button
			onClick={() => router.back()}
			className="flex items-center gap-2 hover:text-pink-200 transition-colors ease-in"
		>
			<ArrowLeft /> <span>Back to all tech notes</span>
		</button>
	);
}

export default BackButton;
