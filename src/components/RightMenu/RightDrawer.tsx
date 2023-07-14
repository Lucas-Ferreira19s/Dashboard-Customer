// import * as React from 'react'
// import { styled } from '@mui/material/styles'
// import Box from '@mui/material/Box'
// import Drawer from '@mui/material/Drawer'
// import IconButton from '@mui/material/IconButton'
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
// import ChevronRightIcon from '@mui/icons-material/ChevronRight'

// const drawerWidth = 240

// const Main = styled('div')({
//   flexGrow: 1,
//   padding: 16,
//   transition: 'margin 200ms',
//   marginRight: 0,
// })

// const DrawerHeader = styled('div')({
//   justifyContent: 'flex-end',
// })

// export function RightDrawer() {
//   const [open, setOpen] = React.useState(false)

//   const handleDrawerOpen = () => {
//     setOpen(true)
//   }

//   const handleDrawerClose = () => {
//     setOpen(false)
//   }

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Drawer
//         sx={{
//           width: 50,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//           },
//           ...(open ? {} : { display: 'none' }),
//         }}
//         variant='persistent'
//         anchor='right'
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             <ChevronRightIcon />
//           </IconButton>
//         </DrawerHeader>
//       </Drawer>

//       <Main>
//         <DrawerHeader>
//           <IconButton
//             onClick={handleDrawerOpen}
//             style={{ position: 'absolute', top: 33, right: 15, backgroundColor: 'white' }}
//           >
//             <ChevronLeftIcon color='secondary' />
//           </IconButton>
//         </DrawerHeader>
//       </Main>
//     </Box>
//   )
// }
