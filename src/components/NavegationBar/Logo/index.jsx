import amaroLogo from '/images/Logotipo_da_Amaro.webp'

const Logo = () => {
    return(
        <a className="navbar-brand" href="#">
      <h1 className="m-0">
          <img src={amaroLogo} className="logo" alt="Amaro logo" />
          </h1>
    </a>
    )    
}

export default Logo