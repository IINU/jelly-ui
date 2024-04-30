import { Navbar } from "../components/organisms/Navbar";

type Props = {
  style: "primary" | "secondary";
  type: "desktop" | "mobile";
};

export function NavbarShowcase({ style, type }: Props) {
  return (
    <div className="h-screen w-screen bg-secondary-400">
      <Navbar {...{ style, type }} />
    </div>
  );
}
