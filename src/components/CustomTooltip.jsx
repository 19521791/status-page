import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    arrow
    classes={{ popper: className }}
  />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#262626',
    fontSize: 14,
    fontWeight: 500,
    borderRadius: 6,
    padding: '6px 10px'
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#262626',
    marginLeft: '-8px'
  }
}))

export default CustomTooltip
