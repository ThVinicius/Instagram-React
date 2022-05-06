import BarraTopo from './BarraTopo'
import BarraTopoMobile from './BarraTopoMobile'
import Stories from './Stories'
import Posts from './Posts'
import SideBar from './SideBar'
import MenuMobile from './MenuMobile'

export default function App() {
  return (
    <div class="body">
      {/* <!------------barra topo--------> */}
      <BarraTopo />
      {/* <!------------barra topo--------> */}

      {/* <!------------barra topo do mobile --------> */}
      <BarraTopoMobile />
      {/* <!------------barra topo do mobile --------> */}

      {/* <!------------conteudo--------> */}
      <div class="conteudo">
        <div class="conteudo-pagina">
          {/* <!---------------- stories -----------------> */}
          <Stories />
          {/* <!---------------- stories -----------------> */}

          {/* <!------------posts--------> */}
          <Posts />
        </div>

        {/* <!------------posts--------> */}

        {/* <!----------sidebar-------------> */}
        <SideBar />
        {/* <!----------sidebar-------------> */}
      </div>
      {/* <!------------conteudo--------> */}

      {/* <!---------------menu mobile-------------> */}
      <MenuMobile />
      {/* <!---------------menu mobile-------------> */}
    </div>
  )
}
