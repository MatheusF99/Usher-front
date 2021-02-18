import React, {ChangeEvent, FormEvent, useState} from 'react'




function CreateUserPage() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [images, setImages] = useState<File[]>([])
  const [prevImg, setPrevImg] = useState<string[]>([])

  function handleSubmit(event: FormEvent){
    event.preventDefault()

    console.log(
      {
        name,
        email,
        password
      }
    );
     
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

      <form onSubmit={handleSubmit} action=""> 
        <fieldset>

          <legend>Dados</legend>

          <div>
            <label htmlFor="UserName">UserName</label>
            <input type="text" 
              value={name} 
              onChange={event => setName(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email "
              value={email} 
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password"
              value={password} 
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          <div className="image-contiener">
            {
              prevImg.map(image =>{
                return (
                  <img key={image} src={image} alt={name}/>
                )
              })
            }
            <label htmlFor="image">
              +
            </label>
            <input onChange={handleSelectImages} type="file" id= "image"/>
          </div>

        </fieldset>

        <button className="confirm-button" type="submit">
          Confirmar
        </button>

      </form>
    </div>
  );
}

export default CreateUserPage
