import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TOOL_BADGES, TOOLS, type ToolStatus } from "@/lib/tools";

const BADGE_STYLES: Record<ToolStatus, string> = {
  free: "bg-lime text-ink",
  paid: "bg-coral text-ink",
  soon: "bg-paper/20 text-paper/80",
};

export function Tools() {
  return (
    <section id="herramientas" className="bg-ink text-paper scroll-mt-16">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
        <h2 className="headline max-w-3xl text-3xl text-lime sm:text-4xl lg:text-[2.75rem]">
          Una caja de herramientas para tu restaurante
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper/75">
          Empieza con las gratis. Suma las de pago cuando las necesites. Y
          vienen más.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => (
            <li key={tool.name}>
              <Card
                className={cn(
                  "h-full border-paper/10 bg-graphite shadow-none transition-transform hover:-translate-y-0.5",
                  tool.status === "soon" && "opacity-70"
                )}
              >
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <Image
                      src={tool.icon}
                      alt=""
                      aria-hidden
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain"
                    />
                    <Badge
                      className={cn(
                        "rounded-full border-0 px-3 py-1 text-xs font-bold",
                        BADGE_STYLES[tool.status]
                      )}
                    >
                      {TOOL_BADGES[tool.status]}
                    </Badge>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-paper">
                      {tool.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-paper/70">
                      {tool.blurb}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
