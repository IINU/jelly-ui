import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { OnboardingShowcase } from '../../showcase/OnboardingShowcase'
import { AcceptInvitePanel } from '../../components/organisms/onboarding/AcceptInvitePanel'
import { BusinessDetailsPanel } from '../../components/organisms/onboarding/BusinessDetailsPanel'
import { ConfirmPhonePanel } from '../../components/organisms/onboarding/ConfirmPhonePanel'
import { InvitePanel } from '../../components/organisms/onboarding/InvitePanel'
import { JobResponsibilitiesPanel } from '../../components/organisms/onboarding/JobResponsibilitiesPanel'
import { JobRolePanel } from '../../components/organisms/onboarding/JobRolePanel'
import { LoginPanel } from '../../components/organisms/onboarding/LoginPanel'
import { NewPasswordPanel } from '../../components/organisms/onboarding/NewPasswordPanel'
import { ProfilePicturePanel } from '../../components/organisms/onboarding/ProfilePicturePanel'
import { RegisterPanel } from '../../components/organisms/onboarding/RegisterPanel'
import { ResetPasswordPanel } from '../../components/organisms/onboarding/ResetPasswordPanel'
import { WelcomePanel } from '../../components/organisms/onboarding/WelcomePanel'

const meta = {
  title: 'Organisms/Onboarding',
  component: OnboardingShowcase,
  parameters: {
    backgrounds: { default: 'primary900' },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof OnboardingShowcase>

export default meta
type Story = StoryObj<typeof meta>;

export const AcceptInvitePanelStory: Story = {
  name: 'Accept Invite Panel',
  args: {
    component: AcceptInvitePanel,
    acceptInvite: fn(),
    kitchen: { name: 'Bun & Done' },
  },
}

export const BusinessDetailsPanelStory: Story = {
  name: 'Business Details Panel',
  args: {
    component: BusinessDetailsPanel,
    businessDetails: fn(),
  },
}

export const ConfirmPhonePanelStory: Story = {
  name: 'Confirm Phone Panel',
  args: {
    component: ConfirmPhonePanel,
    confirmCode: fn(),
    resendCodeClicked: fn(),
  },
}

export const InvitePanelStory: Story = {
  name: 'Invite Panel',
  args: {
    component: InvitePanel,
    next: fn(),
    invite: { name: 'Bun & Done' },
  },
}

type Responsibility = {
  id: number
  name: string
}

const responsibilities: Responsibility[] = [
  { id: 1, name: 'Handling invoices' },
  { id: 2, name: 'Tracking spend / GP' },
  { id: 3, name: 'Costing recipes' },
  { id: 4, name: 'Counting stock' },
  { id: 5, name: 'Ordering supplies' },
  { id: 6, name: 'Managing teams' },
]

export const JobResponsibilitiesPanelStory: Story = {
  name: 'Job Responsibilities Panel',
  args: {
    component: JobResponsibilitiesPanel,
    responsibilities: responsibilities.map(r => ({ item: r, isChecked: false })),
    submit: fn(),
    getText: (r: Responsibility) => r.name,
  },
}

export const JobRolePanelStory: Story = {
  name: 'Job Roles Panel',
  args: {
    component: JobRolePanel,
    jobRoles: fn(),
    onboarding: false,
  },
}

export const LoginPanelStory: Story = {
  name: 'Login Panel',
  args: {
    component: LoginPanel,
    login: fn(),
    registerLinkClicked: fn(),
    forgotPasswordLinkClicked: fn(),
  },
}

export const NewPasswordPanelStory: Story = {
  name: 'New Password Panel',
  args: {
    component: NewPasswordPanel,
    newPassword: fn(),
    loginLinkClicked: fn(),
  },
}

export const ProfilePicturePanelStory: Story = {
  name: 'Profile Picture Panel',
  args: {
    component: ProfilePicturePanel,
    submit: fn(),
  },
}

export const RegisterPanelStory: Story = {
  name: 'Register Panel',
  args: {
    component: RegisterPanel,
    register: fn(),
    loginLinkClicked: fn(),
    tacClicked: fn(),
    privacyPolicyClicked: fn(),
  },
}

export const ResetPasswordPanelStory: Story = {
  name: 'Reset Password Panel',
  args: {
    component: ResetPasswordPanel,
    resetPassword: fn(),
    loginLinkClicked: fn(),
  },
}

export const WelcomePanelStory: Story = {
  name: 'Welcome Panel',
  args: {
    component: WelcomePanel,
    next: fn(),
    loginLinkClicked: fn(),
  },
}
