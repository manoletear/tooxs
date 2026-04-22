import { useEffect, useRef, useState, createContext, useContext, useCallback, type ReactNode } from "react";
import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const HS_PORTAL_ID = "24156430";
const HS_FORM_ID = "9780c116-7f69-4e47-84a1-ab7dd8c08a5a";
const HS_SCRIPT_SRC = "https://js.hsforms.net/forms/embed/24156430.js";

/* ── HubSpot Newsletter Form embed loader ── */
function HubSpotNewsletterForm() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = `<div class="hs-form-frame" data-region="na1" data-form-id="${HS_FORM_ID}" data-portal-id="${HS_PORTAL_ID}"></div>`;

    const existing = document.querySelector(`script[src="${HS_SCRIPT_SRC}"]`);
    if (existing) {
      existing.parentNode?.removeChild(existing);
    }
    const script = document.createElement("script");
    script.src = HS_SCRIPT_SRC;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return <div ref={ref} className="w-full min-h-[420px]" />;
}

/* ── Context: open the newsletter dialog from anywhere ── */
type NewsletterCtx = { openNewsletter: (context?: string) => void };
const NewsletterContext = createContext<NewsletterCtx | null>(null);

export function useNewsletter() {
  const ctx = useContext(NewsletterContext);
  if (!ctx) {
    return { openNewsletter: () => {} };
  }
  return ctx;
}

export function NewsletterProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [context, setContext] = useState<string | null>(null);

  const openNewsletter = useCallback((ctx?: string) => {
    setContext(ctx ?? null);
    setOpen(true);
  }, []);

  return (
    <NewsletterContext.Provider value={{ openNewsletter }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl p-0 overflow-hidden">
          <div className="px-6 pt-6 pb-3 border-b">
            <DialogHeader>
              <div className="flex items-center gap-2 text-primary mb-1">
                <Mail size={18} />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Insights 2026
                </span>
              </div>
              <DialogTitle className="text-2xl font-bold">
                Suscríbete a nuestro newsletter
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {context
                  ? `Solicitud desde: ${context}. Recibe tendencias, datos y perspectivas sobre tecnología e IA aplicada a la industria.`
                  : "Recibe cada semana tendencias, datos y perspectivas sobre tecnología e IA aplicada a la industria."}
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="px-6 pb-6 pt-4 max-h-[75vh] overflow-y-auto">
            <HubSpotNewsletterForm />
          </div>
        </DialogContent>
      </Dialog>
    </NewsletterContext.Provider>
  );
}
