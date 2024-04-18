import { RegisterPanel } from '../components/organisms/RegisterPanel'

export function RegisterPanelShowcase() {
  function onClick() {
    console.log('Clicked!')
  }

  return (
    <div className="h-[750px] w-[375px] bg-primary-900 flex justify-center items-center px-4">
      <RegisterPanel
        register={data => console.log('Register', data)}
        loginLinkClicked={onClick}
        tacClicked={onClick}
        privacyPolicyClicked={onClick}
      />
    </div>
  )
}
