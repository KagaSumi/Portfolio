import { container, section } from "../styles/layout";
import { card, h3, text } from "../styles/ui";

export default function Education() {
    return (
        <section className={section}>
            <div className={container}>

                <h2 className="text-4xl font-bold mb-8">
                    Education
                </h2>

                <div className="space-y-6">

                    <div className={card}>
                        <h3 className={h3}>
                            British Columbia Institute of Technology
                        </h3>

                        <p className={text + " mt-2"}>
                            Bachelor of Applied Computer Science — Game Development
                        </p>

                        <p className="text-zinc-500 mt-1">
                            GPA: 89%
                        </p>

                        <p className="text-zinc-500 mt-3 text-sm">
                            2025 – Present
                        </p>
                    </div>

                    <div className={card}>
                        <h3 className={h3}>
                            British Columbia Institute of Technology
                        </h3>

                        <p className={text + " mt-2"}>
                            Diploma — Computer Information Technology
                        </p>

                        <p className="text-zinc-500 mt-1">
                            GPA: 91%
                        </p>

                        <p className="text-zinc-500 mt-3 text-sm">
                            2022 – 2024
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
