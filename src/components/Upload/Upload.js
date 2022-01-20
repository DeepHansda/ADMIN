import React,{ useState,useEffect} from 'react';
import './upload.css'
import {useDispatch} from 'react-redux'
import {addCake} from '../../Redux/actions/actions'

function Upload() {
    const [cakeName,setCakeName] =useState('')
    const [desc,setDesc] =useState('')
    const [weight,setWeight] =useState('')
    const [price,setPrice] =useState('')
    const [images,setImages] = useState([])
    const dispatch = useDispatch()

    console.log(images)


      const submitHandler = (e)=>{
          const data = new FormData();
          data.append('cake_name',cakeName)
          data.append('cake_description',desc)
          data.append('weight',weight)
          data.append('price',price)
          for (let i = 0; i < images.length; i++) {
            data.append('images', images[i]);                      
        }
          e.preventDefault()
          dispatch(addCake(data)).then((res)=> console.log(res))
      }
    return(
        <div className="upload">
                                <div class="card card-statistics">
                                    <div class="card-header">
                                        <div class="card-heading">
                                            <h4 class="card-title">Upload a Cake</h4>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <form onSubmit={submitHandler} enctype="multipart/form-data">
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="inputEmail4">Cake Name*</label>
                                                    <input type="text" class="form-control" id="inputEmail4" placeholder="Cake Name" value ={cakeName} onChange ={(e)=>setCakeName(e.target.value)}/>
                                                </div>
                                                
                                            </div>
                                            <div class="form-group">
                                                <label for="inputAddress">Description*</label>
                                                <input type="text" class="form-control" id="inputAddress" placeholder="Description" value ={desc} onChange ={(e)=>setDesc(e.target.value)}/>
                                            </div>
                                            
                                            <div class="form-row">
                                                

                                                <div class="form-group col-md-4">
                                                    <label for="inputState">Weight*</label>
                                                    <select id="inputState" class="form-control" value ={weight} onChange={(e)=>setWeight(e.target.value)}>
                                                        <option selected="">Select Weight</option>
                                                        <option>0.5kg</option>
                                                        <option>1 kg</option>
                                                        <option>2 kg</option>
                                                        <option>3 kg</option>
                                                        <option>4 kg</option>
                                                        <option>5 kg</option>
                                                        <option>6 kg</option>

                                                    </select>
                                                </div>
                                                <div class="form-group col-md-2">
                                                    <label for="inputZip">Price*</label>
                                                    <input type="text" class="form-control" id="inputZip" placeholder="Price" value = {price} onChange={(e)=>setPrice(e.target.value)}/>
                                                </div>
                                            </div>
                                                <h5>Upload 5 Images Maximum 80kb Size *</h5>

                                            <div class="input-group mb-3">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="inputGroupFile02" multiple = 'multiple' accept='img/*' onChange={(e)=>setImages(e.target.files)} multiple/>
                                                <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                                            </div>
                                            
                                        </div>
                                        
                                            
                                            <button type="submit" class="btn btn-primary">Upload</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
    )
}

export default Upload;