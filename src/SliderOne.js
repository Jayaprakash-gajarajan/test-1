import React from 'react'
const items = [
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzLIZBpdDCPGgrKwgJUUYRx5kPcKXHH1E7g&usqp=CAU",
    altText: "Grab the offer",
    caption: "Offer 1",
    key: 1,
  },
  {
    src:
      "https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-lg.be56f708eed71377bb4c8554dc2455c8.jpg",
    altText: "BOGO",
    caption: "Offer 2",
    key: 2,
  },
  {
    src:
      "https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-lg.be56f708eed71377bb4c8554dc2455c8.jpg",
    altText: "Flash sale",
    caption: "Offer 3",
    key: 3,
  },
];
function SliderOne() {
  return (
    <div className='slider'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://tse3.mm.bing.net/th?id=OIP.ouzA3oMQPOTbE3DAw7Q4jwHaEK&pid=Api&P=0"
       className="img-fluid d-block w-100" alt="Grab the offer"/>
       <h1>Varisu</h1>
    </div>
    <div className="carousel-item">
      <img src="https://www.filmibeat.com/ph-big/2022/12/thunivu_167091617400.jpg" 
      className="img-fluid d-block w-100" alt="BOGO"
      />
      <h1>Thunivu</h1>
    </div>
    <div className="carousel-item">
      <img src="https://tse4.mm.bing.net/th?id=OIP.hG5Dq6ZL1-IbMCGdaPMe1wHaEK&pid=Api&P=0" 
      className="img-fluid d-block w-100" alt="Flash sale"/>
      <h1>Avatar no way home</h1>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default SliderOne
