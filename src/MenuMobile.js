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
      {/* <ion-icon name="home"></ion-icon>
      <ion-icon name="search"></ion-icon>
      <ion-icon name="add-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon> */}
    </div>
  )
}
