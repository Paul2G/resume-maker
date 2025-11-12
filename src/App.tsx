import { Header } from "@/components/header";
import { SectionCard } from "@/components/section-card";

import { ThemeProvider } from "./context/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col relative  min-h-screen bg-background text-foreground">
        <Header />
        <main className="grow px-1 flex items-stretch divide-x py-2">
          <div className="flex-2">
            <div
              id="resume"
              className="bg-white text-black max-w-full w-[50rem] aspect-[17/22] mx-auto shadow-md border"
            >
              A
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 p-4">
            <SectionCard title="Contact info">Hola</SectionCard>
            <SectionCard title="Experience">Inputs</SectionCard>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
