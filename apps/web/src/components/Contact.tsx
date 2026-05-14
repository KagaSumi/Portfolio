import { useState } from "react";
import { sendContact, type ContactForm } from "../api/contact";

export default function Contact() {
    const [form, setForm] = useState<ContactForm>({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        try {
            await sendContact(form);

            setStatus("Message sent successfully.");

            setForm({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            setStatus("Failed to send message.");
        } finally {
            setLoading(false);
        }
    }

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <section id="contact" className="py-24">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-6">Contact</h2>

                <p className="text-zinc-400 mb-10">
                    Open to backend, infrastructure, and co-op opportunities.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 outline-none focus:border-zinc-600"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 outline-none focus:border-zinc-600"
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 outline-none focus:border-zinc-600"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {status && (
                        <p className="text-sm text-zinc-400">{status}</p>
                    )}
                </form>
            </div>
        </section>
    );
}
