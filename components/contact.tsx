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
		<Container className="bg-white/50 backdrop-blur-xs transition-all relative rounded-2xl mb-20 mt-10 p-8!">
			<h2 className="mt-0 text-gray-900">Lass uns reden</h2>
			{emailSend ? (
				<strong>Nachricht erfolgreich gesendet, Danke!</strong>
			) : (
				<form onSubmit={handleSubmit}>
					<div>
						<div className="flex justify-between gap-4 md:gap-10 mb-6 flex-wrap md:flex-nowrap">
							<label className="w-full">
								<span className="text-sm text-gray-600">Dein Name</span>
								<input
									type="text"
									name="name"
									className="mt-1 block w-full rounded-lg bg-white/80 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
									required
								/>
							</label>
							<label className="w-full">
								<span className="text-sm text-gray-600">Deine eMail</span>
								<input
									type="email"
									name="email"
									className="mt-1 block w-full rounded-lg bg-white/80 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
									required
								/>
							</label>
						</div>
						<label>
							<span className="text-sm text-gray-600">Deine Nachricht</span>
							<textarea
								name="message"
								rows={3}
								className="mt-1 block w-full rounded-lg bg-white/80 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
								required></textarea>
						</label>
						<input
							type="checkbox"
							name="botcheck"
							className="hidden"
							style={{ display: 'none' }}></input>
						<input
							type="hidden"
							name="redirect"
							value="https://web3forms.com/success"
						/>

						<button
							role="button"
							type="submit"
							className="bg-indigo-600 text-white mt-8 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-700 hover:shadow-xs transition-all disabled:cursor-not-allowed disabled:opacity-50"
							disabled={formSubmitted}>
							{formSubmitted ? (
								<div
									className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"
									role="status">
									<span className="sr-only">Loading...</span>
								</div>
							) : (
								'Nachricht Senden'
							)}
						</button>
					</div>
				</form>
			)}
		</Container>
	)
}
