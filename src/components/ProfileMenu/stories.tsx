import { Meta, Story } from '@storybook/react/types-6-0'
import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ProfileMenuProps> = (args) => (
  <div style={{ maxWidth: '320px', maxHeight: '305px' }}>
    <ProfileMenu {...args} />
  </div>
)
