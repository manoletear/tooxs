import { MeshGradient } from "@paper-design/shaders-react";

interface PaperShaderBackgroundProps {
  className?: string;
}

/**
 * Animated mesh-gradient background tuned to Tooxs brand palette
 * (deep navy + brand blue #177FC6 + soft mint accents).
 * Uses @paper-design/shaders-react MeshGradient with two stacked layers
 * for depth and an organic, slowly evolving look.
 */
export function PaperShaderBackground({ className = "" }: PaperShaderBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Base mesh — navy + brand blue */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#06192f", "#0a2647", "#177FC6", "#0a2647"]}
        speed={0.25}
      />
      {/* Overlay mesh — adds highlights with subtle mint accent */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-50 mix-blend-screen"
        colors={["#06192f", "#177FC6", "#20B2AA", "#06192f"]}
        speed={0.18}
      />
    </div>
  );
}

export default PaperShaderBackground;
