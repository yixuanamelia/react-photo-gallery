import React from 'react';
import './gallery.css';
import img1 from '../assets/valtech.jpeg';
import img2 from '../assets/venice.jpeg';
import img3 from '../assets/berlin.jpeg';
import img4 from '../assets/barcelona.jpeg';
import img5 from '../assets/paris.jpeg';
import img6 from '../assets/amsterdam.jpeg';
import img7 from '../assets/london.jpeg';
const Gallery = () => {
	return (
		<div className='gallery-grid'>
			<div className='photo grid-col-span-4'>
				<img src={img1} alt='valtech' />
				<div className='text-container'>
					<div>
						<span className='title-small'>FRONT-END</span>
					</div>
					<div>
						<span className='title-big'>valtech_</span>
					</div>
					<div>
						<p className='description'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Recusandae et atque incidunt tenetur harum quas doloremque minus
							fuga.
						</p>
					</div>
				</div>
			</div>
			<div className='photo grid-col-span-2'>
				<img src={img2} alt='venice' />
				<div className='text-container'>
					<div>
						<span className='title-small'>ITALY</span>
					</div>
					<div>
						<span className='title-big'>VENICE</span>
					</div>
				</div>
				<div className='overlay'>
					<div className='title-small'>
						<span>ITALY</span>
					</div>
					<div className='title-big'>
						<span>VENICE</span>
					</div>
					<div className='description'>
						<p>
							Venice, the capital of northern Italy's Veneto region, is built on
							more than 100 small islands in a lagoon in the Adriatic Sea. It
							has no roads, just canals.
						</p>
					</div>
					<div className='explore-button'>
						<button>Explore More</button>
					</div>
				</div>
			</div>
			<div className='photo'>
				<img src={img3} alt='berlin' />
				<div className='text-container'>
					<div>
						<span className='title-small'>GERMANY</span>
					</div>
					<div>
						<span className='title-big'>BERLIN</span>
					</div>
				</div>
			</div>
			<div className='photo'>
				<img src={img4} alt='barcelona' />
				<div className='text-container'>
					<div>
						<span className='title-small'>SPAIN</span>
					</div>
					<div>
						<span className='title-big'>BARCELONA</span>
					</div>
				</div>
			</div>
			<div className='photo'>
				<img src={img5} alt='paris' />
				<div className='text-container'>
					<div>
						<span className='title-small'>FRANCE</span>
					</div>
					<div>
						<span className='title-big'>PARIS</span>
					</div>
				</div>
			</div>
			<div className='photo'>
				<img src={img6} alt='amsterdam' />
				<div className='text-container'>
					<div>
						<span className='title-small'>NETHERLANDS</span>
					</div>
					<div>
						<span className='title-big'>AMSTERDAM</span>
					</div>
				</div>
			</div>
			<div className='photo grid-col-span-2'>
				<img src={img7} alt='london' />
				<div className='text-container'>
					<div>
						<span className='title-small'>UNITED KINGDOM</span>
					</div>
					<div>
						<span className='title-big'>LONDON</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
