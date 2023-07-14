import { Head } from '../../../components/Head'
import { Input } from '../../../components/Input'
import { OderHistoryTable } from '../../../components/TableOrder'

import { UserMenuBar } from '../../../components/UserMenuBar'

import * as C from './styles'

export default function OrderHistory() {
  return (
    <>
      <Head title='OrderHistory' />
      <C.ContainerHerder>
        <Input placeholderProps='Search' titleProps='Order History' flex />
        <div>
          <UserMenuBar />
        </div>
      </C.ContainerHerder>
      <C.MainHistory>
        <OderHistoryTable />
      </C.MainHistory>
    </>
  )
}
