import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
        <section id="about" className="py-32">
            <div className="max-w-5xl mx-auto px-6">

                <h2 className="text-4xl font-bold mb-10">
                    About
                </h2>

                <p className="text-zinc-400 leading-8 max-w-2xl">
                    I’m a full-stack and infrastructure-focused developer
                    interested in backend systems, cloud platforms, and
                    developer tooling.
                </p>

                <div className="mt-12 grid md:grid-cols-2 gap-10">

                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Infrastructure & Cloud
                        </h3>
                        <p className="text-zinc-400">
                            Linux, Docker, Terraform, Ansible, AWS, Azure, Bash
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Programming Languages
                        </h3>
                        <p className="text-zinc-400">
                            Python, C, C++, C#, Java, JavaScript, SQL
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            DevOps & CI/CD
                        </h3>
                        <p className="text-zinc-400">
                            Git, GitLab, Jenkins, Bash, Groovy, Cloudflare Tunnels
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Systems & Tools
                        </h3>
                        <p className="text-zinc-400">
                            PowerBI, Power Automate, Sharepoint
                        </p>
                    </div>

                </div>
            </div>
        </section>
        </motion.section>
    );
}
