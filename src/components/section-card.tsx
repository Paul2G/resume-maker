import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

export function SectionCard({ title, children }: SectionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="w-full py-3">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex flex-col gap-2"
      >
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {title}
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8">
                {isOpen ? <ChevronUp /> : <ChevronDown />}
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </CardTitle>
        </CardHeader>
        <CollapsibleContent>
          <CardContent>{children}</CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

export type SectionCardProps = {
  title: string;
  children?: React.ReactNode;
};
