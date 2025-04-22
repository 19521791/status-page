import { useState } from 'react'
import { useColorScheme } from '@mui/material'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import SecurityIcon from '@mui/icons-material/Security'
import Divider from '@mui/material/Divider'
import Logout from '@mui/icons-material/Logout'
import AccountCircle from '@mui/icons-material/AccountCircle'
import ArrowDown from '@components/icons/ArrowDown'

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const { mode } = useColorScheme()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const filledArrowIcon = () => {
    return mode === 'dark' ? '#ffffff' : '#334155'
  }

  return (
    <Box>
      <button
        onClick={handleClick}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img
          src="/images/voxel_dog.png"
          className="w-[28px] h-[28px] rounded-full"
          alt="avatar"
        />
        <p className="hidden xl:block font-semibold text-sm">Douglus Nguyen</p>
        <ArrowDown className="hidden xl:inline-block w-3 h-3" fill={filledArrowIcon()} />
      </button>

      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles',
          sx: { paddingY: 1, paddingX: 1.5 }
        }}
        PaperProps={{
          sx: {
            borderRadius: 4,
            minWidth: 180,
            boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
            backgroundColor: 'var(--mui-palette-background-modal)'
          }
        }}
        sx={{ marginTop: 1 }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ px: 3, py: 1.5, gap: 1.5, borderRadius: 10 }}
        >
          <AccountCircle fontSize="small" />
      User Profile
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          sx={{ px: 3, py: 1.5, gap: 1.5, borderRadius: 10 }}
        >
          <ManageAccountsIcon fontSize="small" />
      Account
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          sx={{ px: 3, py: 1.5, gap: 1.5, borderRadius: 10 }}
        >
          <SecurityIcon fontSize="small" />
      Security
        </MenuItem>

        <Divider sx={{ my: 1 }} />

        <MenuItem
          onClick={handleClose}
          sx={{ px: 3, py: 1.5, gap: 1.5, borderRadius: 10 }}
        >
          <Logout fontSize="small" />
      Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default DropdownMenu