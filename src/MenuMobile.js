function Icon(props) {
  return <ion-icon name={props.icon}></ion-icon>
}

export default function MenuMobile() {
  const icons = [
    'home',
    'search',
    'add-circle-outline',
    'heart-outline',
    'person-outline'
  ]

  return (
    <div class="menu-mobile">
      {icons.map(item => (
        <Icon icon={item} />
      ))}
    </div>
  )
}
