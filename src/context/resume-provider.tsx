import React, { createContext, useState } from "react";
import { useUpdateEffect } from "@/hooks/use-update-effect";

import type { Resume } from "@/lib/types";

export const ResumeContext = createContext<ResumeProviderValue>(undefined!);

export function ResumeProvider({
  currentResume,
  onSave,
  children,
}: ResumeProviderProps) {
  const [resume, setResume] = useState<Resume>(currentResume);

  function setContactInfo(contactInfo: Resume["contactInfo"]) {
    setResume((prev) => ({
      ...prev,
      contactInfo,
    }));
  }

  function setSummary(summary: Resume["summary"]) {
    setResume((prev) => ({
      ...prev,
      summary,
    }));
  }

  useUpdateEffect(() => {
    setResume(currentResume);
  }, [currentResume]);

  useUpdateEffect(() => {
    onSave(resume);
  }, [resume]);

  return (
    <ResumeContext.Provider value={{ ...resume, setContactInfo, setSummary }}>
      {children}
    </ResumeContext.Provider>
  );
}

export type ResumeProviderProps = {
  currentResume: Resume;
  onSave: (resume: Resume) => void;
  children: React.ReactNode;
};

export type ResumeProviderValue = Resume & {
  setContactInfo: (contactInfo: Resume["contactInfo"]) => void;
  setSummary: (summary: Resume["summary"]) => void;
};
