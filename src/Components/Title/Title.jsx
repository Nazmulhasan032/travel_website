
const Title = ({subHeading, Heading}) => {
    return (
        <div className='w-11/12 mx-auto text-center my-10'>
            <p>{subHeading}</p>
            <h2 className='font-bold text-2xl mt-2 text-sky-400'>{Heading}</h2>
        </div>
    );
};

export default Title;