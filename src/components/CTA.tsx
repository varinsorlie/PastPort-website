'use client';

import { useState, useEffect } from 'react';

// Replace with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxAmbbB2ueryxR7HO3iyHWathcYmTeoLPjjnWRf2E2F1zTKkiTNtFcyIwrqQvJqB8HFXQ/exec';

export default function LeadForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [signupCount, setSignupCount] = useState<number | null>(null);

    // Fetch current signup count on mount
    useEffect(() => {
        const fetchCount = async () => {
            try {
                const response = await fetch(GOOGLE_SCRIPT_URL);
                const data = await response.json();
                setSignupCount(data.count);
            } catch (err) {
                console.error('Failed to fetch count:', err);
                setSignupCount(0);
            }
        };
        fetchCount();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            // With no-cors, we can't read the response, so we assume success
            setIsSubmitted(true);
            setSignupCount(prev => (prev !== null ? prev + 1 : 1));
            setName('');
            setEmail('');
        } catch (err) {
            setError('Noe gikk galt. Vennligst prøv igjen.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="signup" className="pt-10 pb-20 md:pt-1 md:pb-32 bg-[var(--burgundy)]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Counter Badge */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                            <div className="flex -space-x-2">
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full bg-[var(--accent)] border-2 border-[var(--burgundy)] flex items-center justify-center text-xs font-bold text-[var(--burgundy)]"
                                    >
                                        {['👤', '👤', '👤', '👤'][i]}
                                    </div>
                                ))}
                            </div>
                            <div className="text-white">
                                <span className="font-bold text-xl">
                                    {signupCount !== null ? signupCount : '...'}
                                </span>
                                <span className="text-white/80 ml-2">
                                    {signupCount === 1 ? 'person' : 'personer'} har meldt seg på
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Bli med som Alpha-tester
                        </h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Vær blant de første som opplever PastPort! Få tidlig tilgang til appen
                            og hjelp oss med å forme fremtidens historieopplevelse.
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="bg-[var(--accent)] rounded-3xl p-8 md:p-12 shadow-2xl">
                        {isSubmitted ? (
                            <div className="text-center py-8">
                                <div className="w-20 h-20 bg-[var(--burgundy)] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--burgundy)] mb-3">
                                    Takk for din påmelding!
                                </h3>
                                <p className="text-[var(--text-dark)]/80 mb-6">
                                    Vi sender deg en e-post når alpha-versjonen er klar.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-[var(--burgundy)] underline hover:no-underline"
                                >
                                    Registrer en annen person
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-dark)] mb-2">
                                            Navn
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            placeholder="Ditt navn"
                                            className="w-full px-4 py-3 rounded-xl border-2 border-[var(--burgundy)]/20 bg-white text-[var(--text-dark)] placeholder-[var(--text-dark)]/50 focus:border-[var(--burgundy)] focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-dark)] mb-2">
                                            E-post
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            placeholder="din@epost.no"
                                            className="w-full px-4 py-3 rounded-xl border-2 border-[var(--burgundy)]/20 bg-white text-[var(--text-dark)] placeholder-[var(--text-dark)]/50 focus:border-[var(--burgundy)] focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <p className="text-red-600 text-sm text-center">{error}</p>
                                )}

                                <div className="text-center pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-[var(--burgundy)] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[var(--burgundy)]/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sender...
                                            </span>
                                        ) : (
                                            'Meld meg på Alpha-testing'
                                        )}
                                    </button>
                                </div>

                                <p className="text-center text-sm text-[var(--text-dark)]/60 mt-4">
                                    Ved å registrere deg godtar du at vi kontakter deg angående PastPort alpha-testing.
                                    Vi deler aldri din informasjon med tredjepart.
                                </p>
                            </form>
                        )}
                    </div>

                    {/* Benefits */}
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        {[
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: 'Tidlig tilgang',
                                desc: 'Prøv PastPort før alle andre',
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                ),
                                title: 'Gi tilbakemelding',
                                desc: 'Hjelp oss å forbedre appen',
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: 'Gratis for alltid',
                                desc: 'Alpha-testere får premium gratis',
                            },
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                            >
                                <div className="w-12 h-12 bg-[var(--accent)] rounded-xl flex items-center justify-center text-[var(--burgundy)] flex-shrink-0">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{benefit.title}</h4>
                                    <p className="text-sm text-white/70">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function CTA() {
//   return (
//     <section className="section-padding bg-[var(--accent)]">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-dark)] mb-6">
//           Klar til å utforske?
//         </h2>
//         <p className="text-xl text-[var(--text-dark)]/80 mb-10 max-w-2xl mx-auto">
//           Bli med på ventelisten og vær blant de første som tester PastPort når
//           appen lanseres.
//         </p>

//         <Link
//           href="https://nettskjema.no/a/566846#/page/1"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center justify-center px-12 py-4 bg-[var(--burgundy)] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[var(--burgundy)]/90 hover:-translate-y-1 hover:scale-105 hover:shadow-xl text-lg gap-2"
//         >
//           Meld deg på
//           <ArrowRight className="w-5 h-5" />
//         </Link>
//       </div>
//     </section>
//   );
// }
