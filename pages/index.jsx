import MainLayout from './layouts/main'
import Download from './chunks/main/Download'
import Workspace from './chunks/main/Workspace'
import HowTo from './chunks/main/HowTo'

export default () => {
  return (
    <MainLayout>
      <Download />
      <Workspace />
      <HowTo />
    </MainLayout>
  )
}

 