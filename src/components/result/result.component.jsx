import './result.styles.css'

const Result = ({bmi, finResult}) => {

    return (
        <>
            <h3>Your BMI is: {bmi}</h3>
            <span>you are: {finResult}</span>
        </>
    )
}

export default Result