import { mw, mw1, pht, pht1, pwc, pwc1, pw, pw1, tra, tra1 } from '../../../assets/Company_logo'

export const Companies = () => {
	return (
		<>
			<div className='cmpy-logo p-4 my-0 md:my-10 mx-auto w-full'>
				<div className='head-text text-4xl font-bold mx-auto flex justify-center my-5 Class
Properties
font-sans ' >Companies We Work With</div>
				<div className='logos flex flex-wrap justify-center md:gap-20 md:mx-12 sm:mx-4'>
					<img className='transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out object-cover' src={mw} alt='img1' />
					<img className='transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out object-cover' src={mw1} alt='img1' />
					<img className='transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out object-cover' src={pht} alt='img1' />
					<img className='transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out object-cover' src={pht1} alt='img1' />
					<img className='transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out object-cover' src={pwc} alt='img1' />
					<img className='transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out object-cover' src={pwc1} alt='img1' />
					<img className='transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out object-cover' src={pw} alt='img1' />
					<img className='transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out object-cover' src={pw1} alt='img1' />
					<img className='transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out object-cover' src={tra} alt='img1' />
					<img className='transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out object-cover ' src={tra1} alt='img1' />
				</div>
			</div>
		</>

	)
}