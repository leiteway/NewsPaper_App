import Banner from '../components/banner/Banner'
import FormCreateNews from '../components/formCreateNews/FormCreateNews'
import './NewPost.css'
// import SideBar from '../components/sideBar/SideBar'

const NewPost = () => {
  return (
    <div>
    {/* <SideBar/> */}
    <Banner />
    <FormCreateNews/>
    </div>
  )
}

export default NewPost
