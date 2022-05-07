function Suggestions(props) {
  return (
    <div class="ajuste-sidebar3">
      <div class="ajuste-sidebar2">
        <img src={props.src} class="figura-sidebar2" alt="icone Sidebar" />
        <div>
          <h6>{props.text}</h6>
          <p>Segue você</p>
        </div>
      </div>
      <h4>Seguir</h4>
    </div>
  )
}

function User(props) {
  return (
    <div class="alinhar">
      <img src={props.src} class="figura-sidebar" alt="icone Sidebar" />
      <div>
        <h6>{props.user}</h6>
        <h6 class="corCinza">{props.name}</h6>
      </div>
    </div>
  )
}

export default function SideBar() {
  const suggestions = [
    { src: './images/sidebar/badvibesmemes 1.png', text: 'bad.vibes.memes' },
    { src: './images/sidebar/chibirdart 1.png', text: 'chibirdart' },
    {
      src: './images/sidebar/razoesparaacreditar 1.png',
      text: 'razoesparaacreditar'
    },
    { src: './images/sidebar/adorableanimals 1.png', text: 'adorableanimals' },
    { src: './images/sidebar/smallcutecats 1.png', text: 'smallcutecats' }
  ]

  return (
    <div class="fixar">
      <div class="sidebar">
        <User
          src="./images/sidebar/catanacomics 1.png"
          user="catanacomic"
          name="Catana"
        />
        <div class="ajuste-sidebar1">
          <h4 class="corCinza">Sugestões para você</h4>
          <h4 class="corPreto">Ver tudo</h4>
        </div>
        {suggestions.map(item => (
          <Suggestions src={item.src} text={item.text} />
        ))}
        <div class="creditos-sidebar">
          <h3>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </h3>
          <h3>© 2021 INSTAGRAM DO FACEBOOK</h3>
        </div>
      </div>
    </div>
  )
}
