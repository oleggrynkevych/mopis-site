import './PrivacyPolicy.scss';

function PrivacyPolicy () {
    return (
        <section className='privacy-policy'>
            <div className='privacy-policy-container'>
                <iframe 
                    src='https://docs.google.com/document/d/e/2PACX-1vSDA_lpOdeWPUcasgGSUvWoJRwauZvtPo7OiDQt3yX9XjlMVvEoynwkMHrqqbsXYZ8mzIGYLJJr4BYN/pub?embedded=true'
                    title='Політика конфіденційності'
                />
            </div>
        </section>
    )
};

export default PrivacyPolicy;