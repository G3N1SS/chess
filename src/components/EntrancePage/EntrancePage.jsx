export default function EntrancePage({}){
  return(
    <>
      <section className="entrance">
        {/* заголовок */}
        <div className="entrance__header enter"> 
          <div className="enter__logo logo">
            <img src="" alt="" className="logo__image" />
            <p className="logo__caption"></p>
          </div>
          {/* выпадающий список */}
          <select name="" id="" className="enter__select select">
            <option value="" className="select__option option">
              <img src="" alt="" className="option__img" />
              <p className="option__text"></p>
            </option>
            <option value="" className="select__option">
              <img src="" alt="" className="option__img" />
              <p className="option__text"></p>
            </option>
          </select>
        </div>

      </section>
    </>
  )
}