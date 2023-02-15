import pic01 from '../../assets/img/reports.png'
import pic02 from '../../assets/img/bars.png'
import pic03 from '../../assets/img/calendar.png'
import { Props } from '../../interfaces/interfaces'

const Article = ( { subtitle, textArticle, grid, numArticle }:Props ) => {

  var order =   grid === 'left' ? 'article grid__left animate__animated' : 'article wrapper idArticle animate__animated' 

  return (
    <div className={ order }>

      <div className={ grid === 'left' ? 'info__right' : 'info'} >      

        <div className="article__info">
          <h2 className="subtitle">{subtitle}</h2>                            
          <p className="article__text">{textArticle}</p>            
        </div>

      </div>

      <div className={ grid === 'left' ? 'picture__left' : 'picture'}>
        <img src ={ numArticle === '01' 
          ? pic01
          : numArticle === '02' 
          ? pic02
          : numArticle === '03' 
          ? pic03 : '' }
          alt="Article picture" />
      </div>

    </div>
  )
}

export default Article