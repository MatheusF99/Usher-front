import React, {ChangeEvent, FormEvent, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

import landingImage from '../../assets/images/undraw_annotation_7das.svg'
import backgroundImage from '../../assets/images/Background-big.svg'

import './create.css'

function CreateUserPage() {

  //#region const use state
  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [images, setImages] = useState<File[]>([])
  const [prevImg, setPrevImg] = useState<string[]>([])
  //#endregion
  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    const data = new FormData()

    console.log({
      name,
      email,
      password,
      images
    });
    

    data.append('name', String(name))
    data.append('email', String(email))
    data.append('password', String(password))

    images.forEach(image =>{
      data.append('images', image)
    })
    
    api.post('/users', data)

    history.push('/sucess')

  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>){
    if(!event.target.files){
      return;
    }

    const selectedImages = Array.from(event.target.files)

    setImages(selectedImages)

    const selectedImgPrev = selectedImages.map(image =>{
      return URL.createObjectURL(image)
    })

    setPrevImg(selectedImgPrev)

  }


  return (
    <div className="create-user-page">

      <form onSubmit={handleSubmit} className="form-create"> 
        <fieldset>
          <div className="header-text">
            <span>Start for free</span>

            <h1>
              Create your user
            </h1>

            <span>You have account? <Link to="/">Login</Link></span>
          </div>

          <div className="form-div-input">
            <input 
              required
              type="text" 
              value={name} 
              onChange={event => setName(event.target.value)}
              className="form-input"
            />
            <label htmlFor="UserName" className="form-label">UserName</label>
          </div>

          <div className="form-div-input">
            <input 
              required
              type="text"
              value={email} 
              onChange={event => setEmail(event.target.value)}
              className="form-input"
            />
            <label htmlFor="email" className="form-label">E-mail</label>
          </div>

          <div className="form-div-input">

            <input
              required 
              type="password"
              value={password} 
              onChange={event => setPassword(event.target.value)}
              className="form-input"
            />
            <label htmlFor="password" className="form-label">Password</label>
          </div>


            <label className='label-image'>
              Escolha uma foto de Perfil:
            </label>
          <div className="image-container">
            {
              prevImg.map(image =>{
                return (
                  <img key={image} src={image} alt={name}/>
                )
              })
            }
            <label className='upload-image' htmlFor="image[]">
              Fotos
            </label>
            <input onChange={handleSelectImages} type="file" id= "image[]"/>
          </div>

          <button className="form-input-btn" type="submit">
            Create on account
          </button>
          <button className="form-button-btn" type="button">
            Sign up with google account
          </button>

        </fieldset>
        <div className="field-images">
          <img className='image-center' src={landingImage} alt="landing"/>
          <img className="img-background" src={backgroundImage} alt="landing"/>
        </div>
      </form>
    </div>
  );
}

export default CreateUserPage
