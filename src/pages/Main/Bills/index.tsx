import { Head } from '../../../components/Head'
import { Input } from '../../../components/Input'
import { CollapsibleTable } from '../../../components/TableBills'

import { UserMenuBar } from '../../../components/UserMenuBar'

import * as C from './styles'

export default function Bills() {
  return (
    <>
      <Head title='Bills' />
      <C.ContainerHerder>
        <Input placeholderProps='Search Bills' titleProps='Bills' flex />
        <div>
          <UserMenuBar />
        </div>
      </C.ContainerHerder>
      <C.MainBills>
        <CollapsibleTable />
      </C.MainBills>
    </>
  )
}
