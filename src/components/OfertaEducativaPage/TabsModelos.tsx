import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React, { Suspense } from "react";

// Lazy load tab content components
const NuevoModeloGrid = React.lazy(() => import("./NuevoModeloGrid"));
const ViejoModeloGrid = React.lazy(() => import("./ViejoModeloGrid"));

export default function TabsComponent() {
  type TabKey = "nuevo" | "viejo";
  const [activeTab, setActiveTab] = useState<TabKey>("nuevo");
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    // Desactiva el estado de "primer render" después de montar
    setIsFirstRender(false);
  }, []);

  const tabs = useMemo(
    () => [
      { id: "nuevo", label: "Nuevo Modelo" },
      { id: "viejo", label: "Viejo Modelo" },
    ],
    []
  );

  const tabContent = useMemo(
    () =>
      ({
        nuevo: <NuevoModeloGrid />,
        viejo: <ViejoModeloGrid />,
      } as Record<TabKey, JSX.Element>),
    []
  );

  return (
    <>
      {/* Tabs */}
      <div
        role="tablist"
        className="flex justify-center p-4 mx-auto mb-8 space-x-4 shadow-lg bg-stone-200 rounded-3xl w-fit"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            aria-selected={activeTab === tab.id}
            role="tab"
            onClick={() => setActiveTab(tab.id as TabKey)}
            className={`px-4 py-2 text-lg font-semibold rounded-lg duration-500 ${
              activeTab === tab.id
                ? "bg-green-500 text-white shadow-md"
                : "text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {tabContent[activeTab] && (
            <motion.div
              key={activeTab}
              initial={isFirstRender ? undefined : { opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Suspense fallback={<div>Cargando...</div>}>
                {tabContent[activeTab]}
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
