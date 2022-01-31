import { Link } from "react-router-dom";

export const Features = (props) => {
  const handleClick = () =>{
    console.log("clicked");
  }
  return (

    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Products</h2>
        </div>
        <Link to="/products">
        <div className='row' >
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3' onClick={handleClick} >
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
        </Link>
      </div>
    </div>
  )
}
