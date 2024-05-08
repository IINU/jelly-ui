import { Navbar } from '../components/organisms/Navbar'

type Props = {
  type: 'desktop' | 'mobile';
};

export function NavbarShowcase({ type }: Props) {
  return (
    <div className="h-screen w-screen bg-secondary-400">
      <Navbar type={type}/>
    </div>
  )
}
