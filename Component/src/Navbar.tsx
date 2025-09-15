import type{INavbar} from  "../contracts/Inavbar"

export function Navbar(props:INavbar){

    return(
        <div className="d-flex justify-content-between fs-3 my-3">
           <div>
              {props.brand}
           </div>
           <div className="d-flex justify-content-around">
              {props.items.map((item,index)=>(
                <span key={index}>{item}</span>
              ))}
           </div>
        </div>
    )
}