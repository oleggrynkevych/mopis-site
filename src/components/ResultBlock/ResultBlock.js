import './ResultBlock.scss';
import resultData from './result-data';

function ResultBlock () {
    return(
        <section className='result-block'>
            <div className='result-block-container'>
                <h3 id='result'>Результат курсу</h3>

                <div className='result-block-info-box'>
                    {
                        resultData.map((result, index) => (
                            <div className='result-block-info-item' key={index}>
                                <span className='result-block-info-number'>{(index + 1).toString().padStart(2, '0')}</span>
                                <div className='result-block-info-description'>
                                    <span>{result.shortText}</span>
                                    <span>{result.longText}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default ResultBlock;