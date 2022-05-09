import BarraTopo from './BarraTopo'
import BarraTopoMobile from './BarraTopoMobile'
import Stories from './Stories'
import Posts from './Posts'
import SideBar from './SideBar'
import MenuMobile from './MenuMobile'

export default function App() {
  return (
    <>
      <BarraTopo />

      <BarraTopoMobile />

      <div class="conteudo">
        <div class="conteudo-pagina">
          <Stories />

          <Posts />
        </div>

        <SideBar />
      </div>

      <MenuMobile />
    </>
  )
}
