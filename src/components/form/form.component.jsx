import './form.styles.css'

const Form = ({setWeightValue ,setHeightValue, weight, height, submitDetails, onReload}) => {

    return (
        <div className='form-container'>
            <form className='form-container' onSubmit={submitDetails}>
                <label className='label' htmlFor='text-weight' 
                >Weight (kg)</label>

                <input value={weight} type='number' id='text-weight'
                onChange={setWeightValue}></input>

                <label className='label' htmlFor='text-height'>Height (m)</label>

                <input value={height} type='number' id='text-height' 
                onChange={setHeightValue} ></input>

                <button className='submit'>Submit</button>
            </form>

            <button onClick={onReload} className='reload'>Reload</button>
        </div>
    )
}

export default Form;