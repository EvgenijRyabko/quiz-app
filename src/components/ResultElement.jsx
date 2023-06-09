import React from "react";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";

function ResultElement({ background, image, title, text, lang }) {
	const navigate = useNavigate();
	const cookies = new Cookies();


	const onButtonClick = () => {
		// cookies.remove('username');
		// cookies.remove('result');
		navigate('/');
	}

	return (
		<div className={`grid min-h-screen w-full place-self-center`}>
			<img className="absolute w-full h-screen object-cover" src={background} />
			<div className={`grid backdrop-brightness-[0.8] min-h-screen w-full place-self-center`}>
				<div className="flex flex-wrap w-3/6 min-h-screen place-self-center">
					<div className="flex w-full justify-center">
						<img className="w-4/6 min-w-[400px] my-1" src={image} alt='result' />
					</div>
					<div className="flex flex-wrap w-full text-center">
						<header className="w-full">{title}</header>
						<p className="w-full text-xs">{text}</p>
					</div>
					<div className="flex w-full justify-center">
						<button
							className='bg-sky-200/25 hover:bg-sky-200 transition-all duration-300 border-8 border-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md place-self-center'
							type="button"
							onClick={onButtonClick}
						>
							{lang === 'ru' ? 'На главную' : lang === 'en' ? 'Home' : lang === 'uk' ? 'На головну' : ''}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ResultElement;