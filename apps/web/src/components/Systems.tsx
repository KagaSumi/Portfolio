import { container, section, grid2 } from "../styles/layout";
import { card, h3, text } from "../styles/ui";

export default function Systems() {
    return (
        <section className={section}>
            <div className={container}>

                <h2 className="text-4xl font-bold mb-8">
                    Systems & Infrastructure
                </h2>

                <div className={grid2}>

                    <div className={card}>
                        <h3 className={h3}>
                            Homelab Platform
                        </h3>
                        <p className={text + " mt-3"}>
                            Docker-based infrastructure running 45+ services,
                            exposed securely via Cloudflare Tunnels with centralized authentication.
                        </p>
                    </div>

                    <div className={card}>
                        <h3 className={h3}>
                            CI/CD Automation
                        </h3>
                        <p className={text + " mt-3"}>
                            Jenkins + GitHub Actions pipelines using Docker agents
                            for automated build, test, and deployment workflows.
                        </p>
                    </div>

                    <div className={card + " md:col-span-2"}>
                        <h3 className={h3}>
                            Cloud Infrastructure Lab
                        </h3>
                        <p className={text + " mt-3"}>
                            Terraform + AWS (VPC, EC2, S3) with Ansible provisioning
                            for fully automated infrastructure deployment.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
