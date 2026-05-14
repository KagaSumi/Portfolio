import { container, section } from "../styles/layout";
import { card, h3, text } from "../styles/ui";

export default function Experience() {
    return (
        <section className={section}>
            <div className={container}>

                <h2 className="text-4xl font-bold mb-8">
                    Experience
                </h2>

                <div className="space-y-6">

                    <div className={card}>
                        <h3 className={h3}>
                            Teck Resources — Co-op Developer
                        </h3>

                        <p className="text-zinc-500 text-sm mt-1">Dec 2023 - Aug 2024</p>
                        <p className={text + " mt-3"}>
                        Automated enterprise migration workflow (10 weeks → 1 week), maintained 18 production applications, introduced pytest testing, and improved operational dashboards with Power BI.
                        </p>
                    </div>

                    <div className={card}>
                        <h3 className={h3}>
                            ProVita Care Management
                        </h3>

                        <p className="text-zinc-500 text-sm mt-1">Jan 2020 - Dec 2023</p>
                        <p className={text + " mt-3"}>
                            Managed high-volume scheduling and communication between staff,
                            residents, and families in a long-term care environment.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
