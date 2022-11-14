import ReactLoading from 'react-loading';

function LoadingEffect() {
	return (
		<ReactLoading
			className='loading'
			type={'bubbles'}
			color={'#dedede'}
			height={'5%'}
			width={'5%'}
		/>
	);
}

export default LoadingEffect;
