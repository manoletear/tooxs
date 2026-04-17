import { useEffect, useRef, useState, createContext, useContext, useCallback, type ReactNode } from "react";
import { ExternalLink, CalendarClock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const MEETING_URL = "https://meetings.hubspot.com/maravena1";

/* ── HubSpot Meetings embed loader ── */
function HubSpotMeetingsEmbed() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = `<div class="meetings-iframe-container" data-src="${MEETING_URL}?embed=true"></div>`;
    const SCRIPT_SRC =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      // Remove and re-add to force re-render
      existing.parentNode?.removeChild(existing);
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={ref}
      className="w-full min-h-[640px] rounded-lg overflow-hidden bg-white"
    />
  );
}

/* ── Context: open the meeting dialog from anywhere ── */
type MeetingCtx = { openMeeting: (context?: string) => void };
const MeetingContext = createContext<MeetingCtx | null>(null);

export function useMeeting() {
  const ctx = useContext(MeetingContext);
  if (!ctx) {
    // Fallback: open in new tab if provider not mounted
    return {
      openMeeting: () => window.open(MEETING_URL, "_blank", "noopener,noreferrer"),
    };
  }
  return ctx;
}

export function MeetingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [context, setContext] = useState<string | null>(null);

  const openMeeting = useCallback((ctx?: string) => {
    setContext(ctx ?? null);
    setOpen(true);
  }, []);

  return (
    <MeetingContext.Provider value={{ openMeeting }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <div className="px-6 pt-6 pb-3 border-b">
            <DialogHeader>
              <div className="flex items-center gap-2 text-primary mb-1">
                <CalendarClock size={18} />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Reserva tu reunión
                </span>
              </div>
              <DialogTitle className="text-2xl font-bold">
                Agenda con nuestro equipo
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {context
                  ? `Solicitud desde: ${context}. Elige el horario que mejor te acomode — la reunión queda confirmada al instante.`
                  : "Elige el horario que mejor te acomode. La reunión queda confirmada al instante en tu calendario."}
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="px-4 pb-4 max-h-[75vh] overflow-y-auto">
            <HubSpotMeetingsEmbed />
            <div className="mt-3 flex justify-center">
              <a
                href={MEETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Abrir calendario en nueva pestaña <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </MeetingContext.Provider>
  );
}
