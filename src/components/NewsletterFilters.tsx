import { useState } from "react";
import { Plus, Minus, Search, X } from "lucide-react";
import { CATEGORY_GROUPS, INDUSTRIES, CONTENT_TYPES, type CategoryGroup, type Industry, type ContentType } from "@/data/articles";

export interface NewsletterFilterState {
  themes: CategoryGroup[];
  industries: Industry[];
  contentTypes: ContentType[];
  query: string;
}

interface Props {
  state: NewsletterFilterState;
  onChange: (next: NewsletterFilterState) => void;
  resultsCount: number;
}

type PanelKey = "tema" | "industria" | "tipo" | null;

export function NewsletterFilters({ state, onChange, resultsCount }: Props) {
  const [open, setOpen] = useState<PanelKey>(null);

  const totalSelected =
    state.themes.length + state.industries.length + state.contentTypes.length;

  const toggle = <T extends string>(arr: T[], value: T): T[] =>
    arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

  const clearAll = () =>
    onChange({ themes: [], industries: [], contentTypes: [], query: "" });

  const panels: { key: Exclude<PanelKey, null>; label: string; count: number }[] = [
    { key: "tema", label: "Tema", count: state.themes.length },
    { key: "industria", label: "Industria", count: state.industries.length },
    { key: "tipo", label: "Tipo de contenido", count: state.contentTypes.length },
  ];

  return (
    <section className="bg-[#0A2647] text-white border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6">
        {/* Search bar */}
        <div className="relative w-full mb-5">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
          <input
            type="text"
            value={state.query}
            onChange={(e) => onChange({ ...state, query: e.target.value })}
            placeholder="Buscar artículos por nombre…"
            className="w-full h-11 pl-11 pr-10 rounded-full border border-white/20 bg-white/5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary transition-colors"
          />
          {state.query && (
            <button
              onClick={() => onChange({ ...state, query: "" })}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              aria-label="Limpiar búsqueda"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* 3 accordion headers */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/15">
          {panels.map((p) => {
            const isOpen = open === p.key;
            return (
              <button
                key={p.key}
                onClick={() => setOpen(isOpen ? null : p.key)}
                className={`flex items-center justify-between gap-3 px-4 sm:px-5 py-4 border-b md:border-b-0 md:border-r last:border-r-0 border-white/15 text-left transition-colors hover:bg-white/5 ${
                  isOpen ? "bg-white/5" : ""
                }`}
              >
                <span className="flex items-center gap-3">
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  <span className="text-sm sm:text-base font-medium">{p.label}</span>
                  {p.count > 0 && (
                    <span className="text-xs bg-primary text-white rounded-full px-2 py-0.5 font-semibold">
                      {p.count}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active panel chips */}
        {open && (
          <div className="pt-5 pb-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-wrap gap-2">
              {open === "tema" &&
                CATEGORY_GROUPS.map((g) => {
                  const active = state.themes.includes(g);
                  return (
                    <button
                      key={g}
                      onClick={() => onChange({ ...state, themes: toggle(state.themes, g) })}
                      className={`px-3.5 py-1.5 rounded border text-xs sm:text-sm transition-colors ${
                        active
                          ? "bg-primary border-primary text-white"
                          : "border-white/30 text-white/85 hover:border-white hover:bg-white/5"
                      }`}
                    >
                      {g}
                    </button>
                  );
                })}
              {open === "industria" &&
                INDUSTRIES.map((g) => {
                  const active = state.industries.includes(g);
                  return (
                    <button
                      key={g}
                      onClick={() => onChange({ ...state, industries: toggle(state.industries, g) })}
                      className={`px-3.5 py-1.5 rounded border text-xs sm:text-sm transition-colors ${
                        active
                          ? "bg-primary border-primary text-white"
                          : "border-white/30 text-white/85 hover:border-white hover:bg-white/5"
                      }`}
                    >
                      {g}
                    </button>
                  );
                })}
              {open === "tipo" &&
                CONTENT_TYPES.map((g) => {
                  const active = state.contentTypes.includes(g);
                  return (
                    <button
                      key={g}
                      onClick={() => onChange({ ...state, contentTypes: toggle(state.contentTypes, g) })}
                      className={`px-3.5 py-1.5 rounded border text-xs sm:text-sm transition-colors ${
                        active
                          ? "bg-primary border-primary text-white"
                          : "border-white/30 text-white/85 hover:border-white hover:bg-white/5"
                      }`}
                    >
                      {g}
                    </button>
                  );
                })}
            </div>
          </div>
        )}

        {/* Footer actions */}
        {(totalSelected > 0 || state.query.length > 0) && (
          <div className="flex flex-wrap items-center justify-end gap-4 mt-5 pt-4 border-t border-white/10">
            <button
              onClick={clearAll}
              className="text-sm text-white/80 hover:text-white font-medium transition-colors"
            >
              Borrar todo
            </button>
            <button
              onClick={() => setOpen(null)}
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded text-sm font-semibold transition-colors"
            >
              Mostrar resultados ({resultsCount})
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
