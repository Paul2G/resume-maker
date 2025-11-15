import { useResume } from "@/hooks/use-resume";

export function Pages() {
  const { contactInfo } = useResume();

  return (
    <div className="font-serif">
      <div
        id="sheet-1"
        className="bg-white text-black max-w-full w-[50rem] aspect-[17/22] mx-auto shadow-md border p-16"
      >
        <div id="contact" className="">
          <h1 className="text-3xl font-bold mb-4">{contactInfo.fullName}</h1>
        </div>
      </div>
    </div>
  );
}
