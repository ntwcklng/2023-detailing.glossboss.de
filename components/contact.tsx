'use client'
import { useState } from 'react'
import Container from './container'

export default function Contact(props: any) {
	const [emailSend, setemailSend] = useState(false)
	const [formSubmitted, setformSubmitted] = useState(false)
	async function handleSubmit(e: any) {
		setformSubmitted(true)
		e.preventDefault()
		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				access_key: 'ba061ce0-9f07-47dd-be39-9501d5a3ce63',
				name: e.target.name.value,
				email: e.target.email.value,
				message: e.target.message.value,
			}),
		})
		const result = await response.json()
		if (result.success) {
			setemailSend(true)
			setformSubmitted(false)
		}
	}
	return (
		<Container className="bg-white transition-all relative rounded-lg cardBorderGradient mb-20 mt-10 !p-8">
			<h2 className="mt-0 text-gray-900">Lass uns reden</h2>
			{emailSend ? (
				<>
					<strong>Nachricht erfolgreich gesendet, Danke!</strong>
				</>
			) : (
				<>
					<form onSubmit={handleSubmit}>
						<div>
							<div className="flex justify-between gap-4 md:gap-10 mb-6 flex-wrap md:flex-nowrap">
								<label className="w-full">
									<span>Dein Name</span>
									<input
										type="text"
										name="name"
										className="mt-1 block w-full rounded-md bg-neutral-50 border-transparent focus:border-gray-700 focus:bg-neutral-100 focus:ring-0"
										required
									/>
								</label>
								<label className="w-full">
									<span>Deine eMail</span>
									<input
										type="email"
										name="email"
										className="mt-1 block w-full rounded-md bg-neutral-50 border-transparent focus:border-gray-700 focus:bg-neutral-100 focus:ring-0"
										required
									/>
								</label>
							</div>
							<label>
								<span>Deine Nachricht</span>
								<textarea
									name="message"
									rows={3}
									className="mt-1 block w-full rounded-md bg-neutral-50 border-transparent focus:border-gray-700 focus:bg-neutral-100 focus:ring-0"
									required
								></textarea>
							</label>
							<input
								type="checkbox"
								name="botcheck"
								className="hidden"
								style={{ display: 'none' }}
							></input>
							<input
								type="hidden"
								name="redirect"
								value="https://web3forms.com/success"
							/>

							<button
								role="button"
								type="submit"
								className="bg-gray-50 text-gray-800 mt-12 mb-4 px-5 py-3 cursor-pointer rounded-lg min-w-24  text-base font-semibold hover:bg-gray-200 hover:text-gray-600 hover:no-underline transition-all disabled:cursor-not-allowed"
							>
								{formSubmitted ? (
									<div
										className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
										role="status"
									>
										<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
											Loading...
										</span>
									</div>
								) : (
									'Nachricht Senden'
								)}
							</button>
						</div>
					</form>
				</>
			)}
		</Container>
	)
}
