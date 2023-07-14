import { Outlet } from 'react-router-dom'

import { Container } from './styles'

import { Sidebar } from '../../components/Sliderbar'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <Outlet />
      </section>
    </Container>
  )
}
