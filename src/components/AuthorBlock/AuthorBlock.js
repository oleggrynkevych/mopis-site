import './AuthorBlock.scss';
import authorData from './author-block-data';
import classNames from 'classnames';

function AuthorBlock () {

    // Styles

    const authorPhotoClasses = classNames('author-item-photo');

    return (
        <section className='author-block'>
            <div className='author-block-container'>
                <h3>Автори курсу</h3>

                <div className='author-block-box-info'>
                    {
                        authorData.map((author, index) => (
                            <div className='author-item' key={index}>
                                <div 
                                    className={classNames(authorPhotoClasses, {
                                        author1: author.nickName === "@alisa_vasulunka",
                                        author2: author.nickName === "@mopis_wedding"
                                    })}
                                ></div>
                                
                                <span className='author-item-nickname'>{author.nickName}</span>
                                <span className='author-item-name'>{author.name}</span>
                                <p>{author.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default AuthorBlock;