"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";

const formSchema = z.object({
	username: z.string().min(3, {
		message: "Username harus memiliki minimal 3 karakter.",
	}),
	email: z.string().email({
		message: "Format email tidak valid.",
	}),
	password: z.string().min(8, {
		message: "Password harus memiliki minimal 8 karakter.",
	}),
	confirmPassword: z.string().min(8, {
		message: "Password harus memiliki minimal 8 karakter.",
	}),
});

export default function RegisterForm() {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)
	const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)


	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="John Doe" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="john@example.com" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<div className="relative">
									<Input placeholder="********" type={isPasswordVisible ? "text" : "password"} {...field} />
									<Button variant={"ghost"} type="button" className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-inherit cursor-pointer" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
										{isPasswordVisible ? <EyeClosedIcon /> : <EyeIcon />}
									</Button>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<div className="relative">
									<Input placeholder="********" type={isConfirmPasswordVisible ? "text" : "password"} {...field} />
									<Button
										variant={"ghost"}
										type="button"
										className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-inherit cursor-pointer"
										onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
										{isConfirmPasswordVisible ? <EyeClosedIcon /> : <EyeIcon />}
									</Button>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">Submit</Button>
			</form>
		</Form>
	)
}