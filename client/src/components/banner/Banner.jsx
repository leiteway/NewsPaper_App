import './Banner.css'

const Banner = () => {
  return (
    <>
    <section className='banner-container'>
        <img className="bg-banner" src="/src/assets/images/bg-banner.png" alt="Background del banner de la página NewPost" />
        <div className='container-text-banner'>
            <p className='text-banner'>Añade tu noticia en</p>
            <p className='large-text-banner'>TECHTODAY</p>
        </div>
    </section>
      
    </>
  )
}

export default Banner
