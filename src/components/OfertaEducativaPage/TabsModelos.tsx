import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ViejoModeloGrid, NuevoModeloGrid } from "./index";

function TabsComponent() {
  type TabKey = "nuevo" | "viejo";
  const [activeTab, setActiveTab] = useState<TabKey>("nuevo");

  const tabs: { id: TabKey; label: string }[] = [
    { id: "nuevo", label: "Nuevo Modelo" },
    { id: "viejo", label: "Viejo Modelo" },
  ];

  const tabContent: Record<TabKey, JSX.Element> = {
    nuevo: <NuevoModeloGrid />,
    viejo: <ViejoModeloGrid />,
  };

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
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-lg font-semibold rounded-lg duration-500  ${
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
        {" "}
        {/* No overflow-hidden para depurar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {tabContent[activeTab]} {/* Aquí se ve el contenido */}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default TabsComponent;
