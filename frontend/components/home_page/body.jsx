import React from 'react';
// import HeaderContainer from './header_container';

function Body() {
  return (
    <div className='body'>
       <h1>Welcome to Stopify</h1>
       <div className="body-section-1-container">
         <div className='body-section-1-row-1'>
            <div className="body-section-1">
                <div className='body-section-1-img'>img</div>
                <p>Item #1</p>
            </div>

            <div className="body-section-1">
                <div className='body-section-1-img'>img</div>
                <p>Item #2</p>
            </div>

            <div className="body-section-1">
                <div className='body-section-1-img'>img</div>
                <p>Item #3</p>
            </div>
         </div>
          <div className='body-section-1-row-2'>
            <div className="body-section-1">
                <div className='body-section-1-img'>img</div>
                <p>Item #4</p>
            </div>

            <div className="body-section-1">
                <div className='body-section-1-img'>img</div>
                <p>Item #5</p>
            </div>

            <div className="body-section-1">
                <div className='body-section-1-img'>img</div>
                <p>Item #6</p>
            </div>
         </div>
       </div>
       
       <h2>Recommended for you</h2>

      <div className='body-section-2-container'>
          <div className="body-section-2">
              <div className='body-section-2-img'>img</div>
			  <span>
				<h3>Daily Mix 1</h3>
				<p>Drake, Dua Lipa, JBalvin and more</p>
			  </span>
          </div>

		  <div className="body-section-2">
              <div className='body-section-2-img'>img</div>
			  <span>
              <h3>Daily Mix 2</h3>
			  <p>Some random artists here</p>
			  </span>
          </div>

		  <div className="body-section-2">
              <div className='body-section-2-img'>img</div>
			  <span>
              <h3>Daily Mix 3</h3>
			  <p>Some random artists here</p>
			  </span>
          </div>
		 
		  <div className="body-section-2">
              <div className='body-section-2-img'>img</div>
			  <span>
              <h3>Daily Mix 4</h3>
			  <p>Some random artists here</p>
			  </span>
          </div>

      </div>

	  <h2>Featured Artists</h2>

	  <div className='body-section-3-container'>
          <div className="body-section-3">
              <div className='body-section-3-img'>img</div>
				<h3>Artist 1</h3>
          </div>

		  <div className="body-section-3">
              <div className='body-section-3-img'>img</div>
              <h3>Artist 2</h3>
          </div>

		  <div className="body-section-3">
              <div className='body-section-3-img'>img</div>
              <h3>Artist 3</h3>
          </div>
		 
		  <div className="body-section-3">
              <div className='body-section-3-img'>img</div>
              <h3>Artist 4</h3>
          </div>

      </div>

    </div>
  )
}

export default Body;