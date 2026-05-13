import { container, section } from "../styles/layout";
import { card, h2, h3, text } from "../styles/ui";

export default function About() {
    return (
        <section className={section}>
            <div className={container}>

                <h2 className={h2 + " mb-8"}>About</h2>

                <p className={text + " max-w-2xl"}>
                    I’m a full-stack and infrastructure-focused developer
                    interested in backend systems, cloud platforms, and tooling.
                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-6">

                    <div className={card}>
                        <h3 className={h3 + " mb-2"}>
                            Infrastructure & Cloud
                        </h3>
                        <p className={text}>
                            Linux, Docker, Terraform, AWS, Azure, Bash
                        </p>
                    </div>

                    <div className={card}>
                        <h3 className={h3 + " mb-2"}>
                            Programming Languages
                        </h3>
                        <p className={text}>
                            Python, C, C++, Java, JavaScript, SQL
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
