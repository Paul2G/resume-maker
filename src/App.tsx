import { Header } from "@/components/header";
import { SectionCard } from "@/components/section-card";

import { ThemeProvider } from "./context/theme-provider";
import { ContactInfoForm } from "@/components/forms/contact-info-form";
import { ResumeProvider } from "@/context/resume-provider";

import type { Resume } from "@/lib/types";
import { Pages } from "@/components/pages";

const placeholderResume: Resume = {
  id: "1",
  title: "New Resume",
  sectionsOrder: [],
  contactInfo: {
    fullName: "Juanito",
  },
  experience: [],
  education: [],
  projects: [],
  certifications: [],
  courses: [],
};

function saveResumeOnLocalStorage(resume: Resume) {
  localStorage.setItem("resume", JSON.stringify(resume));
}

function loadResumeFromLocalStorage(): Resume {
  const storedResume = localStorage.getItem("resume");

  return storedResume ? JSON.parse(storedResume) : placeholderResume;
}

function App() {
  const loadedResume = loadResumeFromLocalStorage();

  return (
    <ThemeProvider>
      <ResumeProvider
        currentResume={loadedResume}
        onSave={saveResumeOnLocalStorage}
      >
        <div className="flex flex-col relative  min-h-screen bg-background text-foreground">
          <Header />
          <main className="grow px-1 flex items-stretch divide-x py-2">
            <div className="flex-2">
              <Pages />
            </div>
            <div className="flex-1 flex flex-col gap-4 p-4">
              <SectionCard title="Contact info">
                <ContactInfoForm />
              </SectionCard>
              <SectionCard title="Experience">Inputs</SectionCard>
            </div>
          </main>
        </div>
      </ResumeProvider>
    </ThemeProvider>
  );
}

export default App;
