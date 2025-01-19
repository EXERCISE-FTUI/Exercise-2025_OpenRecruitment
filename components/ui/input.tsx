import * as React from "react";
import {Eye, EyeOff} from "lucide-react";
import {cn} from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
	({className, type, ...props}, ref) => {
		const [showPassword, setShowPassword] = React.useState(false);

		return (
			<div className="relative w-full">
				<input
					type={type === "password" && showPassword ? "text" : type}
					className={cn(
						"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
						className
					)}
					ref={ref}
					{...props}
				/>
				{type === "password" && (
					<button
						type="button"
						className="absolute inset-y-0 right-3 flex items-center text-muted-foreground"
						onClick={() => setShowPassword((prev) => !prev)}
					>
						{showPassword ? (
							<EyeOff size={18} />
						) : (
							<Eye size={18} />
						)}
					</button>
				)}
			</div>
		);
	}
);

Input.displayName = "Input";

export {Input};
