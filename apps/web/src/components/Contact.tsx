import { container, section } from "../styles/layout";
import { button } from "../styles/ui";

export default function Contact() {
    return (
        <section className={section}>
            <div className={container + " text-center"}>

                <h2 className="text-4xl font-bold mb-6">
                    Contact
                </h2>

                <p className="text-zinc-400 mb-10">
                    Open to backend, infrastructure, and co-op opportunities.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <a href="mailto:quinten.leung@gmail.com" className={button}>
                        Email
                    </a>

                    <a
                        href="https://github.com/kagasumi"
                        className={button}
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/quintenl"
                        className={button}
                    >
                        LinkedIn
                    </a>
                </div>

            </div>
        </section>
    );
}
