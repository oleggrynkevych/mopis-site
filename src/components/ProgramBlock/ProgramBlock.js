import './ProgramBlock.scss';
import programData from './program-block-data';
import StageItem from './StageItem/StageItem';

function ProgramBlock () {
    return (
        <section className='program-block' id='program'>
            <div className='program-block-container'>
                <h3>Програма курсу</h3>

                <div className='program-block-info-box'>
                    {
                        programData.map((stage, index) => (
                            <StageItem
                                key={index}
                                number={index.toString().padStart(2, '0')}
                                name={stage.name}
                                description={stage.description}
                                steps={stage.steps}
                                addMaterials={stage.addMaterials}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default ProgramBlock;