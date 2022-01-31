export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
          Decoration is really about creating a quality of life that nourishes the soul and makes life beautiful. And so here we offer a great many diverse products to suit  our customer’s needs.We manufacture 3D metal animal and bird sculpture, flower sculpture, metal fountains, topiary frame, wind spinners, plant holders, unique lighted poles for cross roads, iconic mirrored sculpture, arbors & pergolas etc.The list of products is endless as creativity is boundless and all the products are the result of creative zeal of our team
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
