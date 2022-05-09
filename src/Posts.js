import React from 'react'

function Post(props) {
  const [valor, setValor] = React.useState(0)
  function like(num) {
    setValor(num)
  }

  return (
    <div class="post">
      <div class="post-topo">
        <div>
          <img src={props.srcUser} alt="icone stories" />
          <h6>{props.user}</h6>
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <div onClick={() => like(1)}>{props.post}</div>
      <div class="post-baixo">
        <div class="ajuste1">
          <div>
            <span
              onClick={() => like(1)}
              className={valor % 2 === 0 ? ' ' : 'escondido'}
            >
              <ion-icon name="heart-outline"></ion-icon>
            </span>
            <span
              onClick={() => like(0)}
              className={valor % 2 === 1 ? ' ' : 'escondido'}
            >
              <ion-icon class="corVermelha" name="heart-sharp"></ion-icon>
            </span>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
        <div class="ajuste2">
          <img src={props.srcIcon} alt="icone stories" />
          <h5>
            Curtido por <strong>{props.name}</strong> e{' '}
            <strong>outras 101.523 pessoas</strong>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default function Posts() {
  const posts = [
    {
      srcUser: '/images/stories/respondeai 1.png',
      user: 'respondeai',
      post: (
        <video width="612px" autoplay muted controls>
          <source src="/video/video.mp4" type="video/mp4" />
          <source src="/video/video.ogv" type="video/ogv" />
        </video>
      ),
      srcIcon: '/images/stories/9gag 1.png',
      name: '9gag'
    },
    {
      srcUser: '/images/stories/meowed 1.png',
      user: 'meowed',
      post: (
        <img
          src="/images/post/gato-telefone 1.png"
          class="imagem-post"
          alt="imagem Post"
        />
      ),
      srcIcon: '/images/stories/nathanwpylestrangeplanet 1.png',
      name: 'nathanwpylestrangeplanet'
    },
    {
      srcUser: '/images/stories/nathanwpylestrangeplanet 1.png',
      user: 'nathanwpylestrangeplanet',
      post: (
        <img
          src="/images/post/strange-planet.jpg"
          class="imagem-post"
          alt="imagem Post"
        />
      ),
      srcIcon: '/images/stories/wawawiwacomicsa 1.png',
      name: 'wawawiwacomicsa'
    },
    {
      srcUser: '/images/stories/9gag 1.png',
      user: '9gag',
      post: (
        <img
          src="/images/post/quem-e-essa.jpg"
          class="imagem-post"
          alt="imagem Post"
        />
      ),
      srcIcon: '/images/stories/barked 1.png',
      name: 'barked'
    }
  ]

  return (
    <div className="posts">
      {posts.map(item => (
        <Post
          srcUser={item.srcUser}
          user={item.user}
          post={item.post}
          srcIcon={item.srcIcon}
          name={item.name}
        />
      ))}
    </div>
  )
}
