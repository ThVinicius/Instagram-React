export default function BarraTopo() {
  return (
    <div class="fixar-barra">
      <div class="barra-topo">
        <div class="icones-esquerda">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="borda"></div>
          <img
            src="/images/logo.png"
            style={{ height: '29px', width: '103px' }}
            alt="Logo Instagram"
          />
        </div>
        <div>
          <input placeholder="Pesquisar" />
        </div>
        <div class="icones-direita">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </div>
  )
}
