import { useSoundZone } from "@/lib/sound-context";

const MEMBERS = [
  { 
    name: "Harsha Vardhan Kakani", 
    role: "Founder", 
    img: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a/v1/a34fe2cd-3c99-4445-b5a2-c60c7f9afa71/e7875587-e477-4c23-a29b-1e135debc0a3/harsha.png" 
  },
  { 
    name: "Manogna Kondapaturi", 
    role: "CEO — Chief Executive Officer", 
    img: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a/v1/a34fe2cd-3c99-4445-b5a2-c60c7f9afa71/5aaec647-b513-415f-8001-8c7f19f774ce/manogna.png" 
  },
];

export function Team() {
  const ref = useSoundZone("team");
  return (
    <section id="team" ref={ref as React.RefObject<HTMLElement>} className="relative py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-neon">Meet our team</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            The people behind <span className="text-gradient">the OS.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {MEMBERS.map((m, i) => (
            <div
              key={m.name}
              className="group relative rounded-2xl glass overflow-hidden hover:-translate-y-1 transition-all"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-cyan/0 group-hover:ring-cyan/40 transition-all" />
              </div>
              <div className="p-4">
                <div className="font-display text-lg font-semibold">{m.name}</div>
                <div className="text-xs text-cyan mt-0.5">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
