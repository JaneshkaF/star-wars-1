import React, {useContext} from 'react'
import { Context } from '../store/appContext'
import { Link } from "react-router-dom"

export const SingleCharacter = () => {
    const {store, actions} = useContext(Context)
    console.log(store.singleCharacter)
    return(
        <>
        <div class="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-8">
    <img src={store.baseImgUrl + '/characters/' + store.singleCharacter.uid + ".jpg"} className="img-fluidrounded-start" alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body ms-5">
      <h5 className="card-title">{store.singleCharacter.properties?.name}</h5>
     <p className="card-text">{store.singleCharacter?.description}</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        <Link to='/'>
            <p>click here to get back to home page</p>
        </Link>
        </>
    )
}