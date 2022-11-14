import ReactLoading from 'react-loading';

function LoadingEffect() {
	return (
		<div className='flex content-center justify-center '>
			<ReactLoading
				className='loading'
				type={'bubbles'}
				color={'#dedede'}
				height={'5%'}
				width={'5%'}
			/>
		</div>
	);
}

export default LoadingEffect;
