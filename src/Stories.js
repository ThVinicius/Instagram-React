function Storie(props) {
  return (
    <div class="ajuste">
      <div class="icone-stories">
        <img src={props.src} alt="icone stories" />
      </div>
      <div class="legenda-stories">
        <h1>{props.text}</h1>
      </div>
    </div>
  )
}
export default function Stories() {
  const stories = [
    { src: '/images/stories/9gag 1.png', text: '9gag' },
    { src: '/images/stories/meowed 1.png', text: 'meowed' },
    { src: '/images/stories/barked 1.png', text: 'barked' },
    {
      src: '/images/stories/nathanwpylestrangeplanet 1.png',
      text: 'nathanwpyle...'
    },
    { src: '/images/stories/wawawiwacomicsa 1.png', text: 'wawawiwac...' },
    { src: '/images/stories/respondeai 1.png', text: 'respondeai' },
    { src: '/images/stories/filomoderna 1.png', text: 'filomoderna' },
    { src: '/images/stories/memeriagourmet 1.png', text: 'memeriagourmet' },
    { src: '/images/stories/9gag 1.png', text: '9gag' }
  ]
  return (
    <div class="stories">
      <ion-icon name="chevron-forward-circle"></ion-icon>
      {stories.map(item => (
        <Storie src={item.src} text={item.text} />
      ))}
    </div>
  )
}
