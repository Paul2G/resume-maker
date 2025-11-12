import { ModeToggle } from "./mode-toggle";

export function Header({ children }: HeaderProps) {
  return (
    <header className="bg-background sticky top-0 z-50 w-full flex p-2">
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </header>
  );
}

export type HeaderProps = {
  children?: React.ReactNode;
};
